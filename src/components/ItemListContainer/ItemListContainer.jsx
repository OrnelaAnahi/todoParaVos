import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'
import './ItemListContainer.css'
import { db } from '../../utils/firebase'
import { getDocs, collection } from 'firebase/firestore'
export default function ItemsListContainer () {
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const query = collection(db, 'item')
      const response = await getDocs(query)
      const data = response.docs.map(doc => doc.data())
      console.log(data)
      setProducto(data)
    }
    getData()
  }, [])

  return (
    <div>
      <div className='divCtnItemsList'>
        {producto ? <ItemList product={producto} /> : <Loading />}
      </div>
    </div>

  )
}
