
import { Routes,Route } from 'react-router-dom'
import Home from './Componets/Pages/Home/Home'
import Login from './Componets/Pages/Login/Login'
import Player from  './Componets/Pages/Player/Player'

function App() {


  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/player' element={<Player />}/>
      </Routes>
           
    </>
  )
}

export default App
