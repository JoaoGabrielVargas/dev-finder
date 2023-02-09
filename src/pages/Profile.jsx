import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FaUsers,
  FaHeart,
  FaToolbox,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLink,
  FaTwitter,
} from 'react-icons/fa';
import axios from 'axios';
import Card from '../components/Card';
import styles from './Profile.module.css';

function Profile() {
  const [details, setDetails] = useState({});
  const [repos, setRepos] = useState();
  const [newUser, setNewUser] = useState('');
  const { user } = useParams();

  const handleSearch = (e) => {
    setNewUser(e.target.value);
  };

  const handleClick = async () => {
    await axios.get(`https://api.github.com/users/${newUser}`)
      .then(async (response) => {
        setDetails(response.data);
        await axios.get(`https://api.github.com/users/${newUser}/repos`)
          .then((resRepos) => setRepos(resRepos.data));
      });
  };

  useEffect(() => {
    const getData = async () => {
      await axios.get(`https://api.github.com/users/${user}`)
        .then(async (response) => {
          setDetails(response.data);
          await axios.get(`https://api.github.com/users/${user}/repos`)
            .then((resRepos) => setRepos(resRepos.data));
        });
    };
    getData();
  }, []);

  return (
    <div>
      <header>
        <div>
          <Link to="/">
            <h1> Dev_Finder</h1>
          </Link>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search" onChange={handleSearch} />
          <button type="button" onClick={handleClick}> Search </button>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.user_information}>
          <div className={styles.user_information_name}>
            <img src={details.avatar_url} alt="profile" />
            <div>
              <h3>{details.name}</h3>
              <p>{`@${details.login}`}</p>
            </div>
          </div>
          <p>
            {details.bio}
          </p>
          <div>
            <div className={styles.followers_details}>
              <FaUsers />
              <p>
                {`${details.followers} seguidores`}
              </p>
            </div>
            <div className={styles.followers_details}>
              <FaHeart />
              <p>
                {`${details.following} seguindo`}
              </p>
            </div>
          </div>
          <div>
            <div className={styles.followers_details}>
              <FaToolbox />
              <p>
                {details.company ? details.compaty : 'Empresa não informada'}
              </p>
            </div>
            <div className={styles.followers_details}>
              <FaMapMarkerAlt />
              <p>
                {details.location ? details.location : 'Local não informado'}
              </p>
            </div>
            <div className={styles.followers_details}>
              <FaEnvelope />
              <a href={`mailto:${details.email}`}>
                {details.email ? details.email : 'Email não informado'}
              </a>
            </div>
            <div className={styles.followers_details}>
              <FaLink />
              <a href={details.blog}>
                {details.blog ? details.blog : 'Site não informado'}
              </a>
            </div>
            <div className={styles.followers_details}>
              <FaTwitter />
              <a href={details.twitter_username}>
                {details.twitter_username ? `@${details.twitter_username}` : 'Twitter não informado'}
              </a>
            </div>
          </div>
          <Link to="/">
            <button type="button">Fazer outra pesquisa</button>
          </Link>
        </div>

        <div className={styles.repos}>
          {repos && repos.sort((a, b) => {
            if (a.stargazers_count < b.stargazers_count) return 1;
            if (a.stargazers_count > b.stargazers_count) return -1;
            return 0;
          }).map((repo) => (
            <Card
              key={repo.id}
              username={repo.full_name}
              description={repo.description}
              image={details.avatar_url}
              route={repo.html_url}
              starsCount={repo.stargazers_count}
              updatedAt={repo.updated_at}
            />
          ))}
        </div>
      </div>
    </div>

  );
}

export default Profile;
