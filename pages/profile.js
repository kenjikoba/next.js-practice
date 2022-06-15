import Card from '../components/card'
import styles from '../styles/Home.module.css'
import { useEffect,useState } from 'react'
import Head from 'next/head'
import GoogleMapReact from 'google-map-react'


export default function Profile() {
  // 東大の緯度・経度を設定
  const defaultLatLng = {
    lat: 35.712677,
    lng: 139.761989
  };
  // マーカーを設定
  const handleApiLoaded = ({ map, maps }) => {
    new maps.Marker({
      map,
      position: defaultLatLng,
    });
  };
  // クリック設定
  const setLatLng = ({ x, y, lat, lng, event }) => {
    console.log(lat);
    console.log(lng);
  };
  
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users')
      const data = await response.json()
      setUsers(data.users)
    }
    fetchUsers()
  },[])

  return (
      <main className={styles.main}>
        <Head>
        <title>Profile</title>
      </Head>

      <div style={{ height: '600px', width: '800px' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_OW_MAPS_API_KEY }}
        defaultCenter={defaultLatLng}
        defaultZoom={16}
        onGoogleApiLoaded={handleApiLoaded}
        onClick={setLatLng}
        />
      </div>
 
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

        <div className={styles.grid}>
          

          <Card title="documentation" Link href={"/"}>
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
  )
}
