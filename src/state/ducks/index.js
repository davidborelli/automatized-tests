import { combineReducers } from 'redux'
import mainReducer, { mainState } from './main'
import productReducer, { productState } from './product'

export default combineReducers({
  [mainState]: mainReducer,
  [productState]: productReducer
})
