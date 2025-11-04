import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './page/Login'
import Register from './page/Register'
import Secret from './page/Secret'
import Dashboard from './page/Dashboard'
import Mytodos from './page/Mytodos'

function App() {

  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/secret" element={<Secret />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mytodos" element={<Mytodos />} />

        </Routes>
      </BrowserRouter>
    </div>
      
    </>
  )
}

export default App
