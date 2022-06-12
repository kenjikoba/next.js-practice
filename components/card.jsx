// REactcomponentの形
import styles from '../styles/card.module.css'
const Card = ({title, href, children = <p>Learn about Next.js in an interactive course with quizzes!</p>})=>{
    return (
        <a href={href} className={styles.card}>
            <h2>{title} &rarr;</h2>
            {children}
          </a>
    )
} 
export default Card