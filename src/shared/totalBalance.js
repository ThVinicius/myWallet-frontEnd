const totalBalance = array => {
  let totalInput = 0
  let totalExit = 0

  for (let { value, operation } of array) {
    value = parseFloat(value.replace(',', '.'))

    if (operation === 'exit') {
      totalExit += value
    } else {
      totalInput += value
    }
  }

  let valueColor

  switch (true) {
    case totalInput - totalExit < 0:
      valueColor = '#C70000'
      break

    case totalInput - totalExit > 0:
      valueColor = '#03AC00'
      break

    default:
      valueColor = '#808080'
      break
  }

  return { total: totalInput - totalExit, valueColor }
}

export default totalBalance
