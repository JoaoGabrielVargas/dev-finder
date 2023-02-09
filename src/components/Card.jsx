import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import image from '../assets/image.jpg';

function Card() {
  const username = 'joao';
  return (
    <Link to={`/profile/${username}`}>
      <div className={styles.card}>
        <div className={styles.details}>
          <img src={image} alt="profile" />
          <div>
            <p>username</p>
            <p>bio</p>
          </div>
        </div>
        <span className="material-symbols-outlined">
          arrow_forward
        </span>
      </div>
    </Link>
  );
}

export default Card;
