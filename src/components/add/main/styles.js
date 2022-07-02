import styled from 'styled-components'

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

  h1 {
    font: normal 700 26px 'Raleway', sans-serif;
    line-height: 50px;
    color: #ffffff;
  }
`

const Box = styled.div`
  width: 326px;
  margin-top: 3.74vh;
`

export { Container, Content, Box }
