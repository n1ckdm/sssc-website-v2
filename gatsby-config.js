module.exports = {
  siteMetadata: {
    title: `South Shields Sailing Club`,
    description: `Website for South Shields Sailing Club, based in the North East of the UK`,
    author: `Nick Martin`
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
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
        path: `${__dirname}/assets/content/about`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/assets/content/committee`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/assets/content/join`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/assets/content/membership`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/assets/content/news`
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
