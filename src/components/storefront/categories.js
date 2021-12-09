import React from 'react';
import { connect } from 'react-redux';
import {active, inactive } from '../../store/categories.js'
import { Button } from '@material-ui/core';


// const active = (category, description) => {
//   return {
//     type: 'ACTIVE',
//     payload: {
//       category,
//       description
//     }
//   }
// }

// const inactive = () => {
//   return {
//     type: 'INACTIVE'
//   }
// }

const viewCategories = props => {

  return(
    <>
    <h3>Categories:</h3>
    {/* <button onClick={() => props.active('Music', 'Music')}>Music</button>
    <button onClick={() => props.active('Books', 'Books')}>Books</button> */}
    <Button onClick={() => props.active('Music')}variant="contained" color="primary">Music</Button>
    <Button onClick={() => props.active('Music')}variant="contained" color="primary">Books</Button>
    <p>{props.activeDescription}</p>
    </>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products,
    activeCategory: state.categories.activeCategory,
    activeDescription: state.categories.activeDescription
  }
}

const mapDispatchToProps = {
  active,
  inactive
}

export default connect(mapStateToProps, mapDispatchToProps)(viewCategories);
