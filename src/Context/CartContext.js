import { createContext, useState } from 'react'

export const cartProvider = createContext({})

const CartContext = ({ children }) => {
  const [cartItm, setCartItm] = useState([])
  const addCart = (item, quanty) => {
    const cantItem = { ...item, quanty }
    setCartItm([...cartItm, cantItem])
  }
  const isInCart = (itmId) => {
    return cartItm.some((elem) => elem.id === itmId)
  }
  const removeItem = (itemId) => {
    const itemElimin = cartItm.filter((elemento) => elemento.id !== itemId)
    setCartItm(itemElimin)
  }
  const clear = () => {
    setCartItm([])
  }
  return (
    <cartProvider.Provider value={{ addCart, isInCart, removeItem, clear }}>{children}</cartProvider.Provider>
  )
}

export default CartContext
