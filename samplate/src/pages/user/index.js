import Taro, { Component } from '@tarojs/taro'
import { View, Navigator } from '@tarojs/components'
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
    navigationBarTitleText: '个人中心'  
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
          <View className='at-col' ><Swipper /></View>
        </View>
        <View className='at-row'>
          <View className='at-col' ><Navigator url='../information/index' style='line-height:100rpx;margin-top:20rpx;margin-left:20rpx;top:50%;' >个人信息</Navigator></View>
        </View>
        <View className='at-row'>
          <View className='at-col' ><Navigator url='../order/index' style='line-height:100rpx;margin-top:20rpx;margin-left:20rpx;top:50%;'>我的预约</Navigator></View>
        </View>
        <View className='at-row'>
          <View className='at-col' ><Navigator url='../aboutwe/index' style='line-height:100rpx;margin-top:20rpx;margin-left:20rpx;top:50%;'>关于我们</Navigator></View>
        </View>
        <View className='at-row'>
          <View className='at-col' ><Navigator url='../regular/index' style='line-height:100rpx;margin-top:20rpx;margin-left:20rpx;top:50%;'>预约规则</Navigator></View>
        </View>
      </View>
      
    )
  }
}

export default Index
