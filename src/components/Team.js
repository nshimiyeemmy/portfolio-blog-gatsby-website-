import React from "react"
import Title from "./Title"
import Image from "gatsby-image"
import { FaFacebook,FaTwitter,FaGooglePlus,FaLinkedin } from "react-icons/fa"
// import services from "../constants/team"
const Team = ({names,position,image}) => {
  return <div class="container">
  <div class="row">
  <div class="col-md-3 col-sm-6">
  <div class="column">
      <div class="our-team">   
      <div  className="pic" >         
                { image && (
              <Image fluid={image.childImageSharp.fluid}/>
                 )}
                    <ul className="social">
                        <li><a href="#" className="fab fa-facebook"><FaFacebook /></a></li>
                        <li><a href="#" className="fab fa-twitter"><FaTwitter/></a></li>
                        <li><a href="#" className="fab fa-google-plus"><FaGooglePlus/></a></li>
                        <li><a href="#" className="fab fa-linkedin"><FaLinkedin/></a></li>
                    </ul>
                    </div> 
                <div className="team-content">
                    <div className="team-info">
                        <h3 className="title">{names}</h3>
                        <span className="post">{position}</span>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
}

export default Team