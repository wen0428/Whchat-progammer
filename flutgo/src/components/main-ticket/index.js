import Taro, { Component } from '@tarojs/taro'
import { View, Navigator, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { spacedesign } from '../../actions/counter'
import './index.scss'

@connect(({ spacedesigns }) => ({
  spacedesigns
}), (dispatch) => ({
  spacedesign() {
    dispatch(spacedesign())
  }
}))

export default class mainticket extends Component {
  render () {
    const txt = (this.props.spacedesigns[4].Buyticket[0])

    return ( 
      <View className='spacedesign'>
        <Navigator url='/pages/main-tickets/index?id={{txt.id}}'>
          <View className='background'>
          <View className='positionbody'>
            <View className='position'>
              <View className='positionimage'>
                <Text className='en'>{txt.en}</Text>
                <Text className='title'>{txt.title}</Text>
                <Text className='titleinfo'>{txt.titleinfo}</Text>
                <View className='back'>
                  <View className='at-row'>
                    <View className='at-col at-col-4'>
                      <View className='tabback'>
                        <Text className='tab'>{txt.tab}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          </View>
        </Navigator>
      </View>  
    )
  }
}
