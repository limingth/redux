import React from 'react'
import Product from './Product'
import { getCartProducts } from '../reducers'

const Order = ({ order, products }) => {
  	const order_products = getCartProducts({cart: order, products: products})
  	console.log('order products', order_products)

  	const oplist = order_products.map((product, index) => (
				    <div key={index}>
				    	Product {index+1}: 
				        <Product
				          title={product.title}
				          price={product.price}
				          quantity={product.quantity}
				        />
				    </div>
			    )
	    	)

  	return (
  		<div>
  			{oplist}
  		</div>
  	)
}


const OrdersList  = ({ orders, products }) => {

  const myorders = orders.map((order, index) => (  
    		<div key={index}>
	    		<b>Order No.{index+1}</b>
	    		<Order order={order} products={products}/>
	    		<p>-</p>
	    	</div>
    )
  )

  return (
    <div>
      <h3>Your Order</h3>
      <p>Total: {orders.length} orders</p> 
      <div>{myorders}</div>
    </div>
  )
}

export default OrdersList