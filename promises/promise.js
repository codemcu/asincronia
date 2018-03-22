const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function testPromise (url) {

  return new Promise( (resolve, reject) => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          resolve(JSON.parse(xmlhttp.responseText))
        } else {
          reject(new Error(`Error ${xmlhttp.status}`));
        }
      }
    }

    xmlhttp.open('GET', url, true);
    xmlhttp.send(null);
  })

}

module.exports = testPromise;