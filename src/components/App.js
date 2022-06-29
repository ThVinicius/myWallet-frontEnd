import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResetCSS from '../assets/css/reset'
import GlobalStyle from '../assets/css/global'
import LoginScreen from './login/main/LoginScreen'
import { AuthProvider } from '../context/auth'

export default function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/cadastro" element="" />
          <Route path="/carteira" element="" />
          <Route path="/adicionar" element="" />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
