import { ADD, MINUS,ASYNCADD,MUL,DIV } from '../constants/counter'
//import { asyncadd } from '../actions/counter';

const INITIAL_STATE = {
  num: 168
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 2
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       }
     case ASYNCADD:
        return {
          ...state,
          num:state.num *3
        }
       case MUL:
      return {
        ...state,
        num: state.num * 2
      }
     case DIV:
       return {
         ...state,
         num: state.num / 2
       }
     default:
       return state
  }
}
