import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title }) => (
	<div>
		{title} - &#36;{price} x {quantity ? `${quantity}` : 0}
	</div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
