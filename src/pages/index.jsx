import styles from "../styles/index.module.sass"

import Header from "../components/header/Header"
import Publibcity from "../components/publicity/Publicity"
import NewsWithoutImage from "../components/articles/primaries/newsWithouImage/NewsWithoutImage"
import NewsWithImage from "../components/articles/primaries/newsWithImage/NewsWithImage"
import SecundaryNews from "../components/articles/secundary/SecundatyNews"

export default function HomePage() {
    return(
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Publibcity />
                <section className={styles.primaryNewsContainer}>
                    <NewsWithoutImage 
                        category="economia" 
                        title="Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases, diz BC"
                    />
                    <div className={styles.newsWithImageContainer}>
                        <NewsWithImage
                            category="educação" 
                            title="Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização" 
                            img="aula-pandemia.png"
                        />
                        <NewsWithImage 
                            category="diversidades" 
                            title="Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados hoje" 
                            img="cedulas.png"
                        />
                    </div>
                </section>
                <div className={styles.secundaryNewsContainer}>
                    <SecundaryNews />
                    <SecundaryNews />
                    <SecundaryNews />
                    <SecundaryNews />
                    <SecundaryNews />
                    <SecundaryNews />
                    <SecundaryNews />
                    <SecundaryNews />
                </div>
            </div>
        </div>
    )
}