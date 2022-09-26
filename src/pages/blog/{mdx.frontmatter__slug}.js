import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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
    const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>Posted: {data.mdx.frontmatter.date}</p>
            <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
            />
            <p>
                Photo Credit:{" "}
                <a href={data.mdx.frontmatter.hero_image_credit_link}>
                    {data.mdx.frontmatter.hero_image_credit_text}
                </a>
            </p>
            {children}
        </Layout>
    )
}

//export const query = graphql`
//  query ($id: String) {
//    mdx(id: {eq: $id}) {
//      frontmatter {
//        title
//        date(formatString: "YYYY MMMM D")
//      }
//    }
//  }
//`
export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "yyyy MMMM DD")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

//export const Head = () => <Seo title="Super Cool Blog Posts" />
export const Head = () => <title>Cool Blog Posts</title>
//export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost