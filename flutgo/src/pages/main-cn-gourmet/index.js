import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtIcon, AtDivider } from 'taro-ui'

import { spacedesign } from '../../actions/counter'
import './index.scss'

@connect(({ counter, spacedesigns }) => ({
  counter, spacedesigns
}), (dispatch) => ({
  spacedesign() {
    dispatch(spacedesign())
  }
}))

export default class Index extends Component {
  constructor () {
    super(...arguments)
  }

  config = {
    navigationBarTitleText: '中文导游'
  }

  call(e) {
    Taro.makePhoneCall({
      phoneNumber: this.props.spacedesigns[4].cn[e].tel,
      success() {
        console.log('拨打成功')
      },
      fail() {
        console.log('拨打失败')
      },
    })
  }

  icon = () => {
    let numbers = []
    for(let num of this.props.spacedesigns[4].cn) {
      if(num.wexin != undefined) {
        numbers.push('block')
      }
      else {
        numbers.push('none')
      }
    }
    console.log('numberone', numbers)
  }

  render () {
    const id = this.$router.params.iconid
    const date = (this.props.spacedesigns[4].cn)
    let use = null 
    let tele = null
    let gmail = null
    let we = null
    let hearts = null
    let number = []
    if(id) {
      use = <AtIcon value='user' size='28' color='#d3d3d3'></AtIcon>
      tele = <AtIcon value='iphone' size='28' color='#d3d3d3'></AtIcon>
      gmail = <AtIcon value='mail' size='28' color='#d3d3d3'></AtIcon>
      hearts = <AtIcon  value='heart' size='28' color='#d3d3d3'></AtIcon>
      we = <AtIcon value='money' size='28' color='#d3d3d3'></AtIcon>
    }
    for(let num of this.props.spacedesigns[4].cn) {
      if(num.wexin != undefined) {
        number.push('block')
      }
      else {
        number.push('none')
      }
    }

    return (
      <View className='index'>
        <View className='indexback'>
          {
            date.map((item, index) => (
              <View className='back' key>
                <View className='backs'>
                  <View className='at-row at-row--wrap'>
                    <View className='at-col-3'>
                      <View className='use'>{use}</View>
                    </View>         
                    <View className='at-col-6'>
                      <View className='nameback'>
                        <Text className='name'>{item.name}</Text>
                        <Text className='nameinfo'>{item.nameinfo}</Text>
                      </View>
                    </View>
                    <View className='at-col-1'>
                      <View className='icon'>{hearts}</View>
                    </View>
                    <View className='at-col-6'>
                      <View className='telinfo' onClick={this.call.bind(this, index)}>
                        <Text className='telname'>电话</Text>
                        <Text className='tel'>{item.tel}</Text>
                      </View>
                    </View>
                    <View className='at-col-1'>
                      <View className='iconerback'>
                        <View className='iconer'>{tele}</View>
                      </View>
                    </View>
                    <View className='at-col-7'>
                      <View className='line'>
                        <AtDivider height='24' fontColor='#f3f2f2' lineColor='#f3f2f2' />
                      </View>
                    </View>
                    <View className='at-col-6'>
                      <View className='telinfo'>
                        <Text className='telname'>邮箱</Text>
                        <Text className='tel'>{item.mail}</Text>
                      </View>
                    </View>
                    <View className='at-col-1'>
                      <View className='iconerback'>
                        <View className='iconer'>{gmail}</View>
                      </View>
                    </View>
                    <View className='at-col-7'>
                      <View className='line' display={number[index]} style='display:{{number[index]}}'>
                        <AtDivider height='24' fontColor='#f3f2f2' lineColor='#f3f2f2' />
                      </View>
                    </View>
                    <View className='at-col-6'>
                      <View className='telinfo'>
                        <Text className='telname'>{item.weiname}</Text>
                        <Text className='tel'>{item.wexin}</Text>
                      </View>
                    </View>
                    <View className='at-col-1'>
                      <View className='iconer' display={number[index]} style='display:{{number[index]}}'>{we}</View>
                    </View>
                  </View>
                </View>
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}
