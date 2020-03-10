import { takeEvery, put } from 'redux-saga/effects'

import { Creators as CreatorsProduct } from 'state/ducks/product'

import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  sagaSetRatingQuantity: ['quantity']
})

function * sagaSetRatingQuantity ({ quantity }) {
  yield put(CreatorsProduct.setAvaliacaoQuantidade(quantity))
}

export default [
  takeEvery(Types.SAGA_SET_RATING_QUANTITY, sagaSetRatingQuantity)
]
