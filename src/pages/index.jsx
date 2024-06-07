import styles from "../styles/index.module.sass"

import Header from "../components/header/Header"
import Publibcty from "../components/publicity/Publicity"

export default function HomePage() {
    return(
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Publibcty />
            </div>
        </div>
    )
}