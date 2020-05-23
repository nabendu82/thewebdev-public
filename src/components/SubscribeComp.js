import React from 'react';
import styles from "../css/advert.module.css";
import Subscribe from './subscribe';

const SubscribeComp = () => {
    return (
        <section className={styles.sponserAds}>
            <div className={styles.advert1}>
                <Subscribe />
                <p>Also, details about Gatsby Cookbook</p>
            </div>
        </section>
    )
}

export default SubscribeComp;
