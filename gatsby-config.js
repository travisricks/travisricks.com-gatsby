module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.jsx"),
        },
      },
    },
  ],
  siteMetadata: {
    title: "Travis Ricks - Fullstack Software Engineer",
    description:
      "Travis Ricks is a Tokyo-based fullstack engineer that specializes in building UIs with JavaScript",
  },
};
