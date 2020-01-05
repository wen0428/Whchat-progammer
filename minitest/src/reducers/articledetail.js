import { ARTICLE } from '../constants/counter'

const INITIAL_STATE = [
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557993942773-57f3cfde-3a74-4aa0-9eab-7a671e5a5492.jpeg',
    title: 'Make Up，我也是有原则的人',
    introduce: '竹林一贤 flutter/Go/k8s',
    theme: '好的app该如何设计',
    id: '55cd843d60b203b0519307',
    author: '竹林一贤',
    category: 'dart设计/Go/k8s',
    paragraph: '我们根据全栈人员在不同学习阶段的不同阅读需要，定制了属于程序员的专属书架，并提供了一些专业以外的书籍，适合各个阶段的程序员阅读和自我学习。<br />凡在编程阅读空间书架上展示的图书，在线的“IT学习空间”中均有陈列，各位空间站友们可以在线上阅读图书的相关内容后，线下来空间阅读学习。<br />编程阅读空间成员大部分是在校大学生，成员文库里收录了他们在阅读空间里成长过程中的编程技术心得及读各类书籍后的所想所感。<br />',
  },
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557992166813-d1ded18e-eca3-417c-9d7a-4b0f78d71deb.jpeg',
    title: 'Make Up，我也是有原则的人',
    introduce: '竹林一贤 flutter/Go/k8s',
    theme: '好的app该如何设计',
    id: '5597a05ae4b08a686ce56f',
    author: '竹林一贤',
    category: 'flutter设计/Go/k8s',
    paragraph: '我们根据全栈人员在不同学习阶段的不同阅读需要，定制了属于程序员的专属书架，并提供了一些专业以外的书籍，适合各个阶段的程序员阅读和自我学习。<br />凡在编程阅读空间书架上展示的图书，在线的“IT学习空间”中均有陈列，各位空间站友们可以在线上阅读图书的相关内容后，线下来空间阅读学习。<br />编程阅读空间成员大部分是在校大学生，成员文库里收录了他们在阅读空间里成长过程中的编程技术心得及读各类书籍后的所想所感。<br />',
  },
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/png/158634/1561973682316-c91ab03c-3666-4920-b2e5-4914828fbfd0.png',
    title: 'Make Up，思维的提升，转换角度',
    introduce: '竹林一贤 react native/Go/k8s',
    theme: '好的app该如何设计',
    id: '5597a063e4b08a686ce570',
    author: '竹林一贤',
    category: '游戏设计/Go/k8s',
    paragraph: '我们根据全栈人员在不同学习阶段的不同阅读需要，定制了属于程序员的专属书架，并提供了一些专业以外的书籍，适合各个阶段的程序员阅读和自我学习。<br />凡在编程阅读空间书架上展示的图书，在线的“IT学习空间”中均有陈列，各位空间站友们可以在线上阅读图书的相关内容后，线下来空间阅读学习。<br />编程阅读空间成员大部分是在校大学生，成员文库里收录了他们在阅读空间里成长过程中的编程技术心得及读各类书籍后的所想所感。<br />',
  },
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557993942773-57f3cfde-3a74-4aa0-9eab-7a671e5a5492.jpeg',
    title: 'Make Up，我也是有原则的人',
    introduce: '竹林一贤 flutter/Go/k8s',
    theme: '好的app该如何设计',
    id: '594a2be4fe88c2006aa073',
    author: '竹林一贤',
    category: 'dart设计/Go/k8s',
    paragraph: '我们根据全栈人员在不同学习阶段的不同阅读需要，定制了属于程序员的专属书架，并提供了一些专业以外的书籍，适合各个阶段的程序员阅读和自我学习。<br />凡在编程阅读空间书架上展示的图书，在线的“IT学习空间”中均有陈列，各位空间站友们可以在线上阅读图书的相关内容后，线下来空间阅读学习。<br />编程阅读空间成员大部分是在校大学生，成员文库里收录了他们在阅读空间里成长过程中的编程技术心得及读各类书籍后的所想所感。<br />',
  },
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/jpeg/158634/1557992166813-d1ded18e-eca3-417c-9d7a-4b0f78d71deb.jpeg',
    title: 'Make Up，我也是有原则的人',
    introduce: '竹林一贤 flutter/Go/k8s',
    theme: '好的app该如何设计',
    id: '5562b415e4b00c57d9b94ac8',
    author: '竹林一贤',
    category: 'flutter设计/Go/k8s',
    paragraph: '我们根据全栈人员在不同学习阶段的不同阅读需要，定制了属于程序员的专属书架，并提供了一些专业以外的书籍，适合各个阶段的程序员阅读和自我学习。<br />凡在编程阅读空间书架上展示的图书，在线的“IT学习空间”中均有陈列，各位空间站友们可以在线上阅读图书的相关内容后，线下来空间阅读学习。<br />编程阅读空间成员大部分是在校大学生，成员文库里收录了他们在阅读空间里成长过程中的编程技术心得及读各类书籍后的所想所感。<br />',
  },
  {
    url: 'https://cdn.nlark.com/yuque/0/2019/png/158634/1561973682316-c91ab03c-3666-4920-b2e5-4914828fbfd0.png',
    title: 'Make Up，思维的提升，转换角度',
    introduce: '竹林一贤 react native/Go/k8s',
    theme: '好的app该如何设计',
    id: '55c1748160b28fd99e49',
    author: '竹林一贤',
    category: '游戏设计/Go/k8s',
    paragraph: '我们根据全栈人员在不同学习阶段的不同阅读需要，定制了属于程序员的专属书架，并提供了一些专业以外的书籍，适合各个阶段的程序员阅读和自我学习。<br />凡在编程阅读空间书架上展示的图书，在线的“IT学习空间”中均有陈列，各位空间站友们可以在线上阅读图书的相关内容后，线下来空间阅读学习。<br />编程阅读空间成员大部分是在校大学生，成员文库里收录了他们在阅读空间里成长过程中的编程技术心得及读各类书籍后的所想所感。<br />',
  }
]

export default function articledetail (state = INITIAL_STATE, action){
  switch(action.type){
    case ARTICLE:
      return{
        ...state
      }
    default:
      return state
  }
}
