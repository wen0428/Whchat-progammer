import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { bannerswiper } from '../../actions/counter'
import './index.scss'

@connect(({ bannerdetail }) => ({
  bannerdetail
}), (dispatch) => ({
  bannerswiper() {
    dispatch(bannerswiper())
  }
}))

export default class Banner extends Component {
  render () {
    const txt = (this.props.bannerdetail)

    return ( 
      <View className='banner'>
        <View className='titleback'>
          <View className='at-row'>
            <View className='at-col-8'><View className='title'>赫尔辛基</View></View>
            <View className='at-col'><View className='weather'></View></View>
          </View>
          <View className='titleinfo'>纯净而活力的设计之都</View>
        </View>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          autoplay='true'
        >
          {txt.map((item, index) => (
            <SwiperItem key={index}>
              <Image mode='widthFix' className='small' src={item.url} ></Image>
            </SwiperItem>
          ))}          
        </Swiper>
      </View>  
    )
  }
}
