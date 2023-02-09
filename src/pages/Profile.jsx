import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import styles from './Profile.module.css';

function Profile() {
  const [ details, setDetails ] = useState({});
  const [repos, setRepos] = useState();
  const { user } = useParams();
  

  useEffect(()=> {
    const getData = async () => {
      await axios.get(`https://api.github.com/users/${user}`)
      .then( async (response) => {setDetails(response.data)
        await axios.get(`https://api.github.com/users/${user}/repos`)
        .then((response) => setRepos(response.data) )
      })
    };
    getData();
  }, []);
  return (
    <>
      <div className={styles.details}>
        <img src={details.avatar_url} alt="profile" />
        <div className={styles.user}>
          <div className={styles.details_user}>
            <div className={styles.followers_details}>
              <p> {details.followers}</p>
              <p> Seguidores </p>
            </div>
            <div className={styles.followers_details}>
              <p> {details.following}</p>
              <p> Seguindo </p>
            </div>
            <div className={styles.followers_details}>
              <p> {details.public_repos}</p>
              <p> Repositórios </p>
            </div>
          </div>
          <div className={styles.username_details}>
            <h3> {details.login}</h3>
            <p> {details.bio} </p>
          </div>
        </div>
      </div>
      <div>
        {repos && repos.map((repo)=> {
          return (
            <Card 
              username={ repo.full_name} 
              description ={repo.description} 
              image ={details.avatar_url} 
              route={repo.html_url}
            />
          )
        })}
      </div>
    </>
  );
}

export default Profile;
