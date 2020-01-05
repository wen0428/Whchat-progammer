import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { articles } from '../../actions/counter'
import './index.scss'

@connect(({ counter, bannerdetail }) => ({
  counter, bannerdetail
}), (dispatch) => ({
  articles(){
    dispatch(articles())
  },
}))

export default class Index extends Component {
  config = {
    navigationBarTitleText: '札记心得'
  }
  render () {
    const txt = (this.props.bannerdetail)
    const a = this.$router.params.id
    var arr=txt.find(function (obj) {
      return obj.id === a
    })
    return (
      <View className='index' >
        <View className='bookbackend'>
          <Image className='book' src={arr.url} mode='widthFix'></Image>
          <View className='donor'>捐赠者：李东升</View>
        </View>
        <View className='authorbackend'>
          <View className='author'>| 作者</View>
          <View className='authorwords'>{ arr.author }</View>
        </View>
        <View className='contentbackend'>
          <View className='author'>| 内容简介</View>
          <View className='landscape' decode='{{true}}'>
            { arr.introduce }
          </View>
        </View>
        <View className='notebackend'>
        </View>        
      </View>
    )
  }
}
