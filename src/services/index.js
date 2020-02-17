import axios from 'axios';

const BASE_URL = "https://stark-springs-85797.herokuapp.com/";
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }  
});

export default API;