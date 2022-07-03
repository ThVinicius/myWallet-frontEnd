import axios from 'axios'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/auth'
import logout from '../../../shared/logout'
import valueMask from '../../../shared/maskValue'
import { Container, Input } from './styles'
import {
  spinnerLoadingAdd,
  disableInput,
  inputColorLoading,
  opacityButton
} from '../../../shared/formFunctions'
import {
  valueColor,
  hanleChangeInputValue,
  hanleChangeInputDescription
} from './functions'

export default function Form({ type }) {
  const [input, setInput] = useState({ value: '', description: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  const toSend = event => {
    event.preventDefault()
    if (loading === true) return

    setLoading(true)

    let value = parseFloat(
      valueMask(input.value)
        .replace('R$ ', '')
        .replaceAll('.', '')
        .replace(',', '.')
    )

    if (isNaN(value)) {
      setLoading(false)

      alert('Insira um valor válido')
      return
    } else if (value <= 0) {
      setLoading(false)

      alert('Insira um valor maior que 0')
      return
    }

    const operation = type === 'entrada' ? 'input' : 'exit'

    const URL = `${process.env.REACT_APP_API_URL}/add`

    const body = { value, description: input.description, operation }

    const headers = { headers: { Authorization: `Bearer ${user.token}` } }

    const promise = axios.post(URL, body, headers)

    promise
      .then(() => {
        setInput({ value: '', description: '' })

        setLoading(false)

        alert(`${type} cadastrada com sucesso!`)
      })
      .catch(res => {
        if (res.response.status === 400) {
          setLoading(false)

          alert('Os dados estão incorretos!')
        } else {
          setLoading(false)

          alert('Sua sessão expirou.\nFaça o login novamente')

          return logout(user, navigate)
        }
      })
  }

  return (
    <Container
      color={inputColorLoading(loading)}
      opacity={opacityButton(loading)}
      onSubmit={toSend}
    >
      <Input
        valueColor={valueColor(type)}
        type="text"
        placeholder="Valor"
        maxLength={16}
        required
        disabled={disableInput(loading)}
        value={valueMask(input.value)}
        onChange={e => hanleChangeInputValue(e.target.value, input, setInput)}
      />
      <input
        type="text"
        placeholder="Descrição"
        maxLength={33}
        required
        disabled={disableInput(loading)}
        value={input.description}
        onChange={e =>
          hanleChangeInputDescription(e.target.value, input, setInput)
        }
      />
      <button type="submit">{spinnerLoadingAdd(loading, type)}</button>
    </Container>
  )
}
