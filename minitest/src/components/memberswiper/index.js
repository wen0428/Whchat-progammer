import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { memberswiper } from '../../actions/counter'
import './index.scss'

@connect(({ counter, memberswiperdetail }) => ({
  counter, memberswiperdetail
}), (dispatch) => ({
  memberswiper() {
    dispatch(memberswiper())
  }
}))

export default class Mainswip extends Component {
  render() {
    const txt = (this.props.memberswiperdetail)
    return ( 
      <View className='swip'>
        <View className='at-row'>
          <View className='at-col'>
            <Swiper className='test-h'
              indicatorColor='#999' 
              indicatorActiveColor='#333'  
              indicatorDots='{{indicatorDots}}' 
              autoplay
            >
              {
                txt.map((item, index) => (
                  <SwiperItem className='top' key={index}>
                    <View className='top-backend'>
                      <Image className='top-image' src={item.url}>
                        <View className='words'>
                          <Text className='top-word' decode='{{true}}'>
                            &nbsp;{ item.title }
                          </Text>
                        </View>
                      </Image>
                    </View>
                  </SwiperItem>     
                ))
              }
            </Swiper>
          </View> 
        </View>
      </View>
    )
  }
}
