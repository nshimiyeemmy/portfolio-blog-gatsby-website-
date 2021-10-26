import React from "react"
import services from "../constants/services"
import Title from "./Title"
const Services = () => {
  return <section className="section">
    <Title title="what we offer" />
    <p className="section-para"><span>Who we </span>are and <span> what we</span>  do is defined by our culture and company values. Our aim is to become our customers' solutions by providing <span>remarkable services</span> to make customer wish a priority.</p>
    <div className="section-center services-center">
   {services.map((service)=>{
     const {id,icon,title,text} = service
     return <article key={id} className="service">
       {icon}
       <h4>{title}</h4>
       <div className="underline"></div>
       <p>{text}</p>
     </article>
   })}
    </div>
  </section>
}
export default Services
