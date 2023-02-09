import React, {useState} from 'react';
import axios from 'axios'
import Card from '../components/Card';
import styles from './Home.module.css';

function Home() {
  const [user, setUser] = useState('');
  const [details, setDetails] = useState('');

  const handleSearch = (e) => {
    setUser(e.target.value);
  }

  const handleClick = async () => {
    await axios.get(`https://api.github.com/users/${user}`)
    .then((response) => setDetails(response.data))
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          Dev Finder
        </h1>
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Search" onChange={handleSearch} />
        <button type="button" onClick={handleClick}> Search </button>
      </div>
      <div>
        {
          details && <Card 
          image={ details.avatar_url } 
          username={details.login} 
          description={details.bio} 
          route={`/profile/${details.login}`}
        />
        }
      </div>
    </div>
  );
}

export default Home;
