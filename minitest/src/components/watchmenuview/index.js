import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { articles } from '../../actions/counter'
import './index.scss'

@connect(({ counter, articledetail }) => ({
  counter, articledetail
}), (dispatch) => ({
  articles() {
    dispatch(articles())
  }
}))

export default class Menuview extends Component {
  render() {
    const txt = (this.props.articledetail)
    return ( 
      <View className='menuview'>
        <View className='at-col'>
          <View className='at-col'>
            {
              txt.map((item, index)=> (  
                <View key={index}>            
                  <Navigator 
                    url='/pages/articlepage/index?id={{item.id}}'
                    key={index} 
                  >
                    <View className='note-backend' key={index}>
                      <Image className='notes-image' src={item.url} mode='aspectFill'></Image>
                      <View className='label'>
                        <Text className='notes-label'>
                          { item.title }
                        </Text>
                        <Text className='notes-words'>
                          \n{ item.introduce }
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
