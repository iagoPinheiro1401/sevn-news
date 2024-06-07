import styles from "./category.module.sass"

import PropTypes from "prop-types"

export default function Category({ children }) {

    let colorClass = ''
    if (children == 'Economia' || children == 'economia') {
        colorClass = styles.red
    } else if (children == 'Educação' || children == 'educação') {
        colorClass = styles.blue
    } else if (children == 'Diversidades' || children == 'diversidades') {
        colorClass = styles.green
    }

    return(
        <p className={`${styles.category} ${colorClass}`}>{children}</p>
    )
}

Category.propTypes = {
    children: PropTypes.string.isRequired,
}