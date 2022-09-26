import * as React from 'react'
import { Link } from 'gatsby'
//import { Link, useStaticQuery, graphql } from 'gatsby'
//import { Link, StaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
} from './layout.module.css'

//NOTE: following two lines were used in the header position below under return component. Then something broke and useStaticQuery would not work anymore
//<header>{data.site.siteMetadata.title}</header>
//<header className={siteTitle}>{data.site.siteMetadata.title}</header>
//Use:  next when above doesn't work
//<header className={siteTitle}>What Header You Wants?</header>

//const data = StaticQuery(graphql`
const Layout = ({ pageTitle, children }) => {
/*
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  */

    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <header className={siteTitle}>What Header You Wants?</header>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout