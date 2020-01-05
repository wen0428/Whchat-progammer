import Taro, { Component } from '@tarojs/taro'
import { View, Navigator, Image, Text } from '@tarojs/components'
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
    this.state = {
      ellipsis: false, // 是否收缩
      flag: true,
      btn: [
        {
          title: '1月',
          detail: false,
          index: 11,
          active: false,
        },
      ]
    };
  }

  show() {
    this.setState({ 
      flag: !this.state.flag 
    })
  }
  //消失
  hide() {
    this.setState({ 
      flag: true 
    })
  }

  ellipsis() {
    let that = this
    this.setState({
      ellipsis: !that.state.ellipsis
    })
  }

  Onclick (e) {
    const that = this
    that.setState({
      btn: [
        {
          title: '1月',
          detail: true,
          index: e,
          active: true,
        },
      ],
    })
  }

  preventTouchMove() {return}

  config = {
    navigationBarTitleText: '节日活动中'
  }

  render () {
    let dex, titles, calendar, month;
    for(let num of this.props.spacedesigns[4].Data) {
      if (num.index == this.state.btn[0].index) {
        dex = Object.values(this.props.spacedesigns[4].festival)[num.index]
        titles = num.title
      }
      else {}
    }

    if(dex != undefined) {
      calendar = <AtIcon value='calendar' size='22' color='#F00'></AtIcon>
    }

    if(this.state.ellipsis == true) {
      month =  
        <View className="{{ellipsis ? 'ellipsis' : 'unellipsis'}}">
          <View class='rowtitleback'>
            <View class='rowback'>
              <View class='at-row at-row--wrap'>
                {
                  this.props.spacedesigns[4].Data.map((item, index) => (
                    <View class='at-col-3' key={item + index}>
                      <View className='icon'>
                        <View className='tags'
                          data-id='{{item.dataid}}' 
                          artive="{{this.state.active ? 'true' : 'false'}}" 
                          detail={this.state.btn[0].detail} 
                          onClick={this.Onclick.bind(this, index)} 
                        >
                          <View className='textbacks' onClick={this.ellipsis.bind(this)}>
                            <View className="{{flag ? 'ellipsis' : 'unellipsis'}}" onClick={this.hide.bind(this)}>
                              <Text className='Text'>{item.title}</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  ))
                }
              </View>
            </View>
          </View>
        </View>
    }

    return ( 
      <View className='banner'>
        <View className='festivaltitleback'>
          <View className='festivaltitle'>
            <View className='at-row'>
              <View className='at-col-10'><View className='titles'>{titles}</View></View>
              <View className='at-col-2'>
                <View className='calendar' onClick={this.ellipsis.bind(this)}>
                  <View onClick={this.show.bind(this)}>{calendar}</View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View className='monthtitle'>
              <View className="{{ellipsis ? 'ellipsis' : 'unellipsis'}}">
                <View>{month}</View>
              </View>
            </View>
          </View>
        </View>

        <View onClick={this.ellipsis.bind(this)}>
          <View className='modal-box' hidden='{{flag}}' onClick={this.hide.bind(this)} catchtouchmove>
          </View>
        </View>

        {
          dex.map((item, index) => (
            <Navigator className='nav' url='/pages/main-festival-info/index?id={{item.id}}' key={index}>
              <View className='back'>
                <Image className='image' src={item.image}></Image>
                <View className='textback'>
                  <View className='title'>{item.title}</View>
                  <View className='titleinfo'>{item.titleinfo}</View>
                </View>
              </View>
            </Navigator>
          ))
        }
      </View>
    )
  }
}
