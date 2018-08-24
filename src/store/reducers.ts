import { combineReducers, Reducer } from 'redux';
import AppStore from './interfaces';
import messages from './messages/reducer';

export default combineReducers({ messages }) as Reducer<AppStore>;
