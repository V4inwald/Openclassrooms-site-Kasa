import React from 'react';
import styles from './accomodation.module.scss';
import Error from '../Error/Error';
import Slideshow from '../../common/Slideshow/Slideshow';
import Collapse from '../../common/Collapse/Collapse';
import Rating from '../../common/Rating/Rating';
import data from '../../../assets/data/accomodations.json';
import { useParams } from 'react-router-dom';

function Accomodation() {
    const accomodationId = useParams().id;
    const accomodationById = data.filter(data => data.id === accomodationId);

    //if ID doesn't exist then show error404
    if (accomodationById.length === 0 ) {
        return <Error />;
    }


    const accomodationTags = accomodationById[0].tags;
    const hostData = accomodationById[0].host;

    return (
        <main className={styles.accomodation}>
            <Slideshow pictures={accomodationById[0].pictures} alt={accomodationById[0].title}/>
            <div className={styles['info-container']}>
                <div className={styles['accomodation-info']}>
                    <h2>{accomodationById[0].title}</h2>
                    <h3>{accomodationById[0].location}</h3>
                    <div className={styles['accomodation-tags']}>
                        {accomodationTags.map((accomodationTag) => {
                            return (
                                <p key={accomodationTag} >{accomodationTag}</p>
                            )
                        })}
                    </div>
                </div>
                <div className={styles['host-info']}>
                    <div className={styles.host}>
                        <p>{hostData.name}</p>
                        <img src={hostData.picture} alt={hostData.name} />
                    </div>
                    <Rating score={accomodationById[0].rating}/>
                </div>
            </div>
            <div className={styles['collapse-container']}>
                <Collapse
                    title={'Description'}
                    content={accomodationById[0].description}
                    changeStyle={'accomodation-style'}
                    open={true}
                />
                <Collapse
                    title={'Équipements'}
                    content={accomodationById[0].equipments}
                    changeStyle={'accomodation-style'}
                    open={true}
                />
            </div>
        </main>
    )
}
 
export default Accomodation
