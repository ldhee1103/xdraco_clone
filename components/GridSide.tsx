import React, { useEffect, useState } from 'react';
import styles from '../styles/GridSide.module.css';
// import { useHistory } from 'react-router';

function GridSide(props) {
  return (
    <div className={styles.grid_side}>
      <aside className={styles.sidebar}>
        <div className={styles.account_info}>
          <div className={styles.wrap_signin}>
            <div className={styles.info_char}>
              <div className={styles.char}>
                <div className={styles.wrap_thumb_profile}>
                  <span className={styles.base_profile}></span>
                </div>
              </div>
            </div>
            <span className={styles.desc}>log in to XDRACO with WEMIX WALLET</span>
            <div className={styles.wrap_button}>
              <button type="button" className={styles.button_login}>
                Login
              </button>
            </div>
          </div>
        </div>
        <div className={styles.contact_us}>
          <a href="https://cs.mir4global.com/customer?category=191" target="_blank" className={styles.link_contact_us}>
            Customer Service
          </a>
        </div>
      </aside>
    </div>
  );
}

export default GridSide;
