import './App.css'
import NavBar from './components/NavBar/NavBar'
import Logo from './components/Icons/Icon.png'
// import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
function App () {
  return (
    <>
      <header className='header'>
        <img src={Logo} className='logo' />
        <h1 className='tituloPrincipal'>Todo para vos</h1>
        <NavBar />
      </header>
      <main>
        {/* <ItemListContainer grettings='Bienvenidos' /> */}
        <ItemDetailContainer />
      </main>
    </>
  )
}

export default App
