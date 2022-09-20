// Reactcomponentの形
import styles from '../styles/card.module.css'
import Image from 'next/image'
import {Button} from 'react-bootstrap'


const Card = ({number, title, url_work, url_code, introduction, work_img})=>{
    return (
        <Button href={`/${url_work}`} className={styles.card}> 
            <div className={styles.title_section}>
            <h2>
                {title}
            </h2>
            </div>
            <div className={styles.image_section}>
            <Image src={work_img} height={200} width={200} className={styles.image}></Image>
            </div>
            <div className={styles.introduction_section}>
            <p>
                {introduction}
            </p>
            </div>
            <div className={styles.button_section}>
                <div className={styles.button_itself}>
                <Button href={`${url_work}`} className={styles.view_button}>
                    <p className={styles.view_word}>View Work</p>
                </Button>
                </div>
                <div className={styles.button_itself}>
                <Button href={`${url_code}`} className={styles.view_button}>
                    <p className={styles.view_word}>View Code</p>
                </Button>
                </div>
            </div>
      </Button>
    )
} 
export default Card