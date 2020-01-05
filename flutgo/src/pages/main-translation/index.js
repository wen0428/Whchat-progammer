import Taro, { Component } from '@tarojs/taro'
import { View, Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtTextarea, AtIcon, AtDivider } from 'taro-ui'

import { iconinfo } from '../../actions/counter'
import './index.scss'

@connect(({ iconinfor }) => ({
  iconinfor
}), (dispatch) => ({
  iconinfo() {
    dispatch(iconinfo())
  }
}))

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      log: '',
      camerasrc: '',
    }
  }

  componentWillMount() {
    clearInterval(this.timer, this.cameraContext)
  }

  componentDidMount() {
    this.timer = setInterval(() => this.bindfoucs)
  }

  handleChange (event) {
    console.log('event', event)
    const values = event.target.value
    this.setState({
      value: values
    })
  }

  bindfocus(event){
    const value = event.detail.value;
    this.setState({
      log: value
    })
  }

  bindlinechange(event){
    const height=event.detail.height;
    const heightRpx=event.detail.heightRpx;
    const lineCount=event.detail.lineCount;
    this.setState({
      log:'height='+height+'  |  heightRpx='+heightRpx+'  |  lineCount='+lineCount
    })
  }

  takesPhoto() {
    let that = this
    Taro.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        let tempFilePath = res && res.tempFilePaths
        console.log('拍摄成功', tempFilePath)
        that.setState({
          camerasrc: tempFilePath
        })
      },
    })
  }

  takeRecord() {
    const recorderManager = Taro.getRecorderManager()

    recorderManager.onStart(() => {
      console.log('recorder start')
    })

    recorderManager.onPause(() => {
      console.log('recorder pause')
    })

    recorderManager.onStop((res) => {
      console.log('recorder stop', res)
      const { tempFilePath } = res
      console.log('tempFilePath-resinfo', tempFilePath)
    })

    recorderManager.onFrameRecorded((res) => {
      const { frameBuffer } = res
      console.log('frameBuffer.byteLength', frameBuffer.byteLength)
    })

    const options = {
      duration: 10000,
      sampleRate: 44100,
      numberOfchannels: 1,
      encodeBitRate: 192000,
      format: 'aac',
      frameSize: 50,
    }

    recorderManager.start(options)
  }

  config = {
    navigationBarTitleText: '智能翻译'
  }

  render () {
    const id = this.$router.params.iconid
    console.log('camerasrc', this.state.camerasrc)
    let photo, tele, trash, status
    let arrlog = [], arrvalue = []
    if(id) {
      photo = <AtIcon value='camera' size='18' color='#F00'></AtIcon>
      tele = <AtIcon value='lightning-bolt' size='18' color='#F00'></AtIcon>
      trash = <AtIcon value='trash' size='18' color='#F00'></AtIcon>
      status = <AtDivider height='2' fontColor='#f3f2f2' lineColor='#f3f2f2' />
    }
    if(this.state.log != '') {
      arrlog.push(this.state.log)
    }
    if(this.state.value != '') {
      arrvalue.push(this.state.value)
    }

    return (
      <View className='index'>
        <View className='translation'>
          <View className='text'>
            <View className='cnen'>
              <View className='at-row'>
                <View className='at-col'><View className='cn'>中文</View></View>
                <View className='at-col'>
                  <View className='guideline'>
                    <View className='guidelineone'>⇀</View>
                    <View className='guidelinetwo'>↽</View>
                  </View>
                </View>
                <View className='at-col'><View className='en'>英文</View></View>
              </View>
            </View>
            <View className='divider'>{status}</View>
            <View className='contentback'>
              <AtTextarea
                count={false}
                textOverflowForbidden={false}
                value={this.state.value}
                height={300}
                maxLength={200}
                onChange={this.handleChange.bind(this)}
                placeholder='请输入要翻译的单词或者句子'
                className='textareainfo'
              />
              <View className='fix'>
                <View className='at-row'>
                  <View className='at-col'>
                    <View className='fixone' onClick={this.takesPhoto.bind(this)}>
                      <View className='photo'>{photo}</View>
                      <View className='photoinfo'>拍照</View>
                    </View>
                  </View>
                  <View className='at-col'><View className='fixtwo'>|</View></View>
                  <View className='at-col'>
                    <View className='fixthree' onLongPress={this.takeRecord.bind(this)}>
                      {tele}
                      <View className='photoinfo'>语音</View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View className="{{(value != '') ? 'buttononClick' : 'button'}} ">
              <Navigator className='nav' url="{{(value != '') ? '/pages/main-translation-info/index' : '/pages/mainplace/index'}}?array={{value}} ">
                <View className='buttoninfo'>点击翻译</View>
              </Navigator>
            </View>
            <View className='trashback'>
              <View className='at-row'>
                <View className='at-col'>
                  <View className='trash'>{trash}</View>
                </View>
                <View className='at-col'>
                  <View className='trashinfo'>清空历史记录</View>
                </View>
              </View>
            </View>
            <View className='contents'>
              {this.state.value}
            </View>
          </View>
        </View>
      </View>
    )
  }
}
