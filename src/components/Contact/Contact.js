import React from "react"
import styles from "../../css/contact.module.css"
const ContactComp = () => {
    return (
        <section className={styles.contact}>
            <h3>Contact Us</h3>
            <div className={styles.center}>
                <form action="https://formspree.io/mbjkjzll" method="POST" className={styles.form}>
                    <div>
                        <label htmlFor="name">name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={styles.formControl}
                            placeholder="john smith"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={styles.formControl}
                            placeholder="email@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message">message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="10"
                            className={styles.formControl}
                            placeholder="hello there"
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="submit here"
                            className={styles.submit}
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactComp
