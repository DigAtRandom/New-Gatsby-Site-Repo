import Seo from '../components/seo'
import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Mine">
            <p>Hi there! Ain't this fun? Site built with Gatsby. A real pain in the arse to use. But you wouldn't know it from all the jabber online</p>
        </Layout>
    )
}

//export const Head = () => <title>About Me</title>
export const Head = () => <Seo title="About Page" />

export default AboutPage