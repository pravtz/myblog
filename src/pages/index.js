import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import media from "styled-media-query"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Card from "../components/Cards"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              nameImage
              description
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              category
            }
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `)
  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <TitleContent>
        <h2><span>Bem-vindo</span><br/>ao meu <br/><span><b>Blog</b></span></h2>
        <h3>Aqui, você vai entender como eu vejo determinados assuntos como: programação, marketing e tecnologias do momento. Os conteúdos serão escritos numa linguagem simples e direta e sempre estarão abertos a uma discução. O meu objetivo não é impressionar ninguém, simplesmente expor as minhas opniões, compartilhar o que eu aprendi e discutir ideias. </h3>
      </TitleContent>
      <ContainerCards>
        {postList.map(
          ({
            node: {
              frontmatter: { title, nameImage, description, date, category },
              fields: { slug },
              timeToRead,
            },
          }) => (
            <WrapperCard>
              <Card
                nameImage={nameImage}
                slug={slug}
                title={title}
                description={description}
                date={date}
                timeToRead={timeToRead}
                category={category}
              />
            </WrapperCard>
          )
        )}
      </ContainerCards>
    </Layout>
  )
}

const ContainerCards = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;

  ${media.greaterThan("small")`
      display: flex;
      flex-wrap: wrap;
      max-width: 450px;
  `}
  ${media.greaterThan("medium")`
      display: flex;
      flex-wrap: wrap;
      max-width: 768px;
  `}
  ${media.greaterThan("large")`
      display: flex;
      flex-wrap: wrap;
      max-width: 1070px;
  
  `}
  ${media.greaterThan("hugle")`
      display: flex;
  flex-wrap: wrap;
      max-width: 1440px;
  
  `}
`

const WrapperCard = styled.div`
  padding: 4px;
  margin: 8px;
`
const TitleContent = styled.section`
  width: 320px;
  ${media.greaterThan("medium")`
    width: 600px;
  `}
  text-align: center;
  margin: 5em auto;
  h2{

    ${media.greaterThan("medium")`
      font-size: 3em;
    `}
    font-size: 2em;

    span{
      :first-child{
        font-size: 1.4em;
      }
      :last-child{
        font-size: 3em;
      }
    }
  }
  h3{
    ${media.greaterThan("medium")`
      margin-top: 2em;
      line-height: 1.8em;
      font-size: 1em;
    `}
    margin-top: 1.6em;
    line-height: 1.6em;
    font-size: 0.8em;

  }
`

export default IndexPage
