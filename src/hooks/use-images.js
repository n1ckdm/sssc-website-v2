import { graphql, useStaticQuery } from "gatsby"

export const useImages = () => {
    const { allImageSharp } = useStaticQuery(graphql`query {
    allImageSharp {
        edges {
            node {
                fluid {
                    originalName
                    srcSet
                    sizes
                    src
                    aspectRatio
                    base64
                }
            }
        }
    }
    }`)
    return allImageSharp.edges.map(e => ({ ...e.node.fluid }))
}