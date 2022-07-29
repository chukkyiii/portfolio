module.exports = {
  siteMetadata: {
    title: `WithoutTheEye`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    }, {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/
        }
      }
    },
  ],
};