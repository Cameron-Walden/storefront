import React from 'react';
import { connect } from 'react-redux';

//shoutout to katy roffe for helping me with being able to view items in the cart
const SimpleCart = props => {

  if (props.cart.cart.length > 0) {
    return (
      <>
       <p>Cart:
            {props.cart.cart.map((product, item) => {
              return (
                <h3 key={item}>
                  {product.name}
                </h3> 
              )
            })}
          </p>
      </>
    )
  } else {
    return null
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(SimpleCart);