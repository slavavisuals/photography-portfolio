import React from 'react';
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Layout from "../components/layout";
import Image from "gatsby-image";
import ProjectBackground from "../components/ProjectBackground";



const SingleProject = ({data}) => {
  //console.log(data.project.nodes.data);
  const {postMarkdown, name, desc} = data.project.nodes[0].data;


  const coverImage = data.project.nodes[0].data.cover_photo.localFiles[0].childImageSharp.fluid;
  //const projectPhotos = data.project.nodes[0].data.project_photos[0].data.photos.localFiles;
  const projectPhotos = data.project.nodes[0].data.project_photos;
  //console.log(projectPhotos.notes);

  return (
      <Wrapper>
        <Layout>
            <ProjectBackground image={coverImage}>
              <article>
                <h3>{desc}</h3>
                <h1>{name}</h1>
              </article>
            </ProjectBackground>

            <div className="section-center">
              <ReactMarkdown source={postMarkdown} />
              {projectPhotos.map((photo, index) => {
                //console.log(photo.data.photos.localFiles[0].childImageSharp.fluid.src);
                //console.log(photo.data.notes);
                const notes = photo.data.notes;
                const altTag = photo.data.name;
                return (
                  <div className="image-post" key={index}>
                    <div className="container">
                      <Image fluid={photo.data.photos.localFiles[0].childImageSharp.fluid} className="img" alt={altTag ? altTag : name } />
                    </div>
                    {notes ? (<p>{notes}</p>) : ''}
                  </div>
                )
              })}
            </div>
        </Layout>
      </Wrapper>
  )
}


export const query = graphql`
  query GetSingleBlog($slug: String!){
    project: allAirtable(filter: {data: {slug: {eq: $slug}}}) {
      nodes {
        data {
          project_photos {
            id
            data {
              photos {
                localFiles {
                  childImageSharp {
                    fluid(maxWidth: 1170, quality: 90) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              notes
              name
            }
          }
          desc          
          postMarkdown
          name
          cover_photo {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 75) {
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

//query GetSingleBlog($slug: String!)

/*export const query = graphql`
  query GetSingleBlog($slug: String!){
    project: allAirtable(filter: {data: {slug: {eq: $slug}}}) {
      nodes {
        data {
          project_photos {
            data {
              photos {
                localFiles {                  
                  childImageSharp {
                    fluid(maxWidth: 1170, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
            }
          }
          postMarkdown
          name
          cover_photo {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 1170, quality: 95) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
  
`*/

const Wrapper = styled.section`
  
  article {
    width: 85vw;
    max-width: 800px;
    color: var(--clr-white);
    text-align: center;
    h1 {
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1.25;
      margin: 2rem 0 3rem 0;
      letter-spacing: 3px;
    }
    h3 {
      font-weight: 400;
      font-family: "Caveat", cursive;
    }
    a {
      background: transparent;
      border: 2px solid var(--clr-white);
      padding: 0.25rem 1rem;
      text-transform: capitalize;
      letter-spacing: 5px;
      color: var(--clr-white);
      font-size: 1rem;
      cursor: pointer;
      transition: var(--transition);
    }
    a:hover {
      background: var(--clr-white);
      color: var(--clr-black);
    }
    @media (min-width: 800px) {
      /* padding: 0 1rem; */
      a {
        font-size: 1.25rem;
        padding: 0.5rem 1.25rem;
      }
      h1 {
        letter-spacing: 5px;
      }
    }
  }
  nav {
    background: var(--clr-primary-7);
  }  
 
 .top-banner-section{
  display: grid;
  grid-template-columns: 1fr; // stretch to the full frame
  grid-template-rows: 150px; // 350 pixels tall
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-content: center;
  justify-content: center;
 }
 .section-center{
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
 }
 
 .section-center {
    margin-top: 5rem;
    margin-bottom: 5rem;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .img {
      //height: 50rem;
      height:auto;
      // max-height:80vh;
      border-radius: var(--radius);
      transition: var(--transition);
    }    
    .container {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);
      background: var(--clr-primary-7);
    }
    .image-post{
      p{
          margin-top: 1rem;
          line-height: 2;
        }
    }      
    
  }
  
`

export default SingleProject;
