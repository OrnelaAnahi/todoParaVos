import { Timestamp, collection, addDoc } from 'firebase/firestore'
import { db } from '../../utils/firebase'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartProvider } from '../../Context/CartContext'

export default function FinCompra () {
  const [compra, setCompra] = useState(null)
  const { cartItm, clear } = useContext(CartProvider)
  const sendData = async (e) => {
    e.preventDefault()
    const data = {
      buyer: {
        name: e.target.nombre.value,
        surname: e.target.apellido.value,
        mail: e.target.email.value,
        phone: e.target.phone.value
      },
      items: cartItm,
      date: Timestamp.fromDate(new Date()),
      total: cartItm.map((item) => item.totalPrice).reduce((prev, curr) => prev + curr, 0)
    }
    const queryCollection = collection(db, 'orders')
    try {
      const docRef = await addDoc(queryCollection, data)
      console.log('docRef ' + docRef.id)
      console.log(data)
      clear()
      setCompra(docRef.id)
    } catch (error) {
      console.log('error', error)
    }
  }
  const compraRealizada = () => {
    return (
      <>
        <h2>¡¡Muchas gracias por su compra!!</h2>
        <p>Dentro de 10 dias habiles le enviaremos sus productos</p>
        <p>Su codigo de compra es: {compra}</p>
      </>
    )
  }
  return (
    <>
      {compra
        ? compraRealizada()
        : (
          <section className='form compra' onSubmit={sendData}>
            <form action=''>
              <fieldset className='fieldsetContacto'>
                <legend>Formulario de compra</legend>
                <div className='formularioEspacio'>
                  <label htmlFor='nombre'>Nombre</label>
                  <input className='form-control' type='text' required name='nombre' placeholder='Escribe aqui tu nombre' />
                </div>
                <div className='formularioEspacio'>
                  <label htmlFor='apellido'>Apellido</label>
                  <input className='form-control' type='text' required name='apellido' placeholder='Escribe aqui tu apellido' />
                </div>
                <div className='formularioEspacio'>
                  <label htmlFor='email'>Mail*</label>
                  <input className='form-control' type='email' name='email' required placeholder='Ej:todoparavos@gmail.com' />
                </div>
                <div className='formularioEspacio'>
                  <label htmlFor='phone'>Número celular</label>
                  <input
                    className='form-control' required placeholder='1123245114' type='number' id='phone' name='phone' pattern='[0-9]{2}-[0-9]{4}-[0-9]{4}'
                  />
                </div>
                <div className='formularioEspacio'>
                  <input type='submit' value='Finalizar compra' />
                </div>
              </fieldset>
            </form>
          </section>
          )}

      <Link to='/'><p>Volver al inicio</p></Link>
    </>
  )
}
