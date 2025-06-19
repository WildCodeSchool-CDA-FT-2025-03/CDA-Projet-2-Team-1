import axios from 'axios';

const emailClient = axios.create({
  baseURL: 'http://email-service:9501/',
});

export default emailClient;
