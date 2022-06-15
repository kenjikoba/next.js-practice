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
       

        </div>
      </main>
  )
}
