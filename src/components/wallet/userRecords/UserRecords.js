import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import valueMask from '../../../shared/maskValue'
import totalBalance from '../../../shared/totalBalance'
import logout from '../../../shared/logout'
import axios from 'axios'

export default function UserRecords({
  value,
  description,
  type,
  time,
  userData,
  setUserData,
  user,
  index
}) {
  const navigate = useNavigate()

  const color = () => {
    if (type === 'exit') return '#C70000'

    return '#03AC00'
  }

  const del = () => {
    const confirm = window.confirm(
      `O registro a seguir será apagado:\n${description}\nvocê confirma essa ação?`
    )

    if (confirm) {
      userData.operations.splice(index, 1)

      const { total, valueColor } = totalBalance(userData.operations)

      userData.totalBalance = valueMask(Math.abs(total).toFixed(2))

      userData.valueColor = valueColor

      setUserData({ ...userData })

      // const URL = `https://my-wallet-vinicius.herokuapp.com/delete/${id}`

      // const config = { headers: { Authorization: `Bearer ${user.token}` } }

      // const promise = axios.delete(URL, config)

      // promise
      //   .then(() => {
      // userData.operations.splice(index, 1)

      // const { total, valueColor } = totalBalance(userData.operations)

      // userData.totalBalance = valueMask(Math.abs(total).toFixed(2))

      // userData.valueColor = valueColor

      // setUserData({ ...userData })
      //   })
      //   .catch(() => {
      //     logout(user, navigate)
      //   })
    }
  }

  return (
    <Container color={color()}>
      <span>
        <h3>{time}</h3>
        <h4>{description}</h4>
      </span>
      <span>
        <h5>{valueMask(value)}</h5>
        <h6 onClick={del}>x</h6>
      </span>
    </Container>
  )
}
