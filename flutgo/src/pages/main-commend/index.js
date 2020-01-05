import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtIcon } from 'taro-ui'

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
    this.state = {
      ellipsis: true, // 是否收缩
      flag: true,
    }
  }

  config = {
    navigationBarTitleText: '本地人推荐'
  }

  show() {
    this.setState({ flag: false })
  }
  //消失
  hide() {
    this.setState({ flag: true })
  }

  ellipsis() {  
    let that = this
    this.setState({
      ellipsis: !that.state.ellipsis
    })
  }

  render () {
    const id = this.$router.params.id

    const objects = this.props.commends.find(function(obj) {
      return ( obj.id == id && obj.id !== undefined )
    })

    let icon = null;
    if(id) {
      icon = <AtIcon value='heart' size='28' color='#000'></AtIcon>
    }
    console.log('flag', this.state.flag)
    
    return (
      <View className='index'>
        {
          [objects].map((item, index) => (
            <View key={index}>
              <Image className='titleimage' src={item.titleimage}></Image>
              <View className='textback'>
                <View className='at-row'>
                  <View className='at-col-11'>
                    <Text className='title'>{item.title}</Text>
                  </View>
                  <View className='at-col-1'>{icon}</View>
                </View>
                <View className='titleinfoback'>
                  <Text className='titleinfo'>{item.titleinfo}</Text>
                </View>
                <View class="{{ellipsis?'ellipsis':'unellipsis'}}">{item.titleintroduce}
                </View>
                <View className='showhidden' onClick={this.ellipsis.bind(this)}>{this.state.ellipsis? '展开∨': '收起∧'}</View>
              </View>
            </View>
          ))
        }
      </View>
    )
  }
}
