import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import Stars from 'components/Stars'

import { productSelector } from 'state/ducks/product'
import { Creators } from 'state/sagas/product'

export default function Rate () {
  const dispatch = useDispatch()
  const { avaliacao_numero, avaliacao_nota } = useSelector(productSelector)

  return (
    <div
      onClick={() => {
        dispatch(Creators.sagaSetRatingQuantity(12))
      }}
    >
      <Stars rate={avaliacao_nota} quantity={avaliacao_numero} />
    </div>
  )
}
