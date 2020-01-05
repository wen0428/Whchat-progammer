import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtDivider } from 'taro-ui'

import './index.scss'

export default class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

    config = {
    navigationBarTitleText: '关于'
  }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className='blueout'>
          <View className='whiteout'>
            <View className='bluein'>
              <Text className='whitein'>H</Text>
            </View>
          </View>
        </View>
        <View className='space'>
          <Text className='place'>斋聊馨缘城市行囊</Text>
          <Text className='placeone'>\n版本V3.0</Text>
        </View>
        <View className='spacetwo'>
          <Text className='placetwo'>Produced by Tourism & Helsinki Marketing</Text>
          <AtDivider height='30' content='' fontColor='#CCC' lineColor='#CCC' />
          <Text className='placetwo'>Tel +86-11-11111111 ext.11111 gaosi@gmail.com</Text>
        </View>
      </View>
    )
  }
}
