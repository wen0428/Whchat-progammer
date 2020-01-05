import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { guide } from '../../actions/counter'
import './index.scss'

@connect(({ guides }) => ({
  guides
}), (dispatch) => ({
  guide() {
    dispatch(guide())
  }
}))

export default class Index extends Component {
  constructor () {
    super(...arguments)
  }

  config = {
    navigationBarTitleText: '介绍'
  }

  render () {

    return (
      <View className='index'>
        1{this.state.id}
      </View>
    )
  }
}
