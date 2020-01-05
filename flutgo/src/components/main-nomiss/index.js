import Taro, { Component } from '@tarojs/taro'
import { View, Text, Navigator, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { spacedesign, shopdegisn, gourmet } from '../../actions/counter'
import './index.scss'

@connect(({ spacedesigns, shopdesigns, gourmets }) => ({
  spacedesigns, shopdesigns, gourmets
}), (dispatch) => ({
  spacedesign() {
    dispatch(spacedesign())
  },
  shopdegisn() {
    dispatch(shopdegisn())
  },
  gourmet() {
    dispatch(gourmet())
  }
}))

export default class Index extends Component {
  constructor () {
    super(...arguments)
  }

  render () {
    const space = this.props.spacedesigns
    const shop = this.props.shopdesigns
    const gour = this.props.gourmets

    return (
      <View className='index'>
        <View className='nomissback'><Text className='nomiss'>不可错过</Text></View>
        <View className='at-row at-row--wrap'>
          <View className='at-col at-col-6'>
            <Navigator url='/pages/main-icon-introduce/index?id={{space[1].AmosRex.id}}'>
              <View className='sumback'>
                <Image className='imageback' src={space[1].AmosRex.url}></Image>
                <View className='titleback'>
                  <Text className='title'>{space[1].AmosRex.title}</Text>
                  <Text className='introduce'>{space[1].AmosRex.entitle}</Text>
                </View>
              </View>
            </Navigator>
          </View>
          <View className='at-col at-col-6'>
            <Navigator url='/pages/main-icon-introduce/index?id={{gour[1].StoryOldMarketHall.id}}'>
              <View className='sumback'>
                <Image className='imagebackr' src={gour[1].StoryOldMarketHall.url}></Image>
                <View className='titleback'>
                  <Text className='title'>{gour[1].StoryOldMarketHall.title}</Text>
                  <Text className='introduce'>{gour[1].StoryOldMarketHall.entitle}</Text>
                </View>
              </View>
            </Navigator>
          </View>
          <View className='at-col at-col-6'>
            <Navigator url='/pages/main-icon-introduce/index?id={{space[0].Loyly.id}}'>
              <View className='sumback'>
                <Image className='imageback' src={space[0].Loyly.url}></Image>
                <View className='titleback'>
                  <Text className='title'>{space[0].Loyly.title}</Text>
                  <Text className='introduce'>{space[0].Loyly.entitle}</Text>
                </View>
              </View>
            </Navigator>
          </View>
          <View className='at-col at-col-6'>
            <Navigator url='/pages/main-icon-introduce/index?id={{shop[1].KampGarden.id}}'>
              <View className='sumback'>
                <Image className='imagebackr' src={shop[1].KampGarden.url}></Image>
                <View className='titleback'>
                  <Text className='title'>{shop[1].KampGarden.title}</Text>
                  <Text className='introduce'>{shop[1].KampGarden.entitle}</Text>
                </View>
              </View>
            </Navigator>
          </View>
          <View className='at-col at-col-6'>
            <Navigator url='/pages/main-icon-introduce/index?id={{space[1].OodiHelsinkiCentralLibrary.id}}'>
              <View className='sumback'>
                <Image className='imageback' src={space[1].OodiHelsinkiCentralLibrary.url}></Image>
                <View className='titleback'>
                  <Text className='title'>{space[1].OodiHelsinkiCentralLibrary.title}</Text>
                  <Text className='introduce'>{space[1].OodiHelsinkiCentralLibrary.entitle}</Text>
                </View>
              </View>
            </Navigator>
          </View>
          <View className='at-col at-col-6'>
            <Navigator url='/pages/main-icon-introduce/index?id={{space[1].DesignMuseum.id}}'>
              <View className='sumback'>
                <Image className='imagebackr' src={space[1].DesignMuseum.url}></Image>
                <View className='titleback'>
                  <Text className='title'>{space[1].DesignMuseum.title}</Text>
                  <Text className='introduce'>{space[1].DesignMuseum.entitle}</Text>
                </View>
              </View>
            </Navigator>
          </View>
        </View>
      </View>
    )
  }
}
