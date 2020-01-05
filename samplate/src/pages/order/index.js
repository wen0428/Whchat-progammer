import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Image, Swiper,Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'
import Swipper from'../index/components/swiper'

import './index.scss'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

    config = { 
    navigationBarTitleText: '预约'  
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () { 
    return (
      <View className='index'>
        <View className='at-row'>
          <View className='at-col' ><Navigator url='' >预约详情</Navigator></View>
        </View>
        <View className='at-row'>
          <View className='at-col' ><Navigator url='' >取消预约</Navigator></View>
        </View>
      </View>
      
    )
  }
}

export default Index
