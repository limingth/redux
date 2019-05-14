import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { getTotal, getCartProducts } from '../reducers'

const Order  = ({ orders, products }) => {
  let order_count = 0;

  const myorders = orders.map(order => {
  	const cart = order
  	const mystate = {cart: {}, products: {}}
  	mystate.cart = cart
  	mystate.products = products

  	console.log('order', mystate)
  	const order_products = getCartProducts(mystate)
  	console.log('order products', order_products)

  	order_count++
    //console.log("one order", one_order)
    return (  
    		<div>
    		<h2> Order No.{order_count}</h2>
		    { order_products.map(product => 
			    <div>
			        <Product
			          title={product.title}
			          price={product.price}
			          quantity={product.quantity}
			        />
			    </div>
	    	)}
	    	</div>
    )
  })

  return (
    <div>
      <h3>Your Order</h3>
      <p>Total: {orders.length} orders</p> 
      <div>{myorders}</div>
    </div>
  )
}

export default Order