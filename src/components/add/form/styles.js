import styled from 'styled-components'

const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5.99vh;
  margin-bottom: 1.94vh;
  gap: 1.94vh;

  input {
    background-color: ${props => props.color};
    font: normal 400 20px 'Roboto', sans-serif;
  }

  button {
    opacity: ${props => props.opacity};
  }
`

export { Container }
