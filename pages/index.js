import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Weather from '../components/weather'


export default function Home() {
  const cities = [
    {
      city_name: 'Tokyo',
      color_name: 'blue'
    },
    {
      city_name: 'London',
      color_name: 'yellow'
    },
    {
      city_name: 'Paris',
      color_name: 'green'
    }, 
    {
      city_name: 'Los Angeles',
      color_name: 'red'
    },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <div className="min-h-screen flex justify-center items-center">
    { 
        cities.map((city,index) => 
        <Weather 
          key={index} 
          city_name={city.city_name} 
          color_name={city.color_name} 
        />)
      }
  </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href={"/hello"}>
            <a  className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
