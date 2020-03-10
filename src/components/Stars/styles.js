import styled from 'styled-components'

export const Container = styled.div``

export const StarContainer = styled.span``
export const QuantityStarContainer = styled.span``

export const Star = styled.span`
  color: ${props => (props.shiny ? '#FEC000' : '#ddd')};

  ::after {
    content: '★';
  }
`
