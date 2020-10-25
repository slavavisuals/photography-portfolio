import React from 'react';
import styled from "styled-components";
import {Layout} from "../components";
import Title from "../components/Title";

const LicensePage = () => {
  return (
    <Wrapper>
      <Layout>
        {/*<Title title="License" />*/}
          <div className="section-center">
            <Title title="License" />
            <p>Liability for content</p>
          </div>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  
  background: var(--clr-grey-10);
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  
 
  .section-center {  
     align-self: start;
     justify-self: center;
     p {
      margin-top: 2rem;
     }
    
    }  
  
  nav {
    background: var(--clr-primary-7);
  }  
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
    font-size: 10px;
    font-family: Verdana, Arial, sans-serif;
  }

  h2 {
    margin-top: 1rem;
    text-align: center;
    color: #000;
    font-size: 2.5rem;
    text-transform: uppercase;
    text-shadow: 1px 1px 0 var(--bg), 2px 2px 0 var(--accent);
  }
  
  .form-control:focus,
  .message:focus {
    outline: none;
    border: 2px solid var(--accent);
  }

  
  @media (min-width: 700px) {
    .section-center{
    
      margin-top: 5rem;
    }
  }
  
`

export default LicensePage;
