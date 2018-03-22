const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function testCallback (url, callback) {

  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        callback(null, JSON.parse(xmlhttp.responseText));
      } else {
        callback(new Error(`Error ${xmlhttp.status}`), null);
      }
    }
  };

  xmlhttp.open('GET', url, true);
  xmlhttp.send(null);
}

module.exports = testCallback;