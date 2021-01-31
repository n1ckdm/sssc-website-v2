import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Header from "./header"
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
      <div className="h-screen flex flex-col place-content-between z-10">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main >{children}</main>
        <footer className="flex justify-center font-body font-light text-black mt-2">
          <div className="pr-1">
            Made by <a href="https://twitter.com/ND_Martin">@n1ckdm</a>
          </div>
          <div className="pl-1">
            ©{new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
