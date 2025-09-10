import { createRoot } from 'react-dom/client'
import Index from './pages/home/index.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LisaClicker from './pages/lisaclicker/lisaClicker.jsx'
import DayProDict from './pages/dayprodict/dayProDict.jsx'
import Spørsmål from './pages/dayprodict/spørsmål.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='lisa' element={<LisaClicker />} />
      <Route path='dayprodih' element={<DayProDict />} />
      <Route path='dayprodih/spørsmål' element={<Spørsmål/>} />


    </Routes>
  </BrowserRouter>

)
