import Taro, { Component } from '@tarojs/taro'
import { View, Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'
import Swipper from'../index/components/swiper'

import './index.scss'

@connect(({ pr }) => ({
  pr
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
    navigationBarTitleText: '阅览中心'  
  }
  
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {/*const data =[{text: 'init data', num: 0,array: [{ text: 'init data' }],
    object: {text: 'init data'}}]
   function ChangeNum() {this.data.num ++
    this.setData({num: this.data.num})}*/ }

  componentDidShow () { }

  componentDidHide () { }

  render () { 
    return (
      <View className='index'>
        <View className='at-row'>
          <View className='at-col' ><Swipper /></View>
        </View>
        <View className='at-row'>
          <View className='at-col' ><Navigator url='../booklist/index' style='line-height:100rpx;margin-top:20rpx;margin-left:20rpx;top:50%;' >书籍列表</Navigator></View>
        </View>
        <View className='at-row'>
          <View className='at-col' >
            <Navigator style='line-height:100rpx;margin-top:20rpx;margin-left:20rpx;top:50%;' >座位数{this.props.pr.num}</Navigator>
          </View>
        </View>
        <View className='at-row'>
          <View className='at-col' ><Navigator url='../trueorder/index' style='line-height:100rpx;margin-top:20rpx;margin-left:20rpx;top:50%;' >一键预约</Navigator></View>
        </View>
      </View>
    )
  }
}

export default Index
