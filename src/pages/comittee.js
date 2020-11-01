import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ComitteeMember from "../components/comittee-member"


const Committee = () => {
    const members = useStaticQuery(graphql`query Committee {        
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
        photo: e.node.photo.split('/').pop(),
        position: e.node.position,
        id: e.node.id
    }))

    return (
        <>
            <h1 className="text-ssscBlue">Comittee</h1>
            {
                members.map((m) => (
                    <ComitteeMember key={m.id} name={m.name} photo={m.photo} position={m.position} />
                ))
            }
        </>
    )
}

export default Committee