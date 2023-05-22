import React from 'react'
import styles from './gallery.module.scss';
import Card from '../Card/Card'
import data from '../../../assets/data/accomodations.json'

function Gallery() {

    return (
        <section className={styles.gallery}>
            {data.map((data) => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </section>
    );
  }
  
  export default Gallery;