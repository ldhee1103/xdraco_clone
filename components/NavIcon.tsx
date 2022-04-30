import React, { useEffect, useState } from 'react';
import styles from '../styles/Nav.module.css';
// import { useHistory } from 'react-router';

function NavIcon(props) {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.nav_link_text}>
      <img src={props.url} className={props.classname} />
    </div>
  );
}

export default NavIcon;
