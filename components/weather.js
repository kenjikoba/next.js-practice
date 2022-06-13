import {Button} from 'react-bootstrap'
import styles from '../styles/Home.module.css'


export default function Weather({display_name, page}) {
    return (
      <Button href={`/${page}`} className={styles.push}> 
            {display_name}
      </Button>
    )
    }