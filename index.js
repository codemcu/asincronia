const testCallback = require('./callback/callback');
const testPromise = require('./promises/promise');
const testFetch = require('./fetch/fetch');
const testAsyncAwait = require('./async-await/async_await');


const url = 'https://swapi.co/api/people/1';

function handleError (err) {
  console.log(`${err}`);
}

testCallback(url, (err, resPerson) => {
  if (err) {
    handleError(err);
  } else {
    const homeworld = resPerson.homeworld
    testCallback(homeworld, (err, resHome) => {
      if (err) {
        handleError(err);
      } else {
        console.log(`callback: ${resPerson.name} vive en ${resHome.name}`);
      }
    })
  }
});

let nameTP = '';
testPromise(url)
  .then(person => {
    nameTP = person;
    return testPromise(person.homeworld);
  })
  .then(home => {
    console.log(`promise: ${nameTP.name} y vive en ${home.name}`);
  })
  .catch(err => {
    handleError(err);
  });

let nameTF = '';
testFetch(url)
  .then(res => {
    nameTF = res.name;
    return testFetch(res.homeworld)
  })
  .then(res => {
    console.log(`fetch: ${nameTF} y vive en ${res.name}`);
  })


testAsyncAwait(url);