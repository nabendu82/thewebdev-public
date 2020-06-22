import React from 'react';
import styles from "../css/advert.module.css";
import Subscribe from './subscribe';

const SubscribeComp = () => {
    return (
        <section className={styles.sponserAds}>
            <div className={styles.advert1}>
                <Subscribe />
                <p>Details of Gatsby Cookbook on <a href="https://leanpub.com/gatsbycookbook" target="_blank" rel="noopener noreferrer">Leanpub</a></p>
            </div>
        </section>
    )
}

export default SubscribeComp;
