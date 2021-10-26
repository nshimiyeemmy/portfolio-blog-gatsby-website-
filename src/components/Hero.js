import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import SocialLinks from "../constants/socialLinks"
 const query = graphql`
 {
   file(relativePath: {eq: "round.png"}) {
     childImageSharp {
       fluid {
        ...GatsbyImageSharpFluid
       }
     }
   }
 }
`
const Hero = () => {
  const {file:{childImageSharp:{fluid},
},
} = useStaticQuery(query);
  return <header className="hero">
    <div className="section-center hero-center">
  <article className="hero-info">
    <div>
      <div className="underline"></div>
        <h1>Step in Technology & Business Ltd</h1>
        <h4>Our goal is to build connected villages & supporting <br/>the community to gain computer literacy and<br/> getting access on digital tools</h4>
        <Link to='/contact' className="btn">Contact Us</Link>
    <SocialLinks/>

    </div>
  </article>
  <Image fluid={fluid} className="hero-img"/>
    </div>
  </header>
}
export default Hero
