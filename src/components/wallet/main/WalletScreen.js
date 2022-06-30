import { useNavigate } from 'react-router-dom'
import { Container, Content, Box1, Box2, Box3 } from './styles'

export default function WalletScreen() {
  const navigate = useNavigate()

  const redirectAdd = string => {
    navigate('/add', { state: string })
  }

  return (
    <Container>
      <Content>
        <Box1>
          <h1>Olá, Fulano</h1>
          <ion-icon name="exit-outline"></ion-icon>
        </Box1>
        <Box2>
          <p>Não há registros de entrada ou saída</p>
        </Box2>
        <Box3>
          <div onClick={() => redirectAdd('entrada')}>
            <ion-icon name="add-circle-outline"></ion-icon>
            <h6>Nova entrada</h6>
          </div>
          <div onClick={() => redirectAdd('saída')}>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <h6>Nova saída</h6>
          </div>
        </Box3>
      </Content>
    </Container>
  )
}
