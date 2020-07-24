import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection"
import Info from "../components/home/Info"
const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="About Page"
      styleClass="about-background"
    ></BackgroundSection>
    <Info />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
