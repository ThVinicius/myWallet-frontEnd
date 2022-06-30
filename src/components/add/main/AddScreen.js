import { useEffect, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Container, Content, H2 } from './styles'
import Form from '../form/Form'
import { UserContext } from '../../../context/auth'

export default function AddScreen() {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const location = useLocation()
  console.log(location)

  useEffect(() => {
    const tokenStringify = localStorage.getItem('token')
    const token = JSON.parse(tokenStringify)

    if (token !== null) {
      user.token = token

      navigate('/wallet')
    }
  }, [])

  return (
    <Container>
      <Content>
        <h1>MyWallet</h1>
        <Form />
        <H2 to="/register">Primeira vez? Cadastre-se!</H2>
      </Content>
    </Container>
  )
}
