import { createRoot } from 'react-dom/client'
import Index from './pages/home/index.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LisaClicker from './pages/lisaclicker/lisaClicker.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='lisa' element={<LisaClicker />} />
    </Routes>
  </BrowserRouter>

)
