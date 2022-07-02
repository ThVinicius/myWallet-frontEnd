const valueMask = value => {
  if (value === 'R$' || value.length === 0) return ''

  return (
    'R$ ' +
    value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/^([0-9]{3}\.?){3}-[0-9]{2}$/, '$1,$2')
      .replace(/(\d)(\d{2})$/, '$1,$2')
      .replace(/^(\d{1,3})(\d{3},\d{2})$/, '$1.$2')
      .replace(/^(\d{1,3})(\d{3})(\d{3},\d{2})$/, '$1.$2.$3')
  )
}

export default valueMask
