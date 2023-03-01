import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'

import Home from './pages/Home'
import Reserve from './pages/Reserve'
import Reservation from './pages/Reservation'
import Reservations from './pages/Reservations'

function App() {
   return (
      <div className="App">
         <Navigation />
         <Routes>
            <Route path="/">
               <Route index element={<Home />} />
               <Route path="reserve" element={<Reserve />} />
               <Route path="reservation/:id" element={<Reservation />} />
               <Route path="reservations" element={<Reservations />} />
            </Route>
         </Routes>
      </div>
   )
}

export default App
