import axios from 'axios';

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
    case 'SELECT_CATEGORY':
      return { ...state, activeCategory: payload.category, activeDescription: payload.description }
    default:
      return state;
  }
}

export const selectCategory = (category, description) => async (dispatch) => {
  dispatch ({
    type: 'SELECT_CATEGORY',
    payload: {
      category,
      description
    }
  });
}

export const getCategories = () => async (dispatch) => {
  let response = null;
  try{
    response = await axios.get('http://localhost:3000/categories')
  } catch (error) {
    console.log(error, 'ERROR FROM INSIDE GETCATEGORIES')
  }
  dispatch({
    type: 'GET_CATEGORIES',
    payload: response.data.results
  });
}

export default categoryReducer;
