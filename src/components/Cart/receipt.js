import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"
import { CartContext } from "../../context/cart-context"

const Receipt = () => {
  const {resetCart} = useContext(CartContext)

  useEffect(() => {
    resetCart()
  }, [])

  return (
    <div className="success-prompt">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
        <circle fill="none" stroke="#1b8737" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" class="circle"></circle>
        <polyline fill="none" stroke="#1b8737" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "></polyline>
      </svg>
      <h1>Boom!🚀</h1>
      <p>Payment Successful. Kindly head over to the counter to pickup your order.</p>
      <Link to="/">
        Go Home
      </Link>
    </div>
  )
}

export default Receipt