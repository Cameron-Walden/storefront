let initialState = {
  cart: [],
}

const cartReducer = (state = initialState, action) => {
  const {type, payload } = action;

  switch(type){
    case 'ADD_TO_CART':
      return{...state, cart: [...state.cart, payload]}
      default:
        return state;
  }
}

export const addToCart = name =>{
  return {
    type: 'ADD_TO_CART',
    payload: name
  }
}

export default cartReducer;
