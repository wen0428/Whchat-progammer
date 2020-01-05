import Taro, { Component } from '@tarojs/taro'
import { View, Text, Map, Navigator } from '@tarojs/components'
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

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      flag: false,
      idx: '',
    }
  }

  selectApply(e){
    let ids
    for(let num of this.props.spacedesigns[4].Buyticket[0].method[1].introduce) {
      if(num.id == this.props.spacedesigns[4].Buyticket[0].method[1].introduce[e].id) {
        ids = num.id
      }
    }
    this.setState({
       idx: ids
    })
 }

  OnClick() {
    this.setState({
      flag: true
    })
  }

  show(event) {
    console.log('event', event)
    for(let num of this.props.spacedesigns[4].Buyticket[0].method[1].introduce) {
      if(num.id == this.props.spacedesigns[4].Buyticket[0].method[1].introduce[event].id) {
        num.check = true
      }
      else {
        num.check = false
      }
    }
    this.setState({
      check: !this.state.check,
      data: this.props.spacedesigns[4].Buyticket[0].method[1].introduce
    })
  }

  config = {
    navigationBarTitleText: '电子车票'
  }

  render () {
    const id = this.$router.params.id
    console.log('flag:',this.state.flag,'ellipsis:', this.state.data, 'idx:', this.state.idx)
    const object = (
      this.props.spacedesigns[4].Buyticket[0].method.find(function(obj) {
        return (obj.id == id && obj.id != undefined)
      })
    ) || []
    const methods = object.introduce

    let circle = null;
    if(id) {
      circle = <AtIcon value='alert-circle' size='18' color='#d3d3d3'></AtIcon>
    }
    else {}
    let zero = null;
    let buyzero = null;
    let one = null;
    if(object.id == this.props.spacedesigns[4].Buyticket[0].method[1].id) {
      zero =           
      <View>
        <View className='at-row'>
          <View className='at-col-10'>
            <View className=''>
              <Text className='about'>Whim</Text>
            </View>
          </View>
          <View className='at-col-2'>
            <View className=''>
              <Text className='about'>关于</Text>{circle}
            </View>
          </View>
        </View>
        <View className='textback'>
          <Text className='text'>{object.introinfo}</Text>
        </View>
      </View>
      buyzero = <View className="unbuyback {{flag ? 'buyback' : 'unbuyback'}}"><Text className='buy'>购买</Text></View>
    }
    if(object.id == this.props.spacedesigns[4].Buyticket[0].method[0].id) {
      one = 
      <View className='titleone'>
        <View className='improveback'>
          <Text className='improve'>{object.introinfo}</Text>
        </View>
        <View className='mapback'><Map></Map></View>
      </View>
    }

    return (
      <View className='index'>
        {one}
        <View className='title'>
          {zero}
          {
            (methods || []).map((item, index) => (
              <View className='contentback' key={index} onClick={this.OnClick.bind(this)}>
                <View class="bottom {{idx==item.id?'selected':''}}" key onClick={this.selectApply.bind(this, index)}>
                  <View >
                    <View className='at-row'>
                      <View className='at-col-9'>
                        <View className='info'>
                          <Text className='iconinfo'>{item.title}</Text>
                          <Text className='titleinfo'>{item.titleinfo}</Text>
                        </View>
                      </View>
                      <View className='at-col-3'>
                        <View className='price'>{item.price}</View>
                      </View>
                    </View>
                    <View className='bottoms' id={item.id} style='background-color:{{idx==item.id ? item.color : item.uncolor}};'></View>
                  </View>
                </View>
              </View>
            ))
          }          
        </View>
        <Navigator url='/pages/mainticketbuy/index?id={{idx}}'>{buyzero}</Navigator>
      </View>
    )
  }
}
