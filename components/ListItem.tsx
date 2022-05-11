import React, { useEffect, useState } from 'react';
import styles from '../styles/ListItem.module.css';
import Card from './Card';
import CardButton from './CardButton';
import { useSelector } from 'react-redux';
import { selectOption } from '../store/modules/listOption';

function ListItem(props) {
  const [page, setPage] = useState(1);
  const [option, setOption] = useState(null);
  const [oriItems, setOriItems] = useState([1, 2, 2, 2, 2, 4, 3, 2, 1, 1, 2, 4, 5, 5, 2, 3, 3, 1, 2, 2, 3]);
  const [items, setItems] = useState([1, 2, 2, 2, 2, 4, 3, 2, 1, 1, 2, 4, 5, 5, 2, 3, 3, 1, 2, 2, 3]);
  //   const items = [1, 2, 2, 2, 4, 3, 2, 1, 1, 2, 4, 5, 5, 2, 3, 3, 1, 2, 2, 3];
  const nextOption = useSelector(selectOption);
  if (nextOption != null && nextOption.listOption != option) {
    const temp = [];
    console.log('render');
    for (let i = 0; i < oriItems.length; i++) {
      if (oriItems[i] == nextOption.listOption) {
        temp.push(oriItems[i]);
      }
    }

    setItems(temp);
    setOption(nextOption.listOption);
  }

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
