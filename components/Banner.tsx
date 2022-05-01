import React, { useEffect, useState } from 'react';
import styles from '../styles/Banner.module.css';
// import { useHistory } from 'react-router';

function Banner(props) {
  const [imgIndex, setImgIndex] = useState(0);
  const imgs = ['https://www.xdraco.com/static/img/bg-banner.a79504bc.webp', '/img/exd.png', '/img/mir4.png'];

  const bannerMove = (type) => {
    let value = imgIndex;
    if (type == '+') {
      if (value + 1 == imgs.length) {
        setImgIndex(0);
      } else {
        setImgIndex(value + 1);
      }
    } else if (type == '-') {
      if (value == 0) {
        setImgIndex(imgs.length - 1);
      } else {
        setImgIndex(value - 1);
      }
    } else {
      setImgIndex(type);
    }
  };

  return (
    <div className={styles.banner}>
      <div className={styles.banner_container} style={{ 'margin-left': imgIndex * -100 + 'vw' }}>
        {imgs.map((img, index) => (
          <div className={styles.img_container}>
            <img className={styles.banner_img} src={img}></img>
          </div>
        ))}
      </div>
      <button className={styles.arrowRight} onClick={() => bannerMove('+')}></button>
      <button className={styles.arrowLeft} onClick={() => bannerMove('-')}></button>
      <div className={styles.img_index_container}>
        {imgs.map((img, index) => (
          <button className={`${styles.banner_index_img} ${index == imgIndex && styles.banner_select} `} onClick={() => bannerMove(index)}></button>
        ))}
      </div>
    </div>
  );
}

export default Banner;
