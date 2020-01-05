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

export default class Watch extends Component {
  render () {
    const txt = (this.props.articledetail)
    return ( 
      <View className='watch'>  
        <View className='indicator'>          
          <View className='at-row'>
            <View className='at-col-9'>              
              <View className='title'>| 读书笔记</View>
            </View>
            <View className='at-col-3'>
              <Navigator
                url='pages/acticlesnote/index'
              >
                <View className='more'>more &gt;</View>
              </Navigator>
            </View>
          </View>
        </View>
        <View className='read-view'>
          <View className='menuview'>
            <View className='at-col'>
              <View className='at-col'>
                {
                  txt.map((item, index )=> (  
                    <View key={index}>            
                    <Navigator url='/pages/article/index?id={{item.id}} & url={{item.url}} & theme={{item.theme}} & author={{item.author}} &category={{item.category}} & paragraph1={{item.paragraph1}} & paragraph2={{item.paragraph2}} & paragraph3={{item.paragraph3}} ' 
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
        </View>
      </View>  
    )
  }
}
