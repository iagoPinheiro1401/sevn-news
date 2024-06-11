import styles from "../styles/index.module.sass"

import Header from "../components/header/Header"
import Publibcity from "../components/publicity/Publicity"
import NewsWithoutImage from "../components/articles/primaries/newsWithouImage/NewsWithoutImage"
import NewsWithImage from "../components/articles/primaries/newsWithImage/NewsWithImage"
import SecundaryNews from "../components/articles/secundary/SecundatyNews"

import axios from "axios"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function HomePage() {
    const [primaryNews, setPrimaryNews] = useState('')
    const [secundaryNews, setSecundaryNews] = useState([])

    useEffect(() => {
        const fetchPrimaryNews = async () => {
            try {
                const response = await axios.get('https://sevn-news-api-mu.vercel.app/api/artigos-principais')
                setPrimaryNews(response.data)
            } catch (error) {
                console.error('Error fetching news data:', error)
            }
            }
        
            fetchPrimaryNews()

            const fetchSecundaryNews = async () => {
                try {
                    const response = await axios.get('https://sevn-news-api-mu.vercel.app/api/artigos-secundarios')
                    setSecundaryNews(response.data)
                } catch (error) {
                    console.error('Error fetching news data:', error)
                }
                }
            
                fetchSecundaryNews()
    }, [])

    return(
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Publibcity />
                <section className={styles.primaryNewsContainer}>
                    {primaryNews[0] &&
                        <Link href={`/news/${primaryNews[0].id}`} className={styles.link}>
                                <NewsWithoutImage 
                                    category={primaryNews[0].categoria}
                                    title={primaryNews[0].titulo}
                                />
                        </Link>
                    }

                    <div className={styles.newsWithImageContainer}>
                        {primaryNews[1] &&
                            <Link href={`/news/${primaryNews[1].id}`} className={styles.link}>
                                <NewsWithImage
                                    category={primaryNews[1].categoria} 
                                    title={primaryNews[1].titulo} 
                                    img="aula-pandemia.png"
                                />
                            </Link>
                        }

                        {primaryNews[2] && 
                            <Link href={`/news/${primaryNews[2].id}`} className={styles.link}>
                                <NewsWithImage 
                                    category={primaryNews[2].categoria} 
                                    title={primaryNews[2].titulo} 
                                    img="cedulas.png"
                                />
                            </Link>
                        }
                    </div>
                </section>
                <div className={styles.secundaryNewsContainer}>
                {secundaryNews.map((news) => (
                    <Link key={news.id} href={`/news/${news.id}`} className={styles.link}>
                        <SecundaryNews 
                            key={news.id}
                            category={news.categoria} 
                            title={news.titulo} 
                        />
                    </Link>
                ))}
                </div>
            </div>
        </div>
    )
}