import React from 'react';
import {Text, TouchableOpacity, View, Platform} from 'react-native';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';
import DeviceInfo from 'react-native-device-info';
import codePush from 'react-native-code-push';
import ScrollView from 'react-native-keyboard-aware-scroll-view/lib/KeyboardAwareScrollView';
import {apx} from '../utils/device';
import ButtonGradient from './ButtonGradient';
import {ENV} from '../utils';
import ProgressBar from './ProgressBar';

export default class ModalCheckUpdate extends React.Component {
  state = {
    visible: false,
    patch: {},
    current: 0,
    total: 0,
    progress: 0,
    downloading: false,
  };

  componentDidMount() {
    this.check();
    // this.check(false)
  }

  check = async (showTips = false) => {
    try {
      await codePush.notifyAppReady();

      const currentPatch = await codePush.getUpdateMetadata();
      const latestPatch = await codePush.checkForUpdate();

      console.log(currentPatch, latestPatch);
      window.$loading.hide();
      if (latestPatch === null) {
        // 无更新包
        if (showTips) {
          window.$toast.show(
            '当前已是最新版本\nIt is currently the latest version.',
          );
        }
      } else {
        this.setState({patch: latestPatch, visible: true});
      }
    } catch (e) {
      window.$loading.hide();
      if (showTips) {
        window.$toast.show(
          `检查更新失败\nFailed to check the new version${
            ENV === 'test' ? `\n${e.message}` : ''
          }`,
        );
      }
    }
  };

  render = () => {
    const {description = null, label = null} = this.state.patch;
    return (
      <Modal
        isVisible={this.state.visible}
        useNativeDriver
        style={{
          margin: 0,
          padding: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <FastImage
            source={require('../images/Common/modal_check_update_header.png')}
            style={{
              width: apx(560),
              height: apx(460),
            }}
          />
          <View
            style={{
              top: apx(-1),
              width: apx(560),
              alignItems: 'center',
              backgroundColor: '#fff',
              borderBottomLeftRadius: apx(20),
              borderBottomRightRadius: apx(20),
            }}>
            <Text
              style={{
                fontSize: apx(36),
                fontWeight: '500',
                marginTop: apx(7),
                color: '#0966C3',
              }}>
              发现新版本
            </Text>
            <Text
              style={{
                fontSize: apx(22),
                marginTop: apx(20),
                color: '#1E0E02',
              }}>
              新版本 {DeviceInfo.getVersion()} ({label})
            </Text>

            <View
              style={{
                width: apx(452),
                maxHeight: apx(300),
                marginVertical: apx(46),
              }}>
              <ScrollView>
                <Text
                  style={{
                    width: apx(452),
                    fontSize: apx(22),
                    color: '#1E0E02',
                  }}>
                  {description}
                </Text>
              </ScrollView>
            </View>

            {this.state.downloading ? (
              <View style={{marginBottom: apx(48)}}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginBottom: apx(20),
                    fontSize: apx(26),
                    color: '#333',
                  }}>
                  {this.state.current}MB / {this.state.total}MB
                </Text>
                <ProgressBar progress={this.state.progress} />
              </View>
            ) : (
              <View style={{alignItems: 'center'}}>
                <ButtonGradient
                  text="立即更新"
                  theme="blue"
                  width={apx(452)}
                  height={apx(80)}
                  textStyle={{fontSize: apx(26)}}
                  onPress={this.startDownload}
                />

                <TouchableOpacity
                  style={{
                    width: apx(452),
                    marginBottom: apx(18),
                    paddingVertical: apx(30),
                    alignItems: 'center',
                  }}
                  onPress={() => this.setState({visible: false})}>
                  <Text
                    style={{
                      fontSize: apx(26),
                      color: '#0966C3',
                      textAlign: 'center',
                    }}>
                    稍后更新
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
    );
  };

  startDownload = async () => {
    this.setState({
      downloading: true,
    });
    const newPatch = await this.state.patch
      .download(progress => {
        this.setState({
          current: (progress.receivedBytes / (1024 * 1024)).toFixed(2),
          total: (progress.totalBytes / (1024 * 1024)).toFixed(2),
          progress: progress.receivedBytes / progress.totalBytes,
          downloading: true,
        });
      })
      .catch(() => {
        this.setState({
          current: 0,
          total: 0,
          progress: 0,
          visible: false,
          downloading: false,
        });
      });

    this.setState({visible: false, downloading: false}, () => {
      setTimeout(
        () => {
          newPatch
            .install(codePush.InstallMode.IMMEDIATE)
            .then(() => {
              codePush.allowRestart();
              codePush.restartApp();
            })
            .catch(err => {
              console.log(err);
            });
        },
        Platform.OS === 'ios' ? 0 : 1000,
      );
    });
  };
}
