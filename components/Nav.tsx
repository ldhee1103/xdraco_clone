import React, { useEffect, useState } from 'react';
import styles from '../styles/Nav.module.css';
import NavIcon from './NavIcon';
import NavMenuButton from './NavMenuButton';
// import { useHistory } from 'react-router';

function Nav() {
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
    <div className={`${styles.nav} ${show && styles.nav_small}`}>
      <div className={styles.nav_contents}>
        <div className={styles.gnb_left}>
          <a href="/" className={styles.nav_logo}>
            <img src="/img/xdraco.png" className={`${styles.nav_menu_icon}  ${show && styles.nav_menu_icon_small}`} />
          </a>
          <div className={styles.nav_list}>
            {/* 이후 객체를 props로 받아 메뉴 반복 생성으로 수정 */}
            <NavMenuButton linkUrl="/exd/list" imgUrl="/img/exd.png" />
            <NavMenuButton linkUrl="/exd/list" imgUrl="/img/collectibles.png" />
            <NavMenuButton linkUrl="/exd/list" imgUrl="/img/hsp.png" />
            <NavMenuButton linkUrl="/exd/list" imgUrl="/img/dsp.png" />
            <NavMenuButton linkUrl="/exd/list" imgUrl="/img/mirage.png" />
            <NavMenuButton linkUrl="/exd/list" imgUrl="/img/nft.png" />
          </div>
        </div>
        <div className={styles.gnb_right}>
          <div className={styles.nav_link_text}>HYDRA&nbsp;&&nbsp;DRACO</div>
          <NavIcon url="/img/mir4.png" classname={styles.nav_mir4} />
          <NavIcon url="/img/game.png" classname={styles.nav_icon} />
          <NavIcon url="/img/twitter.png" classname={styles.nav_icon} />
          <NavIcon url="/img/question.png" classname={styles.nav_icon} />
          <NavIcon url="/img/lang.png" classname={styles.nav_icon} />
          <NavIcon url="/img/user.png" classname={styles.nav_avatar} />
        </div>
      </div>
    </div>
  );
}

export default Nav;
