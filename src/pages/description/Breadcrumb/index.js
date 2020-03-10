import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { Container } from './styles'

import { productSelector } from 'state/ducks/product'

import { Creators as MainCreators } from 'state/sagas/main'

export default function Breadcrumb () {
  const { menus } = useSelector(productSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(MainCreators.setTest('Breadcrumb'))
  }, [dispatch])

  return (
    <Container>
      {menus.map(menu => (
        <a key={menu.codigo} href={menu.amigavel}>
          <span>{menu.nome}</span>
        </a>
      ))}
    </Container>
  )
}
