import { MEMBERSWIPER } from '../constants/counter'

const INIT_STATE = [
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/png/158634/1561974024734-024f4c75-74c0-41d8-86d1-fc4ba6a79286.png?x-oss-process=image/resize,w_746',
    title: '\r思而不学则怠，学而不思则罔。多维度思考，善于倾听'
  },
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1561973730645-f0735aa1-701f-40a4-8aba-6c7187cc6488.jpeg?x-oss-process=image/resize,w_746',
    title: '  Make,多维度思考，善于倾听 '
  },
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/png/158634/1561973682316-c91ab03c-3666-4920-b2e5-4914828fbfd0.png',
    title: '  Make, 思而不学则怠，学而不思则罔'
  },
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1561973576702-c1379944-afa7-4f94-8cf5-1a8ae7dc5c42.jpeg?x-oss-process=image/resize,w_746',
    title: '  Make,学而不思则罔。多维度思考 '
  }
]

export default function memberswiperdetail (state = INIT_STATE, action) {
  switch (action.type) {
    case MEMBERSWIPER:
      return{
        ...state
      }
    default:
      return state
  }
}
