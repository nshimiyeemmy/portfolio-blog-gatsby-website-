import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
  <Layout>
    <section className="contact-page">
   <article className="contact-form">
  <h3>Get in touch</h3>
  <form  action="https://formspree.io/f/xleaoawo"
  method="POST">
   <div className="form-group">
     <input type="text" name="name" placeholder="your names" className="form-control" />
     <input type="email" name="email" placeholder="your email" className="form-control" />
     <textarea placeholder="your message" name="message" rows="5" className="form-control" ></textarea>
     </div>  
     <button type="submit" className="submit-btn btn">submit message</button>
  </form>
   </article>
    </section>
  </Layout>
  )}
export default contact
