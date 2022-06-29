import { ThreeDots } from 'react-loader-spinner'

const spinnerLoading = loading => {
  if (loading === false) return 'Entrar'
  return <ThreeDots color="#FFFFFF" height={20} width={99} />
}

const disableInput = loading => {
  if (loading === false) return ''
  return 'disable'
}

const inputColorLoading = loading => {
  if (loading === false) return '#ffffff'
  return '#F2F2F2'
}

const opacityButton = loading => {
  if (loading === false) return '1'
  return '0.7'
}

export { spinnerLoading, disableInput, inputColorLoading, opacityButton }
