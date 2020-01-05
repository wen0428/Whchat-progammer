import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Navigator, Swiper, SwiperItem } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtTabs, AtTabsPane } from 'taro-ui'

import { tabslist,sight, spacedesign, shopdesign, gourmet, iconinfo, guide } from '../../actions/counter'
import './index.scss'

@connect(({ sights, spacedesigns, gourmets, shopdesigns, iconinfor, tabslists, guides }) => ({
  sights, spacedesigns, gourmets, shopdesigns, iconinfor, tabslists, guides
}), (dispatch) => ({
  sight() {
    dispatch(sight())
  },
  spacedesign() {
    dispatch(spacedesign())
  },
  gourmet() {
    dispatch(gourmet())
  },
  shopdesign() {
    dispatch(shopdesign())
  },
  iconinfo() {
    dispatch(iconinfo())
  },
  tabslist() {
    dispatch(tabslist())
  },
  guide() {
    dispatch(guide())
  }
}))

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  componentDidMount() {
    const iconid = this.$router.params.iconid      
    let titleurl;
    for(let num of this.props.iconinfor) {

      if(num.iconid==iconid) {
        if(num.content=='景色') {
          titleurl = num.content;
        }
        else if(num.content=='购物') {
          titleurl = num.content;
        }
        else if(num.content=='美食') {
          titleurl = num.content;
        }
      }
    }
    Taro.setNavigationBarTitle({
      title: titleurl
    })
  }

  config = {
    navigationBarTitleText: '正在加载中...'
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    const iconid = this.$router.params.iconid
    let object, data, obj;
    for(const num of this.props.iconinfor) {
      if(num.iconid==iconid) {
        if(num.content =='景色') {
          object = this.props.spacedesigns;
          data = this.props.guides[0].Attractionsrecommended;
          obj = this.props.tabslists[0];
        }
        else if(num.content =='购物') {
          object = this.props.shopdesigns;
          data = this.props.shopdesigns[4].shopbanner;
          obj = this.props.tabslists[1];
        }
        else if(num.content =='美食') {
          object = this.props.gourmets;
          data = this.props.guides[0].DiningStrategies;
          obj = this.props.tabslists[2];
        }
      }
    }

    const arr = Array.from(object || [])[0]
    const arrone = Array.from(object || [])[1]
    const arrtwo = Array.from(object || [])[2]
    const arrthree = Array.from(object || [])[3]

    const datas = Array.from(data || [])

    const objs = (obj || []).listone
    const objsone = (obj || []).listtwo
    const objstwo = (obj || []).listthree
    const objsthree = (obj || []).listfour

    return (
      <View className='index'>
        <View className='swipers'>
          <View className='at-row'>
            <View className='at-col-9'>精选推荐</View>
            <View className='at-col-3'></View>
          </View>
        </View>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          autoplay='true'
        >
          {
            (datas).map((item) => (
              <SwiperItem key>
                <View className='note-backend' key>                            
                  <Navigator url={item.iconurl}>
                    <Image className='notes-image' src={item.url} mode='aspectFill'>                
                      <View className='notes-label'>
                        <View className='notes-labels'>
                          <Text className='note-label'>{ item.title }</Text>
                          <Text className='content'>{ item.content }</Text>
                        </View>
                      </View>
                    </Image>
                  </Navigator>                
                </View>
              </SwiperItem>
            ))
          }
        </Swiper>
        <View className='tab'>
          <View>全部景点</View>
          <AtTabs current={this.state.current}
            tabList={[
              { title: objs || ' ' }, 
              { title: objsone || ' ' }, 
              { title: objstwo || ' ' }, 
              { title: objsthree || ' ' }
            ]} 
            onClick={this.handleClick.bind(this)}
          >
            <AtTabsPane current={this.state.current} index={0} >
              <View style='background-color: #FAFBFC;'>                    
                <View key className='brands'>
                  <View key className='at-row at-row--wrap'>
                    {
                      arr.map((item, index) => (
                        <View className='at-col' key={index}>
                          <Navigator url='/pages/mainiconintroduce/index?id={{item.id}}'>
                            <View className='display' key={index}>
                              <Image className='image' src={item.url}></Image>
                              <View key className='at-col'>
                                <Text className='title'>{item.title}</Text>
                              </View>
                              <View key className='at-col'>
                                <Text className='introduce'>{item.introduce}</Text>
                              </View>
                            </View>
                          </Navigator>
                        </View>
                      ))
                    }                      
                  </View>
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1} >
              <View style='background-color: #FAFBFC;'>                    
                <View key className='brands'>
                  <View key className='at-row at-row--wrap'>
                    {
                      arrone.map((item, index) => (
                        <View className='at-col' key={index}>
                          <Navigator url='/pages/mainiconintroduce/index?id={{item.id}}'>
                            <View className='display' key={index}>
                              <Image className='image' src={item.url}></Image>
                              <View key className='at-col'>
                                <Text className='title'>{item.title}</Text>
                              </View>
                              <View key className='at-col'>
                                <Text className='introduce'>{item.introduce}</Text>
                              </View>
                            </View>
                          </Navigator>
                        </View>
                      ))
                    }                        
                  </View>
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={2} >
              <View style='background-color: #FAFBFC;'>                    
                <View key className='brands'>
                  <View key className='at-row at-row--wrap'>
                    {
                      arrtwo.map((item, index) => (
                        <View className='at-col' key={index}>
                          <Navigator url='/pages/mainiconintroduce/index?id={{item.id}}'>
                            <View className='display' key={index}>
                              <Image className='image' src={item.url}></Image>
                              <View key className='at-col'>
                                <Text className='title'>{item.title}</Text>
                              </View>
                              <View key className='at-col'>
                                <Text className='introduce'>{item.introduce}</Text>
                              </View>
                            </View>
                          </Navigator>
                        </View>
                      ))
                    }                       
                  </View>
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={3} >
              <View style='background-color: #FAFBFC;'>                    
                <View key className='brands'>
                  <View key className='at-row at-row--wrap'>
                    {
                      arrthree.map((item, index) => (
                        <View className='at-col' key={index}>
                          <Navigator url='/pages/mainiconintroduce/index?id={{item.id}}'>
                            <View className='display' key={index}>
                              <Image className='image' src={item.url}></Image>
                              <View key className='at-col'>
                                <Text className='title'>{item.title}</Text>
                              </View>
                              <View key className='at-col'>
                                <Text className='introduce'>{item.introduce}</Text>
                              </View>
                            </View>
                          </Navigator>
                        </View>
                      ))
                    }                      
                  </View>
                </View>
              </View>
            </AtTabsPane>
          </AtTabs>
        </View>
      </View>
    )
  }
}
