import { takeEvery, put } from 'redux-saga/effects'

import { Creators as CreatorsMain } from 'state/ducks/main'

export const Types = {
  setTest: 'SAGA_SET_TEST'
}

export const Creators = {
  setTest: text => ({
    type: Types.setTest,
    text
  })
}

function * setTest ({ text }) {
  yield put(CreatorsMain.setTest(text))
}

export default [takeEvery(Types.setTest, setTest)]
