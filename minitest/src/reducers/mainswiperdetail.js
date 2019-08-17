import { MAINSWIPER } from '../constants/counter'

const INIT_STATE = [
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1561973730645-f0735aa1-701f-40a4-8aba-6c7187cc6488.jpeg?x-oss-process=image/resize,w_746',
    title: '关于Go的Channel想法',
    introduce: '竹林一贤 flutter/Go/k8s',
  },
]

export default function mainswiperdetail (state = INIT_STATE, action) {
  switch (action.type) {
    case MAINSWIPER:
      return{
        ...state
      }
    default:
      return state
  }
}
