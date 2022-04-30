import React from 'react';
import { Grid, Paper } from '@mui/material';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import styles from '../../styles/List.module.css';

function list() {
  return (
    <div className={styles.list}>
      <Nav />
      <div className={styles.exd_list_top}></div>
      {/* <div className={styles.large}>regargh</div> */}
      <div className={styles.section}>
        <Grid container>
          <Grid item md={3}>
            <Paper>1</Paper>
          </Grid>
          <Grid item md={3}>
            <Paper>2</Paper>
          </Grid>
          <Grid item md={3}>
            <Paper>3</Paper>
          </Grid>
          <Grid item md={3}>
            <Paper>4</Paper>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default list;
