import React from 'react';
import styles from './accomodation.module.scss';
import Error from '../Page_error/Error';
import Carrousel from '../common/Carrousel/Carrousel';
import Collapse from '../common/Collapse/Collapse';
import Rating from '../common/Rating/Rating';
import data from '../../assets/data/accomodations.json';
import { useParams } from 'react-router-dom';

function Accomodation() {
    const accomodationId = useParams().id;
    const accomodationData = data.filter(data => data.id === accomodationId);
    const accomodationTags = accomodationData[0].tags;
    const hostData = accomodationData[0].host;

    //if ID doesn't exist then show error404
    if (accomodationData.length === 0 ) {
        return <Error />;
    }

    return (
        <main className={styles.accomodation}>
            <Carrousel pictures={accomodationData[0].pictures} alt={accomodationData[0].title}/>
            <div className={styles['info-container']}>
                <div className={styles['accomodation-info']}>
                    <h2>{accomodationData[0].title}</h2>
                    <h3>{accomodationData[0].location}</h3>
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
                    <Rating score={accomodationData[0].rating}/>
                </div>
            </div>
            <div className={styles['collapse-container']}>
                <Collapse
                    // className={styles['collapse-accomodations']}
                    title={'Description'}
                    content={accomodationData[0].description}
                />
                <Collapse
                    // className={styles['collapse-accomodations']}
                    title={'Équipements'}
                    content={accomodationData[0].equipments}
                />
            </div>
        </main>
    )
}
 
export default Accomodation
