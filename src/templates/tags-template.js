import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import styles from "../css/tagsTemplate.module.css"
import SEO from "../components/SEO"

const tagsTemplate = ({ pageContext, data }) => {
    const { tag } = pageContext;
    const { edges, totalCount } = data.allMdx;
    const tagHeader = `${totalCount} post${
            totalCount === 1 ? '' : 's'
        } tagged with "${tag}"`;
    return (
        <Layout>
            <SEO title="Tags" />
            <section className={styles.template}>
                <h1>{tagHeader}</h1>
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
};

export const query = graphql`
query getTags($tag: String!) {
allMdx(sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: { tags: { in: [$tag] }}}) {
        totalCount
        edges {
            node {
                frontmatter {
                title
                slug
                date(formatString: "MMMM Do, YYYY")
                }
            }
        }
    }
}
`;

export default tagsTemplate;