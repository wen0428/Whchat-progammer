import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class Index extends Component {
  constructor () {
    super(...arguments)
  }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    const comp = {
      properties: {
        // 设置显示的波浪数量，只有1和2两个值
        waveNum: {
          type: Number,
          value: 1,
        },
        // 动画运行状态
        waveStatus: {
          type: Boolean,
          value: true,
        },
        // 波浪颜色
        background: {
          type: String,
          value: '#7ec0eb',
        }
      },
      data: {},
      methods: {},
    }
    console.log(comp)

    return (
      <View className='index'>
        <View className='waveWrapper waveAnimation'>
          <View className='waveWrapperInner bgTop' style='background:{{background}}'>
            <View className='wave waveTop'></View>
          </View>
          <View className='waveWrapperInner bgMiddle' style="background:{{comp.background}};opacity: {{comp.waveNum==1?'1':'0.75'}}">
            <View className="wave waveMiddle {{comp.waveStatus?'run':'pause'}}"></View>
          </View>
          <View hidden='{{comp.waveNum<2}}' className='waveWrapperInner bgBottom' style='background:{{comp.background}}'>
            <View className="wave waveBottom {{comp.waveStatus?'run':'pause'}}"></View>
          </View>
        </View>
      </View>
    )
  }
}
