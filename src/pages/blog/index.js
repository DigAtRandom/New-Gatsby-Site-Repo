import * as React from 'react'
//import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
//import Seo from '../components/seo'

/*
const BlogPage = () => {
    return (
        <Layout pageTitle="My Blog Posts">
            <p>My cool posts will go in here</p>
        </Layout>
    )
}
*/
/*
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}
*/
/*
can't do this   data.allMdx.nodes.map((node) => (
const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}
*/
const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/blog/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                    </article>
                ))
            }
        </Layout>
    )
}
//export const query = graphql`
//  query {
//    allFile {
//      nodes {
//        name
//      }
//    }
//  }
//`
// can't do this   allMdx(sort: {fields: frontmatter___date, order: DESC}) {

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY MMMM D")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`
export const Head = () => <title>Blog Posts</title>
//export const Head = () => <Seo title="My Blog Posts" />
//export const Head = ({ data }) => (
//    <>
//        <title>{data.site.siteMetadata.title}</title>
//    </>
//)

export default BlogPage