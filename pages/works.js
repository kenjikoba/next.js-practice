import Card from '../components/card'
import styles from '../styles/Home.module.css'
import { useEffect,useState } from 'react'
import Head from 'next/head'

export default function Works() {
  const myworks = [
    {
      number: "1",
      title: 'ポートフォリオサイト',
      url_work: "https://practice-delta.vercel.app/",
      url_code: "https://github.com/kenjikoba/next.js-practice",
      introduction: "next.jsの練習のためポートフォリオサイトを作りました",
      work_img: "/network.webp"
    },
    {
      number: "2",
      title: 'サッカー選手推薦サイト',
      url_work: "https://soccer-web.herokuapp.com/",
      url_code: "https://github.com/SoccerWeb0000/SoccerWeb",
      introduction: "Djangoを用いて、データベースの構築からデプロイまで一連の作業を練習しました",
      work_img: "/network.webp"
    },
    {
      number: "3",
      title: '電話アプリ',
      url_work: "https://github.com/kenjikoba/phone",
      url_code: "https://github.com/kenjikoba/phone",
      introduction: "C言語のみで電話アプリを作りました",
      work_img: "/network.webp"
    },
    {
      number: "4",
      title: 'ライフゲーム',
      url_work: "https://github.com/kenjikoba/soft2-lifegame",
      url_code: "https://github.com/kenjikoba/soft2-lifegame",
      introduction: "授業の課題でおこなったC言語のみでかいたゲームです",
      work_img: "/network.webp"
    },
    {
      number: "5",
      title: '個人ウェブサイト',
      url_work: "https://github.com/kenjikoba/my-first-website",
      url_code: "https://github.com/kenjikoba/my-first-website",
      introduction: "高校時代に初めてサイトを自分で作ってみた頃の作品です",
      work_img: "/network.webp"
    }
  ]

  return (
      <main className={styles.grid}>
        <Head>
        <title>Works</title>
      </Head>
      
      <div className={styles.big_container}>
        <h1 className={styles.my_works}>My Works</h1>
        </div>
        <div className={styles.work_container}>
        {
          myworks.map((work,index) =>
          <Card 
            key={index}
            number={work.number}
            title={work.title}
            url_work={work.url_work}
            url_code={work.url_code}
            introduction={work.introduction}
            work_img={work.work_img}
          />)
        }
        </div>
      </main>
  )
}
