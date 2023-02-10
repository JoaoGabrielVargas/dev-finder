const URL_USERS = (user) => `https://api.github.com/users/${user}`;

const URL_REPOS = (user) => `https://api.github.com/users/${user}/repos`;

export { URL_USERS, URL_REPOS };
