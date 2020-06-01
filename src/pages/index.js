import React, { useState, useRef } from "react";
import Layout from "../components/Layout";
import styles from "../css/home.module.css";
import PostList from "../components/PostList";
import TagList from "../components/TagList";
import { graphql, useStaticQuery } from "gatsby";
import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";
import Menu from "../components/Menu/Menu";
import { useOnClickOutside } from "../constants/hooks";
import Advert from "../components/Advert";
import RightMenu from "../components/Menu/RightMenu";
import SeriesList from "../components/SeriesList";
import SEO from "../components/SEO"
import SubscribeComp from "../components/SubscribeComp";

const getPosts = graphql`
{
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        totalCount
        edges {
            node {
            frontmatter {
                title
                slug
                date(formatString: "MMMM Do, YYYY")
                author
                tags
                series
                image {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
                }
            }
            excerpt
            }
        }
    }
}
`

export default () => {
    const response = useStaticQuery(getPosts);
    const allPosts = response.allMdx.edges;
    const postCount = response.allMdx.totalCount;
    const emptyQuery = ""
    const [state, setState] = React.useState({
        filteredData: [],
        query: emptyQuery,
        filteredCount: 0
    });
    const [open, setOpen] = useState(false);
    const toggleLeftMenu = () => {
        setOpen(open => !open)
    }
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    const [isOpen, setRight] = useState(false);
    const toggleRightMenu = () => {
        setRight(isOpen => !isOpen)
    }
    const handleInputChange = event => {
        const query = event.target.value
        const posts = response.allMdx.edges || []
        const filteredData = posts.filter(post => {
            const { title, tags, author } = post.node.frontmatter;
            const { excerpt } = post.node;
            return (
                author.toLowerCase().includes(query.toLowerCase()) ||
                excerpt.toLowerCase().includes(query.toLowerCase()) ||
                title.toLowerCase().includes(query.toLowerCase()) ||
                tags.join("").toLowerCase().includes(query.toLowerCase())
            )
        });
        const filteredCount = filteredData.length;
        setState({
            query,
            filteredData,
            filteredCount
        })
    }

    const { filteredData, query, filteredCount } = state;
    const hasSearchResults = filteredData && query !== emptyQuery;
    const posts = hasSearchResults ? filteredData : allPosts;
    const hasCount = filteredCount && query !== emptyQuery;
    const count = hasCount ? filteredCount : postCount;

    return (
        <Layout>
            <SEO title="Learn to built web-apps in React, Gatsby, React-native" />
            <div className={styles.mobileMenu}>
                <button type="button" className={styles.logoBtn} onClick={toggleLeftMenu} >
                    <FaSortAmountDown className={styles.logoIcon} />
                </button>
                    <Menu open={open} />
                <h2 className={styles.mobileHeader}>My TWD</h2>
                <button type="button" className={styles.logoBtn} onClick={toggleRightMenu} >
                    <FaSortAmountUp className={styles.logoIcon} />
                </button>
                <RightMenu open={isOpen} />
            </div>
            <div className={styles.home}>
                <section className={styles.right__sec}>
                    <TagList tags={posts} />
                    <SubscribeComp />
                </section>
                <section className={styles.blog__sec}>
                    <div className={styles.searchBox}>
                        <input
                        className={styles.searchInput}
                        type="text"
                        id="filter"
                        placeholder="Type to filter posts..."
                        onChange={handleInputChange}
                        />
                        <span className={styles.postCount}>{count}</span>
                    </div>
                    <PostList posts={posts} />
                </section>
                <section className={styles.left__sec}>
                    <Advert />
                    <SeriesList seriesList={posts} />
                </section>
            </div>
        </Layout>
    )
}
