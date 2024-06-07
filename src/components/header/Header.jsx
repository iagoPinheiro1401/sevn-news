import styles from "../header/header.module.sass"

import { ArrowLeft } from "@phosphor-icons/react"
import PropTypes from "prop-types"

export default function Header({ homePageBack }) {
    return(
        <header className={styles.header}>
            {homePageBack &&
                <button>
                    <ArrowLeft size={24} color="#fafafa" />
                </button>
            }
            <div className={styles.container}>
                <h2>SEVN NEWS</h2>
            </div>
        </header>
    )
}

Header.propTypes = {
    homePageBack: PropTypes.bool,
};