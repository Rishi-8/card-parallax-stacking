import React from 'react'
import styles from './style.module.scss'

const index = ({title, description, src, link, color}) => {
  return (
    <div className={styles.cardContainer}>
        <div style={{backgroundColor: color}} className={styles.card}>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default index