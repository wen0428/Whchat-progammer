import {
  ADD,
  MINUS,
  LITERATURE,
  ARTICLE,
  GAIN,
  GUIDEIMPROVE,
  BANNER,
  MAINSWIPER,
  MEMBERSWIPER,
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

export const books = ( newBook ={
  noteId: 10000000,
  customerId: 34,
  createdBy: 1,
  created: 1510316194,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: LITERATURE,
    payload: newBook
  }
}

export const articles = ( newArticle ={
  noteId: 88888888,
  customerId: 8,
  createdBy: 8,
  created: 15128295028,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: ARTICLE,
    payload: newArticle
  }
}

export const gains = ( newGain ={
  noteId: 88888888,
  customerId: 8,
  createdBy: 8,
  created: 15128295028,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: GAIN,
    payload: newGain
  }
}

export const guidesimprove = ( newGuideimprove ={
  noteId: 88888666,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: GUIDEIMPROVE,
    payload: newGuideimprove
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

export const mainswiper = ( newMainswiper ={
  noteId: 88866666,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: MAINSWIPER,
    payload: newMainswiper
  }
}

export const memberswiper = ( newMemberswiper ={
  noteId: 88666666,
  note: 'ADDED A NEW NOTE. NEED TO ADD TO STATE'
}) => {
  return {
    type: MEMBERSWIPER,
    payload: newMemberswiper
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
