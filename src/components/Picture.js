import React from 'react';
import styles from './Picture.module.css'
import jaron from './j.jpg'

function Picture() {
  return (
    <img className={styles.picture} src={jaron} alt="Me" />
  );
}

export default Picture;
