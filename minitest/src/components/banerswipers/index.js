import Taro, { Component } from '@tarojs/taro'
import { View, Image, ScrollView, Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { bannerswiper } from '../../actions/counter'
import './index.scss'

@connect(({ counter, bannerdetail }) => ({
  counter, bannerdetail
}), (dispatch) => ({
  bannerswiper() {
    dispatch(bannerswiper())
  }
}))

export default class Swip extends Component {
  render () {
    const txt = (this.props.bannerdetail)
    return ( 
      <View className='swip'>
        <View className='at-row'>
          <ScrollView className='test-h' scrollX style=''>
            {
              txt.map((item, index) => (
                <View className='note-backend' key={index}>                            
                  <Navigator url='/pages/banersdetail/index?id={{item.id}}' key={index}>
                    <Image className='notes-image' src={item.url} mode='aspectFill'>                
                    </Image>
                    <View className='notes-label'>
                      <View className='note-label'>{ item.title }</View>
                    </View>
                  </Navigator>                
                </View>
              ))
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}
