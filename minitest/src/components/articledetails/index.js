import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import './index.scss'

class Index extends Component {
  config = { 
    navigationBarTitleText: '好的 APP 该如何设计'  
  }
  render () { 
    return (
      <View className='index'>
        <View className='about'>
          <View>
          <View className='at-row'>
            <Image className='image' src='https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557992166813-d1ded18e-eca3-417c-9d7a-4b0f78d71deb.jpeg' mode='widthFix' />
          </View></View>
          <View className='ourbackend'>
            <View className='label'>
              <View className='at-col'>| 关于我们</View>
            </View>
            <View className='words'>
              <View className='at-col'>
                <Text className='landscape' decode='{{true}}'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                我们根据程序员在不同学习阶段的不同阅读需要，定制了属于程序员的专属书架，并提供了一些专业以外的书籍，适合各个阶段的程序员阅读和自我学习。
                </Text>
                <Text className='context' decode='{{true}}'> \n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                凡在编程阅读空间书架上展示的图书，在线的“IT学习空间”中均有陈列，各位空间站友们可以在线上阅读图书的相关内容后，线下来空间阅读学习。
                </Text>
                <Text className='introduce' decode='{{true}}'> \n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                编程阅读空间成员大部分是在校大学生，成员文库里收录了他们在阅读空间里成长过程中的编程技术心得及读各类书籍后的所想所感。
                </Text>
              </View>
            </View>
          </View>
          <Image className='map' src='https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557991680459-c4fcc1da-2469-44b4-9551-45fd07707414.jpeg' mode='widthFix' />
          <View className='space'>
            <View className='input'>
              <View className='at-col'>| 空间入口</View>
            </View>
            <View>
              <View className='at-col'>
                <Text className='introduce' decode='{{true}}'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们已经在红圈处清晰的标注了空间的入口欢迎随时到来。
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
