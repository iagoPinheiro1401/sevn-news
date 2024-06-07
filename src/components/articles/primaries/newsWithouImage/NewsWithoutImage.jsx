import styles from "./newsWithoutImage.module.sass"

import PropTypes from "prop-types"

export default function NewsWithoutImage({ category, title }) {

    let colorClass = ''
    if (category == 'Economia' || category == 'economia') {
        colorClass = styles.red
    } else if (category == 'Educação' || category == 'educação') {
        colorClass = styles.blue
    } else if (category == 'Diversidades' || category == 'diversidades') {
        colorClass = styles.green
    }

    return(
        <article className={styles.article}>
            <p className={`${styles.category} ${colorClass}`}>{category}</p>
            <h1>{title}</h1>
        </article>
    )
}

NewsWithoutImage.propTypes = {
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}