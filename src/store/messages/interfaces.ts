export interface iMessageStore {
  msg:string;
}

export enum TypeKeys {
  SET_MESSAGE = 'SET_MESSAGE',
  CLEAR_MESSAGE = 'CLEAR_MESSAGE'
}