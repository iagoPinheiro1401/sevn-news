import styles from "./newsWithoutImage.module.sass"

import PropTypes from "prop-types"

import Category from "../../../category/Category"

export default function NewsWithoutImage({ category, title, className }) {

    return(
        <article className={`${styles.article} ${className}`}>
            <Category>{category}</Category>
            <h1>{title}</h1>
        </article>
    )
}

NewsWithoutImage.propTypes = {
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string
}