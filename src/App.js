import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NoFound from './components/NotFound/NotFound'
import Nosotros from './components/Nosotros/Nosotros'
import Envios from './components/Envios/Envios'
import Sucursales from './components/Sucursales/Sucursales'
import NavBar from './components/NavBar/NavBar'
function App () {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='item/:id' element={<ItemDetailContainer />} />
          <Route path='/*' element={<NoFound />} />
          <Route path='/envios' element={<Envios />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/sucursales' element={<Sucursales />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
