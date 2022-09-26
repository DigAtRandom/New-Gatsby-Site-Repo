import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
//import { graphql, StaticQuery } from 'gatsby'

//const Seo = ({ title }) => {
const useSiteMetadata = ({ title }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <title>{title} | {data.site.siteMetadata.title}</title>
    )
}

//export default Seo
export default useSiteMetadata