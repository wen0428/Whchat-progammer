import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, Block } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtIcon } from 'taro-ui'

import { shop, shopdesign, spacedesign, iconinfo, gourmet } from '../../actions/counter'
import './index.scss'

@connect(({ shops, shopdesigns, spacedesigns, iconinfor, gourmets }) => ({
  shops, shopdesigns, spacedesigns, iconinfor, gourmets
}), (dispatch) => ({
  shop() {
    dispatch(shop())
  },
  shopdesign() {
    dispatch(shopdesign())
  },
  spacedesign() {
    dispatch(spacedesign())
  },
  iconinfo() {
    dispatch(iconinfo())
  },
  gourmet() {
    dispatch(gourmet())
  }
}))

export default class Index extends Component {
  constructor () {
    super(...arguments)
  }

  config = {
    navigationBarTitleText: '介绍'
  }

  render () {
    //拿到 id 所在的 reducer
    const a = this.$router.params.id
    //小数组
    const gourmetsmall = []
      //循环遍历每一个对象
    for(const i in this.props.gourmets) {
      //循环遍历每一个对象的子对象
      for(const j in this.props.gourmets[i]) {
        //把子对象存放到小数组里
        if(i==4) {}
        else {
          gourmetsmall.push(this.props.gourmets[i][j])
        }
      }
    }

    const spacesmall = []
    for(const i in this.props.spacedesigns) {
      for(const j in this.props.spacedesigns[i]) {
        if(i==4) {}
        else {
          spacesmall.push(this.props.spacedesigns[i][j])
        }
      }
    }

    const shopsmall = []
    for(const i in this.props.shopdesigns) {
      for(const j in this.props.shopdesigns[i]) {
        if(i==4) {}
        else {
          shopsmall.push(this.props.shopdesigns[i][j])
        }
      }
    }

    const objects = (
      (spacesmall.find(function(obj) {
        return obj.id == a
      })) || (shopsmall.find(function(objs) {
        return objs.id == a
      })) || (gourmetsmall.find(function(objes) {
        return (objes.id == a && objes.id != undefined)
      }))
    ) || []

    const objs = [objects.url, objects.image, objects.imageone, objects.imagetwo, 
      objects.imagethree, objects.imagefour].filter(function(val) {
      return !(!val || val === "");
    })

    return (
      <View className='index'>
        <View>
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            autoplay='true'
            skipHiddenItemLayout='true'
          >
            <Block>
              {
                objs.map((item, index) => (
                <SwiperItem key={index}>
                  <Image mode='widthFix' className='small' src={item} ></Image>
                </SwiperItem>
                ))
              }
            </Block>
          </Swiper>
        </View>
        <View className='backgrounds' key>
          <View className='at-row' >
            <View className='at-col-11'>
              <Text className='title'>{objects.title}</Text>
            </View>
            <View className='at-col-1'>
              <AtIcon value='heart' size='28' color='#000'></AtIcon>
            </View>
          </View>
          <View className='en'>
            <Text className='entitle'>{objects.introduce}</Text>
          </View>
          <View className='at'>
            <AtIcon value='clock' size='18' color='#000'></AtIcon>
            <Text className='introduce'>{objects.worktime}</Text>
          </View>
          <View className='at'>
            <AtIcon value='sketch' size='18' color='#000'></AtIcon>
            <Text className='introduce'>{objects.workadress}</Text>
          </View>
          <View className='adress'>
            <View className='at-row'>
              <View className='at-col-10'>
                <AtIcon value='map-pin' size='18' color='#000'></AtIcon>
                <Text className='introduce'>{objects.enworkadress}</Text>
              </View>
              <View className='at-col-2'>
                <Text className='comeup'>|  到这里</Text>
              </View>
            </View>
          </View>
          <Text className='content'>{objects.content}</Text>
          <Text className>{objects.black}</Text>
        </View>
      </View>
    )
  }
}
