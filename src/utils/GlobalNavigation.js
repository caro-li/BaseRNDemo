import {createNavigationContainerRef} from "@react-navigation/native";

export const _navigator = createNavigationContainerRef()
// let _navigator
// add other navigation functions that you need and export them

const GlobalNavigation = {
  navigate(routeName, params) {
    if (_navigator) {
      if (routeName) {
        _navigator.navigate(routeName, params)
      } else if (params && params.type) {
        window.$coming.show(params.type)
      } else {
        window.$coming.show('default')
      }
    }
  },
  reset(routeName, params) {
    // if (_navigator) {
    //   const resetAction = StackActions.reset({
    //     index: 0,
    //     actions: [NavigationActions.navigate({ routeName, params })],
    //   })
    //   _navigator.dispatch(resetAction)
    // }
  },
  // setTopLevelNavigator(navigatorRef) {
  //   _navigator = navigatorRef
  // },
  dispatch(option) {
    if (_navigator) {
      _navigator.dispatch(option)
    }
  },
  goBack(key) {
    if (_navigator) {
      console.log("111:",_navigator)
      _navigator.navigate("Main", {})
// const { routes } = _navigator.state.nav
      // const currentPageKey = routes[routes.length - 1].key
      // _navigator.goBack(key || currentPageKey)
      // _navigator.goBack()
      // _navigator.dispatch(NavigationActions.back())
    }
  },
  bannerNavigate: params => {
    const navigation = {
      H5: () =>
        GlobalNavigation.navigate('WebPage', {
          url: params.jump_link,
        }),
      DApp: () => {
        const to = {
          ETC: () => GlobalNavigation.navigate('Tab'),
          OTC: () =>
            GlobalNavigation.navigate('ThirdParty', {
              app: 'OTC',
            }),
          Explorer: () =>
            GlobalNavigation.navigate('ThirdParty', {
              app: 'Explorer',
            }),
        }
        to[params.jump_app_to]()
      },
      Shop: () =>
        GlobalNavigation.navigate('ShopDetail', {
          id: params.shop_id,
        }),
      Goods: () =>
        GlobalNavigation.navigate('ProductDetail', {
          id: params.goods_id,
        }),
      Article: () =>
        GlobalNavigation.navigate('ArticleDetail', {
          id: params.article_id,
        }),
    }

    navigation[params.type]()
  },
}

export default GlobalNavigation
