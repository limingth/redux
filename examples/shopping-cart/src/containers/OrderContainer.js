import React from 'react'
import { connect } from 'react-redux'
import OrdersList from '../components/OrdersList'

const OrderContainer = ({ orders, products }) => (
  <OrdersList
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

