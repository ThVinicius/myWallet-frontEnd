import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Container } from './styles'
import {
  spinnerLoading,
  disableInput,
  inputColorLoading,
  opacityButton
} from './functions'

export default function Form() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const hanleChangeInputName = e => {
    setInput({ ...input, name: e })
  }

  const hanleChangeInputEmail = e => {
    setInput({ ...input, email: e })
  }

  const hanleChangeInputPassword = e => {
    setInput({ ...input, password: e })
  }

  const hanleChangeInputConfirmPassword = e => {
    setInput({ ...input, confirmPassword: e })
  }

  const toSend = event => {
    event.preventDefault()
    if (loading === true) return
    setLoading(true)
    const { name, email, password, confirmPassword } = input

    if (password !== confirmPassword) {
      setLoading(false)

      alert('As senhas são diferentes!')
      return
    }

    const URL = 'http://localhost:5000/register'

    const toSend = { name, email, password }

    const promise = axios.post(URL, toSend)

    promise
      .then(() => {
        alert('Cadastro realizado com sucesso!')

        navigate('/')
      })
      .catch(res => {
        setLoading(false)
        switch (true) {
          case res.response.status === 409:
            alert('Esse e-mail já está cadastrado!')
            return

          case res.response.status === 400:
            alert(res.message)
            return

          case res.response.status === 500:
            alert(res.message)
            return

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
        type="text"
        placeholder="Nome"
        required
        disabled={disableInput(loading)}
        value={input.name}
        onChange={e => hanleChangeInputName(e.target.value)}
      />
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
      <input
        type="password"
        placeholder="Confirme a senha"
        required
        disabled={disableInput(loading)}
        value={input.confirmPassword}
        onChange={e => hanleChangeInputConfirmPassword(e.target.value)}
      />
      <button type="submit">{spinnerLoading(loading)}</button>
    </Container>
  )
}
