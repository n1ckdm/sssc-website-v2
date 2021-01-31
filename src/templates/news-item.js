/* eslint-disable react/prop-types */
import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function NewsItem({ data }) {
  const news = data.newsJson
  return (
    <Layout>
      <div>{ news.title }</div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    newsJson(id: {eq: $id}) {
      body
      date
      description
      image
      title
    }
  }
`