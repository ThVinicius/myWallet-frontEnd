import { Container, Content, H2 } from './styles'
import Form from '../form/Form'

export default function Registercreen() {
  return (
    <Container>
      <Content>
        <h1>MyWallet</h1>
        <Form />
        <H2 to="/">Já tem uma conta? Entre agora!</H2>
      </Content>
    </Container>
  )
}
