import { ICONINFO } from '../constants/counter'

const INITIAL_STATE = [
  {
    url: '/pages/main-gourmet/index?iconid=1231231',
    iconid: '1231231',
    value: 'camera',
    content: '景色',
    number: 0,
    size: '30',
    color: '#8c8c8c'
  },
  {
    url: '/pages/main-gourmet/index?iconid=1231232',
    iconid: '1231232',
    value: 'shopping-bag',
    content: '购物',
    number: 0,
    size: '30',
    color: '#8c8c8c'
  },
  {
    url: '/pages/main-gourmet/index?iconid=1231233',
    iconid: '1231233',
    value: 'tag',
    content: '美食',
    number: 0,
    size: '30',
    color: '#8c8c8c'
  },
  {
    url: '/pages/main-place/index?iconid=1231234',
    iconid: '1231234',
    value: 'filter',
    content: '其他',
    number: 2,
    size: '30',
    color: '#8c8c8c'
  },
  {
    url: '/pages/main-cn-gourmet/index?iconid=1231235',
    iconid: '1231235',
    value: 'star',
    content: '中文旅游',
    number: 0,
    size: '30',
    color: '#8c8c8c'
  },
  {
    url: '/pages/main-translation/index?iconid=1231236',
    iconid: '1231236',
    value: 'link',
    content: '翻译',
    number: 0,
    size: '30',
    color: '#8c8c8c'
  },
  {
    url: '/pages/main-guide/index?iconid=1231237',
    iconid: '1231237',
    value: 'eye',
    content: '指南',
    number: 0,
    size: '30',
    color: '#8c8c8c'
  },
  {
    url: '/pages/main-place/index?iconid=1231238',
    iconid: '1231238',
    value: 'help',
    content: '求助',
    number: 1,
    onClick: 'this.hide.bind(this)',
    size: '30',
    color: '#8c8c8c'
  },
]

export default function iconinfor (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ICONINFO:
    return{
      ...state
    }
    default:
      return state
  }
}
