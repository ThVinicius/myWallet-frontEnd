import { useLocation, Link } from 'react-router-dom'
import { Container, Content, Box } from './styles'
import Form from '../form/Form'

export default function AddScreen() {
  const { state } = useLocation()

  return (
    <Container>
      <Content>
        <Box>
          <h1>Nova {state}</h1>
          <Link to={'/wallet'}>
            <ion-icon name="wallet-outline"></ion-icon>
          </Link>
        </Box>
        <Form type={state} />
      </Content>
    </Container>
  )
}
