import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../utils/firebase'

export default function ItemDetailContainer () {
  const [detailProductoItem, setDetailProductoItem] = useState(null)
  const buscarId = useParams()
  const encontrar = buscarId.id

  useEffect(() => {
    const getData = async (idBuscar) => {
      const docRef = doc(db, 'item', idBuscar)
      const docSnap = await getDoc(docRef)
      const findProducto = docSnap.data()
      setDetailProductoItem(findProducto)
    }
    getData(encontrar)
  }, [])

  return (
    <div className='ctnDetail'>
      {detailProductoItem ? <ItemDetail producto={detailProductoItem} /> : <Loading />}
    </div>
  )
}
