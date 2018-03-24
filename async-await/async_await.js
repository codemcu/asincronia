const fetch = require('node-fetch');

async function testAsyncAwait (url) {
  try {
    const response = await fetch(url);
    const person = await response.json();
    const responseHome = await fetch(person.homeworld);
    const home = await responseHome.json();
    console.log(`async/await: ${person.name} y vive en ${home.name}`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = testAsyncAwait;