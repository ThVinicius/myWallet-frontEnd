import styled from 'styled-components'

const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 36px;
  gap: 13px;

  input {
    width: 326px;
    height: 58px;
    background-color: ${props => props.color};
    padding: 0 15px;
    font: normal 400 20px 'Raleway', sans-serif;
  }

  input::placeholder {
    font: normal 400 20px 'Raleway', sans-serif;
    color: #000000;
    line-height: 23px;
  }

  button {
    width: 326px;
    height: 46px;
    background-color: #a328d6;
    font: normal 700 20px 'Raleway', sans-serif;
    color: #ffffff;
    line-height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props => props.opacity};
  }
`

export { Container }
