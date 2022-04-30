import React, { useEffect, useState } from 'react';
import styles from '../styles/GridRecommend.module.css';
import RecommendItemRank from './RecommendItemRank';
import RecommendItem from './RecommendItem';
// import { useHistory } from 'react-router';

function GridRecommend(props) {
  return (
    <ul className={styles.list_item_recommended}>
      {props.type == '1' ? <RecommendItemRank /> : <RecommendItem />}
      {props.type == '1' ? <RecommendItemRank /> : <RecommendItem />}
      {props.type == '1' ? <RecommendItemRank /> : <RecommendItem />}
    </ul>
  );
}

export default GridRecommend;
