import './Envios.css'
export default function Envios () {
  return (
    <>
      <div className='mainSeccionEnvios'>
        <section className='sectionEnvios'>
          <h2>Envios a todo el país</h2>
          <p>Si estas dentro de la zona podemos combinar para entregas en persona, consultanos con tu dirección.</p>
          <p>Garantizamos el envío por <span className='span'> OCA, CORREO ARGENTINO, INTEGRAL PACK, MERCADOENVIO y MOTO </span> ya que en caso de extravío o pérdida, posee un seguro. No así con otros medios de envío.
          </p>
          <p>Si no te sentis comodo con nuestros medios de envios, dejaremos el envio a tu cargo.</p>
          <p>
            Las devoluciones se realizan antes de los 30 días. Para devolverlo, el producto debe estar tal cual lo recibiste. Se realiza un cambio de él o la devolución del dinero.
          </p>
        </section>
        <section className='sectionPreguntas'>
          <h2>Preguntas Frecuentes</h2>
          <p className='duda'>¿Los precios publicados son los mismos, en cualquier forma de compra?</p>
          <p className='respuesta'>¡Siii!😄, Siempre vas a encontrar nuestros mismos precios, aunque comprando al contado tenemos diferentes descuentos.</p>
          <p className='duda'>¿Cuáles son las formas de pago?</p>
          <p>
            <ul>
              <li><span className='span'>Tarjetas de crédito:</span> Visa, Mastercard, American Express Argencard, Cabal, Diners, Tarjeta Naranja, Tarjeta Shopping, Tarjeta Cencosud, Tarjeta Nativa.
              </li>
              <li><span className='span'>Tarjetas de débito:</span> Visa débito, Maestro, Mastercard debit, Maestro, Cabal débito.
              </li>
              <li><span className='span'>Efectivo en puntos de pago:</span> Pago Fácil, Rapi Pago, Provincia.NET, RedLink y Nuestro Local.
              </li>
              <li><span className='span'>Transferencias bancarias:</span> Cualquier banco.
              </li>
            </ul>
          </p>
          <p className='duda'>¿Trabajan con facturas?</p>
          <p className='respuesta'>Sí, realizamos facturas A o B</p>
        </section>
      </div>
    </>
  )
}
