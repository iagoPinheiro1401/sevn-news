import styles from "./news.module.sass"

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from "../../components/header/Header"
import NewsWithoutImage from "../../components/articles/primaries/newsWithouImage/NewsWithoutImage"
import Publicity from "../../components/publicity/Publicity"

export default function NewsDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [news, setNews] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchNewsDetail = async () => {
        try {
          const response = await axios.get(`https://sevn-news-api-mu.vercel.app/api/noticia/${id}`)
          setNews(response.data)
        } catch (error) {
          console.error('Error fetching news detail:', error)
        }
      }

      fetchNewsDetail()
    }
  }, [id])

  console.log(news)

  return (
    <div className={styles.container}>
      <Header homePageBack/>
      <div className={styles.content}>
        {news && 
          <NewsWithoutImage 
            title={news.titulo}
            category={news.categoria}
            className={styles.customNews}
          />
        }

        {news && <p className={styles.conteudo}>{news.conteudo[0]}</p>}
        {news && <p className={styles.newsMeta}>{news.dataPostagem} as {news.horarioPostagem}, Por: {news.autor}</p>}
        <Publicity/>

        <div className={styles.conteudoContainer}>
          {news && news.conteudo.slice(1).map((item, index) => (
            <p key={index} className={styles.conteudo}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  )
}