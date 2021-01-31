import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import ComitteeMember from "../components/comittee-member"
import SEO from "../components/seo"


const minutesLink = "https://www.myclubhouse.co.uk/SSSC/Documents/Download?categoryID=8&columns=ID%3AA1%2CTitle%3AA0%2CDescription%2CFilename%2CAuthor%2CDate&pageSize=20&selectedPage=0"

const Committee = () => {
  const members = useStaticQuery(graphql`
    query Committee {
      allCommitteeJson {
        edges {
          node {
            id
            name
            position
            photo
          }
        }
      }
    }
  `).allCommitteeJson.edges.map(e => ({
    name: e.node.name,
    photo: e.node.photo.split("/").pop(),
    position: e.node.position,
    id: e.node.id,
  }))

  return (
    <>
    <Layout>
      <SEO title="Committee" description="Find out who is on the committee of SSSC" />
      <div className="md:container md:mx-auto">
        <h1 className="pageTitle">Comittee</h1>
        <p className="pl-3">Minutes for the monthly committee meeting can be accessed <a className="text-ssscBlue" href={ minutesLink } >here</a>.</p>
        <div className="md:flex md:flex-wrap pt-1">
          {members.map(m => (
            <ComitteeMember
              key={m.id}
              name={m.name}
              photo={m.photo}
              position={m.position}
            />
          ))}
        </div>
      </div>
    </Layout>
    </>
  )
}

export default Committee
