import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import Logo from '../Icons/Icon.png'
export default function NavBar () {
  return (
    <>
      <header className='header' id='header'>
        <img src={Logo} className='logo' />
        <h1 className='tituloPrincipal'>Todo para vos</h1>
        <nav className='nav'>
          <ul className='ulNav'>
            <li className='liNav'>
              <Link to='/' className='linksNav'>Inicio</Link>
            </li>
            <li className='liNav'>
              <Link to='/sucursales' className='linksNav'>Sucursales</Link>
            </li>
            <li className='liNav'>
              <Link to='/nosotros' className='linksNav'>Nosotros</Link>
            </li>
            <li className='liNav'>
              <Link to='/envios' className='linksNav'>Envios</Link>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    </>
  )
}
