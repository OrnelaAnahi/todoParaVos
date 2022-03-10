import { useContext } from 'react'
import { CartProvider } from '../../Context/CartContext'
import './CartItem.css'
export default function CartItems ({ item }) {
  const { removeItem, aumentarCant, disminuirCant } = useContext(CartProvider)
  return (
    <div className='carritoCart'>
      <img className='imgCart' src={item.img} />
      <h3 className='titleCart'>{item.title}</h3>
      <p className='precioCart'>Precio por unidad: $ {new Intl.NumberFormat('es-CO').format(item.precio)}</p>
      <p className='stockCart'>Stock:{item.stock}</p>
      <p>Talle seleccionado: {item.talleSelect}</p>
      <div>
        <button onClick={() => aumentarCant(item.id)}>+</button>
        <p>{item.quanty}</p>
        <button onClick={() => disminuirCant(item.id)}>-</button>
      </div>
      <p>Precio total: $ {new Intl.NumberFormat('es-CO').format(item.totalPrice)}</p>
      <button className='eliminarCart' onClick={() => removeItem(item.id)}>Eliminar elemento</button>
    </div>
  )
}
