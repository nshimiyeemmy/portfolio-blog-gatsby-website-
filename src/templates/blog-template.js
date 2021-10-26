import { DiscussionEmbed } from 'disqus-react';
import { graphql } from "gatsby";
import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";

const ComponentName = ({data}) => {
  const disqusShortname = "stepintech";
    const disqusConfig = {
      identifier: data.lesson.id,
      title: data.lesson.title,
    };
  const {content} = data.lesson
  return <Layout>
    <section className="blog-template">
      <div className="section-center">
     <article className="blog-content">
      <ReactMarkdown source={content} />
     </article>
      </div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </section>
  </Layout>
}

export const query = graphql`
  query GetSingleLesson($slug: String) {
    lesson: strapiLessons(slug: { eq: $slug }) {
      content
    }
  }
`

export default ComponentName
