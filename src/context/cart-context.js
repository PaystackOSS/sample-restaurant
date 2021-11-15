import React, { useState, createContext } from "react"

export const CartContext = createContext()

const CartContextProvider = (props) => {
  const [productIds, setProductIds] = useState([])

  const updateCart = (id) => {
    setProductIds([...productIds, id])
  }

  const resetCart = () => {
    setProductIds([])
  }

  return (
    <CartContext.Provider value={{
      productIds,
      updateCart,
      resetCart
    }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default ({ element }) => (
  <CartContextProvider>
    {element}
  </CartContextProvider>
)