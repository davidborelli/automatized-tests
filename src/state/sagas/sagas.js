import { all } from 'redux-saga/effects'
import MainSagas from './main'
import ProductSagas from './product'

function * rootSagas () {
  yield all([...MainSagas, ...ProductSagas])
}

export default rootSagas
