import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtIcon } from 'taro-ui'

import { shopdesign, guide } from '../../actions/counter'
import './index.scss'

@connect(({ shopdesigns, guides }) => ({
  shopdesigns, guides
}), (dispatch) => ({
  shopdesign() {
    dispatch(shopdesign())
  },
  guide() {
    dispatch(guide())
  }
}))

export default class Index extends Component {
  config = {
    navigationBarTitleText: '优惠券'
  }

  render() {
    const id = this.$router.params.idinfo;

    const objectinfo = (
      this.props.shopdesigns[4].shopbanner.find(function(obj) {
        return (obj.idinfo == id && obj.idinfo != undefined)
    })) || []

    let adress, titleinfo, contentinfo;
    for(let num of this.props.shopdesigns[4].shopbanner) {
      if(num.idinfo == id) {
        adress = num.url
        titleinfo = num.title
        contentinfo = num.content
      }
    }

    return (
      <View className='index'>
        <View>
          <View className='note-backend'>                            
            <Image className='notes-image' src={adress} mode='aspectFill'>                
              <View className='notes-label'>
                <View className='notes-labels'>
                  <Text className='note-label'>{ titleinfo }</Text>
                  <Text className='content'>{ contentinfo }</Text>
                </View>
              </View>
            </Image>               
          </View>
          {
            ((objectinfo.detail || objectinfo.detailinfo || objectinfo.introducetwo) || []).map((item) => (
              <View className='backgrounds' key>
                <View className='at-row' >
                  <View className='at-col-11'>
                    <Text className='title'>{item.titlexl}</Text>
                  </View>
                  <View className='at-col-1'>
                    <AtIcon value='heart' size='28' color='#000'></AtIcon>
                  </View>
                </View>
                <View className='en'>
                  <Text className='entitle'>{item.entitle}</Text>
                </View>
              </View>
            ))
          }
          {
            ((objectinfo.introduce || objectinfo.introducetwo) || []).map((item) => (
              <View className='backgrounds' key>
                <View className='at'>
                  <AtIcon value='clock' size='18' color='#000'></AtIcon>
                  <Text className='introduce'>{item.worktime}</Text>
                </View>
                <View className='at'>
                  <AtIcon value='sketch' size='18' color='#000'></AtIcon>
                  <Text className='introduce'>{item.workadress}</Text>
                </View>
                <View className='adress'>
                  <View className='at-row'>
                    <View className='at-col-10'>
                      <AtIcon value='map-pin' size='18' color='#000'></AtIcon>
                      <Text className='introduce'>{item.content}</Text>
                    </View>
                    <View hidden='{{item == undefined}}' className='at-col-2'>
                      <Text className='comeup'>|  到这里</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))
          }
          {
            (objectinfo.detail || objectinfo.detailtwo || objectinfo.detailinfo).map((item, index) => (
              <View className='backgrounds' key={index}>
                <Text className='content'>{item.titles}</Text>
                <Text className='content'>{item.titleinfo}</Text>
                <Text className='content'>{item.titleone}</Text>
                <Text className='content'>{item.titleoneinfo}</Text>
                <Image hidden='{{item.titleoneimage == undefined}}' src={item.titleoneimage}></Image>
                <Text className='content'>{item.titleonedetail}</Text>
                <Text className='content'>{item.titletwo}</Text>
                <Image hidden='{{item.titletwoimage == undefined}}' src={item.titletwoimage}></Image>
                <Text className='content'>{item.titletwoinfo}</Text>
                <Text className='content'>{item.Blank}</Text>
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}
