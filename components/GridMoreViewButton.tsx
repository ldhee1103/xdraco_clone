import React, { useEffect, useState } from 'react';
import styles from '../styles/GridMoreViewButton.module.css';
// import { useHistory } from 'react-router';

function GridMoreViewButton(props) {
  return (
    <div className={styles.wrap_button}>
      <button type="button" className={styles.btn_viewmore}>
        VIEW MORE
      </button>
    </div>
  );
}

export default GridMoreViewButton;
