import { useEffect, useState } from 'react'
import ImgEjemplo from '../ItemListContainer/ImgEjemplo.png'
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer () {
  const detalleProducto = { id: 1, title: 'BERMUDA FRISA BROSS ELASTICO FLUO', img: ImgEjemplo, precio: 1500, talle: ['M', 'S', 'L', 'XL'], categoria: 'Pantalones de hombre', stock: 3 }
  const [detailProducto, setDetailProducto] = useState(null)

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(detalleProducto)
      }, 1000)
    })
    tarea.then((result) => {
      setDetailProducto(result)
    })
      .catch((err) => {
        console.log('error: ' + err)
      })
  }, [])
  return (
    <div className='ctnDetail'>
      {detailProducto && <ItemDetail producto={detailProducto} />}
    </div>
  )
}
