import styles from "./secundaryNews.module.sass"

import Bar from "../../bar/Bar"

import PropTypes from "prop-types"

export default function SecundaryNews({ category, title }) {
    return(
        <article className={styles.article}>
            <Bar color={category}/>
            <p>{title}</p>
        </article>
    )
}

SecundaryNews.propTypes = {
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}