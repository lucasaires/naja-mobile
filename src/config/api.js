import axios from 'axios';

const api = axios.create({
  baseURL: 'https://controlenaja.herokuapp.com',
});

/**api.interceptors.request.use(async (config) => {
  const token = await;

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});**/

export default api;
