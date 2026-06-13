import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h3>Kruel Sama</h3>
        <button className={styles.btn}>My Bad</button>
    </div>
  )
}

export default Header