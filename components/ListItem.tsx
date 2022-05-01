import React, { useEffect, useState } from 'react';
import styles from '../styles/ListItem.module.css';
import Card from './Card';
import CardButton from './CardButton';
// import { useHistory } from 'react-router';

function ListItem(props) {
  const [page, setPage] = useState(1);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  // 1page 20개
  return (
    <ul className={styles.list_item}>
      {items.map((item, index) => (
        <li>
          <Card Item={item} />
          <CardButton />
        </li>
      ))}
    </ul>
  );
}

export default ListItem;
