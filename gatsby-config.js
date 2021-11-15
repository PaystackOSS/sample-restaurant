module.exports = {
  siteMetadata: {
    title: "Burger King Demo",
  },
  flags: {
    FUNCTIONS: true
  },
  plugins: [
    "gatsby-plugin-sass",   
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
