import styles from "../header/header.module.sass"

import { ArrowLeft } from "@phosphor-icons/react"
import PropTypes from "prop-types"
import { useRouter } from "next/router"

export default function Header({ homePageBack }) {
    const router = useRouter()

    const handleClick = () => {
        router.push("/")
    }

    return(
        <header className={styles.header}>
            {homePageBack &&
                <button>
                    <ArrowLeft size={24} color="#fafafa" onClick={handleClick}/>
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