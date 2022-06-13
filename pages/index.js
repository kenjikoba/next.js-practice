import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Weather from '../components/weather'


export default function Home() {
  const cities = [
    {
      display_name: 'PROFILE',
      color_name: 'blue',
      page: ''
    },
    {
      display_name: 'WORKS',
      color_name: 'yellow',
      page: 'hello'
    },
    {
      display_name: 'CONTACT',
      color_name: 'green',
      page: 'contact'
    }, 
    {
      display_name: 'SOCCER',
      color_name: 'red',
      page: 'hello'
    },
    {
      display_name: 'QUALIFICATION',
      color_name: 'purple',
      page: ''
    },
    {
      display_name: 'THIS WEBSITE',
      color_name: 'pink',
      page: ''
    }
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <div className="min-h-screen flex justify-center items-center flex-wrap">
    { 
        cities.map((city,index) => 
        <Weather 
          key={index} 
          display_name={city.display_name} 
          color_name={city.color_name} 
          page={city.page}
        />)
      }
  </div>
    </div>
  )
}
