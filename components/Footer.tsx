import React, { useEffect, useState } from 'react';
import styles from '../styles/Footer.module.css';
// import { useHistory } from 'react-router';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_up}>
        <a href="/exd/list">XDRACO Operation Policy</a>
        <a href="/exd/list">MIR4 Terms of Service</a>
      </div>
      <div className={styles.footer_down}>
        <p className={styles.copyright}>{/* <img src="/img/wemade.png" className={styles.wemade} /> */}© Wemade Co., Ltd. All rights reserved.</p>
        <p className={styles.powered}>Powered on WEMIX</p>
      </div>
    </div>
  );
}

export default Footer;
