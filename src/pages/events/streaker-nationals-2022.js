/* eslint-disable react/prop-types */
import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MainImg from "../../../assets/streaker.jpg"

import "./event-update.css"

const StreakerNationals = ({ data }) => {
  console.log(data)
  const updated = data.allEventUpdateJson.edges.map(n => (
    <div key={n.node.id}>
      <p className="font-semibold text-gray-700 text-justify mt-4">
        {n.node.title}
      </p>
      <ReactMarkdown className="markdown text-justify event-update">
        {n.node.body}
      </ReactMarkdown>
    </div>
  ))

  return (
    <Layout>
      <SEO
        title="2022 Streaker Nationals"
        description="Information about the up and coming Streaker Nationals"
      />
      <div className="container mx-auto text-center">
        <p className="pageTitle">2022 Streaker Nationals</p>
        <p className="text-gray-700 font-light italic mb-8">
          South Shields Sailing Club are hosting the 2022 Streaker Nationals
        </p>
        <p className="font-semibold text-lg text-justify mt-6">
          Latest Updates
        </p>
        <div>{updated}</div>
        {/* <img className="w-11/12 md:w-2/5 mx-auto" src={TitleImg} /> */}
        <p className="font-semibold text-justify text-lg mt-6">General Info</p>
        <p className="text-gray-900 text-justify">
          THIS TEXT NEEDS UPDATING. For more information on these aspects of the
          event, please refer to the&nbsp;
          <a
            className="text-blue-700"
            href="https://www.streaker-class.org.uk/index.asp"
          >
            class association website
          </a>
          .
        </p>
        <img className="w-11/12 md:w-2/5 mx-auto" src={MainImg} />
        <p className="font-semibold text-lg text-justify">Race Programme</p>
        <p className="text-gray-900 text-justify">
          Registration: Sun 22nd Aug 16.00-19.00, Mon 23rd Aug 09.00-10.30
        </p>
        <p className="text-gray-900 text-justify">
          Briefing: Mon 23rd Aug 10:30
        </p>
        <p className="text-gray-900 text-justify">
          Racing: 2 races per day, 13.00 start Mon 23rd Aug, 12.00 Tue 24th-Fri
          27th
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allEventUpdateJson(
      filter: { event: { eq: "streaker2022" } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id
          date
          title
          description
          body
          event
          fields {
            slug
          }
        }
      }
    }
  }
`

export default StreakerNationals
