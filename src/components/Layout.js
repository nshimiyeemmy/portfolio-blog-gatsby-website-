import React from "react"
import Footer from "./Footer"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
const Layout = ({ children }) => {
  const [isOpen,setIsOpen] = React.useState(false);
  const toggleSidebar=()=>{
   setIsOpen(!isOpen)
  }
  return (
    <>
    <Navbar toggleSidebar={toggleSidebar} />
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout
