import Image from 'next/image'
import styles from '../styles/footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
        <a className='no-underline text-color-black'>
          @ Kenjikoba{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </div>
    )
}