import Taro, { Component } from '@tarojs/taro'
import { View, Text, Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtIcon, AtDivider } from 'taro-ui'

import { iconinfo, spacedesign } from '../../actions/counter'
import './index.scss'

@connect(({ iconinfor, spacedesigns }) => ({
  iconinfor, spacedesigns
}), (dispatch) => ({
  iconinfo() {
    dispatch(iconinfo())
  },
  spacedesign() {
    dispatch(spacedesign())
  }
}))

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      flag: true,
    }
  }

  config = {
    navigationBarTitleText: '景色'
  }

  call() {
    Taro.makePhoneCall({
      phoneNumber: '112',
      success() {
        console.log('拨打成功')
      },
      fail() {
        console.log('拨打失败')
      },
    })
  }

  callone() {
    Taro.makePhoneCall({
      phoneNumber: '+358 40 8677838',
      success() {
        console.log('拨打成功1')
      },
      fail() {
        console.log('拨打失败')
      },
    })
  }

  data = {
    idx: ''
  }

  show() {
    this.setState({ flag: false })
  }
  //消失
  hide() {
    this.setState({ flag: true })
  }

  preventTouchMove(){}

  render () {
    const date = (this.props.iconinfor)
    console.log('flag', this.state.flag)
    let status, wave
    if(date) {
      status = <AtDivider height='2' fontColor='#f3f2f2' lineColor='#f3f2f2' />
      wave = <View className='wavesum'>
              <View className='wavetop'>
                <View className='at-row'>
                  {
                    this.props.spacedesigns[4].wave.map((item, index) => (
                      <View className='at-col-2' key={index}>
                        <View className='wavezero'>{item.title}</View>
                      </View>
                    ))
                  }
                </View>
              </View>
              <View className='wavebottom'>
                <View className='at-row'>
                  {
                    this.props.spacedesigns[4].wave.map((item, index) => (
                      <View className='at-col-2' key={index}>
                        <View className='waveone'>{item.title}</View>
                      </View>
                    ))
                  }
                </View>
              </View>
            </View>
    }
    console.log('wave', wave)

    return (
      <View className='index'>
        <View className='sum'>
          <View className='position'><View className='wave'></View></View>
          <View className='at-row at-row--wrap'>
            {
              date.map((item) => {
               return (item.number == 0 
                        ? <View className='at-col-3' key='true'>
                            <View className='at' >
                              <Navigator className='nav' url={item.url} id={item.iconid}>
                                <View className='icons' >
                                  <AtIcon value={item.value} size={item.size} color={item.color}></AtIcon>
                                </View>
                                <View className='content' >
                                  <Text className='name'>{item.content}</Text>
                                </View>
                              </Navigator>
                            </View>
                          </View>
                        :
                        (item.number == 1 
                          ? <View className='at-col-3' key>
                              <View className='at' onClick={this.show.bind(this)} >
                                <Navigator className='nav' url={item.url} id={item.iconid}>
                                  <View className='icons' >
                                    <AtIcon value={item.value} size={item.size} color={item.color}></AtIcon>
                                  </View>
                                  <View className='content' >
                                    <Text className='name'>{item.content}</Text>
                                  </View>
                                </Navigator>
                              </View>
                            </View>
                          : 
                            <View className='at-col-3' key>
                              <View className='at' >
                                  <View className='icons' >
                                    <AtIcon value={item.value} size={item.size} color={item.color}></AtIcon>
                                  </View>
                                  <View className='content' >
                                    <Text className='name'>{item.content}</Text>
                                  </View>
                              </View>
                            </View>
                        ) 
                      )
              })
            }

            <View class='modal-box' hidden='{{flag}}' onClick={this.hide.bind(this)} catchtouchmove='return'>
              <View class='modal-body'>
                <View class='modal-content'>
                    <View class='knowBtn'>
                      <View className='SOS' onClick={this.call.bind(this)} >急救电话(报警、火警、急救)</View>
                      {status}
                      <View className='help' onClick={this.callone.bind(this)}>中国驻芬兰大使馆求助电话(24h)</View>
                    </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
