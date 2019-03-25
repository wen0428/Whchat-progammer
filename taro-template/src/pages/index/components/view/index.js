import Taro, { Component } from '@tarojs/taro'
import { View,  Image } from '@tarojs/components'
import './index.scss'

const data = [
  {
    url: 'http://placekitten.com/600/600',
    title: 'Make Up'
  },
  {
    url: 'http://placekitten.com/g/200/300',
    title: 'Make Up'
  },
  {
    url: 'http://placekitten.com/800/800',
    title: 'Make Up'
  }
]
export default class Menu extends Component {
  render() {
    return ( 
      <View className='at-row menu'>
      {
        data.map(item => (
          <View className='at-col'>
            <Image className='small' src={item.url} mode='widthFix' />
            <View className='sm'>{item.title}</View>
          </View>  
        ))
      }
      </View>
    )
  }
}

