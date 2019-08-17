/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import Watch from '../../components/watch'
import { books } from '../../actions/counter'
import './index.scss'

@connect(({ counter, literaturedetail, guideimprove }) => ({
  counter, literaturedetail, guideimprove
}), (dispatch) => ({
  books() {
    dispatch(books())
  }
}))

export default class Index extends Component {
  config = { 
    navigationBarTitleText: '书籍详情页',
  }
  constructor(props){
    super(props)
  }
  render () { 
    const text = (this.props.guideimprove)
    const b = this.$router.params.id
    var newobj = text.find(function (obj) {
      return obj.id === b
    })
    var p = 0
    var h = 0
    for (var x=0;x<=2;x++){
      for (var y=0;y<=5;y++){
        if (text[x].name[y].id === b){
          p = x
          h = y
        }
      }
    }
    return (
        <View className='index' >
          <View className='bookbackend'>
            <Image className='book' src={text[p].name[h].url} mode='widthFix'></Image>
            <View className='donor'>捐赠者：李东升</View>
          </View>
          <View className='authorbackend'>
            <View className='author'>| 作者</View>
            <View className='authorwords'>{ text[p].name[h].author }</View>
          </View>
          <View className='contentbackend'>
            <View className='author'>| 内容简介</View>
            <View className='landscape' decode='{{true}}'>
              { text[p].name[h].introduce }
            </View>
          </View>
          <View className='notebackend'>
            <Watch />
          </View>        
        </View>
    )
  }
}
