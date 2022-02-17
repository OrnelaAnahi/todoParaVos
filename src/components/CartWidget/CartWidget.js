import './CartWidget.css'
import LogoCarrito from './carrito.png'

export default function CartWidget () {
  return (
    <div className='carrito'>
      <img src={LogoCarrito} className='logoCarrito' />
      <p className='cantidadCarrito'>0</p>
    </div>
  )
}
