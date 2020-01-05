import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { guide } from '../../actions/counter'
import './index.scss'

@connect (({ guides }) => ({
  guides
}), (dispatch) => ({
  guide() {
    dispatch(guide())
  },
}))

export default class Index extends Component {
  constructor () {
    super(...arguments)
  }

  config = {
    navigationBarTitleText: '指南'
  }

  render () {
    const id = this.$router.params.id
    const idinfo = this.$router.params.idinfo

    const object = (
      this.props.guides[0].Practicalguide.find(function(obj) {
        return (obj.id == id && obj.id != undefined)
      }) || this.props.guides[0].Accommodationoptions.find(function(objone) {
        return (objone.id == id && objone.id != undefined)
      }) || this.props.guides[0].Attractionsrecommended.find(function(objtwo) {
        return (objtwo.id == id && objtwo.id != undefined)
      }) || this.props.guides[0].DiningStrategies.find(function(objthree) {
        return (objthree.id == id && objthree.id != undefined)
      }) || this.props.guides[0].ShoppingBloodfight.find(function(objfour) {
        return (objfour.id == id && objfour.id != undefined)
      }) || this.props.guides[0].Travelactivities.find(function(objfive) {
        return (objfive.id == id && objfive.id != undefined)
      }) 
    ) || []

    const obj = (
      this.props.guides[0].Attractionsrecommended.find(function(objtwo) {
        return (objtwo.id == idinfo && objtwo.id != undefined)
      }) || this.props.guides[0].DiningStrategies.find(function(objthree) {
        return (objthree.id == idinfo && objthree.id != undefined)
      })
    ) || []

    return (
      <View className='index'>
        <View>
          {
            ((object.introduce || object.introduceone || object.introducetwo || object.introducethree || 
              object.introducefour || obj.introduce || obj.introduceone || 
              obj.introducetwo) || []).map((item, index) => (
              <View key={index}>
                <View className='master' key={index}>
                  <Text>{item.Master}</Text>
                </View>
                <View className='masterinfo' key={index}>
                  <Text>{item.Masterinfo}</Text>
                </View>
                <View hidden='{{item.numtitle == undefined}}' className='titleintroduce' key={index}>
                  <Text hidden='{{item.numtitle == undefined}}' className='numtitleinfo'>{item.numtitle}</Text>
                  <Image hidden='{{item.numtitletourl == undefined}}' className='numtitleurl' src={item.numtitletourl}></Image>
                </View>
                <View className='titleintroduce' key={index}>
                  <Text className='numtitleinfo'>{item.numtitleinfo}</Text>
                  <Image hidden='{{item.numtitleurl == undefined}}' className='numtitleurl' src={item.numtitleurl}></Image>
                  <Text className='numtitleinfo'>{item.numone}</Text>
                  <Image hidden='{{item.numoneurl == undefined}}' className='numtitleurl' src={item.numoneurl}></Image>
                  <Text className='numtitleinfo'>{item.numoneinfo}</Text>
                </View>
                <View className='titleintroduce' key={index}>
                  <Text className='numtitleinfo'>{item.imagetitle}</Text>
                  <Image hidden='{{item.url == undefined}}' className='imageurl' src={item.url}></Image>
                  <Image hidden='{{item.imagetitleurl == undefined}}' className='imageurl' src={item.imagetitleurl}></Image>
                  <Text hidden='{{item.imageintroduce == undefined}}' className='numtitleinfo'>{item.imageintroduce}</Text>
                </View>
                <View className='titleintroduce' key={index}>
                  <Text className='numtitleinfo'>{item.numtitleone}</Text>
                  <Image hidden='{{item.numtitleoneurl == undefined}}' className='imageurlone' src={item.numtitleoneurl}></Image>
                  <Text className='numtitleinfo'>{item.numtitleinfoone}</Text>
                  <Image hidden='{{item.numtitleinfooneurl == undefined}}' className='imageurlone' src={item.numtitleinfooneurl}></Image>
                  <Text className='numtitleinfo'>{item.numtitleinfoonea}</Text>
                  <Image hidden='{{item.numtitleinfooneaurl == undefined}}' className='imageurlone' src={item.numtitleinfooneaurl}></Image>
                  <Text className='numtitleinfo'>{item.numtitleinfooneb}</Text>
                  <Image hidden='{{item.numtitleinfooneburl == undefined}}' className='imageurlone' src={item.numtitleinfooneburl}></Image>
                  <Text className='numtitleinfo'>{item.Blank}</Text>
                </View>
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}
