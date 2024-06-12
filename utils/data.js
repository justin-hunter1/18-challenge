const thought = [
  'I wish',
  'What is going on',
  'Hello',
  'This is a test',
  'Eat, Sleep, Rave, Repeat',
  'Not on your best day'
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random thought
const getThought = () =>
  `${getRandomArrItem(thought)}`;


// Export the functions for use in seed.js
module.exports = { getThought };
