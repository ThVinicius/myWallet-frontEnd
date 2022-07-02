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
  justify-content: center;
`
const Box1 = styled.div`
  width: 326px;
  height: 11.39vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font: normal 700 26px 'Raleway', cursive;
    color: #ffffff;
  }

  ion-icon {
    width: 23px;
    height: 24px;
    color: #ffffff;
    cursor: pointer;
  }
`

const Box2 = styled.div`
  width: 326px;
  height: 66.86vh;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    width: 180px;
    height: 46px;
    font: normal 400 20px 'Raleway', cursive;
    line-height: 23px;
    color: #868686;
    text-align: center;
  }
`

const Box3 = styled.div`
  width: 326px;
  height: 21.43vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 155px;
    height: 17.09vh;
    background-color: #a328d6;
    border-radius: 5px;
    padding: 9px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  }

  ion-icon {
    width: 25px;
    height: 25px;
    color: #ffffff;
  }

  h6 {
    width: 64px;
    height: 40px;
    font: normal 700 17px 'Raleway', cursive;
    line-height: 20px;
    color: #ffffff;
  }
`

const Wallet = styled(Box2)`
  padding: 3.44vh 11px;
  flex-direction: column;
  justify-content: flex-start;
  gap: 9px;
  overflow-y: auto;
`

export { Container, Content, Box1, Box2, Box3, Wallet }
