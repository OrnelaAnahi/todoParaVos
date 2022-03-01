import { useState } from 'react'
import './ItemCount.css'

export default function ItemCount ({ stock, initial, onAdd }) {
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
    <div className='cajaDeCantidad'>
      <div className='botonCantidad'>
        <button className='btnCantidad' onClick={restarCantidad}>-</button>
        <p className='pCantidad'>{cantidad}</p>
        <button className='btnCantidad' onClick={sumarCantidad}>+</button>
      </div>
      <button className='btnCarrito' onClick={() => onAdd(true)}>Añadir al carrito</button>
    </div>
  )
}
