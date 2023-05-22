import React from 'react'
import styles from './banner.module.scss';
import { useLocation } from 'react-router-dom'

function Banner() {

    let path = useLocation().pathname;

    if (path === '/') {
        return (
        <section className={styles.banner}>
            <p>Chez vous, partout et ailleurs</p>
        </section>
        );
      } else if (path === '/about'){
        return (
            <section className={`${styles.banner} ${styles["banner-about"]}`}></section>
          );
      }
}

export default Banner;


