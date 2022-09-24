import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage 
                alt="Something about Git"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.FNpXhheOh4iw8ARx2-IbKAHaFs%26pid%3DApi&f=1&ipt=b96793e6e50de5520ba32890a63068554035e1776bb6a148151c9a7c7fa660d4&ipo=images"
            />
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>

export default IndexPage