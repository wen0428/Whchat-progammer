import Taro, { Component } from '@tarojs/taro'
import { View,  Image ,ScrollView} from '@tarojs/components'
import './index.scss'

const data2 = [
  {
    url: 'https://img.zcool.cn/community/012886579e25000000012e7e270ca6.jpg@1280w_1l_0o_100sh.jpg',
    title: 'Make Up'
  },
  {
    url: 'https://img.zcool.cn/community/012886579e25000000012e7e270ca6.jpg@1280w_1l_0o_100sh.jpg',
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
      <View className='at-row scroly'>
      {
        data2.map(item => (
          <View className='at-col'>
          <ScrollView className='scrollview1' scrollX='true'>
          <Image className='large' src={item.url}  mode='widthFix'></Image>
          <Image className='large' src={item.url}  mode='scaleToFill'></Image>
          <Image className='large' src={item.url}  mode='aspectFill'></Image>
          <Image className='large' src={item.url}  mode='aspectFit'></Image>
          <Image className='large' src={item.url}  mode='top'></Image>
          <Image className='large' src={item.url}  mode='left'></Image>
          <Image className='large' src={item.url}  mode='bottom'></Image>
          <Image className='large' src={item.url}  mode='right'></Image>
          <Image className='large' src={item.url}  mode='center'></Image>   
        </ScrollView></View>       
        ))
      }  
      </View>
    )
  }
}

