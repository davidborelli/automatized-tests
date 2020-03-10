import React from 'react'

import { Container, StarContainer, QuantityStarContainer, Star } from './styles'

export default function Stars ({ rate, quantity }) {
  const ss = rate => {
    const MAX_STARS = 5
    const f = (i, rate, r) => {
      if (i === 0) return r

      const html = <Star key={i} shiny={rate >= i} />
      return f(i - 1, rate, [html, ...r])
    }

    return f(MAX_STARS, rate, [])
  }

  // const MAX_STARS = 5
  // const retruns = []

  // for (let i = 0; i < Array(rate).length; i++) {
  //   retruns.push(<Star shiny={true} />)
  // }

  // const rest = MAX_STARS - rate

  // if (rest > 0) {
  //   for (let i = 0; i < Array(rest).length; i++) {
  //     retruns.push(<Star />)
  //   }
  // }

  return (
    <Container>
      {/* <StarContainer>{retruns}</StarContainer> */}
      <StarContainer>{ss(rate)}</StarContainer>
      <QuantityStarContainer>{quantity}</QuantityStarContainer>
    </Container>
  )
}
