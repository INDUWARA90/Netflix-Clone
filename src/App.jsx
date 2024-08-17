
import { Routes,Route } from 'react-router-dom'
import Home from './Componets/Pages/Home/Home'
import Login from './Componets/Pages/Login/Login'

function App() {


  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
      </Routes>
           
    </>
  )
}

export default App
