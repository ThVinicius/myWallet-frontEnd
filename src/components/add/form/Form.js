import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../../../context/auth'
import logout from '../../../shared/logout'
import valueMask from '../../../shared/maskValue'
import { Container } from './styles'
import {
  spinnerLoadingAdd,
  disableInput,
  inputColorLoading,
  opacityButton
} from '../../../shared/formFunctions'

export default function Form({ type }) {
  const [input, setInput] = useState({ value: '', description: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  const hanleChangeInputValue = e => {
    setInput({ ...input, value: e })
  }

  const hanleChangeInputDescription = e => {
    setInput({ ...input, description: e })
  }

  const toSend = event => {
    event.preventDefault()
    if (loading === true) return

    let value = parseFloat(
      valueMask(input.value)
        .replace('R$ ', '')
        .replaceAll('.', '')
        .replace(',', '.')
    ).toFixed(2)

    if (isNaN(value)) {
      alert('Insira um valor válido')
      return
    } else if (value <= 0) {
      alert('Insira um valor maior que 0')
      return
    }
    setLoading(true)

    value = value.replace('.', ',')

    const operation = type === 'entrada' ? 'input' : 'exit'

    const URL = 'http://localhost:5000/add'

    const body = { value, description: input.description, operation }

    const headers = { headers: { Authorization: `Bearer ${user.token}` } }

    const promise = axios.post(URL, body, headers)

    promise
      .then(() => {
        setInput({ value: '', description: '' })

        alert(`${type} cadastrada com sucesso!`)
      })
      .catch(res => {
        if (res.response.status === 400) {
          alert('Os dados estão incorretos!')
        } else {
          alert('Sua sessão expirou.\nFaça o login novamente')

          return logout(user, navigate)
        }
      })

    setLoading(false)
  }

  return (
    <Container
      color={inputColorLoading(loading)}
      opacity={opacityButton(loading)}
      onSubmit={toSend}
    >
      <input
        type="text"
        placeholder="Valor"
        maxLength={16}
        required
        disabled={disableInput(loading)}
        value={valueMask(input.value)}
        onChange={e => hanleChangeInputValue(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        maxLength={33}
        required
        disabled={disableInput(loading)}
        value={input.description}
        onChange={e => hanleChangeInputDescription(e.target.value)}
      />
      <button type="submit">{spinnerLoadingAdd(loading, type)}</button>
    </Container>
  )
}
