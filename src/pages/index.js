import { Link } from "gatsby"
import React from "react"
import FB from "../../assets/facebook.svg"
import Insta from "../../assets/instagram.svg"
import BackgroundVideo from "../components/background-video"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"



const IndexPage = () => (
  <>
    <BackgroundVideo />
    <Layout>
      <SEO title="Home" description="Come and find out about sailing with us!" />
      <div className="container mx-auto text-center">
        <h1 className="hidden md:block">South Shields Sailing Club</h1>
        <h1 className="md:hidden">SSSC</h1>
        <div>
          <button className="md:w-4/12 md:text-2xl">
            <Link to="/">{`Let's Go Sail!`}</Link>
          </button>
        </div>
        <div>
          <button className="md:w-4/12 md:text-2xl">
            <Link to="/">Member Area</Link>
          </button>
        </div>
        <div className="flex">
          <div className="flex mx-auto mt-6">
            <a href="https://www.instagram.com/southshieldssailingclub/"><img src={Insta} className="w-10 mx-2" /></a>
            <a href="https://www.facebook.com/groups/SouthShieldsSailingClub/"><img src={FB} className="w-10 mx-2" /></a>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
