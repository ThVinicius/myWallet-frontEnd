import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { Container } from './styles'
import valueMask from '../../../shared/maskValue'
import totalBalance from '../../../shared/totalBalance'
import logout from '../../../shared/logout'
import { color, verifyIntenger, loadingSpinner } from './functions'

export default function UserRecords({
  value,
  description,
  type,
  time,
  userData,
  setUserData,
  user,
  index,
  id
}) {
  const navigate = useNavigate()

  const [loading, setLoading] = useState({ state: false })

  const del = () => {
    const confirm = window.confirm(
      `O registro a seguir será apagado:\n${description}\nvocê confirma essa ação?`
    )

    if (confirm) {
      setLoading({ ...loading, state: true })

      const URL = `${process.env.REACT_APP_API_URL}/delete/${id}`

      const config = { headers: { Authorization: `Bearer ${user.token}` } }

      const promise = axios.delete(URL, config)

      promise
        .then(() => {
          userData.operations.splice(index, 1)

          const { total, valueColor } = totalBalance(userData.operations)

          userData.totalBalance = valueMask(Math.abs(total).toFixed(2))

          userData.valueColor = valueColor

          setLoading({ ...loading, state: false })

          setUserData({ ...userData })
        })
        .catch(() => {
          logout(user, navigate)
        })
    }
  }

  const editRecord = () => {
    const balance = type === 'exit' ? 'saída' : 'entrada'

    const aux = value.toFixed(2)

    navigate('/add', {
      state: { type: 'Editar', balance, value: aux, description, id }
    })
  }

  return (
    <Container color={color(type)}>
      <span>
        <h3>{time}</h3>
        <h4 onClick={editRecord}>{description}</h4>
      </span>
      <span>
        <h5>{valueMask(`${verifyIntenger(value)}`)}</h5>
        {loadingSpinner(loading, del)}
      </span>
    </Container>
  )
}
