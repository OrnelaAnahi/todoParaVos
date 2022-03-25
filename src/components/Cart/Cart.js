import { useContext, useEffect } from 'react'
import { CartProvider } from '../../Context/CartContext'
import CartItems from '../CartItems/CartItems'
import { Link } from 'react-router-dom'
import './Cart.css'
import Homero from './CartVacio.jpg'
export default function Cart () {
  const { cartItm, clear } = useContext(CartProvider)
  useEffect(() => { console.log('actual') }, cartItm)

  return (
    <>
      {
      cartItm.length === 0
        ? (
          <div className='cartVacio'>
            <h2>El carrito esta vacio</h2>
            <img src={Homero} className='homero' />
            <Link to='/'>Ir a comprar</Link>
          </div>
          )
        : (
          <div className='cartLleno'>
            <h2>Carrito de compras</h2>
            {cartItm.map(item => <CartItems item={item} key={item.id} />)}
            <p>Total: {new Intl.NumberFormat('es-CO').format(cartItm.map((item) => item.totalPrice).reduce((prev, curr) => prev + curr, 0))}</p>
            <button onClick={clear} className='btnCart'>Vaciar carrito</button>
            <Link to='/compraDat'><button className='btnCart'>Comprar</button></Link>
          </div>
          )
}
    </>

  )
}
