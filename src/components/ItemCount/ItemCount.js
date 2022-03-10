import { useState, useContext } from 'react'
import './ItemCount.css'
import { CartProvider } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
export default function ItemCount ({ stock, initial, item }) {
  const talles = item.talle
  const { addCart, isInCart, talValue } = useContext(CartProvider)
  const [cantidad, setCantidad] = useState(initial)
  const [valueTalle, setValueTalle] = useState(null)
  const captureType = (e) => {
    setValueTalle((e.target.value))
  }
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
      (
        <>
          <div>
            <form>
              <select className='form-select' aria-label='Default select example' onChange={captureType}>
                <option defaultValue>Seleccionar talle</option>
                {talles.map((elemento, index) => {
                  return (
                    <option value={elemento} key={index}>{elemento}</option>
                  )
                })}
              </select>
            </form>
          </div>
          {talValue && <p>Por favor, seleccionar talle antes de añadir al carrito</p>}
          <div className='cajaDeCantidad'>
            <div className='botonCantidad'>
              <button className='btnCantidad' onClick={restarCantidad}>-</button>
              <p className='pCantidad'>{cantidad}</p>
              <button className='btnCantidad' onClick={sumarCantidad}>+</button>
            </div>
            <button className='btnCarrito' onClick={() => addCart(item, cantidad, valueTalle)}>Añadir al carrito</button>
          </div>
        </>
      )}
      {isInCart(item.id) &&
        <div className='seguirCompra'>
          <p>Producto añadido al carrito</p>
          <Link to='/cart'><button className='btnSeguirCompra'>Ir al carrito y finalizar compra</button></Link>
          <Link to='/'><button className='btnSeguirCompra'>Seguir comprando</button></Link>
        </div>}
    </>
  )
}
