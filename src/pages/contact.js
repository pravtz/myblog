import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="contact" />
    <Contact />
      <WrapperContact>
        <TitleContact>Fale comigo!</TitleContact>
        <ContentContact>
          Além das minhas varias redes sociais no rodapé do site, sinta-se a vontade
          em entrar contato por e-mail. <br />
          <address>edersonpravtz@gmail.com</address>
        </ContentContact>
      </WrapperContact>
    <Contact />
  </Layout>
)

const Contact = styled.div`
  height: 20vh;
`

const WrapperContact = styled.div`
  width: 440px;
  margin: 0 auto;
`

const TitleContact = styled.h2`
  font-size: 4em;
  margin-bottom: 1em;
  text-align: center;
`

const ContentContact = styled.p`
text-align: center;
  address{
    margin-top: 1.5em;
    text-align: center;
  }
`

export default ContactPage
