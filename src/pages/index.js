import * as React from "react"
import { Layout, ProductCard } from "../components"

import '../styles/global.scss'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <ProductCard />
    </Layout>
  )
}

export default IndexPage
