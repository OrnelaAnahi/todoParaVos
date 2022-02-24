import './Footer.css'
import Facebook from '../Icons/Facebook.png'
import Whatsapp from '../Icons/Whatsapp.png'
import Instagram from '../Icons/Instagram.png'
import ArrowUp from '../Icons/ArrowUp.png'
export default function Footer () {
  return (
    <footer>
      <div className='redesSociales'>
        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='redesLink'>
          <div className='divLogoRedes'>
            <img src={Facebook} className='imgLogoRedes' />
            <p className='nombreRedes'>Todo para vos</p>
          </div>
        </a>
        <a href='https://api.whatsapp.com/send/?phone=%2B541123930355&text&app_absent=0' target='_blank' rel='noopener noreferrer' className='redesLink'>
          <div className='divLogoRedes'>
            <img src={Whatsapp} className='imgLogoRedes' />
            <p className='nombreRedes'>1123930355</p>
          </div>
        </a>
        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' className='redesLink'>
          <div className='divLogoRedes'>
            <img src={Instagram} className='imgLogoRedes' />
            <p className='nombreRedes'>@todoparavos</p>
          </div>
        </a>
      </div>
      <div>
        <p>©Todos los derechos reservados a Ornela Anahi Lugo Aquino</p>
      </div>
      <div className='subir'>
        <a href='#header' className='redesLink'>
          <img src={ArrowUp} className='arrowUp' />
          <p className='parrafoUp'>ir Arriba</p>
        </a>
      </div>
    </footer>
  )
}
