const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type.endsWith("Json")) {
    // NewsJson, MembershipJson, CommitteeJson, AboutJson
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    // if (node.body) {
    //   const textNode = {
    //     id: `${node.id}-MarkdownBody`,
    //     parent: node.id,
    //     dir: path.resolve("./"),
    //     internal: {
    //       type: `${node.internal.type}MarkdownBody`,
    //       mediaType: "text/markdown",
    //       content: node.body,
    //       contentDigest: node.id,
    //     },
    //   }

    //   createNode(textNode)
    //   createNodeField({
    //     node,
    //     name: "markdownBody___NODE",
    //     value: textNode.id,
    //   })
    // }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allNewsJson {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allNewsJson.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/news-item.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        id: node.id,
      },
    })
  })
}
