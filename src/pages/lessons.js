import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Lesson from "../components/Lessons"
const Lessons = ({data:{allStrapiLessons:{nodes:lessons},
},
}) => {
return<Layout>
<section className="blog-page">
<Lesson lessons={lessons} title="our lessons" />
</section>
</Layout>
}
export const query = graphql`

  {
    allStrapiLessons{
      nodes {
        slug
        desc
        content
        date(formatString: "MM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default Lessons
