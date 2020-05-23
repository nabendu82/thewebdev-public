import React from 'react'
import styles from "../css/taglist.module.css"
import { Link } from "gatsby"

const SeriesList = ({ seriesList }) => {
    var tmpArr = [];
    seriesList.forEach(element => {
        tmpArr = [...tmpArr, element.node.frontmatter.series];
    });
    tmpArr = [...new Set(tmpArr)];
    tmpArr = tmpArr.filter(arr => arr);

    return (
        <section className={styles.tagList}>
            <div className={styles.boxTag}>
                <h2>Series</h2>
                {tmpArr.map((series, index) => {
                    return <Link to={`/series/${series}`} key={index} className={styles.link}>
                                {series}
                            </Link>
                })}
            </div>
        </section>
    )
}

export default SeriesList;
