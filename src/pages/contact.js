import React from 'react';
import Layout from "../components/Layout";
import ContactComp from '../components/Contact/Contact'
import SEO from "../components/SEO"

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <ContactComp />
        </Layout>
    )
}

export default Contact;
