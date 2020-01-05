import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import './index.scss'

const data3 = [
  {
    actionName:'搜一下'
  }
]
export default class Search extends Component {
  render() {
    return ( 
      <View className='at-col search'>
      {
        data3.map(item => (
          
          <AtSearchBar actionName={item.actionName} value={this.state.value}  onChange={this.onChange.bind(this)}  onActionClick={this.onActionClick.bind(this)} />
        ))
      }
      </View>
    )
  }
}
