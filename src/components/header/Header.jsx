import React from 'react';
import styles from './styles.scss';

export default class Header extends React.Component {
  render(){
    return (
      <div className={styles.header}>
        <h1>Ben Williams</h1>
      </div>
    )
  }
}