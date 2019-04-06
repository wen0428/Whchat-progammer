import Taro, { Component } from '@tarojs/taro'
import { View, Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'
import Swipper from'../index/components/swiper'
import Scroly from './components/scrolly';
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
          <View className='at-col' style='z-index:1;position:fixed;top:0rpx;'><Navigator className='nm' url='../user/index'  hover-class='navigator-hover'>个人中心</Navigator></View>
        </View>
        <View className='at-row'>
          <View className='at-col' style='z-index:1;position:fixed;top:30rpx'><Swipper /></View>
        </View>
        <View className='rr' >
          <Scroly />
          <Scroly />
          <Scroly />
        </View>
        <View className='at-row'>
          <View className='at-col' style='position:fixed;bottom:0;'><Navigator className='nm' url='../read/index'  hover-class='navigator-hover'>阅览中心</Navigator></View>
        </View>
      </View>
      
    )
  }
}

export default Index
