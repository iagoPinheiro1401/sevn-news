import styles from "./bar.module.sass"

import PropTypes from "prop-types"

export default function Bar({ color }) {
  let colorClass = ''

  if (color) {
    switch (color.toLowerCase()) {
      case 'economia':
        colorClass = styles.red;
        break;
      case 'educação':
        colorClass = styles.blue;
        break;
      case 'diversidades':
        colorClass = styles.green;
        break;
      default:
        colorClass = '';
    }
  }
  return (
    <div className={`${styles.bar} ${colorClass}`} />
  )
}

Bar.propTypes = {
  color: PropTypes.string.isRequired,
}
