import { SIGHT } from '../constants/counter'

const INITIAL_STATE = [
  {
    url: 'http://img.architbang.com/201211/1353722231281818391_1.jpg',
    title: '哪些美轮美奂的图书馆',
    content: '绝对值得去探访'
  },
  {
    url: 'http://images2.tuniucdn.com/gott_resource/picture/0d491f53-e8ea-405e-b0ad-b133fec4bdb8.jpg',
    title: '俯瞰斋聊馨缘',
    content: '精彩+机场指南'
  },
  {
    url: 'http://www.paris-girafe.com/Uploads/201811/5bebe4fdbf13f.jpg',
    title: '哪些闹中取静的景点',
    content: '敬请享受寂静的声音'
  }
]

export default function sight (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGHT:
    return{
      ...state
    }
    default:
      return state
  }
}
