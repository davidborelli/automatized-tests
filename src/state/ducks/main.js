import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  setTest: ['text']
})

const INITIAL_STATE = {}

const setTest = (state = INITIAL_STATE, { text }) => ({
  ...state,
  text
})

export default createReducer(INITIAL_STATE, {
  [Types.SET_TEST]: setTest
})

const mainState = 'mainState'

const mainSelector = state => state[mainState]
export { mainSelector, mainState }
