import { createContext, useState } from 'react'

const UserContext = createContext({})

const AuthProvider = props => {
  const [user] = useState({ token: undefined })

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContext, AuthProvider }
