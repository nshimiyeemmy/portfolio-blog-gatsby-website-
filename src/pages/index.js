import { graphql } from "gatsby"
import React from "react"
import GeneralComponent from "../components/GeneralComponent"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Lessons from "../components/Lessons"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
export default ({data}) => {
  const {
    allStrapiLessons:{nodes:lessons},
    // allStrapiMembers:{nodes:members}
  }  = data
  return  <div className="home-container">
  <Layout>
    <Hero/>
    <Services />
    {/* <Teams members={members} title="Meet Our Team members" /> */}
    <GeneralComponent></GeneralComponent>
    <Testimonials></Testimonials>
    <Lessons lessons={lessons} title="our latest lessons" showLink/>
    </Layout>
    </div>
}
export const query = graphql`
  {
    allStrapiLessons(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MM Do, YYYY")
        id
        title
        category
        image {
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
