import { FormControl, Select, MenuItem } from '@mui/material';
import { style } from '@mui/system';
import React, { useEffect, useState } from 'react';
import styles from '../styles/SelectBox.module.css';
// import { useHistory } from 'react-router';

function SelectBox() {
  const [age, setAge] = useState('');
  const handleChange = (value) => {
    setAge(value);
  };
  return (
    // <div className={styles.wrap_select}>
    //   <div className={styles.input_control}>
    //     <div className={styles.input_slot}>
    //       <fieldset aria-hidden="true">
    //         <legend style={{ width: '0px' }}>
    //           <span className="notranslate">&ZeroWidthSpace;</span>
    //         </legend>
    //       </fieldset>
    //       <div className={styles.v_select_slot}>
    //         <div className={styles.v_select_selection}>
    //           <input id="input-80" placeholder="Class" readOnly={true} type="text" aria-readonly="false" autoComplete="off" />
    //         </div>
    //         <div className={styles.v_input_append_inner}>
    //           <div className={styles.v_input_append_icon}>
    //             <i aria-hidden="true" className={styles.v_icon}></i>
    //           </div>
    //         </div>
    //         <input type="hidden"></input>
    //       </div>
    //       <div className={styles.v_menu}></div>
    //     </div>
    //     <div className={styles.text_field_details}>
    //       <div className={styles.v_messages}></div>
    //     </div>
    //   </div>
    // </div>
    // style={{ 'background-color': 'black', color: 'white' }
    <div className={styles.wrap_select}>
      <Select value={age} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }} className={styles.v_select}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </div>
  );
}

export default SelectBox;
