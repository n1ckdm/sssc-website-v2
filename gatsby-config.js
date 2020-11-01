module.exports = {
  siteMetadata: {
    title: `South Shields Sailing Club`,
    description: `Website for South Shields Sailing Club, based in the North East of the UK`,
    author: `Nick Martin`
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`
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
