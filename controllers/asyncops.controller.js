const axios = require('axios');

class AsyncOps {
  
  jokes() {
    return axios.get('https://api.chucknorris.io/jokes/random');
  }

  isBirthday(isSick) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(!isSick) {
          resolve(2);
        } else {
          reject(new Error("He's/She's sick!"));
        }
      }, 2000);
    });
  }
}

module.exports = AsyncOps;
