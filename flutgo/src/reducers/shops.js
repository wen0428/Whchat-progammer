import { SHOP } from '../constants/counter'

const INITIAL_STATE = [
  {
    url: 'https://youimg1.c-ctrip.com/target/100s0p000000fs5nbC0D5.jpg',
    id: '111111111111111111',
    title: '姆明天猫官方旗舰店',
    content: '了解 9 折优惠详情'
  },
  {
    url: 'http://1872.img.pp.sohu.com.cn/images/blog/2010/8/26/11/28/12b5fb61df5g215.jpg',
    id: '131121191111111111',
    title: 'LASANIC 商场',
    content: '了解 9 折优惠详情'
  },
  {
    url: 'https://youimg1.c-ctrip.com/target/10090g00000087mp9FC15.jpg',
    id: '120111111111111111',
    title: 'Stockmann 商场',
    content: '了解 9 折优惠详情'
  },
]

export default function shops (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOP:
    return{
      ...state
    }
    default:
      return state
  }
}
