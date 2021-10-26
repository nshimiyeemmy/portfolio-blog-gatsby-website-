import React from "react"
import Title from "./Title"
import Lesson from "./Lesson"
import { Link } from "gatsby"
export const Lessons = ({lessons,title,showLink}) => {
  return <section className="section">
    <Title title={title} />
    <div className="section-center blogs-center">
      {lessons.map((lesson)=>{
   return <Lesson key={lesson.id} {...lesson} />
      })} 
    </div>
    {/* {showLink && (<Link to="/lessons" className="btn center-btn">single blog</Link>)} */}
  </section>
}
export default Lessons
