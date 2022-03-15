import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'
import { db } from '../../utils/firebase'
import { getDocs, collection } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
export default function ItemsListContainer () {
  const { id } = useParams()

  const [producto, setProducto] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const query = collection(db, 'item')
      const response = await getDocs(query)
      const data = response.docs.map(doc => doc.data())
      const findProductos = data.filter(categoria => categoria.categoryId === id)

      setProducto(findProductos)
    }
    getData()
  }, [id])

  return (
    <div>
      <div className='divCtnItemsList'>
        {producto ? <ItemList product={producto} /> : <Loading />}
      </div>
    </div>

  )
}
