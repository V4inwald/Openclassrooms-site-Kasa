import React from 'react';
import styles from './card.module.scss';
import { Link } from 'react-router-dom'

function Card({id, title, cover}) {
    return (
        <Link to={`/accomodations/${id}`} className={styles.card}>
            <img src={cover} alt={title} />
            <p>{title}</p>	
        </Link>
    );
  }
  
  export default Card;