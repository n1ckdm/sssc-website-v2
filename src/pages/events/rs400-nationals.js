/* eslint-disable react/prop-types */
import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import TitleImg from "../../../assets/rs400nats.png"
import MainImg from "../../../assets/rs400nats2.png"

import "./event-update.css"

const Rs400Nationals = ({ data }) => {
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
        title="RS 400 Nationals"
        description="Information about the up and coming RS 400 Nationals Event"
      />
      <div className="container mx-auto text-center">
        <p className="pageTitle">RS 400 Nationals</p>
        <p className="text-gray-700 font-light italic mb-8">
          South Shields Sailing Club are hosting (a year later than planned) the
          RS 400 2021 Noble Marine TridentUK National Championships
        </p>
        <p className="font-semibold text-lg text-justify mt-6">
          Latest Updates
        </p>
        <div>{updated}</div>
        {/* <img className="w-11/12 md:w-2/5 mx-auto" src={TitleImg} /> */}
        <p className="font-semibold text-justify text-lg mt-6">General Info</p>
        <p className="text-gray-900 text-justify">
          We are very pleased to be hosting the RS 400 Nationals at South
          Shields Sailing Club. Our superb race area and strong home fleet of
          sailors from both South Shields as well as Tynmouth accross the water
          should make for an excellent event. A range of social acivities will
          (subject to covid rules) be present. For more information on these
          aspects of the event, please refer to the&nbsp;
          <a
            className="text-blue-700"
            href="https://www.rs400.org/championships/index.asp?pg=Home&eid=2089"
          >
            class association website
          </a>
          .
        </p>
        <p className="font-semibold text-red-500 text-justify text-lg mt-6">
          COVID
        </p>
        <p className="font-semibold text-lg text-justify mt-6">
          Please note that some details of the programme and event facilities
          may need to be amended in line with covid rules/guidance at the time
          of the event. The Class and the Club will work together to ensure we
          can deliver a competitive, enjoyable and safe event for everyone. Our
          emphasis is on finding a way to run the event within any restrictions
          and we are in regular contact with the club, looking at probable
          scenarios. With this in mind we are currenly capping entry at 65
          boats, boats entered after that limit will be placed on a waiting
          list. We sincerely hope that we will be able to accept entries from
          all sailors who wish to take part. Please book accommodation with a
          cancellation policy and/or take out travel insurance.
        </p>
        <p className="font-semibold text-lg text-justify mt-6">Racing</p>
        <p className="text-gray-900 mb-8 text-justify">
          There will be two races scheduled for each day, from Monday 23rd to
          Friday 27th August. Prizes for Gold, Silver, Bronze fleets, first lady
          helm, first lady crew, first master and grandmaster helms, and
          possibly others. The daily &apos;Duckham&apos; awards will of course
          feature once again and this year we will be introducing a new buddy
          prize too.
        </p>
        <img className="w-11/12 md:w-2/5 mx-auto" src={MainImg} />
        <p className="font-semibold text-lg text-justify">
          Race Programme (provisional)
        </p>
        <p className="text-gray-900 text-justify">
          Optional Coaching: Sun 22nd Aug
        </p>
        <p className="text-gray-900 text-justify">
          Registration: Sun 22nd Aug 16.00-19.00, Mon 23rd Aug 09.00-10.30
        </p>
        <p className="text-gray-900 text-justify">
          Registration: Sun 22nd Aug 16.00-19.00, Mon 23rd Aug 09.00-10.30
        </p>
        <p className="text-gray-900 text-justify">
          Briefing: Mon 23rd Aug 11.00
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
    allEventUpdateJson(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          date
          title
          description
          body
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Rs400Nationals
