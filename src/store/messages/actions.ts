import { TypeKeys } from './interfaces';

export const clearMessage = () => ({ type: TypeKeys.CLEAR_MESSAGE });
export const setMessage = (payload: string) => ({ type: TypeKeys.SET_MESSAGE, payload });