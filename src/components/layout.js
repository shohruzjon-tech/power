import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header.component";
import Footer from "./Footer/footer.component";
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header/>
        <main>{children}</main>
      <Footer/>
    </>
  )
}



export default Layout
