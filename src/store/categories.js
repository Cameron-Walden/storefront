const initialState = {
  allCategories: [
    {name: 'Music', description: 'Select Genre' },
    {name: 'Books', description: 'Select Genre' }
  ],
  activeCategory: '',
  activeDescription: '',
}

const categoryReducer = (state = initialState, action) => {

  let { type, payload } = action;
  
  switch (type) {
    case 'INACTIVE':
      return initialState;
    case 'ACTIVE':
      return { ...state, activeCategory: payload.category, activeDescription: payload.description }
    default:
      return state;
  }
}

export const inactive = () => {
  return {
    type: 'INACTIVE'
  }
}

export const active = (category, description) => {
  return {
    type: "ACTIVE",
    payload: {
      category,
      description
    }
  }
}

export default categoryReducer;
