import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  DEL_FROM_CART
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  console.log('reducers/addedIds state', state)
  console.log('reducers/addedIds action', action)
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    case DEL_FROM_CART:
      console.log('reducers/addedIds DEL_FROM_CART')
      if (state[action.productId] )
      return state
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  console.log('reducers/quantityById state', state)
  console.log('reducers/quantityById action', action) 

  const productId = action.productId || 0
  console.log('productId', productId)
  console.log('state[productId]', state[productId]) 

  switch (action.type) {
    case ADD_TO_CART:
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case DEL_FROM_CART:
      console.log('reducers/quantityById DEL_FROM_CART')       
      return { ...state,
        [productId]: (state[productId] || 0) - 1
      }
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {

  console.log('reducers/cart state', state)
  console.log('reducers/cart action', action)

  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    case ADD_TO_CART:  // if add action, then addedIds first
      console.log('reducers/cart ADD_TO_CART')
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      }
    case DEL_FROM_CART: // if del action, then quantityById first
      console.log('reducers/cart DEL_FROM_CART')
      return {
        quantityById: quantityById(state.quantityById, action),
        addedIds: addedIds(state.addedIds, action),
      } 
    default:  // deal with ADD_TO_CART and DEL_FROM_CART
      console.log('reducers/cart default')
      return initialState
  }
}

export default cart
