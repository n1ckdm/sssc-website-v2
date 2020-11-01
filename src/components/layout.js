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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="flex flex-col">
        <main className="z-10 mb-40" >{children}</main>
        <footer className="flex justify-center font-body font-light text-white mt-2">
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