import { createStore, combineReducers } from 'redux';
import cartReducer from './cart';
import categoryReducer from './categories';
import productReducer from './products';


let reducers = combineReducers({categories: categoryReducer, products: productReducer, cart: cartReducer});

const store = () => {
  return createStore(reducers);
}

export default store;