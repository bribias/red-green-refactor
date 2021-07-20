import { formatResultsErrors } from 'jest-message-util';
import fetch from 'node-fetch';

const fetchQuotes = async () => {
  const result = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const body = await result.json();
  const number = getRandomItem(body);
  const randomQuote = body[number];
  return randomQuote;
};

const getRandomItem = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

export default fetchQuotes;
