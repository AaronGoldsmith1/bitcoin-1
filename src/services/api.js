/* eslint-disable no-console */
import axios from 'axios';

// Never do this lol!
const key = '8feb5b31914ce3584de5c396d7d65a39';

const nomics = 'https://api.nomics.com/v1/markets/prices?key='

const pricesEnpoint = coinId => `${nomics}${key}&currency=${coinId}`;

export const getCoinPrices = name => axios.get(pricesEnpoint(name))
  .catch(err => console.error(err))
  .then(res => res);
