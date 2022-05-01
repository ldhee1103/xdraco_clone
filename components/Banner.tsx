import React, { useEffect, useState } from 'react';
import styles from '../styles/Banner.module.css';
// import { useHistory } from 'react-router';

function Banner(props) {
  const [marginVlaue, setMarginVlaue] = useState('0vw');
  const [imgIndex, setImgIndex] = useState(0);
  const imgs = ['https://www.xdraco.com/static/img/bg-banner.a79504bc.webp', '/img/exd.png', '/img/mir4.png'];

  const bannerMove = (type) => {
    if (type == '+') {
      if (imgIndex + 1 == imgs.length) {
        setImgIndex(0);
      } else {
        setImgIndex(imgIndex + 1);
      }
    } else {
      if (imgIndex == 0) {
        setImgIndex(imgs.length - 1);
      } else {
        setImgIndex(imgIndex - 1);
      }
    }
    setMarginVlaue(imgIndex * -100 + 'vw');
  };

  return (
    <div className={styles.banner}>
      <div className={styles.banner_container} style={{ 'margin-left': marginVlaue }}>
        {imgs.map((img, index) => (
          <div className={styles.img_container}>
            <img className={styles.banner_img} src={img}></img>
          </div>
        ))}
      </div>
      <button className={styles.arrowRight} onClick={() => bannerMove('+')}></button>
      <button className={styles.arrowLeft} onClick={() => bannerMove('-')}></button>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}

export default Banner;
