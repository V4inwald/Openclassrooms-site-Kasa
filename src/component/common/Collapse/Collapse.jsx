import React, {useState} from 'react';
import styles from './collapse.module.scss';
import arrow from '../../../assets/images/arrow.png';


function Collapse ({title, content, changeStyle, open}) {

    let toggleState = {open}.open;
        
    if (typeof toggleState !== 'boolean'){
        toggleState = false;
    }

    //when element is focused and enter is pressed,
    //calls handleClick (for accessibility)
    const handleEnter = e => {
        if (e.keyCode === 13) {
            handleClick();
        }
      };

    //using state for the toggle
    const [toggleOpen, setToggle] = useState(toggleState);
    const handleClick = () => {
        setToggle(toggleOpen => !toggleOpen);
    }

    const changedStyle = {changeStyle}.changeStyle;
    const collapseContent = {content}.content
    let toShow = collapseContent;

    // if {content} is an array then I turn each element into a <p>
    if (Array.isArray(collapseContent)) {
        toShow = collapseContent.map((element) => <p key={element}>{element}</p>)
    } 
    
    return (
        <div className={
            `${styles.collapse} 
            ${toggleOpen ? styles.open : styles.closed} 
            ${changedStyle ? styles[changedStyle] : ''}`
            }>
            <div onClick={handleClick} onKeyDown={handleEnter} className={styles.trigger}>
                <h2>{title}</h2>
                <img src={arrow} tabIndex="0" 
                    alt={toggleOpen ? 'Cacher le contenu' : 'Afficher le contenu'} 
                />
            </div>
            <div className={styles.content}>{toShow}</div> 
        </div>
    );
  }
  
  export default Collapse;




