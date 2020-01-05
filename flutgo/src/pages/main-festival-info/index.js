import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
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

export default class Banner extends Component {
  constructor () {
    super(...arguments)

  }

  config = {
    navigationBarTitleText: '节日活动中'
  }

  render () {
    const id = this.$router.params.id
    const objects = (
      this.props.spacedesigns[4].festival.DecemberFestivals.find(function(obj) {
        return (obj.id == id && obj.id != undefined)
      }) ||
      this.props.spacedesigns[4].festival.NovemberFestivals.find(function(objs) {
        return (objs.id == id && objs.id != undefined)
      })
    )

    let status = null;
    if(id) {
      status = <AtIcon value='heart' size='28' color='#000'></AtIcon>
    }
    else {
      status = []
    }

    return ( 
      <View className='banner'>
        {
          [objects].map((item, index) => (
            <View className='back' key={index}>
              <Image className='image' src={item.image}></Image>
              <View className='titleback'>
                <View className='at-row'>
                <View className='at-col-11'>
                  <Text className='title'>{item.title}</Text>
                </View>
                <View className='at-col-1'>
                  {status}
                </View>
                </View>
                <View><Text className='titleinfo'>{item.titleinfo}</Text></View>
                <View><Text className='content'>{item.content}</Text></View>
              </View>
            </View>
          ))
        }
      </View>
    )
  }
}
