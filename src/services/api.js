import axios from 'axios';
import { URL_USERS, URL_REPOS } from '../consts/const';

const getApiUsersGithub = async (user) => {
  try {
    const data = await axios.get(URL_USERS(user));
    return data;
  } catch (error) {
    return error.message;
  }
};

const getApiReposGithub = async (user) => {
  try {
    const data = await axios.get(URL_REPOS(user));
    return data;
  } catch (error) {
    return error.message;
  }
};

export { getApiUsersGithub, getApiReposGithub };
