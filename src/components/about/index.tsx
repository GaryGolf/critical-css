import * as React from 'react';
import * as styles from './style.css'

interface Props {};

export default class AboutPage extends React.PureComponent<Props, null> {
  static getStyle = () => styles.source.toString()
  render() {
    const inlineStyle = typeof window != 'undefined' ? null : (
      <style>{styles.source.toString()}</style>
    )
    return (
      <div className={styles['about-container']}>
        <h2>About this</h2>
        {inlineStyle}
      </div>
    )
  }
}
