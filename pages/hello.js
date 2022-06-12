import Card from '../components/card'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';

export default function Home() {

  return (
    <Layout className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>

          <Card title="documentation" href="https://nextjs.org/docs">
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>
  
          <Card title="hello"/> 

          <Card title="example" href="https://github.com/vercel/next.js/tree/canary/examples">
            {/** childrenはこの中のこと */}
            <img src="/vercel.svg"/>
          </Card>

          <Card title="Deploy" href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </Card>

        </div>
      </main>
    </Layout>
  )
}
