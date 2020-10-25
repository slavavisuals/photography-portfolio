/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
     {
      projects: allAirtable(filter: {table: {eq: "Projects"}}) {
        nodes {
          data {
            slug
          }
        }
      }
    }
`)

  result.data.projects.nodes.forEach(project => {
    createPage({
      path: `/project/${project.data.slug}`,
      component: path.resolve(`src/templates/project-template.js`),
      context: {
        slug: project.data.slug,
      },
    })
  })
}
