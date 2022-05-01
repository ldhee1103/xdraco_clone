import React, { useEffect, useState } from 'react';
import styles from '../styles/Card.module.css';
// import { useHistory } from 'react-router';

function Card(props) {
  const data = props.Item;
  return (
    <div data-v-a4e16890="" aria-disabled-flip="true" data-item-type="item-grade-4" className={styles.card}>
      <div className={styles.card_inner}>
        <div className={styles.card_layer_front}>
          <span className={styles.by_what_draco}></span>
          <div className={styles.wrap_item}>
            <img
              src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Equip/Item_Equip_Accessory_01/Pcc_Accessory_Ring_004.png"
              width="140"
              alt=""
              className={styles.item}
            />
          </div>
          <dl className={styles.power_score}>
            <dt>score</dt> <dd>4,428</dd>
          </dl>
          <div className={styles.wrap_badge}>
            <dl className={styles.badge_tier}>
              <dt>Tier</dt>
              <dd>I</dd>
            </dl>
            <dl className={styles.badge}>
              <dt>Depth</dt>
              <dd>+4</dd>
            </dl>
          </div>
          <div className={styles.wrap_name}>
            <dl className={styles.name}>
              <dt>Item Name</dt>
              {/* <dd className={styles.item_name}>Heavenly Connection Ring</dd> */}
              <dd className={styles.item_name}>{data}</dd>
              <dt>Item Type</dt>
              <dd className={styles.item_type}>Ring</dd>
              <dt>Unique Number</dt>
            </dl>
          </div>
          <div className={styles.wrap_thumb}>
            <div aria-enabled="true" className={`${styles.thumb} ${styles.warrior}`}>
              Warrior
            </div>
            <div aria-enabled="true" className={`${styles.thumb} ${styles.sorcerer}`}>
              Sorcerer
            </div>
            <div aria-enabled="true" className={`${styles.thumb} ${styles.taoist}`}>
              Taoist
            </div>
            <div aria-enabled="true" className={`${styles.thumb} ${styles.lancer}`}>
              Lancer
            </div>
            <div aria-enabled="true" className={`${styles.thumb} ${styles.arbalist}`}>
              Arbalist
            </div>
          </div>
        </div>{' '}
        <div id="cardLayerBack" className={styles.card_layer_back}>
          <div className={styles.back_inner}>
            <div className={styles.wrap_property}>
              {' '}
              <dl className={`${styles.property} ${styles.power_score}`}>
                <dt>Power Score</dt> <dd>1,351</dd>
              </dl>{' '}
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
