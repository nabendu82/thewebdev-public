import React from 'react';
import styles from "../css/advert.module.css";

const Advert = ({ imgPath }) => {
    return (
        <section className={styles.sponserAds}>
            <div className={styles.advert1}>
                <img src={imgPath} className={styles.coverImg} alt="the book cover" />
                <p>Coming July 2020</p>
            </div>
        </section>
    )
}

export default Advert;
