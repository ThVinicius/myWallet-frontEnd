import styled from 'styled-components'

const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5.99vh;
  margin-bottom: 1.94vh;
  gap: 1.94vh;
  align-items: center;

  input {
    background-color: ${props => props.color};
    font: normal 400 20px 'Roboto', sans-serif;
  }

  button {
    opacity: ${props => props.opacity};
  }
`
const Input = styled.input`
  color: ${props => props.valueColor};
`

export { Container, Input }
