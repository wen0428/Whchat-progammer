import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtDivider } from 'taro-ui'
import Atcountdown from '../../components/atcountdown-time'

import { spacedesign } from '../../actions/counter'
import './index.scss'

@connect(({ spacedesigns }) => ({
  spacedesigns
}), (dispatch) => ({
  spacedesign() {
    dispatch(spacedesign())
  }
}))

export default class Index extends Component {
  constructor () {
    super(...arguments)
  }

  onTimeUp () {
    Taro.showToast({
      title: '时间到',
      icon: 'success',
      duration: 2000
    })
  }

  config = {
    navigationBarTitleText: '付款'
  }

  render () {
    const id = this.$router.params.id
    const object = this.props.spacedesigns[4].Buyticket[0].method[1].introduce.filter(function(obj) {
      return (obj.id == id && obj.id != undefined)
    })
    let status, buyzero
    if(id) {
      status = <AtDivider height='2' fontColor='#f3f2f2' lineColor='#f3f2f2' />
      buyzero = <View className='buyback'><Text className='buy'>立即支付{object[0].price}</Text></View>
    }

    return (
      <View className='index'>
        <View className='translation'>
          <View className='text'>
            <View className='cnen'>
              支付剩余时间
            </View>
            <View className='start'>
              <View className=''>
              <Atcountdown />
              </View>
            </View>
          </View>
          <View className='end'>
            <View className='endback'>
              <View className='volume'>AB zone</View>
              <View>{status}</View>
              <View className='info'>
                <View className='at-row'>
                  <View className='at-col-11'>
                    <View className='buytitle'>数量</View>
                  </View>
                  <View className='at-col'>
                    <View className='buytitle'>一张</View>
                  </View>
                </View>
                <View className='at-row'>
                  <View className='at-col-11'>
                    <View className='buytitle'>应付金额</View>
                  </View>
                  <View className='at-col'>
                    <View className='buytitlemoney'>{object[0].price}</View>
                  </View>
                </View>
              </View>
              <View>{buyzero}</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
