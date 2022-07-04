import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  }

  button, input{
    border: none;
    border-radius: 5px;
  }
  
  button{
    cursor: pointer;
    width: 326px;
    height: 46px;
    background-color: #a328d6;
    font: normal 700 20px 'Raleway', sans-serif;
    color: #ffffff;
    line-height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input{
    width: 326px;
    height: 58px;
    padding: 0 15px;
    font: normal 400 20px 'Raleway', sans-serif;
  }

  input::placeholder {
    font: normal 400 20px 'Raleway', sans-serif;
    color: #000000;
    line-height: 23px;
  }

  a{
    text-decoration: none;
  }

  @media (max-width: 420px){
    input{
    width: 87.6vw;
  }

  button{
    width: 87.6vw;
  }
  }
`

export default GlobalStyle
