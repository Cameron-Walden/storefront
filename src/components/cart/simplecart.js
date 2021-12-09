import React from 'react';
import { connect } from 'react-redux'

// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';


const SimpleCart = props => {
  return(
    <>
    <p>CART:</p>
    </>
  )
}

const mapStateToProps = state => {
  return{
    cart: state.cart
  }
}

  
  // const mapDispatchToProps = dispatch => ({

  // });

export default connect(mapStateToProps)(SimpleCart);

