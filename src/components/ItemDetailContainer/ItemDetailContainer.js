import { useEffect, useState } from 'react'
import ImgEjemplo from '../ItemListContainer/ImgEjemplo.png'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading'

export default function ItemDetailContainer () {
  const detalleProducto = [
    { id: 1, title: 'BERMUDA FRISA BROSS ELASTICO FLUO', img: ImgEjemplo, precio: 1500, talle: ['M', 'S', 'L', 'XL'], categoria: 'Hombre', stock: 3 },
    { id: 2, title: 'CANGURO BROSS URB WE TRUST - HOMBRE', img: ImgEjemplo, precio: 3000, talle: ['M', 'S', 'L', 'XL'], categoria: 'Hombre', stock: 5 },
    { id: 3, title: 'CAMPERA CINTA BROSS WILD LUREX - HOMBRE', img: ImgEjemplo, precio: 2510, talle: ['M', 'S', 'L', 'XL'], categoria: 'Hombre', stock: 3 },
    { id: 4, title: 'CAMPERA BROSS RIBB COLOR - HOMBRE', img: ImgEjemplo, precio: 3680, talle: ['M', 'S', 'L', 'XL'], categoria: 'Hombre', stock: 1 },
    { id: 5, title: 'CANGURO FRISA EST FTE BROSS URB - HOMBRE', img: ImgEjemplo, precio: 8920, talle: ['M', 'S', 'L', 'XL'], categoria: 'Hombre', stock: 2 },
    { id: 6, title: 'BUZO BROSS CIRCULO ESTAMPADO DORADO', img: ImgEjemplo, precio: 2500, talle: ['M', 'S', 'L', 'XL'], categoria: 'Hombre', stock: 6 },
    { id: 7, title: 'BUZO BROSS OFFICIAL BRS', img: ImgEjemplo, precio: 1650, talle: ['M', 'S', 'L', 'XL'], categoria: 'Hombre', stock: 4 },
    { id: 8, title: 'CANGURO BROSS LISO COLOR', img: ImgEjemplo, precio: 4520, talle: ['M', 'S', 'L', 'XL'], categoria: 'Hombre', stock: 3 }
  ]
  const [detailProductoItem, setDetailProductoItem] = useState(null)
  const buscarId = 3
  const getItem = (arrayDeProductos) => {
    const item = arrayDeProductos.find(elemento => elemento.id === buscarId)
    setDetailProductoItem(item)
  }
  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(detalleProducto)
      }, 2000)
    })
    tarea.then((result) => {
      getItem(result)
    })
      .catch((err) => {
        console.log('error: ' + err)
      })
  }, [])

  return (
    <div className='ctnDetail'>
      {detailProductoItem ? <ItemDetail producto={detailProductoItem} /> : <Loading />}
    </div>
  )
}
