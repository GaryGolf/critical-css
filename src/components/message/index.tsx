import * as React from 'react';
import AppStore from 'store/interfaces';
const { connect } = require('react-redux');

interface Props {
  msg?: string;
}

@connect(
  (store:AppStore) => ({
    msg: store.messages.msg
  })
)
export default class Messages extends React.PureComponent<Props, null> {
  render() {
    return <h4>{this.props.msg}</h4>
  }
}