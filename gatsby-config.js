module.exports = {
  siteMetadata: {
	  title: 'Maybe Useful Gatsby Time Investment',
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
	  {
		  resolve: "gatsby-source-filesystem",
		  options: {
			name: `blog`,
			path: `${__dirname}/blog`,
      }
    },
	"gatsby-plugin-mdx",
  ],
}
