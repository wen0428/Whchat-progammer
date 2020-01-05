import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

let datas = new Date();
let enddata= new Date(datas.getTime() + 300000)
let result = Math.floor(enddata - datas)/1000

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      day: '',
      hour: '',
      minute: '05:',
      second: '00',
    }
  }

  componentWillMount() {
    clearInterval(this.timer)
  }

  componentDidMount() {
    this.timer = setInterval(() => this.countdown(),1000);
  }

  countdown() {
    if(result > 1) {
      result = result - 1;
      let days = Math.floor(result / 60 / 60 / 24)
      let hours = Math.floor(result / 60 / 60)
      let minutes = Math.floor(result / 60);
      let seconds = Math.floor((result % 60))

      this.setState({
        day: days < 10 ? "0" + days + '.' : days + '.',
        hour: hours < 10 ? "0" + hours + ':' : hours + ':',
        minute: minutes < 10 ? "0" + minutes + ':' : minutes + ':',
        second: seconds < 10 ? "0" + seconds : seconds
      })
    }
    else {}
  }

  render () {
    console.log(this.state.day, this.state.hour)
    return (
      <View className='index'>
        <View>{this.state.minute}{this.state.second}</View>
      </View>
    )
  }
}
