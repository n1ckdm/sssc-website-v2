module.exports = {
  siteMetadata: {
    title: `South Shields Sailing Club`,
    description: `Website for South Shields Sailing Club, based in the North East of the UK`,
    author: `Nick Martin`
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve: `gatsby-plugin-json-remark`,
      options: {
        paths: [
          `${__dirname}/assets/content/about`
        ],
        fieldNameBlacklist: [
          "id",
          "children",
          "parent",
          "fields",
          "internal",
          "path",
          "template",
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/assets/content`
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `South Shields Sailing Club`,
        short_name: `SSSC`,
        start_url: `/`,
        background_colorL: `#4169E1`,
        theme_color: `#4169E1`,
        display: `minimal-ui`,
        icon: `assets/SSSC.svg`
      }
    }
  ],
}
