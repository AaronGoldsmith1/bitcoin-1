// Services
import { getCoinPrices } from '../services/api';
import { pluckGdaxPrice } from '../utils/coinPrice';

// Action Types
import { GET_COIN_PRICE } from '../actionTypes';

// Action creators
export function get(price) {
  return { type: GET_COIN_PRICE, price };
}

// GET coin data from the coinmarketcap API.
export const getCoin = (name) => dispatch => getCoinPrices(name).then((res) => {
  const coinPrice = pluckGdaxPrice(res.data);
  dispatch(get(coinPrice));
});
