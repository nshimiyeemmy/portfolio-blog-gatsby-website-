
import { Link } from "gatsby"
import Image from "gatsby-image"
import React from "react"

const Lesson = ({id,title,image,date,category, slug, desc}) => {

  return (
  <Link to={`/lessons/${slug}`} className="blog" key={id}>
  <article>
    { image && (
    <Image fluid={image.childImageSharp.fluid} className="blog-img" />
    )}
    <div className="blog-card">
      <h4>{title}</h4>
      <p>{desc}</p>
      <div className="blog-footer">
        <p>{category}</p>
        <p>{date}</p>
      </div>
    </div>
  </article>
  </Link>
  )
}
Lesson.propTypes = { }
export default Lesson
