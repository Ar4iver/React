import React from 'react'
import './Info.css'
import styles from './Info.module.css'

console.log(styles)

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <h2>heading in the info component</h2>
      <button className="my-button">Click me in the Info component</button>
      <button className={styles.myOtherButton}>Button with local</button>
    </div>
  )
}

export default Info
