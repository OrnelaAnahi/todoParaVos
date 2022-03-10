import { useContext } from 'react'
import { CartProvider } from '../../Context/CartContext'
import CartItems from '../CartItems/CartItems'
import { Link } from 'react-router-dom'
export default function Cart () {
  const { cartItm, clear } = useContext(CartProvider)
  const totalPrice = cartItm.map((item) => item.totalPrice).reduce((prev, curr) => prev + curr, 0)
  return (
    <>
      {
      cartItm.length === 0
        ? (
          <div className='cartVacio'>
            <p>El carrito esta vacio</p>
            <Link to='/'>Ir a comprar</Link>
          </div>
          )
        : (
          <div className='cartLleno'>
            <h2>Carrito de compras</h2>
            {cartItm.map(item => <CartItems item={item} key={item.id} />)}
            <p>Total: {new Intl.NumberFormat('es-CO').format(totalPrice)}</p>
            <button onClick={clear}>Vaciar carrito</button>
            <Link to='/compraexitosa'><button>Comprar</button></Link>
          </div>

          )
}
    </>

  )
}
