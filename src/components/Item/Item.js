import { Link } from 'react-router-dom'
import './Item.css'

export default function Item ({ items }) {
  return (
    <div className='cartProductos'>
      <img className='imgProductos' src={items.img} />
      <h3 className='titleProductos'>{items.title}</h3>
      <p className='precioProductos'>$ {new Intl.NumberFormat('es-CO').format(items.precio)}</p>
      <Link to={`/item/${items.id}`}><button className='detallesProductos'>Mostrar más</button></Link>
    </div>
  )
}
