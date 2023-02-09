import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import styles from './Card.module.css';

function Card({
  username, description, image, route, starsCount, updatedAt,
}) {
  function formatDate(date, format) {
    const map = {
      mm: date.getMonth() + 1,
      dd: date.getDate(),
      aaaa: date.getFullYear(),
    };
    return format.replace(/mm|dd|aaaa/gi, (matched) => map[matched]);
  }

  const calcUpdatedAt = () => {
    const updatedDate = updatedAt.split('T')[0];
    const today = new Date();
    const todayDateFormatted = formatDate(today, 'aaaa-mm-dd');
    const diffInMins = new Date(todayDateFormatted) - new Date(updatedDate);
    const diffInDays = diffInMins / (1000 * 60 * 60 * 24);
    return Math.round(diffInDays);
  };

  return (
    <Link to={route}>
      <div className={styles.card}>
        <div className={styles.details}>
          <img src={image} alt="profile" />
          <div className={styles.repo_details}>
            <h3>{username}</h3>
            <p>{description || 'Descrição não informada'}</p>
            <div className={styles.stars}>
              <FaStar />
              <p>{starsCount}</p>
              <p> &#8212;</p>
              <p>
                {`Atualizado há ${calcUpdatedAt()} dias`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  username: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  route: PropTypes.string,
  starsCount: PropTypes.number,
  updatedAt: PropTypes.string,
};

export default Card;
