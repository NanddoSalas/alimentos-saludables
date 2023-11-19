export const siteMetadata = {
  title: 'Alimentos Saludables',
  titleTemplate: '%s · Alimentos Saludables',
  description: 'Mas de 150 Monografias de Alimentos Saludables!',
  siteUrl: 'https://alimentos-saludables.info',
  image: '/hero.jpg',
};

export const plugins = [
  'gatsby-plugin-netlify-cms',
  'gatsby-plugin-image',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sitemap',
  'gatsby-transformer-remark',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/',
    },
    __key: 'images',
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: './src/pages/',
    },
    __key: 'pages',
  },
  '@chakra-ui/gatsby-plugin',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'content',
      path: './content/',
    },
  },
  {
    resolve: 'gatsby-plugin-graphql-codegen',
    options: {
      documentPaths: [
        './src/**/*.{ts,tsx}',
        './node_modules/gatsby-*/**/*.js',
        './gatsby-node.ts',
      ],
    },
  },
];
