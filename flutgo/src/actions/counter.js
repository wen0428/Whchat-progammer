import {
  ADD,
  MINUS,
  BANNER,
  FIND,
  SIGHT,
  SHOP,
  SHOPDESIGN,
  SPACEDESIGN,
  ICONINFO,
  GOURMET,
  TABSLIST,
  GUIDE,
  COMMEND,
} from '../constants/counter'

export const add = () => {
  return {
    type: ADD
  }
}

export const minus = () => {
  return {
    type: MINUS
  }
}

export const bannerswiper = ( newBannerswiper ={
  noteId: 88886666,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: BANNER,
    payload: newBannerswiper
  }
}

export const finds = ( newFind ={
  noteId: 88886668,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: FIND,
    payload: newFind
  }
}

export const sights = ( newSight ={
  noteId: 88886686,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: SIGHT,
    payload: newSight
  }
}

export const shop = ( newShop ={
  noteId: 88886886,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: SHOP,
    payload: newShop
  }
}

export const shopdesign = ( newShopDesign ={
  noteId: 88886686,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: SHOPDESIGN,
    payload: newShopDesign
  }
}

export const spacedesign = ( newSpaceDesign ={
  noteId: 88888686,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: SPACEDESIGN,
    payload: newSpaceDesign
  }
}

export const iconinfo = ( newIconinfo ={
  noteId: 88888685,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: ICONINFO,
    payload: newIconinfo
  }
}

export const gourmet = ( newGourmet ={
  noteId: 88888685,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: GOURMET,
    payload: newGourmet
  }
}

export const tabslist = ( newTablist ={
  noteId: 8888868512,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: TABSLIST,
    payload: newTablist
  }
}

export const guide = ( newGuide ={
  noteId: 8888868512,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: GUIDE,
    payload: newGuide
  }
}

export const commend = ( newCommend ={
  noteId: 88888685125,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: COMMEND,
    payload: newCommend
  }
}

// 异步的action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
