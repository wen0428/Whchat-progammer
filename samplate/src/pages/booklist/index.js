import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { add, minus, asyncAdd } from '../../actions/counter'
import './index.scss'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

    config = { 
    navigationBarTitleText: '书籍列表'  
  }
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { /**swipeable animated */}

  render () { 
    return (
      <View className='index'>
      
      <AtTabs
        current={this.state.current}
        scroll
        tabList={[
        { title: '前端开发' },
        { title: '后端开发' },
        { title: '文学作品' },
        { title: '数学作品' },
        { title: '思维作品' },
        { title: '其他' }
        ]}
        onClick={this.handleClick.bind(this)}
      >
        <AtTabsPane current={this.state.current} index={0}>
        <View style='font-size:18px;text-align:center;height:100px;'>JavaScript</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
        <View style='font-size:18px;text-align:center;height:100px;'>Go</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
        <View style='font-size:18px;text-align:center;height:100px;'>鲁迅全集</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={3}>
        <View style='font-size:18px;text-align:center;height:100px;'>数学原理</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={4}>
        <View style='font-size:18px;text-align:center;height:100px;'>增长黑客</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={5}>
        <View style='font-size:18px;text-align:center;height:100px;'>微信力量</View>
        </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Index
