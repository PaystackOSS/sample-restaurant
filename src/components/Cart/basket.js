import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./cart.scss"

const Basket = ({products, status}) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(status === "Pending") {
      setLoading(true)
    }

    if(status === "Paid") {
      setLoading(false)
    }
  }, [status])

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}}) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(
                width: 120
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `)

  const filterImage = (path) => {
    let image = data.allFile.edges.find(image => {
      return image.node.base === path
    })
    return getImage(image.node)
  }

  const parseCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount)
  }

  const calculateTotal = () => {
    let total =  products.reduce((acc, cv) => {
      return acc + cv.price
    }, 0)
    
    return parseCurrency(total)
  }

  const pushToTerminal = (id, offline_reference) => {

  }

  const createInvoice = () => {
    
  }

  return (
    <div className="menu-list">
      { loading && 
        <div className="menu-list__prompt">
          Kindly complete your payment on the Terminal
        </div>
      }
      {products && products.map((product) => (
        <div key={product.id} className="menu-list__body" >
          <div className="menu__content">
            <div className="menu__image">
              <GatsbyImage 
                  image={filterImage(product.image)}
                  alt={product.name}
                  placeholder="blurred"
                />
            </div>
            <div className="menu__description">
              <h4>{product.name}</h4>
              <span>{product.calories} cal</span>
            </div>
          </div>
          <div className="menu__quantity">
            <span>Qty: {product.quantity}</span>
          </div>
          <div className="menu__price">
            <span>{parseCurrency(product.price)}</span>
          </div>
        </div>
      ))}
      <div className="receipt">
        <div className="receipt__label">
          <span><strong>Total: </strong></span>
        </div>
        <div className="receipt__total">
          <span>{ calculateTotal() }</span>
        </div>
        <div className="receipt__checkout">
          <button onClick={() => createInvoice()} disabled={loading || status === false}>
            {loading ? <span className="spinner"></span> : "Checkout" }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Basket