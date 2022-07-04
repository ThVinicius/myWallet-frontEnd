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

  @media (max-width: 420px) {
    width: 100vw;
  }
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
    font-size: 35px;
    color: #ffffff;
    cursor: pointer;
  }

  @media (max-width: 420px) {
    width: 92.6vw;
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

  @media (max-width: 420px) {
    & {
      width: 92.6vw;
    }

    h2 {
      width: 42.85vw;
    }
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

  @media (max-width: 420px) {
    & {
      width: 92.6vw;
    }

    div {
      width: 44.6vw;
    }

    ion-icon {
      width: 45px;
      height: 45px;
    }
  }
`

const Wallet = styled(Box2)`
  flex-direction: column;
  justify-content: space-between;

  & > div:first-child {
    width: 326px;
    height: 62.4vh;
    padding: 1.44vh 11px;
    display: flex;
    flex-direction: column;
    gap: 2.7vh;
    overflow-y: auto;
    overflow-x: hidden;
  }

  @media (max-width: 420px) {
    & > div:first-child {
      width: 92.6vw;
    }
  }
`

const Balance = styled.div`
  width: 326px;
  height: 4.49vh;
  padding: 0 11px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h6 {
    font: normal 700 17px 'Raleway', cursive;
    line-height: 20px;
    color: #000000;
  }

  h5 {
    font: normal 400 17px 'Roboto', sans-serif;
    line-height: 20px;
    color: ${props => props.valueColor};
  }

  @media (max-width: 420px) {
    & {
      width: 92.6vw;
    }
  }
`

export { Container, Content, Box1, Box2, Box3, Wallet, Balance }
