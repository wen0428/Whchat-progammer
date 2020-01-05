import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { books } from '../../actions/counter'
import Mainswip from '../../components/memberswiper'
import Newimprovedepth from '../../components/newimprovedepth'
import './index.scss'

@connect(({ counter, literaturedetail }) => ({
  counter, literaturedetail
}), (dispatch) => ({
  books() {
    dispatch(books())
  }
}))

export default class Index extends Component {
  config = { 
    navigationBarTitleText: '成员文库',
  }
  render () { 
    return (
      <View className='index'>
        <View className='memmer'>
          <Mainswip />
          <View className='literature'>
            <Newimprovedepth />
          </View>
        </View>
      </View>
    )
  }
}
