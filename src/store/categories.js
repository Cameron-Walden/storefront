let initialState = {
  categories: [
    {categoryName: 'Music', description: 'Select genre' },
    {categoryName: 'Books', description: 'Select genre' },
  ],
  activeCategory: '',
  activeDescription: ''
}

const categoryReducer = (state = initialState, action) => {

  let { type, payload } = action;

  switch(type){
    case 'ACTIVE':
      return {...state, activeCategory: payload.category};
      case 'INACTIVE':
        return initialState;
        default:
          return state;
  }
}

export const active = (category, description) => {
  return {
    type: 'ACTIVE',
    payload: {
      category,
      description
    }
  }
}

export const inactive = () => {
  return {
    type: 'INACTIVE'
  }
}

export default categoryReducer;

// Shows a list of all categories

// Dispatches an action when one is clicked to “activate” it

// State should contain a list of categories as well as the active category

// Each category should have a normalized name, display name, and a description

// Create an action that will trigger the reducer to change the active category

// Update the active category in the reducer when this action is dispatched