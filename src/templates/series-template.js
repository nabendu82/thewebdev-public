import React from 'react'
import Layout from '../components/Layout';
import { Link, graphql } from 'gatsby';
import styles from "../css/tagsTemplate.module.css"
import SEO from "../components/SEO"

const seriesTemplate = ({ pageContext, data }) => {
    const { series } = pageContext;
    const { edges, totalCount } = data.allMdx;
    const seriesHeader = `${totalCount} post${
            totalCount === 1 ? '' : 's'
        } tagged with "${series}"`;
    return (
        <Layout>
            <SEO title="Series" />
            <section className={styles.template}>
                <h1>{seriesHeader}</h1>
                <ul>
                    {edges.map(({ node }) => {
                        const { title, date, slug } = node.frontmatter;
                        return (
                            <li key={slug}>
                                <Link to={`/${slug}`}>
                                    {title} ({date})
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </Layout>
    );
}

export const query = graphql`
    query getSeries($series: String) {
        allMdx(sort: {fields: frontmatter___date, order: DESC}
                    filter: {frontmatter: { series: { in: [$series] }}}) {
            totalCount
            edges {
            node {
                frontmatter {
                title
                slug
                date(formatString: "MMMM Do, YYYY")
                series
                }
            }
            }
        }
    }
`;

export default seriesTemplate;
