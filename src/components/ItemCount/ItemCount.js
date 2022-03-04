import { useState, useContext } from 'react'
import './ItemCount.css'
import { cartProvider } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
export default function ItemCount ({ stock, initial, item }) {
  const { addCart, isInCart } = useContext(cartProvider)
  const [cantidad, setCantidad] = useState(initial)
  function sumarCantidad () {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  }
  function restarCantidad () {
    if (cantidad > initial) {
      setCantidad(cantidad - 1)
    }
  }
  return (
    <>{!isInCart(item.id) &&
      <div className='cajaDeCantidad'>
        <div className='botonCantidad'>
          <button className='btnCantidad' onClick={restarCantidad}>-</button>
          <p className='pCantidad'>{cantidad}</p>
          <button className='btnCantidad' onClick={sumarCantidad}>+</button>
        </div>
        <button className='btnCarrito' onClick={() => addCart(item, cantidad)}>Añadir al carrito</button>
      </div>}
      {isInCart(item.id) &&
        <div className='seguirCompra'>
          <Link to='/cart'><button className='btnSeguirCompra'>Ir al carrito y finalizar compra</button></Link>
          <Link to='/'><button className='btnSeguirCompra'>Seguir comprando</button></Link>
        </div>}
    </>
  )
}
