import { createContext, useState } from 'react'

export const CartProvider = createContext({})

const CartContext = ({ children }) => {
  const [cartItm, setCartItm] = useState([])
  const [talValue, setTalValue] = useState(false)
  const addCart = (item, quanty, talleSelect) => {
    if (talleSelect !== null && talleSelect !== 'Seleccionar talle') {
      const totalPrice = quanty * item.precio
      const cantItem = { ...item, quanty, totalPrice, talleSelect }
      setCartItm([...cartItm, cantItem])
      setTalValue(false)
    } else {
      setTalValue(true)
    }
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
  const aumentarCant = (id) => {
    setCartItm(cartItm.map((r) => {
      if (r.id === id && r.quanty < r.stock) {
        r.quanty = r.quanty + 1
        r.totalPrice = r.quanty * r.precio
      }
      return r
    }))
  }
  const disminuirCant = (id) => {
    setCartItm(cartItm.map((r) => {
      if (r.id === id && r.quanty > 1) {
        r.quanty = r.quanty - 1
        r.totalPrice = r.quanty * r.precio
      }
      return r
    }))
  }
  console.log(cartItm)
  return (
    <CartProvider.Provider value={{ addCart, isInCart, removeItem, clear, cartItm, talValue, aumentarCant, disminuirCant }}>{children}</CartProvider.Provider>
  )
}

export default CartContext
