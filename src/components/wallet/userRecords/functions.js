import { Oval } from 'react-loader-spinner'

const color = type => {
  if (type === 'exit') return '#C70000'

  return '#03AC00'
}

const verifyIntenger = value => {
  if (value % 1 === 0) return value.toFixed(2)

  return value
}

const loadingSpinner = (loading, del) => {
  if (loading.state === false) {
    return <h6 onClick={del}>x</h6>
  }
  return <Oval height={25} width={15} color="#006400" />
}

export { color, verifyIntenger, loadingSpinner }
