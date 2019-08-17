import { combineReducers } from 'redux'
import counter from './counter'
import literaturedetail from './literaturedetail'
import articledetail from './articledetail'
import guideimprove from './guideimprove'
import bannerdetail from './bannerdetail'
import mainswiperdetail from './mainswiperdetail'
import memberswiperdetail from './memberswiperdetail'

export default combineReducers({
  counter, literaturedetail, articledetail, guideimprove, bannerdetail, mainswiperdetail, memberswiperdetail
})
