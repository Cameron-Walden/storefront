let initialState = {
  products: [
    {category: 'Music', name: 'jazz', description: 'jazz record', price: '$10', inventory: 10},
    {category: 'Music', name: 'electronic', description: 'electronic record', price: '$5', inventory: 100},
    {category: 'Music', name: 'world', description: 'world music record', price: '$20', inventory: 45},
    {category: 'Music', name: 'pop', description: 'pop record', price: '$25', inventory: 50},
    {category: 'Books', name: 'horror', description: 'horror book', price: '$5', inventory: 60},
    {category: 'Books', name: 'sci-fi', description: 'sci-fi book', price: '$15', inventory: 1},
    {category: 'Books', name: 'fantasy', description: 'fantasy book', price: '$30', inventory: 78},
    {category: 'Books', name: 'historical', description: 'historical book', price: '$7', inventory: 80},
  ],
  activeProduct: '',
  allProducts: [],
}

const productReducer = (state = initialState, action) => {

  let { type, payload } = action;

  switch(type) {
    case 'ACTIVE':
      const products = getProducts(payload.category);
      return {...state, products: products}
      default:
      return state
  }
}

//https://atomizedobjects.com/blog/javascript/how-to-export-multiple-functions-in-javascript/

export const getProducts = category => {
  const products = initialState.products;
  const response = products.filter(product => product.category === category);
  return response;
}

export default productReducer;

// Displays a list of products associated with the selected category

// State should be a list of all products

// Each product should have a category association, name, description, price, inventory count

// Create an action that will trigger when the active category is changed

// HINT: Multiple reducers can respond to the same actions

// Create a reducer that will filter the products list based on the active category