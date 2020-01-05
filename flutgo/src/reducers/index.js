import { combineReducers } from 'redux'
import counter from './counter'
import bannerdetail from './bannerdetail'
import find from './find'
import sights from './sights'
import shops from './shops'
import shopdesigns from './shopdesigns'
import spacedesigns from './spacedesigns'
import iconinfor from './iconinfor'
import gourmets from './gourmets'
import tabslists from './tabslists'
import guides from './guides'
import commends from './commends'

export default combineReducers({
  counter, 
  bannerdetail, 
  find, 
  sights, 
  shops, 
  shopdesigns, 
  spacedesigns, 
  iconinfor, 
  gourmets,
  tabslists,
  guides,
  commends
})
