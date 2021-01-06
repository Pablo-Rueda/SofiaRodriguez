module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-material-ui`,
    { // open fonts plugin
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Ubuntu: 300, 400,500,700`,
          `material icons`
        ],
        display: 'swap'
      }
    } // close fonts plugin
  ]
}