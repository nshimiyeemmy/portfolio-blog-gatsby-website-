const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      lessons: allStrapiLessons {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.lessons.nodes.forEach(lesson => {
    createPage({
      path: `/lessons/${lesson.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: lesson.slug,
      },
    })
  })
}
