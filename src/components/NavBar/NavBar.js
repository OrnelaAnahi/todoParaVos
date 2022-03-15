import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import Logo from '../Icons/Icon.png'
export default function NavBar () {
  return (
    <>
      <header className='header' id='header'>
        <Link to='/'><img src={Logo} className='logo' /></Link>
        <h1 className='tituloPrincipal'>Todo para vos</h1>
        <nav className='nav'>
          <ul className='ulNav'>
            <li className='liNav'>
              <Link to='/' className='linksNav'>Inicio</Link>
            </li>
            <li className='linksNav liNav'>Catalogo
              <ul>
                <li className='liNav'><Link to='/category/campera' className='linksNav '>Camperas</Link></li>
                <li className='liNav'><Link to='/category/remeras' className='linksNav'>Remeras</Link></li>
              </ul>
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
