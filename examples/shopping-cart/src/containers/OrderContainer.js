import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTotal, getCartProducts } from '../reducers'
import Order from '../components/Order'

const OrderContainer = ({ orders, products }) => (
  <Order
    orders={orders}
    products={products}
  />
)

const mapStateToProps = (state) => ({
  orders: state.orders,  //[{id: 1, time: "7:30"}, {id:2, time:"9:00"}], //getOrders(state),
  products: state.products,
})

export default connect(
  mapStateToProps,
  { }
)(OrderContainer)
