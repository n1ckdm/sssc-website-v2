/* eslint-disable react/prop-types */
import React from "react"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"
import { useImages } from "../hooks/use-images"
import * as utils from "../utils"
import Layout from "../components/layout"

import "./news-item.css"

export default function NewsItem({ data }) {
  const news = data.newsJson
  const imgFluid = useImages().find(
    f => f.originalName === utils.parseImageName(news.image)
  )
  return (
    <Layout>
      <Image className="w-screen h-96" fluid={imgFluid} alt={news.title} />
      <div className="container mx-auto text-center">
        <p className="pageTitle">{news.title}</p>
        <p className="text-gray-700 font-light italic mb-10">
          {news.description}
        </p>
        <ReactMarkdown className="markdown text-justify px-4">
          {news.body}
        </ReactMarkdown>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    newsJson(id: { eq: $id }) {
      body
      date
      description
      image
      title
    }
  }
`
