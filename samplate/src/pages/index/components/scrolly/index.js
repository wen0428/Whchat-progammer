import Taro, { Component } from '@tarojs/taro'
import { View,  Image ,ScrollView} from '@tarojs/components'
import './index.scss'

const data2 = [
  {
    url: 'https://img.zcool.cn/community/012886579e25000000012e7e270ca6.jpg@1280w_1l_0o_100sh.jpg',
    title: 'Make Up'
  },
  {
    url: 'http://placekitten.com/700/700',
    title: 'Make Up'
  },
  {
    url: 'https://img.zcool.cn/community/012886579e25000000012e7e270ca6.jpg@1280w_1l_0o_100sh.jpg',
    title: 'Make Up'
  }
]
export default class Scroly extends Component {
  render() {
    return ( 
      <View className='at-col scroly'>
      {
        data2.map(item => (
          
          <ScrollView className='scrollview1' scrollY='true' scrollTop>
          <Image className='large' src={item.url}  mode='widthFix'></Image>
          
        </ScrollView>      
        ))
      }  
      </View>
    )
  }
}

