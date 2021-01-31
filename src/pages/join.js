/* eslint-disable react/prop-types */
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageItem from "../components/page-item"

const Join = ({ data }) => {
  return (
    <Layout>
      <h1 className="pageTitle">Join</h1>
      <div className="container mx-auto px-2 md:px-0">
        {data.allJoinJson.edges.map(({ node }, index) => {
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
    allJoinJson {
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
export default Join
