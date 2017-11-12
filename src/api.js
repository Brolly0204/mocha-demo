const axios = require('axios');

function getData() {
  return axios.get('http://127.0.0.1:7000/data')
}
module.exports = getData;
