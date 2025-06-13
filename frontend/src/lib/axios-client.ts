import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `/auth`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
