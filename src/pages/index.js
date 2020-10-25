import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from "../components"
import SEO from "../components/seo"
const HomePage = ({data}) => {
  const {allAirtable:{nodes:projects}} = data;
  return (
    <Layout>
      <SEO title="Home" description="SlavaVisuals home page" />
      <Hero projects={projects}/>
      <About />
      <GridProjects projects={projects} title="latest photos" />
      <Slider />
    </Layout>

  )
}

export const query = graphql`
{
  allAirtable(filter: {table: {eq: "Hero"}}, limit: 4, sort: {order: DESC, fields: data___date}) {
  nodes {
    data {
      hero_photo {
        localFiles {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 85) {
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

export default HomePage
