import styles from "../styles/index.module.sass"

import Header from "../components/header/Header"
import Publibcty from "../components/publicity/Publicity"
import NewsWithoutImage from "../components/articles/primaries/newsWithouImage/NewsWithoutImage"

export default function HomePage() {
    return(
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Publibcty />
                <NewsWithoutImage category="economia" title="Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases, diz BC"/>
            </div>
        </div>
    )
}