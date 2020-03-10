import styled from 'styled-components'

export const Container = styled.div`
  background: #f9f9f9;
  color: #365dae;

  padding: 10px 5px;

  > a {
    text-decoration: none;
    cursor: pointer;
  }

  > a:not(:last-child) {
    padding-right: 10px;
  }

  > a:not(:last-child)::after {
    content: '>';
    padding-left: 10px;
  }
`
