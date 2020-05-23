import React from 'react'
import styles from "../../css/contact.module.css"

const AboutComp = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.center}>
                <h3>About Us</h3>
                <p><i>The Web Dev(TWD)</i> is a place, where you will find all the resources to take your
                    Web-development to the next level. It contains full length blog series, with detailed
                    instruction to build production level web-apps.
                </p>
                <p>We currently have blog series to build web-apps in React, GraphQL and GatsbyJS. Beside
                    that we have other series like of CSS and JavaScript.
                </p>
                <p>This site is developed and maintained by Nabendu Biswas. He is a UI Lead at Innominds
                    and a passionate tech blogger. You can read more about him on his personal
                    site <a href="https://nabendu.me/" target="_blank" rel="noopener noreferrer">nabendu.me</a>
                </p>
                <p>This site is currently in a transition mode, with blogs transferred everyday. You
                    can read all our blogs currently
                    at <a href="https://nabendu.blog/" target="_blank" rel="noopener noreferrer">nabendu.blog</a>
                </p>
            </div>
        </section>
    )
}

export default AboutComp
