import React from 'react';
import styles from "../css/advert.module.css";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

export const getImage = graphql`
{
    file(relativePath: { eq: "Gatsby.png" }) {
        childImageSharp {
            fixed(height: 350) {
                ...GatsbyImageSharpFixed_withWebp
            }
        }
    }
}
`

const Advert = () => {
    const response = useStaticQuery(getImage);

    return (
        <section className={styles.sponserAds}>
            <div className={styles.advert1}>
                <Img fixed={response.file.childImageSharp.fixed} alt="the book cover" />
                <p>Coming July</p>
            </div>
        </section>
    )
}

export default Advert;
