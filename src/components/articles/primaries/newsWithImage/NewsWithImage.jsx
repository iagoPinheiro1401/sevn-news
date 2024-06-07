import styles from "./newsWhithImage.module.sass"

import PropTypes from "prop-types"

import Category from "../../../category/Category"

export default function NewsWithImage({ category, title, img }) {
    return(
        <article className={styles.article}>
            <img src={img}/>
            <Category>{category}</Category>
            <p className={styles.text}>{title}</p>
        </article>
    )
}

NewsWithImage.propTypes = {
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}