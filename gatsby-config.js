require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}.local`,
})
// const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `Slava Visuals Photography`,
    description: `Slavavisuals is portfolio site of Toronto Based Photographer, specializing in portraits, fashion and landscape.`,
    author: `@slavavisuals`,
    titleTemplate: `%s | Slavavisuals - Photography Portfolio`,
    url: `https://slavavisuals.com/`,
    image: `mainBcg.jpg`,
    twitterUsername: `@slavavisuals`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: true,
        stripMetadata: false,
        defaultQuality: 85,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `500`, `700`],
          },
          {
            family: `Open Sans`,
          },
          {
            family: `Caveat`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 5,
        tables:[
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: "Videos",
            mapping:{url:`fileNode`}
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: "Hero",
            mapping:{hero_photo:`fileNode`}
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: "Projects",
            tableLinks: ["videos", "customer", "project_photos"],
            mapping:{cover_photo:`fileNode`}
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: "Customers",
            mapping:{image:`fileNode`}
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: "Project_Photos",
            mapping:{photos:`fileNode`}
          }
        ],
      },
    },
  ],
}
