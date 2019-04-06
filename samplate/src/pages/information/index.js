import Taro, { Component } from '@tarojs/taro'
import { View,Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtInput, AtForm } from 'taro-ui'
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
    navigationBarTitleText: '个人信息'  
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () { 
    return (
      <View className='index'>
        <View className='at-row'>
          <View className='at-col' ><Navigator url='' >预约详情</Navigator></View>
        </View>
        <View className='at-row'>
          <View className='at-col' ><Navigator url='' >取消预约</Navigator></View>
        </View>
        <View className='at-row'>
          <View className='at-col' ><AtForm>
          <AtInput name='value1' title='文本' type='text' placeholder='单行文本' value={this.state.value1}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput name='value2' title='数字' type='number' placeholder='请输入数字' value={this.state.value2}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput name='value3' title='密码' type='password' placeholder='密码不能少于10位数'
            value={this.state.value3} onChange={this.handleChange.bind(this)}
          />
          <AtInput name='value4' title='身份证' type='idcard' placeholder='身份证号码' value={this.state.value4}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput name='value5' title='小数'  type='digit' placeholder='请输入小数' value={this.state.value5}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput name='value6' border={false} title='手机号码'  type='phone' placeholder='手机号码'
            value={this.state.value6} onChange={this.handleChange.bind(this)}
          />
        </AtForm></View>
        </View>
      </View>
    )
  }
}

export default Index
