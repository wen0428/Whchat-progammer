import { BANNER } from '../constants/counter'

const INIT_STATE = [
  {
    url: 'https://travelnews.aiguemarine-paris.com/wp-content/uploads/2015/05/wKgB3FCHt3KAC5WhAAgvzn6QSaY72.jpeg',
    title: '从黑客攻防到入门精通了',
    introduce: '竹林一贤 flutter/Go/k8s',
    id: '5597a05ae4b08a686ce56f',
    author: '竹林一贤1',
  },
  {
    url: 'https://youimg1.c-ctrip.com/target/100j12000000s5z17A583.jpg',
    title: 'Make Up，我也是有原则的人',
    introduce: '竹林一贤 flutter/Go/k8s',
    id: '5597a05ae4b08a686ce56',
    author: '竹林一贤2',
  },
  {
    url: 'http://p1.img.cctvpic.com/photoworkspace/2017/04/06/2017040610215225568.jpg',
    title: 'Make Up，思维的提升',
    introduce: '竹林一贤 flutter/Go/k8s',
    id: '5597a05ae4b08a686ce5',
    author: '竹林一贤3',
  },
]

export default function bannerdetail (state = INIT_STATE, action) {
  switch (action.type) {
    case BANNER:
      return{
        ...state
      }
    default:
      return state
  }
}