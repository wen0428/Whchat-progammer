import { TABSLIST } from '../constants/counter'

const INITIAL_STATE = [
  {
    id: '123123101',
    title: '景点',
    'listone': '建筑',
    'listtwo': '艺术',
    'listthree': '博物馆',
    'listfour': '自然'
  },
  {
    id: '123123202',
    title: '购物',
    'listone': '设计',
    'listtwo': '时尚',
    'listthree': '礼物',
    'listfour': '购物中心'
  },
  {
    id: '123123303',
    title: '美食',
    'listone': '中餐',
    'listtwo': '芬兰菜',
    'listthree': '酒吧',
    'listfour': '小吃集市'
  },
]

export default function tabslists (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TABSLIST:
    return{
      ...state
    }
    default:
      return state
  }
}
