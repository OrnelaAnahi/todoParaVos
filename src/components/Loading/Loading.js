import './Loading.css'
export default function Loading () {
  return (
    <div className='divCargando'>
      <div className='unidos'>
        <h2 className='cargando'>Cargando</h2>
        <div className='spinner-border spinner-border-sm cargandoSimbolo' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
      <p className='parrafoCargando'>Espere mientras cargamos los datos</p>
    </div>
  )
}
