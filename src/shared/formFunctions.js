import { ThreeDots } from 'react-loader-spinner'

const spinnerLoadingAdd = (loading, balance, type) => {
  const aux = type === 'Nova' ? 'Salvar' : 'Atualizar'

  if (loading === false) return `${aux} ${balance}`
  return <ThreeDots color="#FFFFFF" height={20} width={99} />
}

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

export {
  spinnerLoadingAdd,
  spinnerLoading,
  disableInput,
  inputColorLoading,
  opacityButton
}
