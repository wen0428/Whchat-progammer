/* eslint-disable react/forbid-elements */
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { books } from '../../actions/counter'
import './index.scss'

@connect(({ counter, literaturedetail }) => ({
  counter, literaturedetail
}), (dispatch) => ({
  books() {
    dispatch(books())
  }
}))

export default class Index extends Component {
  config = { 
    navigationBarTitleText: '详情页',
  }
  constructor() {
    super(...arguments)
    this.state = {
      lists: [],
    }
  }
  componentWillMount(){
    const app = Taro.getApp();
    data: {
      //article 用来存储数据
      article: {}
    }
    const _ts = this;
    Taro.request({
      url: `https://yuque.yangchengkai.now.sh/api/v1/yuque/details?RepoID=287216&ID=1630596`,
      header: {
        'content-type': 'application/xml',
        'X-Auth-Token': 'sLWHRldWQiJkMGJBjGh8Xt5f3aXYdNJP7LjRsKeZ'
      },
      success: (res)=> {
        let data = app.state.towxml.toString(
          res.data,
          'markdown',
          console.log('success',app.state.towxml)
        );
        //前台初始化小程序数据（2.1.2新增，如果小程序中无相对资源需要添加`base`根地址，也无`audio`内容可无需初始化）
        data = app.state.towxml.initData(data,{
          base: 'https://xxx.com/',    // 需要解析的内容中相对路径的资源`base`地址
          app: _ts                     // 传入小程序页面的`this`对象，以用于音频播放器初始化
        });
        //设置文档显示主题，默认'light'
        //设置数据
       /* _ts.setData({
          article: data,
        });*/
      },
      fail: (res)=> {
        console.log('error',res.data)
      }
    }).then(res =>{
      let list = res.data.detail.data.body
      let that = this
      that.setState({
        lists: list
      })
    })
  }
  render () { 
    const app = Taro.getApp();
    exports.main = async (event, context) => {
      const { func, type, content } = event
      let res
      if (func === 'parse') {
        if (type === 'markdown') {
          res = await app.state.towxml.toJson(content || '', 'markdown');
        } else {
          res = await app.state.towxml.toJson(content || '', 'html');
        }
      }
      return {
        data: res
      }
    }

    return (
      <View className='index'>
        <import src='../../towxml/entry.wxml' />
        { this.state.lists }
        <template is='entry' data='{{text: forbar}}' ></template>
      </View>
    )
  }
}
