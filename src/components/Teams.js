import React from "react"
import Team from "./Team"
import Title from "./Title"
export const Teams = ({members,title}) => {
  return <section className="section bg-white">
      <Title title={title} />
      {members.map((member)=>{
   return <Team key={member.id} {...member} />
      })} 
     </section>
}
export default Teams

