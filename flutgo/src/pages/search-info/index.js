import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Navigator, Block } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtIcon, AtDivider } from 'taro-ui'

import { finds } from '../../actions/counter'
import './index.scss'

@connect(({ counter, find }) => ({
  counter, find
}), (dispatch) => ({
  finds() {
    dispatch(finds())
  }
}))

export default class Find extends Component {
  config = {
    navigationBarTitleText: '线路'
  }

  render () {
    const id = this.$router.params.id
    let detail, urlsinfo;
    for(let num of this.props.find) {
      if(num.id == id) {
        detail = num.detail
        urlsinfo = num.url
      }
    }

    let status = null;
    let divider = null;
    let map = null;
    let circle = null;
    if(id) {
      status = <AtIcon height='30' value='heart' size='28' color='#000'></AtIcon>
      divider = <AtDivider content='' />
      map = <AtIcon height='30' value='map-pin' size='18' color='#000'></AtIcon>
      circle = <AtIcon height='30' value='alert-circle' size='14' color='#000'></AtIcon>
    }
    else {
      status = [];
      divider = [];
    }

    return ( 
      <View className='index'>
        <Image className='urlsinfo' src={urlsinfo}></Image>
        <View className='find'>
          {
            detail.map((item, index) => (
              <View className='sum' key>
                <View className='at-row'>
                  <View className='at-col-11'>
                    <Text hidden='{{item.details == undefined}}' className='details'>{item.details}</Text>
                  </View>
                  <View hidden='{{item.details == undefined}}' className='at-col-1'>
                    {status}
                  </View>
                </View>

                <View><Text className='detailsline'>{item.detailsline}</Text></View>
                <View><Text hidden='{{item.detailsinfo == undefined}}' className='detailsinfo'>{item.detailsinfo}</Text></View>
                <View><Text className='detailslineinfo'>{item.detailslineinfo}</Text></View>
                <View><Text className='detailscycle'>{item.detailscycle}</Text></View>
                <View hidden='{{item.detailscycle == undefined}}'>{divider}</View>

                <View className='weui-cell-third'>
                  <View className='page__title'>
                    <Block>
                      <View className='weui-cell-list' key={index}>
                        <View hidden='{{index == 0}}' className='weui-cell-circle'>{map}</View>
                        <View className='weui-cell-line'>
                          <View className='weui-cell-event'>
                            <View className='eventback'>
                              <View><Text className='detailsline'>{item.detailtitle}</Text></View>
                              <View className='at-row'>
                                <View className='at-col-9'><Text className='detailslineinfo'>{item.detailtitleinfo}</Text></View>
                                <View className='at-col-3'>
                                  <Navigator url='/pages/search-info-introduce/index?id={{item.id}}'>
                                    <View hidden='{{item.detailtitleinfocycle == undefined}}' className='tabback'>
                                      <Text className='detailscycle'>{item.detailtitleinfocycle}</Text>
                                    </View>
                                  </Navigator>
                                </View>
                              </View>
                              <Image hidden='{{item.detailtitleimage == undefined}}' className='detailimage' src={item.detailtitleimage}></Image>
                              <View><Text className='detailsline'>{item.detailtitleimageinfo}</Text></View>
                              <View><Text className='detailscycle'>{item.detailtitleimagesinfo}</Text></View>
                            </View>
                          </View>
                        </View>
                        <View hidden='{{index == 0}}' className='weui-cell-circleone'>{circle}</View>
                      </View>
                    </Block>
                  </View>
                </View>
              </View>
            ))
          }
          <View>{divider}</View>
        </View>
      </View>  
    )
  }
}
