import React, { useEffect, useState, useContext } from "react"
import Pusher from 'pusher-js';

import { CartContext } from "../context/cart-context"
import { Layout, Basket, Receipt } from "../components"

import Products from "../data/products.json"
import "../styles/global.scss"
import "../components/Cart/cart.scss"

const Cart = () => {
  const [event, setEvent] = useState("Not Paid");
  const [products, setProducts] = useState([])
  const {productIds} = useContext(CartContext)

  useEffect(() => {
    notifications()
  }, [event])

  useEffect(() => {
    setProducts(fetchProducts(productIds))
  }, [productIds])

  const fetchProducts = (productIds) => {
    return Products.filter((product) => productIds.includes(product.id))
  }

  const notifications = () => {


    const pusher = new Pusher(process.env.GATSBY_PUSHER_KEY, {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      if(data.event === "paymentrequest.pending") {
        setEvent("Pending")
      }

      if(data.event === "paymentrequest.success") {
        setEvent("Paid")
      }
    });
  }

  return (
    <Layout pageTitle="Cart">
      { event === "Paid" ?
        <Receipt /> :
        <div className="cart">
          <h2 className="cart__header">
            <span>Orders</span><span className="pill">{event}</span>
          </h2>
          <div className="cart__items">
            <Basket products={products} status={event} />
          </div>
        </div>
      }
    </Layout>
  )
}

export default Cart
