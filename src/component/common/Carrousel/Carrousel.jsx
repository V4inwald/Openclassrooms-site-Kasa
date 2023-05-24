import React from 'react';
import styles from './carrousel.module.scss';

function Carrousel({pictures,alt}) {

    const sliderPictures = {pictures}.pictures

    return (
        <div className={styles.carrousel}>
            <img src={sliderPictures[0]} alt={alt} />
        </div>
    );
  }
  
  export default Carrousel;