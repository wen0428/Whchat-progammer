import { LITERATURE } from '../constants/counter'

const INIT_STATE = [
  {
    title: '| 新手入门',
    moreUrl: '/pages/depth/index',
    name:[
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1556972151403-6364b95c-0b31-4fce-893b-1c92b8e9e09f.jpeg',
        bookname: '计算机组成与结构',
        id: '55cd843d60b203b0519307a9',
        author: 'Day Ralio',
        introduce: 'Day Ralio出生在纽约长岛一个普通中产阶级家庭，26岁在公寓内创办了桥水。经过42年的发展，桥水位列美国私营公司第42位。美国杂志称他为‘投资界的史蒂芬乔布斯’。',
      },
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1556972227056-a9036f62-ac09-44b6-8c4d-51424c8478b7.jpeg',
        bookname: '计算机组成原理',
        id: '5597a05ae4b08a686ce56f6f',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过多年的发展，入选《时代周刊》世界最具影响力的人物。',
      },
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1556972198080-d4e182f5-69dc-4349-9422-9c17b2f5e258.jpeg',
        bookname: '离散数学',
        id: '5597a063e4b08a686ce57030',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过40年的发展，入选《时代周刊》世界最具影响力的人物。',
      },
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557994352617-f557f61c-fbdc-4398-99e9-3112c8a8e8e0.jpeg',
        bookname: '线性代数',
        id: '594a2be4fe88c2006aa07313',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过42年的发展，入选《时代周刊》世界最具影响力的人物。',
      },
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557994886641-993dfdc2-9dfd-4ea4-b9cc-dcfcd1ead8fc.jpeg?x-oss-process=image/resize,w_746',
        bookname: '概率论',
        id: '5562b415e4b00c57d9b94ac8',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过42年的发展，入选《时代周刊》世界最具影响力的人物。',
      },
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557994352533-f1d953c0-5de0-4a16-b898-5a0ed333837d.jpeg?x-oss-process=image/resize,w_746',
        bookname: '代数数论',
        id: '55c1748160b28fd99e49ea68',
        noteId: '1',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过42年的发展，入选《时代周刊》世界最具影响力的人物。',
      }
    ]
  },
  {
    title: '| 进阶提高',
    moreUrl: '/pages/depth/index',
    name:[
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557994352533-f1d953c0-5de0-4a16-b898-5a0ed333837d.jpeg?x-oss-process=image/resize,w_746',
        bookname: '计算机组成与数据结构',
        id: '55cd843d60b203b0519307a',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过42年的发展，入选《时代周刊》世界最具影响力的人物。',
      },
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557994352617-f557f61c-fbdc-4398-99e9-3112c8a8e8e0.jpeg',
        bookname: '黑客攻防',
        id: '5597a05ae4b08a686ce56f6',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过42年的发展，入选《时代周刊》世界最具影响力的人物。',
      },
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557994886641-993dfdc2-9dfd-4ea4-b9cc-dcfcd1ead8fc.jpeg?x-oss-process=image/resize,w_746',
        bookname: '移动机器人原理设计',
        id: '5597a063e4b08a686ce5703',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过42年的发展，入选《时代周刊》世界最具影响力的人物。',
      },
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1556972198080-d4e182f5-69dc-4349-9422-9c17b2f5e258.jpeg',
        bookname: '离散数学',
        id: '594a2be4fe88c2006aa0731',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过42年的发展，入选《时代周刊》世界最具影响力的人物。',
      },
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557994352617-f557f61c-fbdc-4398-99e9-3112c8a8e8e0.jpeg',
        bookname: '线性代数',
        id: '5562b415e4b00c57d9b94ac',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过42年的发展，入选《时代周刊》世界最具影响力的人物。',
      },
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557994886641-993dfdc2-9dfd-4ea4-b9cc-dcfcd1ead8fc.jpeg?x-oss-process=image/resize,w_746',
        bookname: '概率论',
        id: '55c1748160b28fd99e49ea6',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过42年的发展，入选《时代周刊》世界最具影响力的人物。',
      }
    ]
  },
  {
    title: '| 深入探索',
    moreUrl: '/pages/depth/index',
    name:[
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557994886641-993dfdc2-9dfd-4ea4-b9cc-dcfcd1ead8fc.jpeg?x-oss-process=image/resize,w_746',
        bookname: '计算机组成与数据结构',
        id: '55cd843d60b203b0519307',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过42年的发展，入选《时代周刊》世界最具影响力的人物。',
      },
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1556972198080-d4e182f5-69dc-4349-9422-9c17b2f5e258.jpeg',
        bookname: '离散数学',
        id: '5597a05ae4b08a686ce56f',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过42年的发展，入选《时代周刊》世界最具影响力的人物。',
      },
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557994352617-f557f61c-fbdc-4398-99e9-3112c8a8e8e0.jpeg',
        bookname: 'Oracle SQL',
        id: '5597a063e4b08a686ce570',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过42年的发展，入选《时代周刊》世界最具影响力的人物。',
      },
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557994886641-993dfdc2-9dfd-4ea4-b9cc-dcfcd1ead8fc.jpeg?x-oss-process=image/resize,w_746',
        bookname: '算法导论',
        id: '594a2be4fe88c2006aa073',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过42年的发展，入选《时代周刊》世界最具影响力的人物。',
      },
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1556972227056-a9036f62-ac09-44b6-8c4d-51424c8478b7.jpeg',
        bookname: 'TCP/IP',
        id: '5562b415e4b00c57d9b94a',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过42年的发展，入选《时代周刊》世界最具影响力的人物。',
      },
      {
        url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1556972198080-d4e182f5-69dc-4349-9422-9c17b2f5e258.jpeg',
        bookname: '计算机网络',
        id: '55c1748160b28fd99e49ea',
        author: 'Day Ralio',
        introduce: 'Ray Dalio经过42年的发展，入选《时代周刊》世界最具影响力的人物。',
      }
    ]
  },
]


export default function literaturedetail (state = INIT_STATE, action) {
  switch (action.type) {
    case LITERATURE:
      return{
        ...state
      }
    default:
      return state
  }
}
