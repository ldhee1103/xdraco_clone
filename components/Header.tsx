import React, { useEffect, useState } from 'react';
import styles from '../styles/Nav.module.css';
// import { useHistory } from 'react-router';

function Nav() {
  const [show, setShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
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
    // <div className={(styles.nav, `${show && styles.nav_black}`)}>
    // <div className={styles.nav}>
    <div className={`styles.nav ${show && styles.nav_black}`}>
      <div className={styles.nav_contents}>
        <img src="/img/xdraco.png" alt="" className={styles.nav_logo} />
        <img src="/img/exd.png" alt="" className={styles.nav_logo} />
        <img src="/img/collectibles.png" alt="" className={styles.nav_logo} />
        <img src="/img/hsp.png" alt="" className={styles.nav_logo} />
        <img src="/img/dsp.png" alt="" className={styles.nav_logo} />
        <img src="/img/mirage.png" alt="" className={styles.nav_logo} />
        <img src="/img/nft.png" alt="" className={styles.nav_logo} />

        <div className={styles.nav_avatar}>HYDRA & DRACO</div>
        <img
          // onClick={() => history.push('/profile')}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&usqp=CAU"
          alt=""
          className={styles.nav_avatar}
        />
      </div>
    </div>
  );
}

export default Nav;
