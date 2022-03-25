import './Sucursales.css'
export default function Sucursales () {
  return (
    <>
      <div className='sucursales'>
        <div className='nombreMapa'>
          <h2>Sucursales</h2>
          <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104906.83955669096!2d-58.5128679420247!3d-34.74705898825086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33335ca974363%3A0x706598c86b617aaf!2sBross!5e0!3m2!1ses!2sar!4v1648165211558!5m2!1ses!2sar' width='500' height='400' allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
        </div>
        <div className='infoSucursal'>
          <p>Podes acercate a nuestra única sucursal de Lunes a Sabados</p>
          <p>Abierto de 10:00 a 20:00</p>
          <p>Alto Avellaneda Shopping, Gral. Güemes 897, B1870 Avellaneda, Provincia de Buenos Aires</p>
        </div>
      </div>
    </>
  )
}
