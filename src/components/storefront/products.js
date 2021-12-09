import React from "react";
import { active, inactive } from '../../store/categories.js';
import { addToCart } from  "../../store/cart.js";
import { getProducts } from "../../store/products";
import { connect } from "react-redux";

// const getProducts = category => {
//   const products = initialState.products;
//   const response = products.filter(product => product.category === category);
//   return response;
// }


const viewProducts = (props) => {
  return (
    <>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    activeCategory: state.activeCategory,
    activeDescription: state.activeDescription,
  };
};

// const mapDispatchToProps = () => {
//   active,
//   inactive,
//   addToCart,
//   getProducts
// }

const dispatch = {
  active,
  inactive,
  addToCart,
  getProducts,
};

export default connect(mapStateToProps, dispatch)(viewProducts);
