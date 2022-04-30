import React, { useEffect, useState } from 'react';
import styles from '../styles/Nav.module.css';
// import { useHistory } from 'react-router';

function NavMenuButton(props) {
  const [show, setShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 1) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  // const history = useHistory();

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => window.removeEventListener('scroll', transitionNavbar);
  }, []);

  return (
    <a href={props.linkUrl} className={`${styles.nav_button}  ${show && styles.nav_button_small}`}>
      <img src={props.imgUrl} className={`${styles.nav_menu_icon}  ${show && styles.nav_menu_icon_small}`} />
    </a>
  );
}

export default NavMenuButton;
