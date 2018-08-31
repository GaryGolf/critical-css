import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

export default class HomePage extends React.PureComponent<Props, null> {
  
  render() {
    return (
      <div>
        <h1> Home Page </h1>
        <nav>
          <Link to="/about">About</Link>
          <br/>
          <Link to="/message">Message</Link>
        </nav>
      </div>
    );
  }
}
