import { iMessageStore, TypeKeys } from './interfaces';

const initialState:iMessageStore = {
  msg: 'init message'
};

export default ( state:iMessageStore = initialState, action = null) => {
  const { payload } = action;
  switch(action.type) {
    case TypeKeys.CLEAR_MESSAGE :
      return { msg: '' }
    case TypeKeys.SET_MESSAGE :
      return { msg: payload }
    default :
      return state;
  }
}