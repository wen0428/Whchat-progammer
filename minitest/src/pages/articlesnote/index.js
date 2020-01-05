import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { articles } from '../../actions/counter'
import Menuview from '../../components/watchmenuview/index'
import './index.scss'

@connect(({ counter, articledetail }) => ({
  counter, articledetail
}), (dispatch) => ({
  articles(){
    dispatch(articles())
  },
}))

export default class Index extends Component {
  config = {
    navigationBarTitleText: '读书笔记'
  }
  render () {
    return (
      <View className='watch'>
        <Menuview />
      </View>  
    )
  }
}
