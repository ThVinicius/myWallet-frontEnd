import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResetCSS from '../assets/css/reset'
import GlobalStyle from '../assets/css/global'
import LoginScreen from './login/main/LoginScreen'
import Registercreen from './register/main/RegisterScreen'
import { AuthProvider } from '../context/auth'

export default function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<Registercreen />} />
          <Route path="/carteira" element="" />
          <Route path="/adicionar" element="" />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
