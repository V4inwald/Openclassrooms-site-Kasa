import React, {useState} from 'react';
import styles from './slideshow.module.scss';
import arrowRight from '../../../assets/images/arrow-right.png';
import arrowLeft from '../../../assets/images/arrow-left.png';

function Slideshow({pictures,alt}) {
    const sliderPictures = {pictures}.pictures;
    const [index, setIndex] = useState(0);

    //when element is focused and enter is pressed,
    //calls the appropriate handleClick (for accessibility)
    //might need refactoring to reduce repetition
    const enterIncrease = e => {
      if (e.keyCode === 13) {
        handleClickIncrease();
      }
    };
    const enterDecrease = e => {
        if (e.keyCode === 13) {
            handleClickDecrease();
        }
      };

    const handleClickIncrease = () => {
        setIndex(index => index + 1);
        if(index === sliderPictures.length - 1){
            setIndex(0)
        }
    }
    const handleClickDecrease = () => {
        setIndex(index => index - 1);
        if(index === 0){
            setIndex(sliderPictures.length - 1)
        }
    }
    // if only one picture is present, hide the arrows and counter
    let hideArrows = false;
    if (sliderPictures.length === 1){
        hideArrows = true
    }

    return (
        <div className={styles.slideshow}>
            <img className={styles.current} src={sliderPictures[index]} alt={alt} />
            <img onClick={handleClickDecrease} onKeyDown={enterDecrease}
                className={`${styles.arrow} ${styles['arrow-left']} ${hideArrows ? styles.hide : ''}`} 
                src={arrowLeft} alt={'précédent'} 
                tabIndex="0"
            />
            <img onClick={handleClickIncrease} onKeyDown={enterIncrease}
                className={`${styles.arrow} ${styles['arrow-right']} ${hideArrows ? styles.hide : ''}`} 
                src={arrowRight} alt={'suivant'} 
                tabIndex="0"
            />
            <p className={`${styles.counter} ${hideArrows ? styles.hide : ''}`}>
                {index + 1}/{sliderPictures.length}
            </p>
        </div>
    );
  }
  
  export default Slideshow;