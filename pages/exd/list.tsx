import React, { useEffect, useState } from 'react';
import { Grid, Paper } from '@mui/material';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import GridListBar from '../../components/GridListBar';
import GridSide from '../../components/GridSide';
import GridRecommend from '../../components/GridRecommend';
import styles from '../../styles/List.module.css';

function list() {
  const [show, setShow] = useState([true, false]);
  const changeList = (idx) => {
    if (idx == 0) {
      setShow([true, false]);
    } else {
      setShow([false, true]);
    }
  };

  return (
    // <div className={styles.}></div>
    <div className={styles.list}>
      <Nav />
      <div className={styles.exd_list_top}></div>
      <section className={styles.section}>
        <div className={styles.section_inner}>
          <div className={styles.wrap_grid}>
            <div className={styles.grid_timeline}>
              <div className={styles.exchange_list}>
                <GridListBar idx="0" />
                <GridRecommend type="1" />
                <div data-v-f659f166="" className={styles.list_bar}>
                  <div data-v-f659f166="" className={styles.list_bar_title}>
                    Recommended
                  </div>
                </div>
                <GridRecommend type="2" />
                <GridListBar />
              </div>
            </div>
            <GridSide />
          </div>
        </div>
      </section>
      <div className={styles.large}>ege</div>
      <Footer />
    </div>
  );
}

export default list;
