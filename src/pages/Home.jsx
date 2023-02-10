import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import CardProfileHome from '../components/CardProfileHome';
import styles from './Home.module.css';
import { getApiUsersGithub } from '../services/api';

function Home() {
  const [user, setUser] = useState('');
  const [details, setDetails] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setUser(e.target.value);
    setErr('');
  };

  const handleClick = async () => {
    setLoading(true);
    await getApiUsersGithub(user)
      .then((res) => setDetails(res.data))
      .catch((error) => setErr(error));
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          Dev_Finder
        </h1>
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Search" onChange={handleSearch} />
        <button type="submit" onClick={handleClick}> Search </button>
      </div>
      { err && 'Não foi possível completar essa busca, tente novamente mais tarde' }
      { loading && <ReactLoading type="spin" color="#8C19D2" height={50} width={50} /> }
      <div>
        {
          details && (
          <CardProfileHome
            image={details.avatar_url}
            username={details.login}
            description={details.bio}
            route={`/profile/${details.login}`}
          />
          )
        }
      </div>
    </div>
  );
}

export default Home;
