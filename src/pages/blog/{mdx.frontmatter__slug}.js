import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
//import Seo from '../../components/seo'

//const BlogPost = () => {
//    return (
//        <Layout pageTitle="Super Cool Blog Posts">
//            <p>My blog post contents will go here (eventually).</p>
//        </Layout>
//    )
//}
const BlogPost = ({ data, children }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            {children}
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM D")
      }
    }
  }
`

//export const Head = () => <Seo title="Super Cool Blog Posts" />
export const Head = () => <title>Cool Blog Posts</title>
//export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost