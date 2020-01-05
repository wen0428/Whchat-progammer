import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem, Navigator, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { finds } from '../../actions/counter'
import './index.scss'

@connect(({ find }) => ({
  find
}), (dispatch) => ({
  finds() {
    dispatch(finds())
  }
}))

export default class Find extends Component {
  render () {
    const txt = (this.props.find)
    let wave
    if(txt) {
      wave = <View className='wave'></View>
    }    
    console.log('wave', wave)

    return ( 
      <View className='find'>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          autoplay='true'
        >
          {txt.map((item, index) => (
            <SwiperItem key={index}>
              <View>
                <Navigator url='/pages/search-info/index?id={{item.id}}'>
                  <Image className='small' mode='widthFix' src={item.url} ></Image>
                  <View className='background'>
                  <View className='positionbody'>
                    <View className='position'>
                      <View className='positionimage'>
                        <Text className='title'>{item.title}</Text>
                        <Text className='introduce'>{item.introduce}</Text>
                        <View className='back'>
                          <View className='at-row'>
                            <View className='at-col at-col-4'>
                              <View className='tabback'>
                                <Text className='tab'>{item.tab}</Text>
                              </View>
                            </View>
                            <View className='at-col at-col-4'>
                              <View className='taboneback'>
                                <Text className='tabone'>{item.tabone}</Text>
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
            </SwiperItem>
          ))}          
        </Swiper>
      </View>  
    )
  }
}
