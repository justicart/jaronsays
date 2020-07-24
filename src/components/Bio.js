import React from 'react'
import styles from './Bio.module.css'
import jaron from './j.jpg'

function Bio(props) {
  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={jaron} alt="Me" />
      <p>
        Things that Jaron says.
        <br />
        Some of them are worth saving for posterity.
      </p>
    </div>
  )
}

export default Bio
