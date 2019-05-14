import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART, DEL_FROM_CART } from '../constants/ActionTypes'

const products = (state, action) => {
  console.log('reducers/products state', state)
  console.log('reducers/products action', action) 

  switch (action.type) {
    case ADD_TO_CART:
      console.log('reducers/products ADD_TO_CART')
      return {
        ...state,
        inventory: state.inventory - 1
      }
    case DEL_FROM_CART:
      console.log('reducers/products DEL_FROM_CART')
      return {
        ...state,
        inventory: state.inventory + 1
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  console.log('reducers/byId state', state)
  console.log('reducers/byId action', action) 

  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds,
})

export const getProduct = (state, id) =>
  state.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))
