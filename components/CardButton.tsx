import React, { useEffect, useState } from 'react';
import styles from '../styles/CardButton.module.css';
// import { useHistory } from 'react-router';

function CardButton(props) {
  return (
    <div className={styles.wrap_button}>
      <button data-v-a4e16890="" type="button" className={styles.btn_price_exd}>
        <dl data-v-2bb5b5f8="" data-v-a4e16890="" className={styles.price}>
          <dt data-v-2bb5b5f8="" style={{ display: 'none' }}>
            Price
          </dt>
          <dd data-v-2bb5b5f8="">
            <strong data-v-2bb5b5f8="" className={styles.add_inside}>
              799
              <small data-v-2bb5b5f8=""></small>
            </strong>
          </dd>
          <dd data-v-2bb5b5f8="" className={styles.us_dollar}>
            10,637
            <small data-v-2bb5b5f8="">.43</small>
          </dd>
        </dl>
      </button>
    </div>
  );
}

export default CardButton;
