const valueColor = type => {
  return type === 'saída' ? '#C70000' : '#03AC00'
}

const hanleChangeInputValue = (e, input, setInput) => {
  setInput({ ...input, value: e })
}

const hanleChangeInputDescription = (e, input, setInput) => {
  setInput({ ...input, description: e })
}

export { valueColor, hanleChangeInputValue, hanleChangeInputDescription }
