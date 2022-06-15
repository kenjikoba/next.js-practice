import Card from '../components/card'
import styles from '../styles/Home.module.css'
import { useEffect,useState } from 'react'
import Head from 'next/head'

export default function Works() {
  const myworks = [
    {
      number: "1",
      title: '個人ウェブサイト',
      url: "https://github.com/vercel/next.js/tree/canary/examples",
      introduction: "自己紹介ページが欲しくなったために作ってみました",
      work_img: "/network.webp"
    },
    {
      number: "2",
      title: '個人ウェブサイト',
      url: "https://github.com/vercel/next.js/tree/canary/examples",
      introduction: "自己紹介ページが欲しくなったために作ってみました",
      work_img: "/network.webp"
    },
    {
      number: "3",
      title: '個人ウェブサイト',
      url: "https://github.com/vercel/next.js/tree/canary/examples",
      introduction: "自己紹介ページが欲しくなったために作ってみました",
      work_img: "/network.webp"
    },
    {
      number: "4",
      title: '個人ウェブサイト',
      url: "https://github.com/vercel/next.js/tree/canary/examples",
      introduction: "自己紹介ページが欲しくなったために作ってみました",
      work_img: "/network.webp"
    },
    {
      number: "5",
      title: '個人ウェブサイト',
      url: "https://github.com/vercel/next.js/tree/canary/examples",
      introduction: "自己紹介ページが欲しくなったために作ってみました",
      work_img: "/network.webp"
    },
    {
      number: "6",
      title: '個人ウェブサイト',
      url: "https://github.com/vercel/next.js/tree/canary/examples",
      introduction: "自己紹介ページが欲しくなったために作ってみました",
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
            url={work.url}
            introduction={work.introduction}
            work_img={work.work_img}
          />)
        }
        </div>
      </main>
  )
}
