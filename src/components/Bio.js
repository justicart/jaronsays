import React from 'react'
import styles from './Bio.module.css'
import Picture from './Picture'

function Bio(props) {
  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <Picture />
      <p className={styles.text}>
        Some things that Jaron said.
        <br />
        Sometimes they're worth saving for posterity.
      </p>
    </div>
  )
}

export default Bio
