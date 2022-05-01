import React, { useEffect, useState } from 'react';
import styles from '../styles/GridFilter.module.css';
import { Select } from '@mui/material';
import SelectBox from './SelectBox';

function GridFilter(props) {
  return (
    <div id="wrapFilterList" className={styles.wrap_filter}>
      <div className={styles.wrap_filter_inner}>
        <div data-v-4974db69="" className={styles.filter_check}>
          <img
            data-v-4974db69=""
            src="data:image/webp;base64,UklGRn4AAABXRUJQVlA4WAoAAAAQAAAAJwAAJwAAQUxQSBsAAAABDzD/ERFCaQACjPH/Tz7TRDmi/xPQ0QByV0cAVlA4IDwAAACwAwCdASooACgAPlkgi0WjoiEePvwAOAWEtIAARvMpb3qnHjrsAAD+/sIS3//nT9d+v+HbVcz/0VQAAAA="
            alt=""
            className={styles.filter_check_img}
          />
          <span data-v-4974db69="" className={styles.filter_check_label}>
            Collectibles
          </span>
        </div>
        <SelectBox />
      </div>
    </div>
  );
}

export default GridFilter;
