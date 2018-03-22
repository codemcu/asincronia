const testCallback = require('./callback/callback');
const testPromise = require('./promises/promise');

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

let name = '';
testPromise(url)
  .then(person => {
    name = person;
    return testPromise(person.homeworld);
  })
  .then(home => {
    console.log(`promise: ${name.name} y vive en ${home.name}`);
  })
  .catch(err => {
    handleError(err);
  });