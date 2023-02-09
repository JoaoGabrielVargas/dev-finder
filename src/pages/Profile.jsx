import React from 'react';
import image from '../assets/image.jpg';
import Card from '../components/Card';
import styles from './Profile.module.css';

function Profile() {
  return (
    <>
      <div className={styles.details}>
        <img src={image} alt="profile" />
        <div className={styles.user}>
          <div className={styles.details_user}>
            <div className={styles.followers_details}>
              <p> 267</p>
              <p> Seguidores </p>
            </div>
            <div className={styles.followers_details}>
              <p> 267</p>
              <p> Seguidores </p>
            </div>
            <div className={styles.followers_details}>
              <p> 267</p>
              <p> Seguidores </p>
            </div>
          </div>
          <div className={styles.username_details}>
            <h3> username</h3>
            <p> description </p>
          </div>
        </div>
      </div>
      <div>
        <Card />
      </div>
    </>
  );
}

export default Profile;
