import Taro, { Component } from '@tarojs/taro'
import { View, Navigator, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { spacedesign } from '../../actions/counter'
import './index.scss'

@connect(({ spacedesigns }) => ({
  spacedesigns
}), (dispatch) => ({
  spacedesign() {
    dispatch(spacedesign())
  }
}))

export default class Banner extends Component {
  render () {
    const text = (this.props.spacedesigns[4].festival.DecemberFestivals[0])

    return ( 
      <View className='banner'>
        <Navigator url='/pages/main-festivals/index?id={{text.id}}'>
          <View className='back'>
            <Image className='image' src={text.image}></Image>
            <View className='textback'>
              <View className='month'>December</View>
              <View className='title'>12月节日活动</View>
              <View className='titleinfo'>查/看/详/情</View>
            </View>
          </View>
        </Navigator>
      </View>
    )
  }
}
