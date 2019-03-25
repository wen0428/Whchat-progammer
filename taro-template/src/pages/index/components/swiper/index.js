import Taro, { Component } from '@tarojs/taro'
import { View,Text ,Image,Swiper, SwiperItem} from '@tarojs/components'
import './index.scss'

const data = [
  {
    url: 'http://placekitten.com/g/400/400',
    title: 'Make Up'
  },
  {
    url: 'http://placekitten.com/700/700',
    title: 'Make '
  },
  {
    url: 'http://placekitten.com/800/800',
    title: 'Make '
  }
]

export default class Swip extends Component {
  render() {
    return ( 
      <View className='at-row swip'>
        <View className='at-col'>
          <Swiper className='test-h' indicatorColor='#999' indicatorActiveColor='#333'  indicatorDots autoplay>
          {
            data.map(item => (
              <SwiperItem ><View><Image className='lm' src={item.url} mode='widthFix'></Image><Text className='child'>{item.title} </Text></View></SwiperItem>     
            ))
          }
          </Swiper>
          </View> 
      </View>
    )
  }
}

