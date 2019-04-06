import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/user/index',
      'pages/order/index',
      'pages/aboutwe/index',
      'pages/regular/index',
      'pages/information/index',
      'pages/read/index',
      'pages/booklist/index',
      'pages/trueorder/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#8c8c8c',
      selectedColor: '#f4645f',
      backgroundColor: 'white',
      list: [{
        pagePath: 'pages/index/index',
        text: '首页'
      }, 
      {
        pagePath: 'pages/trueorder/index',      
        text: '分类'
      }
      ],
      position: 'bottom'
    }  
}

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
