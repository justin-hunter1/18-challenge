const usernames = [
  'aaron',
  'brian',
  'chris',
  'james',
  'joe'
];

const email = [
  'aaron@aaron.com',
  'brian@brian.com',
  'chris@chris.com',
  'jame@james.com',
  'joe@joe.com'
];

const thought = [
  'I wish',
  'What is going on',
  'Hello',
  'This is a test',
  'Eat, Sleep, Rave, Repeat',
  'Not on your best day'
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(usernames)} ${getRandomArrItem(usernames)}`;

// Function to generate random applications that we can add to the database. Includes application tags.
const getRandomApplications = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      description: getRandomArrItem(email),
      buildSuccess: Math.random() < 0.5,
      tags: [...getApplicationTags(3)],
    });
  }
  return results;
};

// Create the tags that will be added to each application
const getApplicationTags = (int) => {
  if (int === 1) {
    return getRandomArrItem(thought);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      tagBody: getRandomArrItem(possibleTags),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomApplications };
