import valueMask from '../../../shared/maskValue'
import totalBalance from '../../../shared/totalBalance'

const balance = userData => {
  const aux = totalBalance(userData.operations)

  const total = aux.total

  userData.valueColor = aux.valueColor

  userData.totalBalance = valueMask(Math.abs(total).toFixed(2))
}

const redirectAdd = (type, navigate) => {
  navigate('/add', { state: type })
}

export { balance, redirectAdd }
