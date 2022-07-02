export default function logout(user, navigate) {
  localStorage.removeItem('token')

  user.token = undefined

  navigate('/')
}
