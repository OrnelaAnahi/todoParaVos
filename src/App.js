import './App.css'
import NavBar from './components/NavBar/NavBar'
import Logo from './components/Icons/Icon.png'
// import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
// import Loading from './components/Loading/Loading'
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
        {/* <ItemDetailContainer /> */}
        {/* <Loading /> */}
      </main>
    </>
  )
}

export default App
