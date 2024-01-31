import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import Homepage from './components/Homepage'
import Create from './components/Create'
import NotFound from './components/NotFound'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path = "/login" element = {<LogIn/>}/>
      <Route path = "/signup" element={<SignUp/>}/>
      <Route path="/Create" element={<Create/>} />
      <Route path="/not-found" element={<NotFound/> } />
      <Route path = "*" element = {<Navigate replace to="/not-found" />} />
    </Routes>
  </BrowserRouter>
)

export default App
