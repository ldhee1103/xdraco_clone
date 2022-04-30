import React, { useEffect, useState } from 'react';
import styles from '../styles/RecommendItemRank.module.css';
// import { useHistory } from 'react-router';

function RecommendItemRank(props) {
  //   props 데이터 조회 후 각 값에 세팅
  return (
    <li className={styles.item_recommended}>
      <em className={styles.rank_badge}>1st</em>
      <div className={styles.card}>
        <div className={styles.card_inner}>
          <div className={styles.card_layout_front}>
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
                <dd className={styles.item_name}>Heavenly Connection Ring</dd>
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
          </div>
          <div className={styles.card_layout_back}>
            <div className={styles.back_inner}>
              <div className={styles.wrap_property}>
                <dl className={`${styles.property} ${styles.power_score}`}>
                  <dt>Power Score</dt> <dd>4,428</dd>
                </dl>
                <dl className={styles.property}>
                  <dt>PHYS ATK</dt> <dd>507</dd>
                </dl>
                <dl className={styles.property}>
                  <dt>Spell ATK</dt> <dd>507</dd>
                </dl>
                <dl className={styles.property}>
                  <dt>Boss ATK DMG Boost</dt> <dd>69.2%</dd>
                </dl>
                <dl className={styles.property}>
                  <dt>All ATK DMG Boost</dt> <dd>16.0%</dd>
                </dl>
                <dl className={styles.property}>
                  <dt>All DMG Reduction</dt> <dd>16.0%</dd>
                </dl>
              </div>
              <dl className={styles.no_option}>
                <dt></dt>
                <dd>Humans are the connections between heaven and earth. This draws on the pure energies of heaven and earth and channels it to its owner.</dd>
              </dl>
              <dl className={styles.source} style={{ display: 'none' }}>
                <dt>From</dt>
                <dd>
                  <a href="/exd/item/732878101274558464" className="">
                    Go Detail
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrap_button}>
        <a data-v-a4e16890="" href="/exd/productId" className={styles.btn_price_exd} aria-disabled="true">
          <dl data-v-2bb5b5f8="" data-v-a4e16890="" className={styles.price}>
            <dt data-v-2bb5b5f8="" style={{ display: 'none' }}>
              Price
            </dt>
            <dd data-v-2bb5b5f8="">
              <strong data-v-2bb5b5f8="" className={styles.add_inside}>
                1,200
                <small data-v-2bb5b5f8=""></small>
              </strong>
            </dd>
          </dl>
          <div data-v-a4e16890="" className={styles.info}>
            <img data-v-24779a1e="" data-v-a4e16890="" src="https://www.xdraco.com/static/img/profile-taoist.5e991405.webp" width="24" alt="taoist" />
            <strong data-v-a4e16890="" className={styles.nick}>
              壞特s
            </strong>
          </div>
        </a>
      </div>
      <div className={styles.data_complete_stake}>
        <span data-v-a4e16890="" className={styles.date}>
          Apr 1, 2022 8:19 PM
        </span>
      </div>
    </li>
  );
}

export default RecommendItemRank;
