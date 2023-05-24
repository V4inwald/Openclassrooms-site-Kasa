import React, {useState} from 'react';
import styles from './collapse.module.scss';
import arrow from '../../../assets/images/arrow.png';


function Collapse ({title, content}) {

    const [toggleOpen, setToggle] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setToggle(toggleOpen => !toggleOpen);
    }

    const collapseContent = {content}.content
    let toShow = collapseContent;

    // if {content} is an array then I turn each element into a <p>
    if (Array.isArray(collapseContent)) {
        toShow = collapseContent.map((element) => <p key={element}>{element}</p>)
    } 
    
    return (
        <div className={`${styles.collapse} ${toggleOpen ? styles.open : styles.closed}`}>
            <div onClick={handleClick} className={styles.trigger}>
                <h2>{title}</h2>
                <img src={arrow} alt={toggleOpen ? 'Cacher le contenu' : 'Afficher le contenu'} />
            </div>
            <div className={styles.content}>{toShow}</div> 
        </div>
    );
  }
  
  export default Collapse;




