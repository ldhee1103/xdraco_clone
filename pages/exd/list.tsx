import React from 'react';
import Nav from '../../components/Nav';
import styles from '../../styles/List.module.css';

function list() {
  return (
    <div className={styles.list}>
      <Nav />
      <div className={styles.exd_list_top}></div>
      <div className={styles.large}>regargh</div>
    </div>
  );
}

export default list;
