# codepush 集成步骤
## 版本
    react 17.0.2
    react-native 0.67.1
    react-native-code-push ^7.0.4
    
## 准备
### 1.安装App Center CLI
    npm install -g appcenter-cli
### 2.登录现有的CodePush帐户或创建新的App Center帐户
    appcenter login
### 3.在App Center创建应用
    // appDisplayName：创建的应用名称
    // operatingSystem：iOS或者Android操作系统
    // -p React-Native：平台
    appcenter apps create -d <appDisplayName> -o <operatingSystem>  -p React-Native
    
    // 针对iOS和Android单独创建应用 --
    // 1、创建iOS应用
    appcenter apps create -d MyApp-iOS -o iOS -p React-Native
    // 2、创建Android应用
    appcenter apps create -d MyApp-Android -o Android -p React-Native
### 4.给应用配置环境（开发、生产）
    // ownerName：用户名称
    // appName：创建的应用名称
    
    // 配置开发环境
    appcenter codepush deployment add -a <ownerName>/<appName> Staging
    // 配置生产环境
    appcenter codepush deployment add -a <ownerName>/<appName> Productionn
    
##### 相关
    // ownerName：用户名称
    // appName：创建的应用名称
    
    // 删除应用的开发环境
    appcenter codepush deployment remove -a <ownerName>/<appName> Staging
    // 删除应用的生产环境
    appcenter codepush deployment remove -a <ownerName>/<appName> Production
    
----
    // appName：应用名称
    // 查看该应用下的所有配置环境
    code-push deployment ls <appName> -k
    
## 接入
### 1.项目安装配置CodePush三方库
    npm install --save react-native-code-push

### 2.将CodePush与组件绑定使用(在组件中使用)
    import codePush from "react-native-code-push";
    
    class MyApp extends Component {
      // ...
    }
    
    let codePushOptions = {
      // 何时检查更新（ON_APP_START:程序启动  ON_APP_RESUME:程序从后台进入前台  MANUAL:手动控制）
      checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
      // 何时安装（ON_NEXT_RESTART:下次程序启动  ON_NEXT_RESUME:下次程序从后台进入前台  ON_NEXT_SUSPEND:在后台更新  IMMEDIATE:立即更新，并启动程序）
      installMode: codePush.InstallMode.IMMEDIATE,
      // 表示重启程序之前，在后台呆的最短时间
      minimumBackgroundDuration: 0,
      // 强制更新，并启动
      mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
      // 更新时候的提示更新框
      updateDialog: {
        // 标题
        title: '发现新版本',
    
        // 确认按钮标题
        optionalInstallButtonLabel: '更新',
        // 忽略按钮标题
        optionalIgnoreButtonLabel: '忽略',
        // 非强制更新情况下，提示框内容
        optionalUpdateMessage: '有新内容，是否需要更新？',
    
        // 强制更新按钮标题
        mandatoryContinueButtonLabel: '立即更新',
        // 强制更新情况下，提示框内容
        mandatoryUpdateMessage: '有新内容，请立即更新',
    
        // 是否将版本描述添加在提示框中
        appendReleaseDescription: true,
        // 添加的描述前缀
        descriptionPrefix: '更新内容：',
      }
    };
    
    export default codePush(codePushOptions)(App);

## 配置
### IOS
#### 1.打开AppDelegate.m文件，添加头文件
    #import <CodePush/CodePush.h>
#### 2.替换捆绑JS文件，只有在release状态下，才会调用CodePush服务器中的代码
    - (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
    {
      #if DEBUG
        return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
      #else
        return [CodePush bundleURL];
      #endif
    }
#### 3.在info.plist中添加key
    CodePushDeploymentKey string $(CODEPUSH_KEY)
    
    如下：
    ...
    <plist version="1.0">
        <dict>
            ...
            <key>CodePushDeploymentKey</key>
            <string>$(CODEPUSH_KEY)</string>
            ...
        </dict>
    </plist>
    
#### 4.在build Settings > User-defined 中添加变量
    ./181644283509_.pic.jpg
    ./171644283239_.pic.jpg
    key：CC4jVaA1v1drTfhykFQOYFSMRDxKKffeWZNBH
    
    CODEPUSH_KEY 
        release：key

#### 5.添加不同环境，如test，staging，production
    1）复制targets
    2）修改名字为***_test, ***_staging
    3) 重复步骤4，修改key值
    
#### 6.run release安装到模拟器中即可测试

### Android
#### 1.在android/settings.gradle文件中添加下列代码
    include ':app', ':react-native-code-push'
    project(':react-native-code-push').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-code-push/android/app')

#### 2.在android/app/build.gradle文件中添加下列代码
    只需添加 codepush.gradle
    ...
    apply from: "../../node_modules/react-native/react.gradle"
    apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"
    ...
    
#### 3.在android { buildTypes {} }中，给配置环境添加CodePush的秘钥
    android {
        ...
        buildTypes {
            debug {
                ...
                // 注意：不应该在Debug模式下测试CodePush更新功能，因为这会被RN的程序所覆盖
                resValue "string", "CodePushDeploymentKey", '""'
                ...
            }
    
            releaseStaging {
                ...
                // StagingKey是CodePush处申请的Staging状态的下的秘钥
                resValue "string", "CodePushDeploymentKey", '"StagingKey"'
    
                // Note: It is a good idea to provide matchingFallbacks for the new buildType you create to prevent build issues
                // Add the following line if not already there
                matchingFallbacks = ['release']
                ...
            }
    
            release {
                ...
                // ProductionKey是CodePush处申请的Production状态的下的秘钥
                resValue "string", "CodePushDeploymentKey", '"ProductionKey"'
                ...
            }
        }
        ...
    }
    
*补充：获取Android应用配置环境的key命令：code-push deployment ls <appName> -k

#### 4.更新MainApplication.java文件
    ...
    // 1. 导入插件
    import com.microsoft.codepush.react.CodePush;
    
    public class MainApplication extends Application implements ReactApplication {
    
        private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
            ...
    
            // 2. 重写getJSBundleFile方法，让CodePush确定从App哪里获取JS包
            @Override
            protected String getJSBundleFile() {
                return CodePush.getJSBundleFile();
            }
        };
    }
    
#### 5.打包release应用，即可测试。
