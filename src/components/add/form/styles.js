import styled from 'styled-components'

const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 36px;
  gap: 13px;

  input {
    background-color: ${props => props.color};
  }

  button {
    opacity: ${props => props.opacity};
  }
`

export { Container }
