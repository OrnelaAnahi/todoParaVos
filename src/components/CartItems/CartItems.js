import { useContext } from 'react'
import { CartProvider } from '../../Context/CartContext'
import './CartItem.css'
export default function CartItems ({ item }) {
  const { removeItem, aumentarCant, disminuirCant } = useContext(CartProvider)
  return (
    <div className='carritoCart'>
      <div className='imgCartDiv'>
        <img className='imgCart' src={item.img} />
      </div>
      <div className='infoCartDiv'>
        <h3 className='titleCart'>{item.title}</h3>
        <p className='precioCart'>Precio por unidad: $ {new Intl.NumberFormat('es-CO').format(item.precio)}</p>
        <p className='stockCart'>Stock:{item.stock}</p>
        <p>Talle seleccionado: {item.talleSelect}</p>
      </div>
      <div className='btnCartDiv'>
        <div className='divCantCart'>
          <button className='btnCant' onClick={() => aumentarCant(item.id)}>+</button>
          <p className='cant'>{item.quanty}</p>
          <button className='btnCant' onClick={() => disminuirCant(item.id)}>-</button>
        </div>
        <p className='precioTotalItem'>Precio total: $ {new Intl.NumberFormat('es-CO').format(item.precio * item.quanty)}</p>
        <button className='eliminarCart' onClick={() => removeItem(item.id)}>Eliminar elemento</button>
      </div>
    </div>
  )
}
