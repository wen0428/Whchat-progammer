import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtIcon } from 'taro-ui'

import { commend } from '../../actions/counter'
import './index.scss'

@connect (({ commends }) => ({
  commends
}), (dispatch) => ({
  commend() {
    dispatch(commend())
  }
}))

export default class Index extends Component {
  constructor () {
    super(...arguments)
  }

  config = {
    navigationBarTitleText: '翻译详情'
  }

  render () {
    const id = this.$router.params.id
    const value = this.$router.params.array
    let volume
    if(!id) {
      volume = <AtIcon value='volume-plus' size='18' color='#ebe3e3'></AtIcon>
    }

    return (
      <View className='index'>
        <View className='translation'>
          <View className='text'>
            <View className='cnen'>
              <View className='at-row'>
                <View className='at-col'><View className='cn'>中文</View></View>
                <View className='at-col'>
                  <View className='guideline'>
                    <View className='guidelineone'>⇀</View>
                    <View className='guidelinetwo'>↽</View>
                  </View>
                </View>
                <View className='at-col'><View className='en'>英文</View></View>
              </View>
            </View>
            <View className='start'>
              <View className='volume'>{volume}</View>
              <View className='value'>{value}</View>
            </View>
          </View>      
          <View className='end'><View className='volume'>{volume}</View></View>
        </View>
      </View>
    )
  }
}
