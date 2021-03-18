import React from "react"
import { graphql } from "gatsby"
import Layout from "../../../components/layout"
import Img from "gatsby-image"
import { WrapImages, ImageObra } from "../../../styles-pages/progress-styled"
import { Container } from "../../../components/header/styled"
const Apartment = ({ data }) => {
  // console.log(data.obras.edges[0].node.childImageSharp)

  return (
    <Layout>
      <Container>
        <WrapImages>
          {data.obras.edges.map(({ node }) => (
            <ImageObra
              key={node.id}
              fluid={node.childImageSharp?.fluid}
              style={{ width: 200 }}
            />
          ))}
        </WrapImages>
      </Container>
    </Layout>
  )
}

export default Apartment

export const pageQuery = graphql`
  query {
    obras: allFile(
      filter: { relativeDirectory: { regex: "/(obra)/" } }
      sort: { fields: relativeDirectory, order: DESC }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
