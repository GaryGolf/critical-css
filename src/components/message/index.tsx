import * as React from 'react';
import { Dispatch } from 'redux';
import AppStore from '../../store/interfaces';
import { setMessage } from '../../store/actions'

const { connect } = require('react-redux');

interface Props {
  msg?: string;
  dispatch?: Dispatch;
}

@connect(
  (store:AppStore) => ({
    msg: store.messages.msg
  })
)
export default class Messages extends React.PureComponent<Props, null> {

  static loadData = (dispatch:Dispatch) => {
    return Promise.all([dispatch(setMessage('hello world'))]);
  }

  render() {
    return <h4>{this.props.msg}</h4>
  }
}