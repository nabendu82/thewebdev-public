import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../css/navbar.module.css"
import { FaSlidersH } from "react-icons/fa"
import links from "../constants/links"
import logo from "../images/logo.png"

const Navbar = () => {
    const [isOpen, setNav] = useState(false);
    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                    <Link to="/"><img src={logo} className={styles.brandLogo} alt="thewebdev logo" /></Link>
                    <button type="button" className={styles.logoBtn} onClick={toggleNav}>
                        <FaSlidersH className={styles.logoIcon} />
                    </button>
                </div>
                <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
                    {links.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
