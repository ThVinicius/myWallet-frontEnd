import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../../../context/auth'
import logout from '../../../shared/logout'
import UserRecords from '../userRecords/UserRecords'
import { ThreeCircles } from 'react-loader-spinner'
import { balance, redirectAdd } from './functions'
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
    const URL = `${process.env.REACT_APP_API_URL}/wallet`
    const config = {
      headers: { Authorization: `Bearer ${user.token}` }
    }

    const promise = axios.get(URL, config)

    promise
      .then(({ data }) => {
        userData.operations = data.operations
        userData.name = data.name

        balance(userData)

        setUserData({ ...userData })
      })
      .catch(res => {
        logout(user, navigate)
      })
  }, [])

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
              ({ value, description, operation, time, id }, index) => (
                <UserRecords
                  value={value}
                  description={description}
                  type={operation}
                  time={time}
                  userData={userData}
                  setUserData={setUserData}
                  user={user}
                  id={id}
                  index={index}
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
          <div onClick={() => redirectAdd('entrada', navigate)}>
            <ion-icon name="add-circle-outline"></ion-icon>
            <h6>Nova entrada</h6>
          </div>
          <div onClick={() => redirectAdd('saída', navigate)}>
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
