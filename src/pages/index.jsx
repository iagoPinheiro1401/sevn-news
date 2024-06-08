import styles from "../styles/index.module.sass"

import Header from "../components/header/Header"
import Publibcity from "../components/publicity/Publicity"
import NewsWithoutImage from "../components/articles/primaries/newsWithouImage/NewsWithoutImage"
import NewsWithImage from "../components/articles/primaries/newsWithImage/NewsWithImage"
import SecundaryNews from "../components/articles/secundary/SecundatyNews"

import axios from "axios"
import { useState, useEffect } from "react"

export default function HomePage() {
    const [primaryNews, setPrimaryNews] = useState('')

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await axios.get('https://sevn-news-api-mu.vercel.app/api/artigos-principais')
                setPrimaryNews(response.data)
            } catch (error) {
                console.error('Error fetching news data:', error)
            }
            }
        
            fetchNewsData();
    }, [])

    return(
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Publibcity />
                <section className={styles.primaryNewsContainer}>
                    {primaryNews[0] &&
                        <NewsWithoutImage 
                            category={primaryNews[0].categoria}
                            title="Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases, diz BC"
                        />
                    }
                    <div className={styles.newsWithImageContainer}>
                        {primaryNews[1] &&
                            <NewsWithImage
                                    category={primaryNews[1].categoria} 
                                    title="Datafolha: Após ensino remoto, 76% precisam de reforço na alfabetização" 
                                    img="aula-pandemia.png"
                            />
                        }

                        {primaryNews[2] && 
                            <NewsWithImage 
                                category={primaryNews[2].categoria} 
                                title="Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados hoje" 
                                img="cedulas.png"
                            />
                        }
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