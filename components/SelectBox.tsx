import { FormControl, Select, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from '../styles/SelectBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { listOption, optionChange, selectOption } from '../store/modules/listOption';
// import { useHistory } from 'react-router';

function SelectBox() {
  const [op, setOp] = useState('');
  const dispatch = useDispatch();
  const handleChange = (value) => {
    dispatch(optionChange({ ...listOption, listOption: value.target.value }));
    setOp(value.target.value);
  };

  return (
    <div className={styles.wrap_select}>
      <Select value={op} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }} className={styles.v_select}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
    </div>
  );
}

export default SelectBox;
