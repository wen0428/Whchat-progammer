import Taro, { Component } from '@tarojs/taro'
import { View, Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { articles } from '../../actions/counter'
import Swip from '../banerswipers'
import './index.scss'

@connect(({ counter, bannerdetail }) => ({
  counter, bannerdetail
}), (dispatch) => ({
  articles(){
    dispatch(articles())
  },
}))

export default class Baner extends Component {
  render () {
    return ( 
      <View className='banner'>
        <View className='indicator'>
          <View className='at-row'>
            <View className='at-col-9'>
              <View className='title'>| 札记心得</View>
            </View>
            <View className='at-col-3'>
              <Navigator
                url='/pages/baners/index'
              >
                <View className='more'>more &gt;</View>
              </Navigator>
            </View>
          </View> 
        </View> 
          <Swip />
      </View>  
    )
  }
}
