import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Weather from '../components/weather'
import Image from 'next/image'
import {Link as Scroll} from "react-scroll"

export default function Home() {
  const cities = [
    {
      display_name: 'PROFILE',
      page: 'profile'
    },
    {
      display_name: 'WORKS',
      page: 'works'
    },
    {
      display_name: 'CONTACT',
      page: 'contact'
    }, 
    {
      display_name: 'SOCCER',
      page: 'soccer'
    },
    {
      display_name: 'ACHIEVEMENTS',
      page: 'achievements'
    },
    {
      display_name: 'THIS WEBSITE',
      page: ''
    }
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.image}>
      <p>Kenji Kobayashi</p>
      <Scroll to="there" smooth={true} duration={100} offset={-10}>
      <button>
            <Image src="/arrow2.png" alt="Vercel Logo" width={200} height={100} />
          </button>
          </Scroll>
      </div>
      <div id="there" className={styles.background}>
      <div className={styles.view}>
    { 
        cities.map((city,index) => 
        <Weather 
          key={index} 
          display_name={city.display_name} 
          page={city.page}
        />)
      }
  </div>
  </div>
    </div>
  )
}
