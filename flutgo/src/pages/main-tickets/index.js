import Taro, { Component } from '@tarojs/taro'
import { View, Navigator, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtIcon } from 'taro-ui'

import { spacedesign } from '../../actions/counter'
import './index.scss'

@connect(({ spacedesigns }) => ({
  spacedesigns
}), (dispatch) => ({
  spacedesign() {
    dispatch(spacedesign())
  }
}))

export default class ticket extends Component {
  config = {
    navigationBarTitleText: '电子车票'
  }

  render () {
    const text = this.props.spacedesigns[4].Buyticket[0].method
    let icon = null;
    let iconone = null;
    let circle = null;
    let search = null;
    if(text) {
      icon = <AtIcon value='search' size='28' color='#f3ff2f2'></AtIcon>
      iconone = <AtIcon value='money' size='28' color='#f3ff2f2'></AtIcon>
      circle = <AtIcon value='alert-circle' size='18' color='#d3d3d3'></AtIcon>
      search = <AtIcon value='settings' size='37' color='#d3d3d3'></AtIcon>
    }
    else {}

    return ( 
      <View className='spacedesign'>
        <View className='aboutback'><Text className='about'>关于</Text>{circle}</View>
        <View className='ground'>
          <Navigator url='/pages/main-ticket-info/index?id={{text[0].id}}' key>
            <View className='back'>
              <View className='at-row'>
                <View className='at-col-2'>
                  <View className='icon'>{icon}</View>
                </View>
                <View className='at-col-10'>
                  <View className='titleback'>
                    <View className='titleground'><Text className='title'>{text[0].title}</Text></View>
                    <View className='titleground'><Text className='titleinfo'>{text[0].titleinfo}</Text></View>
                  </View>
                </View>
              </View>
            </View>
            <View className='bottoms'></View>
          </Navigator>
          <Navigator url='/pages/main-ticket-info/index?id={{text[1].id}}' key>
            <View className='back'>
              <View className='at-row'>
                <View className='at-col-2'>
                  <View className='icon'>{iconone}</View>
                </View>
                <View className='at-col-10'>
                  <View className='titleback'>
                    <View className='titleground'><Text className='title'>{text[1].title}</Text></View>
                    <View className='titleground'><Text className='titleinfo'>{text[1].titleinfo}</Text></View>
                  </View>
                </View>
              </View>
            </View>
          </Navigator>
          <View className='bottoms'></View>
        </View>
        <View className='bottom'>
          <View className='bottomback'>
            <View className='deepback'>
              <View className='at-row'>
                <View at-col>
                  <View className='icon'>{search} ||</View>
                </View>
                <View at-col>
                  <View className='Hback'>
                    <Text className='deep'>HSL</Text><Text className='light'>HRT</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className='lightback'><Text className='light'>交通服务由Helsinki Regional Transport Authority</Text></View>
            <View className='lbback'><Text className='light'>赫尔辛基地区交通管理局提供 </Text><Text className='black'> 交通服务须知</Text></View>
            <View className='deeperback'><Text className='deeper'>Whim</Text></View>
            <View className='lightwhim'><Text className='light'>本线上购票服务由Whim提供</Text></View>
            <View className='blackback'><Text className='black'>Whim服务条款 | Whim隐私条款</Text></View>
          </View>
        </View>
      </View>  
    )
  }
}
