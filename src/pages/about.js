import React from "react";
import styled from "styled-components";
import { Layout } from "../components";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import Title from "../components/Title";
import SEO from "../components/seo";

const AboutPage = () => {

  return (
    <Wrapper>
      <SEO title="about me" />
      <Layout>
          <Title title="About Me"/>
          <div className="section-center">
            <article>
              <p>I am a Toronto based Professional Photographer who creates an experience for you where you look
                and feel like a celebrity.
                I believe the perfect day begins with you. Your originality, your taste, and your style.
                The unexpected shots, the raw emotional display, and the sheer joy the moment is what I strive to
                deliver.</p>

              <p>I am a story teller, a fantasy fanatic, and a romantic who tries to always let in the good moments.
                At least once in your life give yourself the gift of being the absolute centre of attention!
                Tell me how you dream of being photographed and we’ll go from there!</p>
            </article>
          </div>
      </Layout>
  </Wrapper>
  )
}

const Wrapper = styled.main`
  background: var(--clr-grey-10);
  min-height: 100vh;
  display: grid;
  grid-template-rows: 100px  auto 1fr;
  
.section-center {
    max-width: var(--max-width);
    }
 
  nav {
    background: var(--clr-primary-7);
  }  
  
  h2 {
    margin-top: 3rem;
    text-align: center;
    color: #000;
    font-size: 2.5rem;
    text-transform: uppercase;
    text-shadow: 1px 1px 0 var(--bg), 2px 2px 0 var(--accent);
  }
`
export const query = graphql`
  query {
    file(relativePath: { eq: "my-photo.jpg" }) {
      childImageSharp {
         fluid(maxWidth: 800 ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default AboutPage