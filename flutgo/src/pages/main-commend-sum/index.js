import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { commend } from '../../actions/counter'
import './index.scss'

@connect (({ commends }) => ({
  commends
}), (dispatch) => ({
  commend() {
    dispatch(commend())
  }
}))

export default class Index extends Component {
  constructor () {
    super(...arguments)
  }

  config = {
    navigationBarTitleText: '本地人推荐'
  }

  render () {
    const data = this.props.commends

    return (
      <View className='index'>
        {
          data.map((item, index) => (
            <View className='back' key={index}>
              <Navigator url='/pages/maincommend/index?id={{item.id}}'>
                <View className='back'>
                  <Image className='titleimage' src={item.titleimage}></Image>
                  <View className='textback'>
                    <Text className='title'>{item.title}</Text>
                    <Text className='titleinfo'>{item.titleinfo}</Text>
                  </View>
                </View>
              </Navigator>
            </View>
          ))
        }
      </View>
    )
  }
}
