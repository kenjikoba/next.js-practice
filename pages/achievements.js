import Card from '../components/card'
import styles from '../styles/Home.module.css'
import { useEffect,useState } from 'react'
import Head from 'next/head'

export default function Achievements() {
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
        <title>Achievements</title>
      </Head>
 
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
