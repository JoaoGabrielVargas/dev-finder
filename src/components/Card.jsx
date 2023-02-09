import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card({username, description, image, route}) {

  return (
    <Link to={route}>
      <div className={styles.card}>
        <div className={styles.details}>
          <img src={image} alt="profile" />
          <div>
            <p>{username}</p>
            <p>{description}</p>
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
