import Taro, { Component } from '@tarojs/taro'
import { View, Image, Navigator, Text } from '@tarojs/components'
import {connect} from '@tarojs/redux'
import { AtTabs, AtTabsPane } from 'taro-ui'

import { guide } from '../../actions/counter'
import './index.scss'

@connect(({ guides }) => ({
  guides
}), (dispatch) => ({
  guide() {
    dispatch(guide())
  }
}))

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  config = {
    navigationBarTitleText: '指南'
  }

  render () {
    const data = this.props.guides

    return (
      <View className='index'>
        <AtTabs
          current={this.state.current}
          scroll
          tabList={[
            { title: '实用指南' },
            { title: '住宿选择' },
            { title: '景点推荐' },
            { title: '餐饮攻略' },
            { title: '购物血拼' },
            { title: '旅游活动' }
          ]}
          onClick={this.handleClick.bind(this)}
        >
          <AtTabsPane current={this.state.current} index={0}>
            <View >
              {
                data[0].Practicalguide.map((item, index) => (
                  <View className='note-backend' key={index}>                            
                    <Navigator url='/pages/mainguideintroduce/index?id={{item.id}}'>
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
                ))
              }
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View >
              {
                data[0].Accommodationoptions.map((item, index) => (
                  <View className='note-backend' key={index}>                            
                    <Navigator url='/pages/mainguideintroduce/index?id={{item.id}}'>
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
                ))
              }
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View >
              {
                data[0].Attractionsrecommended.map((item, index) => (
                  <View className='note-backend' key={index}>                            
                    <Navigator url='/pages/mainguideintroduce/index?id={{item.id}}'>
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
                ))
              }
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View >
              {
                data[0].DiningStrategies.map((item, index) => (
                  <View className='note-backend' key={index}>                            
                    <Navigator url='/pages/mainguideintroduce/index?id={{item.id}}'>
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
                ))
              }
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
            <View >
              {
                data[0].ShoppingBloodfight.map((item, index) => (
                  <View className='note-backend' key={index}>                            
                    <Navigator url='/pages/mainguideintroduce/index?id={{item.id}}'>
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
                ))
              }
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={5}>
            <View >
              {
                data[0].Travelactivities.map((item, index) => (
                  <View className='note-backend' key={index}>                            
                    <Navigator url='/pages/mainguideintroduce/index?id={{item.id}}'>
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
                ))
              }
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
