import React from 'react';
import Layout from "../components/Layout";
import AboutComp from "../components/About/About"
import SEO from "../components/SEO"

const About = () => {
    return (
        <Layout>
            <SEO title="About" />
            <AboutComp />
        </Layout>
    )
}

export default About;
