import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { CartContext } from "../../context/cart-context"
import Products from "../../data/products.json"
import "./product-card.scss"

const ProductCard = () => {

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}}) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(
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


  return (
    <CartContext.Consumer>
      { context => (
        <div className='product-container'>
          {Products.map((product) => (
            <div key={product.id} className='product'>
              <GatsbyImage 
                image={filterImage(product.image)}
                alt={product.name}
                placeholder="blurred"
              />
              <h2 className='product__title'>{product.name}</h2>
              <div className="product-meta">
                <span className="product-meta__price">&#8358; {product.price}</span>
                <span className="product-meta__calories">{product.calories} cal</span>
                <button className="product-meta__cart" onClick={() => context.updateCart(product.id)}>
                  <svg width="16" height="16" className="icon" fill="#f5ebdc" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 15.125a.75.75 0 100-1.5.75.75 0 000 1.5zm6 0a.75.75 0 100-1.5.75.75 0 000 1.5zM.875.875h2.25l2.025 9.3a1.5 1.5 0 001.5 1.2h5.775a1.5 1.5 0 001.5-1.2l1.2-6.3h-10.8" stroke="#f5ebdc" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </CartContext.Consumer>
  )
}

export default ProductCard