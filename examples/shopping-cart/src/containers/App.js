import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import OrderContainer from './OrderContainer'

const App = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
    <hr/>
    <OrderContainer />
  </div>
)

export default App
