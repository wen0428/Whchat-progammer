import Taro, { Component } from '@tarojs/taro'
import { View, Text, Navigator, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { articles } from '../../actions/counter'
import './index.scss'

@connect(({ counter, bannerdetail }) => ({
  counter, bannerdetail
}), (dispatch) => ({
  articles(){
    dispatch(articles())
  },
}))

export default class Index extends Component {
  config = {
    navigationBarTitleText: '札记心得'
  }
  render () {
    const txt = (this.props.bannerdetail)
    return (
      <View className='index'>      
      <View className='watch'>
        <View className='at-col'>
          {
            txt.map((item, index)=> (  
              <View key={index}>            
                <Navigator 
                  url='/pages/banersdetail/index?id={{item.id}}'
                  key={index} 
                >
                  <View className='note-backend' key={index}>
                    <Image className='notes-image' src={item.url} mode='aspectFill'></Image>
                    <View className='label'>
                      <Text className='notes-label'>
                        { item.title }
                      </Text>
                    </View>
                  </View>  
                </Navigator>
              </View>
            ))
          }
        </View> 
      </View>  
      </View>  
    )
  }
}
