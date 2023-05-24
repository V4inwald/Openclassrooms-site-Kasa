import React from 'react';
import styles from './rating.module.scss';
import starActive from '../../../assets/images/star-active.png';
import starInactive from '../../../assets/images/star-inactive.png';

function Rating({score}) {

    const rating = {score}.score;

    const activeStars = rating;
    const inactiveStars = 5 - rating;


    return (
        <div className={styles.rating}>

            {/* toDo: find how to put a loop here to achieve desired output*/}
            {/* <img src={starActive} alt={'active star'} />
            <img src={starInactive} alt={'inactive star'} /> */}

        </div>
    );
  }
  
  export default Rating;