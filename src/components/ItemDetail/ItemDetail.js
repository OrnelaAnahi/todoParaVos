import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
function seguirCompra () {
  return (
    <div className='seguirCompra'>
      <Link to='/cart'><button className='btnSeguirCompra'>Ir al carrito y finalizar compra</button></Link>
      <Link to='/'><button className='btnSeguirCompra'>Seguir comprando</button></Link>
    </div>
  )
}

export default function ItemDetail ({ producto }) {
  const [valorCount, setValorCount] = useState(false)
  const borrarTitulo = (text) => {
    setValorCount(text)
  }
  const talles = producto.talle
  return (
    <>
      <p className='detailCategoria'>Categoria: {producto.categoria}</p>
      <div className='detailContainer'>
        <h2 className='detailTitle'>{producto.title}</h2>
        <div className='detailImg'>
          <div className='divOtherImg'>
            <img src={producto.img} className='otherImagenes' />
            <img src={producto.img} className='otherImagenes' />
            <img src={producto.img} className='otherImagenes' />
          </div>
          <img src={producto.img} className='imagenPrincipal' />
        </div>
        <p className='detailPrecio'>${new Intl.NumberFormat('es-CO').format(producto.precio)}</p>
        <ul className='detailUlTalles'>
          <span>Seleccionar: </span>
          {talles.map((elemento, index) => {
            return (
              <li className='detailLiTalles' key={index}>{elemento}</li>
            )
          })}
        </ul>
        <div className='detailCantidad'>
          {valorCount ? seguirCompra() : <ItemCount onAdd={(text) => borrarTitulo(text)} stock={producto.stock} initial={1} />}
        </div>
      </div>
    </>
  )
}
