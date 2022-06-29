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
  }

  a{
    text-decoration: none;
  }
`

export default GlobalStyle
