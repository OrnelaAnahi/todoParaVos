import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

export default function NavBar () {
  return (
    <>
      <nav className='nav'>
        <ul className='ulNav'>
          <li className='liNav'>
            <a className='linksNav' href='#'>Inicio</a>
          </li>
          <li className='liNav'>
            <a className='linksNav' href='#'>Catalogo</a>
          </li>
          <li className='liNav'>
            <a className='linksNav' href='#'>Sucursales</a>
          </li>
          <li className='liNav'>
            <a className='linksNav' href='#'>Nosotros</a>
          </li>
          <li className='liNav'>
            <a className='linksNav' href='#'>Envios</a>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </>
  )
}
