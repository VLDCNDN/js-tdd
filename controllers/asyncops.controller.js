const axios = require('axios');

class AsyncOps {
  
  jokes() {
    return axios.get('https://api.chucknorris.io/jokes/random');
  }
}

module.exports = AsyncOps;
