import React, { useEffect, useState } from 'react';
import styles from '../styles/GridListBar.module.css';
// import { useHistory } from 'react-router';

function GridListBar(props) {
  const [show, setShow] = useState([true, false, false]);
  const changeList = (idx) => {
    if (idx == 0) {
      setShow([true, false, false]);
    } else if (idx == 1) {
      setShow([false, true, false]);
    } else {
      setShow([false, false, true]);
    }
  };

  const ms = props.idx == 0 ? ['Top Trades', 'Recently Traded'] : ['Equippable Items', 'Trade Sealing Box', 'Mystical Piece'];
  return (
    <div className={styles.list_bar}>
      <div className={styles.exchange_list_header}>
        <div className={styles.slide_group_wrapper}>
          <div className={`${styles.slide_group_wrapper} ${styles.slide_group_contents}`}>
            {props.idx == 0 ? (
              <div className={`${styles.tabs_slider_wrapper} ${show[0] && styles.tabs_slider_tab1} ${show[1] && styles.tabs_slider_tab2}`}>
                <div className={styles.tabs_slider}></div>
              </div>
            ) : (
              <div className={`${styles.tabs_slider_wrapper} ${show[0] && styles.tabs_slider_tab3} ${show[1] && styles.tabs_slider_tab4} ${show[2] && styles.tabs_slider_tab5}`}>
                <div className={styles.tabs_slider}></div>
              </div>
            )}
            {/* text와 listType props로 받아 목록 생성 */}
            {ms.map((menu, index) => (
              <div tabIndex={index} aria-selected="true" role="tab" onClick={() => changeList(index)} className={`${styles.tabs_contents} ${show[index] && styles.tabs_contents_active}`}>
                {menu}
              </div>
            ))}
          </div>
        </div>
      </div>
      {props.idx == 0 ? (
        <a href="/exd/list" className={styles.list_bar_more}>
          VIEW MORE
        </a>
      ) : (
        <div className={styles.list_bar_count}>
          <span className={styles.total_count}>329</span>
          listings
        </div>
      )}
    </div>
  );
}

export default GridListBar;
