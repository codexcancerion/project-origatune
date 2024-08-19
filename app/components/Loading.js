// components/Loading.js
import React from 'react';
import styles from './Loading.css'; // Import CSS styles

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <div className={styles.text}>Loading...</div>
    </div>
  );
};

export default Loading;
