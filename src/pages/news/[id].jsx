import styles from "./news.module.sass"

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from "../../components/header/Header"

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

  return (
    <div className={styles.container}>
      <Header homePageBack/>
      <div className={styles.content}>
        <h1>{news.titulo}</h1>
        <p>{news.conteudo}</p>
      </div>
    </div>
  )
}