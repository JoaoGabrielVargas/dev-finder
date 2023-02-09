import React from 'react';
import Card from '../components/Card';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          Dev Finder
        </h1>
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
        <button type="button"> Search </button>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default Home;
