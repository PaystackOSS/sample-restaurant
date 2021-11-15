import React from "react"
import { Link } from "gatsby";

import { CartContext } from "../../context/cart-context"
import "./nav.scss"

const Nav = () => {

  return (
    <CartContext.Consumer>
      {context => (
        <nav className="nav">
          <Link className="nav__brand" to="/">
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="5" fill="#285056" />
            </svg>
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="12" fill="#FFAD00" />
            </svg>
            <svg width="28" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.626.503c.419-.67 1.462-.67 1.882 0l12.477 19.98c.42.673-.103 1.517-.941 1.517H1.089c-.838 0-1.361-.844-.94-1.518L12.626.503z" fill="#E9623B" />
            </svg>
          </Link>
          <ul className="nav__items">
            <li>
              <Link to="/cart" className="nav__cart">
                <svg width="16" height="16" fill="#f5ebdc" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 15.125a.75.75 0 100-1.5.75.75 0 000 1.5zm6 0a.75.75 0 100-1.5.75.75 0 000 1.5zM.875.875h2.25l2.025 9.3a1.5 1.5 0 001.5 1.2h5.775a1.5 1.5 0 001.5-1.2l1.2-6.3h-10.8" stroke="#f5ebdc" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{context.productIds.length}</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </CartContext.Consumer>
  )
}

export default Nav
