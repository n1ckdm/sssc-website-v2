/* eslint-disable react/prop-types */
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import NewsCard from "../components/news-card"

const News = ({ data }) => {
  return (
    <Layout>
      <div className="md:container md:mx-auto">
        <h1 className="pageTitle mb-4">News</h1>
        <div className="md:flex md:flex-wrap md:justify-evenly">
          {data.allNewsJson.edges.map(({ node }) => (
            <NewsCard
              key={node.id}
              news={node} 
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql` query {
  allNewsJson(sort: {fields: date, order: DESC}) {
    edges {
      node {
        id
        date
        image
        title
        description
        fields {
          slug
        }
      }
    }
  }
}
`

export default News