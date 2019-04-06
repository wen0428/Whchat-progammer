import Taro, { Component } from '@tarojs/taro'
import { View,Button} from '@tarojs/components'
//import {  AtNavBar,Image } from 'taro-ui'
import './index.scss'

const data2 = [
  {
     color:'#000',
     title:'HOME',
     rightFirstIconType:'bullet-list',
     rightSecondIconType:'user',
     
      open: true,
      url:'http://placekitten.com/g/64/64',
      url1:'http://placeketten.com/100/100',
      url2:'http://placeketten.com/100/200',
      url3:'http://placeketten.com/100/300',
      url4:'http://placeketten.com/100/400',

      actionName:'搜一下',
      value:'this.state.value',
        onChange:'this.onChange.bind(this)',
        onActionClick:'this.onActionClick.bind(this)'
  }
]
export default class Nav extends Component {
  render() {
    return ( 
      <View className='at-col nav'>
      {
        data2.map(item => (
        <Button className='lm' src={item.url1}>1</Button>
          )
        )
      }
      </View>
    )
  }
}