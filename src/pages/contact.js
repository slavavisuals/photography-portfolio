import React from 'react';
import styled from "styled-components";
import {Layout} from "../components";
import Title from "../components/Title";
import SEO from "../components/seo";

const ContactPage = () => {
  return (
          <Wrapper>
            <SEO title="Contact" description="Contact page"/>
              <Layout>
                  <Title title="Contact" />
                  <div className="section-center">
                    <form action="https://formspree.io/mknpwzar" method="POST">
                      <input
                        name="name"
                        className="form-control"
                        id="name"
                        aria-label="Name"
                        placeholder="Your Name *"
                        required
                        type="text"
                      />
                      <input
                        name="email"
                        className="form-control"
                        type="email"
                        id="email"
                        aria-label="Email"
                        placeholder="Your Email *"
                        required
                      />
                      <input
                        name="phone"
                        className="form-control"
                        type="tel"
                        id="phone"
                        aria-label="Phone Number"
                        placeholder="Your Phone Number"
                      />
                      <textarea
                        name="msg"
                        className="message form-control"
                        id="msg"
                        aria-label="Message"
                        placeholder="Your Message *"
                        required
                      />
                      <button type="submit" className="btn">Send Message</button>
                    </form>
                  </div>


              </Layout>
            </Wrapper>
  );
}

const Wrapper = styled.main`  
  background: var(--clr-grey-10);
  min-height: 100vh;
  display: grid;
  grid-template-rows: 100px auto 1fr;
  
  
  .section-center {  
     //align-self: center;
     justify-self: center;
    
      max-width: var(--max-width);
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
    margin-top: 3rem;
    text-align: center;
    color: #000;
    font-size: 2.5rem;
    text-transform: uppercase;
    text-shadow: 1px 1px 0 var(--bg), 2px 2px 0 var(--accent);
  }
  
  /* Form Elements */
  
  form {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }

  .form-control {
    width: auto;
    margin: 0;
  }
  

  .message {
    padding-top: 4rem; 
    grid-column: 2;
    grid-row: 1 / span 3;
  }

  .btn {
    justify-self: center;
    grid-column: span 2;
    padding: 1rem;
  }  
  
  
  .form-control {
    min-height: 4rem;
    background-color: #fff!important;   
    margin-bottom: 1rem;
    padding: 1.175rem 0.75rem;
    border-radius: 4px;
    font-size: 0.875rem;
    border: 2px solid transparent;
    font-family: Verdana, Arial, sans-serif;  
  }  
  .form-control::placeholder {
    color: #9da1a5;
    font-weight: bold;
  }
  .message {    
    resize: none;
    //min-height: 15rem;
  }
  
  .form-control:focus,
  .message:focus {
    outline: none;
    border: 2px solid var(--accent);
  }
  
  @media (max-width: 699px){
    form {
      display: block;
      margin-top: 2rem;
    }    
    .form-control{
      width: 100%;
      height: 3rem;
    }
    .message {
      min-height: 5rem;
      padding-top: 1rem;
    }
        
    .btn {
      width: 100%;
    } 
  }
  
  @media (min-width: 700px) {
    .section-center{
      margin-top: 5rem;
    }
  }  
  
  
`

export default ContactPage;
