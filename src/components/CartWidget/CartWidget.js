import './CartWidget.css'
import LogoCarrito from './carrito.png'
import { useContext } from 'react'
import { CartProvider } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
export default function CartWidget () {
  const { cartItm } = useContext(CartProvider)
  console.log(cartItm)
  return (
    <Link to='/cart'>
      <div className='carrito'>
        <img src={LogoCarrito} className='logoCarrito' />
        {cartItm.length > 0 && <p className='cantidadCarrito'>{cartItm.reduce((acum, item) => acum + item.quanty, 0)}</p>}
      </div>
    </Link>
  )
}
