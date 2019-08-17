import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { mainswiper } from '../../actions/counter'
import './index.scss'

@connect(({ counter, mainswiperdetail }) => ({
  counter, mainswiperdetail
}), (dispatch) => ({
  mainswiper() {
    dispatch(mainswiper())
  }
}))

export default class Swip extends Component {
  render () {
    const txt = (this.props.mainswiperdetail)
    return ( 
      <View className='swip'>
        <View className='at-row'>
          <View className='score'>
            <View className='at-col'>
              {
                txt.map((item, index)=> (
                  <View className='top-backend' key={index}>
                    <Image className='top-image' src={item.url} mode='aspectFill'></Image>
                    <View className='label'>
                      <Text className='top-label'>{ item.title } </Text>
                      <Text className='top-words'>
                        \n{ item.introduce }
                      </Text>
                    </View>
                  </View>  
                ))
              }
            </View> 
          </View> 
        </View> 
      </View>
    )
  }
}
