/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Template } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { articles } from '../../actions/counter'
import './index.scss'

@connect(({ counter, articledetail }) => ({
  counter, articledetail
}), (dispatch) => ({
  articles() {
    dispatch(articles())
  }
}))

export default class Index extends Component {
  config = { 
    navigationBarTitleText: '文章详情页'  
  }
  constructor(props){
    super(props)
  }
  componentWillMount () {
    data: {
      //article将用来存储towxml数据
      article:{}
    }
    const _ts = this;
    console.log('2333',this.state)
    //请求markdown文件，并转换为内容
  }
  render () { 
    const txt = (this.props.articledetail)
    const a = this.$router.params.id
    var obj=txt.find(function (obj) {
      return obj.id === a
    })
    return (
      <View className='index'>
        <View className='about'>
          <View>
            <View className='at-row'>
              <Image className='image' src={obj.url} mode='widthFix' />
            </View>
          </View>
          <View className='ourbackend'>
            <View className='label'>
              <View className='at-col'>| 好的 APP 该如何设计</View>
            </View>
            <View className='title'>
              <View className='at-col'>{ obj.author }</View>
            </View>
            <View className='category'>
              <View className='at-row'>
                <View className='at-col-9'>{ obj.category }</View>
                <View className='at-col-3'>2019/5/20</View>
              </View>
            </View>
            <View className='words'>
              <View className='at-col'>
                <View className='landscape' decode='{{true}}'>
                  { obj.paragraph }
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
