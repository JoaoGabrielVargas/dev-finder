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
import ReactLoading from 'react-loading';
import Card from '../components/Card';
import styles from './Profile.module.css';
import { getApiReposGithub, getApiUsersGithub } from '../services/api';

function Profile() {
  const [details, setDetails] = useState({});
  const [repos, setRepos] = useState();
  const [newUser, setNewUser] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useParams();

  const handleSearch = (e) => {
    setNewUser(e.target.value);
  };

  const handleClick = async () => {
    setLoading(true);
    await getApiUsersGithub(newUser).then(async (response) => {
      setDetails(response.data);
      await getApiReposGithub(newUser).then((resRepos) => setRepos(resRepos.data));
    }).catch((error) => setErr(error));
    setLoading(false);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await getApiUsersGithub(user).then(async (response) => {
        setDetails(response.data);
        await getApiReposGithub(user).then((resRepos) => setRepos(resRepos.data));
      });
      setLoading(false);
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
      { err && 'Não foi possível completar essa busca, tente novamente mais tarde' }
      <div className={styles.container}>
        <div className={styles.user_information}>
          <div className={styles.user_information_name}>
            <img src={details.avatar_url} alt="profile" />
            <div>
              <h3>{details.name}</h3>
              <p>{`@${details.login}`}</p>
            </div>
          </div>
          <p className={styles.bio}>
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
              {details.email ? (
                <a href={`mailto:${details.twitter_username}`}>
                  {details.email}
                </a>
              ) : 'Email não informado'}
            </div>
            <div className={styles.followers_details}>
              <FaLink />
              {details.blog ? (
                <a href={details.blog}>
                  {details.blog}
                </a>
              ) : 'Site não informado'}
            </div>
            <div className={styles.followers_details}>
              <FaTwitter />
              {details.twitter_username ? (
                <a href={`https://www.twitter.com/${details.twitter_username}`}>
                  {details.twitter_username}
                </a>
              ) : 'Twitter não informado'}

            </div>
          </div>
          <Link to="/">
            <button type="button">Fazer outra pesquisa</button>
          </Link>
        </div>

        <div className={styles.repos}>
          { loading && <ReactLoading type="spin" color="#8C19D2" height={50} width={50} /> }
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
