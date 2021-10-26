import { Link } from "gatsby"
import React from "react"
import { FaAlignRight } from "react-icons/fa"
// import logo from "../assets/logo.jpg"
import logo from "../assets/logo.png"
import PageLinks from "../constants/links"
const Navbar = ({toggleSidebar}) => {
  return <nav className="navbar">
    <div className="nav-center">
    <div className="nav-header">
      <Link to="/" ><img width="70" height="60" src={logo} alt="logo"/></Link> 
      <button type="button" className="toggle-btn" onClick={toggleSidebar}>
        <FaAlignRight></FaAlignRight>
      </button>
    </div>
    <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
}
export default Navbar
