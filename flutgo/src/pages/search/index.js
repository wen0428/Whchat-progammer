import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Find from '../../components/findworld'

import './index.scss'

export default class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  config = {
    navigationBarTitleText: '线路',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#42c99c',
  }

  render () {
    return (
      <View className='index'>
        <Find />
      </View>
    )
  }
}
