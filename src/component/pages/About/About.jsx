import React from 'react';
import Banner from '../../common/Banner/Banner';
import Collapse from '../../common/Collapse/Collapse';
import data from '../../../assets/data/aboutPageContent.json';

function About() {
    return (
        <main>
            <Banner />
            <section>
                {data.map((data) => {
                    return (
                        <Collapse
                            key={data.id}
                            title={data.title}
                            content={data.content}
                            open={false}
                        />
                    )
                })}
            </section>
        </main>
    )
}

export default About