import { createContext, useState } from 'react'

const UserContext = createContext({})

const AuthProvider = props => {
  const [user, setUser] = useState({ token: undefined })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContext, AuthProvider }
