import styles from '../styles/Home.module.css'
import { useEffect,useState } from 'react'
import Head from 'next/head'

export default function Contact() {

  const registerUser = async event => {
    event.preventDefault()
 
    const res = await fetch('/api/send', {
      body: JSON.stringify({
        email: event.target.email.value,
        message: event.target.message.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
 
    const result = await res.json()

  }

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
        <title>Contact</title>
      </Head>

      <div className="container mt-5">
      <form onSubmit={registerUser}>
        <div className="mb-3">
          <label htmlFor="email" className={styles.contact_words}>メールアドレス</label>
          <input id="email" name="email" type="email" className="form-control" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label htmlFor="message"  className={styles.contact_words}>問合せ内容</label>
          <textarea id="message" name="message" className="form-control" rows="3"></textarea>
        </div>
        <div className="mb-3">
          <button type="submit" className={styles.send}>送信</button>
        </div>
      </form>
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