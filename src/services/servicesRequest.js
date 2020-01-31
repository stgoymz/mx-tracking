import API from './index';
const qs = require('querystring');
const ENDPOINT = {
  RELOAD: 'reload'
}

const services = {
  request: (payload) => new Promise(
    (resolve, reject) => {
      API.post(ENDPOINT.RELOAD, qs.stringify(payload))
        .then(
          response => response.data
        )
        .then(
          data => resolve(data)
        )
        .catch(error => reject(error))
    }
  ), 
}


export default services;