import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../../../context/auth'
import { Container } from './styles'
import {
  spinnerLoading,
  disableInput,
  inputColorLoading,
  opacityButton
} from '../../../shared/formFunctions'

export default function Form() {
  const [input, setInput] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  const hanleChangeInputEmail = e => {
    setInput({ ...input, email: e })
  }

  const hanleChangeInputPassword = e => {
    setInput({ ...input, password: e })
  }

  const toSend = event => {
    event.preventDefault()
    if (loading === true) return
    setLoading(true)

    const URL = `${process.env.REACT_APP_API_URL}/login`

    const promise = axios.post(URL, input)

    promise
      .then(res => {
        user.token = res.data.token

        const tokenstrinfy = JSON.stringify(user.token)
        localStorage.setItem('token', tokenstrinfy)

        navigate('/wallet')
      })
      .catch(res => {
        setLoading(false)
        switch (true) {
          case res.response.status === 401:
            alert('E-mail ou senha inválidos')
            break

          case res.response.status === 400:
            alert(
              'Os dados digitados estão fora do padrão aceito, por favor digite um email e uma senha válidos'
            )
            break

          case res.response.status === 500:
            alert(res.message)
            break

          default:
            break
        }
      })
  }

  return (
    <Container
      color={inputColorLoading(loading)}
      opacity={opacityButton(loading)}
      onSubmit={toSend}
    >
      <input
        type="email"
        placeholder="E-mail"
        required
        disabled={disableInput(loading)}
        value={input.email}
        onChange={e => hanleChangeInputEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        required
        disabled={disableInput(loading)}
        value={input.password}
        onChange={e => hanleChangeInputPassword(e.target.value)}
      />
      <button type="submit">{spinnerLoading(loading)}</button>
    </Container>
  )
}
