import { Container, Content, H2 } from './styles'
import Form from '../form/Form'

export default function LoginScreen() {
  return (
    <Container>
      <Content>
        <h1>MyWallet</h1>
        <Form />
        <H2 to="/cadastro">Primeira vez? Cadastre-se!</H2>
      </Content>
    </Container>
  )
}
