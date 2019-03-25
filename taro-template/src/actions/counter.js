import {
  ADD,
  MINUS,
  MUL ,
  DIV,  
  IMAGE0
} from '../constants/counter'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}
export const mul = () => {
  return {
    type: MUL
  }
}
export const div  = () => {
  return {
    type: DIV
  }
}
export const img0  = () => {
  return {
    type: IMAGE0
  }
}

// 异步的action
 export  function asyncadd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(mul())
    }, 1000)
  }
}
/*async function execute() {
  current('start')
  current(await login())
  current('end')
} */
