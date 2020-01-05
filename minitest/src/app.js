import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'
import configStore from './store'
import './app.scss'

const store = configStore()

export default class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/membber/index',
      'pages/aboutwe/index',
      'pages/user/index',
      'pages/test/index',
      'pages/bookdetail/index',
      'pages/articlepage/index',
      'pages/depth/index',
      'pages/articlesnote/index',
      'pages/baners/index',
      'pages/banersdetail/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      backgroundColor: '#F3F2F2',
    },
    tabBar: {
      color: '#000000',
      selectedColor: '#1E90FF',
      backgroundColor: 'white',
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: 'assets/indexiconPath.jpg',
          selectedIconPath: 'assets/indexselectedIconPath.jpg',
          text: '首页',
        },
        {
          pagePath: 'pages/membber/index',
          iconPath: 'assets/mebbericonPath.jpg',
          selectedIconPath: 'assets/mebberselectedIconPath.jpg',
          text: '书架',
        },
        {
          pagePath: 'pages/aboutwe/index', 
          iconPath: 'assets/abouticonPath.jpg',
          selectedIconPath: 'assets/aboutselectedIconPath.jpg',   
          text: '关于',
        },
      ],
      position: 'bottom'
    },
  }
  constructor(props){
    super(props)
    const Towxml = require("./towxml/main");
    const twxml = new Towxml();
    this.state = {
      towxml: twxml
    }
  }

  render () {
    return (
      <Provider className='index' store={store}>
        <Index className='main' />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
