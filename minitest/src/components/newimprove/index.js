import Taro, { Component } from '@tarojs/taro'
import { View, Image, Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { books } from '../../actions/counter'
import './index.scss'

@connect(({ counter, literaturedetail }) => ({
  counter, literaturedetail
}), (dispatch) => ({
  books() {
    dispatch(books())
  }
}))

export default class Noviciate extends Component {
  render() {
    const txt = (this.props.literaturedetail)
    return ( 
      <View className='noviciate'>         
        <View className='novice'>
          <View className='at-row'>
            <View className='at-col-9'>
              <View className='title'>| 进阶提高</View>
            </View>
            <View className='at-col-3'>
              <Navigator
                url='/pages/user/index'
              >
                <View className='more'>more &gt;</View>
              </Navigator>
            </View>
          </View>
        </View>
        <View className=' novicebook'>
          <View className='at-row at-row--wrap'>
            <View className='menus'>
              <View className='at-row at-row--wrap'>
                {
                  txt.map((item, index) => (
                    <Navigator url='../bookdetail/index' for={item} key={index}>
                      <View className='at-col'>
                        <Image className='memberimage' src={item.url} mode='widthFix' />
                        <View className='memberword'>
                          <View className='words'>{ item.title }</View>
                        </View>
                      </View>
                    </Navigator>            
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
// ../bookdetail/index