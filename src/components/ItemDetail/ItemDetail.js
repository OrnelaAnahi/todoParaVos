import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
export default function ItemDetail ({ producto }) {
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
        <div className='detailCantidad'>
          <ItemCount stock={producto.stock} initial={1} item={producto} />
        </div>
      </div>
    </>
  )
}
