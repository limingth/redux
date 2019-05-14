import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, del } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, checkout, del }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)} 
    onDelClicked={(id) => del(id)}
  />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout, del }
)(CartContainer)
