import Taro, { Component } from '@tarojs/taro'
import { View, Image, Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { guidesimprove } from '../../actions/counter'
import './index.scss'

@connect(({ counter, guideimprove }) => ({
  counter, guideimprove
}), (dispatch) => ({
  guidesimprove() {
    dispatch(guidesimprove())
  }
}))

export default class Newimprovedepth extends Component {
  render() {
    const txt = (this.props.guideimprove)
    return (
      txt.map((item, index) => (
        <View className='newimprovedepth' key={index}>
          <View className='novice'>
            <View className='at-row'>
              <View className='at-col-9'>
                <View className='title'>{ item.title }</View>
              </View>
              <View className='at-col-3'>
                <Navigator
                  url='/pages/depth/index?title={{item.title}}'
                >
                  <View className='more' >more &gt;</View>
                </Navigator>
              </View>
            </View>
          </View>
          <View className=' novicebook'>
            <View className='menus'>
              <View className='at-row at-row--wrap'>
                {
                  item.name.map(iItem => (
                    <Navigator url='/pages/bookdetail/index?id={{iItem.id}}' key={index}>
                      <View className='at-col'>
                        <Image className='memberimage' src={iItem.url} mode='widthFix' />
                        <View className='memberword'>
                          <View className='words'>{ iItem.bookname }</View>
                        </View>
                      </View>
                    </Navigator>            
                  ))
                }
              </View>
            </View>
          </View>
        </View>
      ))
    )
  }
}
