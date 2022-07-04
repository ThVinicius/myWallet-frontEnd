import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 375px;
  height: 100vh;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font: normal 400 32px 'Saira Stencil One', cursive;
    line-height: 50px;
    color: #ffffff;
  }

  @media (max-width: 420px) {
    width: 100vw;
  }
`
const H2 = styled(Link)`
  font: normal 700 15px 'Raleway', sans-serif;
  line-height: 18px;
  color: #ffffff;
`

export { Container, Content, H2 }
