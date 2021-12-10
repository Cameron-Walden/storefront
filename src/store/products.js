let initialState = {
  allProducts: [
    {category: 'Music', name: 'jazz', description: 'jazz record', price: 25, inventory: 10},
    {category: 'Music', name: 'electronic', description: 'electronic record', price: 50, inventory: 13},
    {category: 'Music', name: 'world', description: 'world music record', price: 15, inventory: 11},
    {category: 'Music', name: 'pop', description: 'pop record', price: 27, inventory: 4},
    {category: 'Books', name: 'horror', description: 'horror book', price: 19, inventory: 60},
    {category: 'Books', name: 'sci-fi', description: 'sci-fi book', price: 15, inventory: 1},
    {category: 'Books', name: 'fantasy', description: 'fantasy book', price: 69, inventory: 3},
    {category: 'Books', name: 'historical', description: 'historical book', price: 5, inventory: 80},
  ],
  activeProduct: '',
  products: [],
}

const productReducer = (state = initialState, action) => {

  let { type, payload } = action;

  switch (type) {
    case 'ACTIVE':
      const products = getProducts(payload.category);
      return { ...state, products: products }
    default:
      return state;
  }
}

export const getProducts = (category) => {
  const products = initialState.allProducts;
  const response = products.filter(product => product.category === category);
  return response;
}

export default productReducer;
