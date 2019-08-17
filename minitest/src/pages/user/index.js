/* eslint-disable no-unused-vars */
import Taro, { Component } from '@tarojs/taro'
import { View, Navigator, Text } from '@tarojs/components'

import Swipper from '../../components/mainswiper'
//import Markdown from '../../components/repo/markdown'
import './index.scss'

export default class Index extends Component {
  config = { 
    navigationBarTitleText: '第二',
  }
  render () { 
    return (
      <View className='index'>

        <Text className='landscape' decode='{{true}}'>
          我们根据程序员在不同学习阶段的不同阅读需要，定制了属于程序员的专属书架，并提供了一些专业以外的书籍，适合各个阶段的程序员阅读和自我学习。
        </Text>
        <Text className='context' decode='{{true}}'>
          凡在编程阅读空间书架上展示的图书，在线的“IT学习空间”中均有陈列，各位空间站友们可以在线上阅读图书的相关内容后，线下来空间阅读学习。
        </Text>
        <Text className='introduce' decode='{{true}}'>
          编程阅读空间成员大部分是在校大学生，成员文库里收录了他们在阅读空间里成长过程中的编程技术心得及读各类书籍后的所想所感。
        </Text>
      </View>
    )
  }
}
