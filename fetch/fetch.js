const fetch = require('node-fetch');

function testFetch (url) {
    return fetch(url)
      .then(status);

    function status(res) {
      if (res.ok) {
        return res.json();
      } else {
        return new Error(`Error ${res.status}`);
      }
    };
}

module.exports = testFetch;
