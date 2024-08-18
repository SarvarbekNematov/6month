import { useContext } from 'react'
import './App.css'
import { DawRoute } from './routes/dawboard_route'
import { LoginRoute } from './routes/login_route'
import { Context } from './context'


function App() {
  const {token , setToken} = useContext(Context)
  return token ?  <DawRoute/> : <LoginRoute/>
}

export default App
