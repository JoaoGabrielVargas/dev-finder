import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function CardProfileHome({
  username, description, image, route,
}) {
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
      </div>
    </Link>
  );
}

CardProfileHome.propTypes = {
  username: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  route: PropTypes.string,
};

export default CardProfileHome;
