import { Container } from './styles'
import valueMask from '../../../shared/maskValue'

export default function UserRecords({ value, description, type, time }) {
  const color = () => {
    if (type === 'exit') return '#C70000'

    return '#03AC00'
  }

  return (
    <Container color={color()}>
      <span>
        <h3>{time}</h3>
        <h4>{description}</h4>
      </span>
      <h5>{valueMask(value)}</h5>
    </Container>
  )
}
