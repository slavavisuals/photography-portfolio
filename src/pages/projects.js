import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Layout, Projects, Algolia } from "../components"
import SEO from "../components/seo";

const ProjectsPage = ({data}) => {
  //console.log(data);
  const {allAirtable:{nodes:projects}} = data;
  return (
    <Wrapper>
      <SEO title="Projects" description="Projects page"/>
      <Layout>
        <Projects title="photo projects" projects={projects} page />
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Projects"}}) {
      nodes {
        id
        data {
          date
          name
          type
          desc
          slug
          status
          postMarkdown
          cover_photo {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 2000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
