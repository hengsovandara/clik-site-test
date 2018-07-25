module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://52.77.254.88:1337`,
        contentTypes: [
          `job`,
          `team`,
          `teamsection`,
          `newssection`,
          `aboutus`
        ],
      },
    },
  ],
}
