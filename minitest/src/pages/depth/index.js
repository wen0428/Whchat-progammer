/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
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

export default class depth extends Component {
  config = { 
    navigationBarTitleText: '书籍',
  }
  render() {
    const txt = (this.props.guideimprove)
    const a = this.$router.params.title
    var obj=txt.find(function (obj) {
      return obj.title === a
    })
    return (
      <View className='newimprovedepth'>
        <View className='novice'>
          <View className='at-row'>
            <View className='at-col-9'>
              <View className='title'>{ obj.title }</View>
            </View>
          </View>
        </View>
        <View className=' novicebook'>
          <View className='menus'>
            <View className='at-row at-row--wrap'>
              {
                obj.name.map((items,index) => (
                  <Navigator url='/pages/bookdetail/index?id={{items.id}}' key={index}>
                    <View className='at-col'>
                      <Image className='memberimage' src={items.url} mode='widthFix' />
                      <View className='memberword'>
                        <View className='words'>{ items.bookname }</View>
                      </View>
                    </View>
                  </Navigator>            
                ))
              }
            </View>
          </View>
        </View>
      </View>
    )
  }
}
/*
    const b = obj.name.id
    var object=obj.find(function (object) {
      return object.title === b
    })
*/

/*
        <View className=' novicebook'>
          <View className='menus'>
            <View className='at-row at-row--wrap'>
              {
                obj.name.map((items,index) => (
                  <Navigator url='../bookdetail/index?id={{items.id}}' key={items}>
                    <View className='at-col'>
                      <Image className='memberimage' src={items.url} mode='widthFix' />
                      <View className='memberword'>
                        <View className='words'>{ items.bookname }</View>
                      </View>
                    </View>
                  </Navigator>            
                ))
              }
            </View>
          </View>
        </View>
*/