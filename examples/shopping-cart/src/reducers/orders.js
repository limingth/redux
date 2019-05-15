import { CHECKOUT_SUCCESS } from '../constants/ActionTypes'

const orders = (state = [], action) => {
  console.log('reducers/order state', state)
  console.log('reducers/order action', action) 

  switch (action.type) {
    case CHECKOUT_SUCCESS:
      console.log('reducers/orders CHECKOUT_SUCCESS')
      return [
        ...state,
        action.cart
      ]
    default:
      return state
  }
}

export default orders