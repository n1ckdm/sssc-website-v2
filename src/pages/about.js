/* eslint-disable react/prop-types */
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageItem from "../components/page-item"
import SEO from "../components/seo"

const About = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" description="All about the sailing club and our history" />
      <h1 className="pageTitle">About Us</h1>
      <div className="container mx-auto px-2 md:px-0">
        {data.allAboutJson.edges.map(({ node }, index) => {
          return (
            <PageItem key={ node.id } item={ node } justifyLeft={ index % 2 === 0 } />
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allAboutJson {
      edges {
        node {
          id
          image
          sub_heading
          body
        }
      }
    }
  }
`
export default About