import React from 'react';
import styles from './rating.module.scss';
import starActive from '../../../assets/images/star-active.png';
import starInactive from '../../../assets/images/star-inactive.png';

function Rating({score}) {

    const rating = {score}.score;
    const counter = [1,2,3,4,5];

    return (
        <div className={styles.rating}>
            {counter.map((star) => rating >= star ? 
                (< img key={`rating-${star}`} className={styles.star} src={starActive} alt={'active star'} /> ) : 
                (< img key={`rating-${star}`} className={styles.star} src={starInactive} alt={'inactive star'} /> )
            )}
        </div>
    );
  }
  
  export default Rating;