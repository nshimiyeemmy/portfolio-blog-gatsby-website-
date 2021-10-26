import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import AboutUs from "../components/AboutUs"
import GalleryComponent from "../components/GalleryComponent"
// ...GatsbyImageSharpFluid
const About = () => {
  return <Layout>
    <AboutUs></AboutUs>
    <GalleryComponent></GalleryComponent>
    </Layout>
}

export default About
