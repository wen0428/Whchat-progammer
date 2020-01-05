import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Index from './pages/index'
import configStore from './store'

import './app.scss'

const store = configStore()

class App extends Component {
  componentDidMount () {
    this.globalData.curLang = Taro.getStorageSync('curLang') || this.globalData.langList[0]
  }

  globalData = {
    curLang: {},
    langList: [
      {
        'chs': '英文',
        'lang': 'en',
        "index": 0
      },
      {
        'chs': '中文',
        'lang': 'zh',
        "index": 1
      },
      {
        'chs': '日语',
        'lang': 'jp',
        "index": 2
      },
      {
        'chs': '韩语',
        'lang': 'kor',
        "index": 3
      },
      {
        'chs': '法语',
        'lang': 'fra',
        "index": 4
      },
      {
        'chs': '西班牙语',
        'lang': 'spa',
        "index": 5
      },
      {
        'chs': '阿拉伯语',
        'lang': 'ara',
        "index": 6
      },
      {
        'chs': '文言文',
        'lang': 'wyw',
        "index": 7
      },
      {
        'chs': '泰语',
        'lang': 'th',
        "index": 8
      },
      {
        'chs': '繁体中文',
        'lang': 'cht',
        "index": 9
      }
    ]
  }

  config = {
    pages: [
      'pages/index/index',
      'pages/search/index',
      'pages/about/index',
      'pages/main-library/index',
      'pages/main-icon-introduce/index',
      'pages/main-gourmet/index',
      'pages/main-guide/index',
      'pages/main-guide-introduce/index',
      'pages/main-icon-detail/index',
      'pages/search-info/index',
      'pages/search-info-introduce/index',
      'pages/main-commend/index',
      'pages/main-commend-sum/index',
      'pages/main-festivals/index',
      'pages/main-festival-info/index',
      'pages/main-tickets/index',
      'pages/main-ticket-info/index',
      'pages/main-cn-gourmet/index',
      'pages/main-translation/index',
      'pages/main-translation-info/index',
      'pages/main-ticket-buy/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      color:'#8c8c8c',
      selectedColor:'#1E90FF',
      backgroundColor:'white',
      list:[
        {
          pagePath:'pages/index/index',
          iconPath:'assets/unmain.png',
          selectedIconPath:'assets/main.png',
          text:'首页',
        },
        {
          pagePath:'pages/search/index',
          iconPath:'assets/unsearch.png',
          selectedIconPath:'assets/search.png',
          text:'发现',
          backgroundColor:'aquamarine',
        },
        {
          pagePath: 'pages/about/index', 
          iconPath:'assets/unaccount.png',
          selectedIconPath:'assets/account.png',   
          text: '关于',
        },
      ],
      position: 'bottom'
    },
  }

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
