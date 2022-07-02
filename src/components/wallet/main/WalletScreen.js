import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../../../context/auth'
import logout from '../../../shared/logout'
import valueMask from '../../../shared/maskValue'
import UserRecords from '../userRecords/UserRecords'
import { ThreeCircles } from 'react-loader-spinner'
import { Container, Content, Box1, Box2, Box3, Wallet, Balance } from './styles'

export default function WalletScreen() {
  const [userData, setUserData] = useState({
    operations: undefined,
    name: undefined,
    totalBalance: undefined,
    valueColor: undefined
  })
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    const URL = 'https://my-wallet-vinicius.herokuapp.com/wallet'
    const config = {
      headers: { Authorization: `Bearer ${user.token}` }
    }

    const promise = axios.get(URL, config)

    promise
      .then(({ data }) => {
        userData.operations = data.operations
        userData.name = data.name

        balance()

        setUserData({ ...userData })
      })
      .catch(res => {
        logout(user, navigate)
      })
  }, [])

  const balance = () => {
    let totalInput = 0
    let totalExit = 0

    for (let { value, operation } of userData.operations) {
      value = parseFloat(value.replace(',', '.'))

      if (operation === 'exit') {
        totalExit += value
      } else {
        totalInput += value
      }
    }

    userData.valueColor = totalExit > totalInput ? '#C70000' : '#03AC00'

    userData.totalBalance = valueMask(
      Math.abs(totalExit - totalInput).toFixed(2)
    )
  }

  const redirectAdd = type => {
    navigate('/add', { state: type })
  }

  const userWallet = () => {
    if (userData.operations.length === 0) {
      return (
        <Box2>
          <h2>Não há registros de entrada ou saída</h2>
        </Box2>
      )
    }

    return (
      <>
        <Wallet>
          <div>
            {userData.operations.map(
              ({ value, description, operation, time }, index) => (
                <UserRecords
                  value={value}
                  description={description}
                  type={operation}
                  time={time}
                  key={index}
                />
              )
            )}
          </div>
          <Balance valueColor={userData.valueColor}>
            <h6>SALDO</h6>
            <h5>{userData.totalBalance}</h5>
          </Balance>
        </Wallet>
      </>
    )
  }

  const loadingScreen = () => {
    if (userData.operations === undefined) {
      return (
        <ThreeCircles
          color="white"
          height={160}
          width={160}
          ariaLabel="three-circles-rotating"
        />
      )
    }
    return (
      <>
        <Box1>
          <h1>Olá, {userData.name}</h1>
          <ion-icon
            onClick={() => logout(user, navigate)}
            name="exit-outline"
          ></ion-icon>
        </Box1>
        {userWallet()}
        <Box3>
          <div onClick={() => redirectAdd('entrada')}>
            <ion-icon name="add-circle-outline"></ion-icon>
            <h6>Nova entrada</h6>
          </div>
          <div onClick={() => redirectAdd('saída')}>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <h6>Nova saída</h6>
          </div>
        </Box3>
      </>
    )
  }

  return (
    <Container>
      <Content>{loadingScreen()}</Content>
    </Container>
  )
}
