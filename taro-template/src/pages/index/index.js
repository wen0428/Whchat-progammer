import Taro, { Component } from '@tarojs/taro'
import { View, Button,Image } from '@tarojs/components'
//import { AtSearchBar, AtNavBar } from 'taro-ui'

import { connect } from '@tarojs/redux'
import { add, minus, asyncadd,mul,div} from '../../actions/counter'
import Menu   from './components/view/index'
import Swip   from './components/swiper/index'
import scrol  from './components/scrollview/index'
import  Nav   from './components/navbar/index'
import Search from './components/searchbar/index'
import SampleImage from '../../assets/image/菜单.png'

import './index.scss'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncadd () {
    dispatch(asyncadd())
  },
  mul () {
    dispatch(mul())
  },
  div () {
    dispatch(div())
  }
}))
class Index extends Component {
  /*constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }*/
  onActionClick () {
    console.log('开始搜索')
  }
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () {}

  componentDidShow () { }
  componentDidHide () {/** */ }

  render () {
    return (
      <View className='index'>
        <View className='at-row'>
          <View className='at-col'><Button className='mm1'><Image className='mm' src={SampleImage} mode='aspectFit' /></Button></View>
          <View className='at-col'></View>
          <View className='at-col'><Search /></View>
      </View>

        <Swip />

        <View className='at-row'>
          <View className='at-col at-col-9'><View class='yq'>SERVICE</View></View>
          <View className='at-col at-col-3'><View class='yq'>View all</View></View>
        </View>

        <Menu />
        <Menu />
        
        <View className='at-row'>
          <View className='at-col '><View class='yq'>TRENDING PACKAGES</View></View>
        </View>
        
        <scrol />
      </View>
    )
  }
}
export default Index