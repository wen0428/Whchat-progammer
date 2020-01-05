import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Banner from '../../components/main-banner'
import Icons from '../../components/main-icon'
import Commend from '../../components/main-comm'
import Nomiss from '../../components/main-nomiss'
import Festival from '../../components/main-festival'
import Ticket from '../../components/main-ticket'
import Commonwave from '../../components/common-wave'

import './index.scss'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      lists: null,
    }
  }

  componentDidMount() {
    this.requests().then((value) => {
      console.log('value:', value)
      const list = JSON.stringify(value);
      this.setState({
        lists: list
      })
    })
  }

  async requests() {
    const reqs = await Taro.request({
      url: 'http://t.weather.sojson.com/api/weather/city/101090201'
    })
    console.log(reqs, '123456')
    return reqs
  }
  
  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <Banner />
        <Icons />
        <Ticket />
        <Commend />
        <Nomiss />
        <Festival />
        { this.state.lists }
        <Commonwave />
      </View>
    )
  }
}
