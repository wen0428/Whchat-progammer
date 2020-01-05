import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtIcon } from 'taro-ui'

import { finds } from '../../actions/counter'
import './index.scss'

@connect(({ counter, find }) => ({
  counter, find
}), (dispatch) => ({
  finds() {
    dispatch(finds())
  }
}))

export default class Find extends Component {
  config = {
    navigationBarTitleText: '线路'
  }

  render () {
    const iconid = this.$router.params.id
    let data;
    for(let num in this.props.find) {
      for(let info in this.props.find[num].detail) {
        if(this.props.find[num].detail[info].id == iconid && this.props.find[num].detail[info].id != undefined) {
          data = this.props.find[num].detail[info]
        }
        else {}
      }
    }

    return ( 
      <View className='find'>
        <View>
          <Image className='detailtitleimage' src={data.detailtitleimage}></Image>
          {[data].map((item) => (
            <View className='sum' key>
              <View className='at-row'>
                <View className='at-col'>
                  <View className='detailtitle' key><Text>{item.detailtitle}</Text></View>
                </View>
              </View>
              <View className='detailtitleinfo'><Text>{item.detailtitleinfo}</Text></View>
              <View className='at-row'>
                <View className='at-col'>
                  <View className='en'>
                    <AtIcon value='clock' size='18' color='#000'></AtIcon>
                    <Text className='timeinfo'>{item.introduce[0].timeinfo}</Text>
                  </View>
                </View>
              </View>
              <View className='at-row'>
                <View className='at-col'>
                  <View className='at'>
                    <AtIcon value='sketch' size='18' color='#000'></AtIcon>
                    <Text className='adressinfo'>{item.introduce[0].adressinfo}</Text>
                  </View>
                </View>
                <View className='at-col-2'>
                  <Text className='comeup'>|  到这里</Text>
                </View>
              </View>
              <View className='introinfo'><Text>{item.introduce[0].introinfo}</Text></View>
            </View>
          ))}
        </View>
      </View>  
    )
  }
}
