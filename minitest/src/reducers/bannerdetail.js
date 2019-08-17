import { BANNER } from '../constants/counter'

const INIT_STATE = [
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1561973576702-c1379944-afa7-4f94-8cf5-1a8ae7dc5c42.jpeg?x-oss-process=image/resize,w_746',
    title: '从黑客攻防到入门精通了',
    introduce: '竹林一贤 flutter/Go/k8s',
    id: '5597a05ae4b08a686ce56f',
    author: '竹林一贤1',
  },
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/png/158634/1561974024734-024f4c75-74c0-41d8-86d1-fc4ba6a79286.png?x-oss-process=image/resize,w_746',
    title: 'Make Up，我也是有原则的人',
    introduce: '竹林一贤 flutter/Go/k8s',
    id: '5597a05ae4b08a686ce56',
    author: '竹林一贤2',
  },
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/png/158634/1561973682316-c91ab03c-3666-4920-b2e5-4914828fbfd0.png',
    title: 'Make Up，思维的提升',
    introduce: '竹林一贤 flutter/Go/k8s',
    id: '5597a05ae4b08a686ce5',
    author: '竹林一贤3',
  },
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1561973576702-c1379944-afa7-4f94-8cf5-1a8ae7dc5c42.jpeg?x-oss-process=image/resize,w_746',
    title: '从黑客攻防到入门精通了',
    introduce: '竹林一贤 flutter/Go/k8s',
    id: '5597a05ae4b08a686ce',
    author: '竹林一贤4',
  },
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/png/158634/1561974024734-024f4c75-74c0-41d8-86d1-fc4ba6a79286.png?x-oss-process=image/resize,w_746',
    title: 'Make Up，我也是有原则的人',
    introduce: '竹林一贤 flutter/Go/k8s',
    id: '5597a05ae4b08a686ce',
    author: '竹林一贤5',
  },
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/png/158634/1561973682316-c91ab03c-3666-4920-b2e5-4914828fbfd0.png',
    title: 'Make Up，思维的提升',
    introduce: '竹林一贤 flutter/Go/k8s',
    id: '5597a05ae4b08a686',
    author: '竹林一贤6',
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
