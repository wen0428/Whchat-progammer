import Taro, { Component } from '@tarojs/taro'
import { View, Picker} from '@tarojs/components'
import { AtCalendar} from 'taro-ui'
import { connect } from '@tarojs/redux'

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
    navigationBarTitleText: '一键预约'  
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  state = {
    selector: ['1', '2', '3', '4'],
    selectorChecked: '1',
    //timeSel: '12:01',
    dateSel: '2018-04-22'
  }
onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () {/** <AtInput name='value2' title='预约人' type='number' placeholder='请输入' value={this.state.value2}
  onChange={this.handleChange.bind(this)}
></AtInput>*/ }
  render () { 
    return (
      <View className='index'>
        <AtCalendar  />
        <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <View>
              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                <View className='picker'>
                  座位数：{this.state.selectorChecked}
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <View>
              <Picker mode='date' onChange={this.onDateChange}>
                <View className='picker'>
                  预约人：{this.state.dateSel}
                </View>
              </Picker>
            </View>
          </View>
        </View>
      </View>
      </View> 
    )
  }
}
export default Index
