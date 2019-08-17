import Taro, { Component } from '@tarojs/taro'
import { View, Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { books, articles } from '../../actions/counter'
import Baner from '../../components/baner/index'
import Swipper from '../../components/mainswiper'
import Menuview from '../../components/watchmenuview/index'
import './index.scss'

@connect(({ counter, literaturedetail,articledetail }) => ({
  counter, literaturedetail,articledetail
}), (dispatch) => ({
  books() {
    dispatch(books())
  },
  articles() {
    dispatch(articles())
  },
}))

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  render () {   
    return (
      <View className='index'>
        <View className='main'>
          <Swipper />
          <Baner />
          <View className='articlenote'>
            <View className='watch'>  
              <View className='indicator'>          
                <View className='at-row'>
                  <View className='at-col-9'>              
                    <View className='title'>| 读书笔记</View>
                  </View>
                  <View className='at-col-3'>
                    <Navigator
                      url='/pages/articlesnote/index'
                    >
                      <View className='more'>more &gt;</View>
                    </Navigator>
                  </View>
                </View>
              </View>
              <View className='read-view'>
                <Menuview />
              </View>
            </View>  
          </View>
          <Navigator
            url='/pages/test/index'
          >
            <View className='icon' style='margin-left:40rpx;margin-top:100rpx;'>text &gt;</View>
          </Navigator>
          <Navigator
            url='/pages/user/index'
          >
            <View className='icon' style='margin-left:40rpx;'>user &gt;</View>
          </Navigator>
        </View>
      </View>
    )
  }
}
