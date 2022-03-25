import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NoFound from './components/NotFound/NotFound'
import Envios from './components/Envios/Envios'
import Sucursales from './components/Sucursales/Sucursales'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import CartContext from './Context/CartContext'
import FinCompra from './components/FinCompra/FinCompra'
import ItemListContainerCategory from './components/ItemListContainerCategory/ItemListContainerCategory'
function App () {
  return (
    <>
      <BrowserRouter>
        <CartContext>
          <NavBar />
          <main>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:id' element={<ItemListContainerCategory />} />
              <Route path='item/:id' element={<ItemDetailContainer />} />
              <Route path='/*' element={<NoFound />} />
              <Route path='/envios' element={<Envios />} />
              <Route path='/sucursales' element={<Sucursales />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/compraDat' element={<FinCompra />} />
            </Routes>
          </main>
          <Footer />
        </CartContext>
      </BrowserRouter>
    </>
  )
}

export default App
