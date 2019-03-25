import Taro, { Component } from '@tarojs/taro'
import { View,Button, Input, Checkbox,select,option } from '@tarojs/components'
import {  AtNavBar,Image } from 'taro-ui'
import './index.scss'



const data2 = [
  {
     color:'#000',
     title:'HOME',
     rightFirstIconType:'bullet-list',
     rightSecondIconType:'user',
     
      open: true,
      url:'http://placekitten.com/g/64/64',
      url1:'heep://placeketten.com/100/100',
      url2:'heep://placeketten.com/100/200',
      url3:'heep://placeketten.com/100/300',
      url4:'heep://placeketten.com/100/400',
      //onchange:div1.innerText=this.value

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
        //<AtNavBar onClickRgIconSt={this.handleClick} onClickRgIconNd={this.handleClick}onClickLeftIcon={this.handleClick}color={item.color}  title={item.title}  rightFirstIconType={item.rightFirstIconType} rightSecondIconType={item.rightSecondIconType} />
        //<Button>1<Image src={item.url1}>链接 1</Image></Button>
        //<View className='lm'><Image src={item.url1}>链接 1</Image></View>
        <Button className='lm' src={item.url1}>1</Button>
        /*<select onchange={item.onchange}>
          <option value='first'>first</option>
          <option value='second'>second</option>
          <option value='third'>third</option>
        </select>
        <View className='div1'></View>*/
          /*<View className='dropdown'>
          <Image href={item.url} className='dropbtn'>下拉菜单</Image>
          <View className='dropdown-content'>
          <Image src={item.url1}>链接 1</Image>
          <Image src={item.url2}>链接 2</Image>
          <Image src={item.url3}>链接 3</Image>
          </View>
          </View>*/
        
          )
        )
      }
      </View>
    )
  }
}