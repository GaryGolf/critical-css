import * as React from 'react';
import * as styles from './style.css'

interface Props {};

export default class AboutPage extends React.PureComponent<Props, null> {
  render() {
    return (
      <div className={styles['about-container']}>
        <h2>About</h2>
      </div>
    )
  }
}
