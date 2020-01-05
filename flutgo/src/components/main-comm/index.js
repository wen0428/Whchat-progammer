import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Navigator, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { commend } from '../../actions/counter'
import './index.scss'

@connect (({ commends }) => ({
  commends
}), (dispatch) => ({
  commend() {
    dispatch(commend())
  }
}))

export default class Index extends Component {
  constructor () {
    super(...arguments)
  }

  render () {
    const obj = this.props.commends

    return (
      <View className='index'>
        <Navigator url='/pages/main-commend-sum/index'>
          <View className='bartitleback'><Text className='bartitle'>本地人推荐&gt;</Text></View>
        </Navigator>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
        >
          {obj.map((item, index) => (
            <SwiperItem key={index}>
              <View className='item'>
                <Navigator url='/pages/main-commend/index?id={{item.id}}'>
                  <View className='back'>
                    <Image className='titleimage' src={item.titleimage}></Image>
                    <View className='textback'>
                      <Text className='title'>{item.title}</Text>
                      <Text className='titleinfo'>{item.titleinfo}</Text>
                    </View>
                  </View>
                </Navigator>
              </View>
            </SwiperItem>
          ))}          
        </Swiper>
      </View>
    )
  }
}
