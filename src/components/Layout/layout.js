import React from "react"
import { Nav } from "../index"
import "../../styles/global.scss"
import { 
  container
} from "./layout.module.scss"

const Layout = ({ pageTitle, children }) => {

  return (
    <main className={container}>
      <title>{ pageTitle }</title>
        <Nav />
        {children}
    </main>
  )
}

export default Layout
