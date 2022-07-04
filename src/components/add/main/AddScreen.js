import { useLocation, Link } from 'react-router-dom'
import { Container, Content, Box } from './styles'
import Form from '../form/Form'

export default function AddScreen() {
  const { type, balance, value, description, id } = useLocation().state

  return (
    <Container>
      <Content>
        <Box>
          <h1>
            {type} {balance}
          </h1>
          <Link to={'/wallet'}>
            <ion-icon name="wallet-outline"></ion-icon>
          </Link>
        </Box>
        <Form
          balance={balance}
          type={type}
          value={value}
          description={description}
          id={id}
        />
      </Content>
    </Container>
  )
}
