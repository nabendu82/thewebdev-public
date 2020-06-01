module.exports = {
  siteMetadata: {
    title: `The Web Dev`,
    author: `Nabendu Biswas`,
    description: `Learn to built web-apps in React, Gatsby, React-native and also firefox extensions and more`,
    twitterUsername: "@nabendu82",
    image:'/thewebdev.jpg',
    siteUrl: `https://thewebdev.tech/`,
    keywords: [
      "Nabendu",
      "Biswas",
      "UI Lead",
      "GatsbyJs",
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJs",
      "React developer",
      "Front-end Engineer",
      "GraphQL"
    ],
    social: {
      twitter: `nabendu82`,
      github: `nabendu82`,
      email: `nabendu.biswas@gmail.com`,
    },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
          host: 'https://thewebdev.tech/',
          sitemap: 'https://thewebdev.tech/sitemap.xml',
          policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
          name: `The Web Dev`,
          short_name: `TWD`,
          start_url: `/`,
          background_color: `#ffffff`,
          theme_color: `#4ABCF8`,
          display: `standalone`,
          icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
          trackingId: "UA-160644716-1",
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: `https-thewebdev-tech`
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
          endpoint: "https://blog.us4.list-manage.com/subscribe/post?u=5c156d7649897240e9c994d38&amp;id=67f40851e0",
      },
    },
  ]
}
