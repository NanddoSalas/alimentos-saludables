import { Box, Container, Heading } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { CategoriesQuery } from '../../graphql-types';
import { createPath } from '../utils';
import { CardProps } from './Card';
import CardGrid from './CardGrid';

const Categories = () => {
  const data = useStaticQuery<CategoriesQuery>(graphql`
    query Categories {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/categories/" } }
      ) {
        nodes {
          frontmatter {
            name
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const cards = data.allMarkdownRemark.nodes.map<CardProps>(
    ({ frontmatter }) => ({
      title: frontmatter?.name!,
      href: createPath([frontmatter?.name!]),
      image: frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData,
    }),
  );

  return (
    <Box bg="gray.800">
      <Container
        maxW="container.lg"
        px={0}
        id="categorias"
        py={{ base: 8, sm: 16, md: 24 }}
      >
        <Heading
          mb={{ base: 8, sm: 16, md: 24 }}
          fontWeight={500}
          fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
          textAlign="center"
          color="whiteAlpha.900"
        >
          Categorias
        </Heading>

        <CardGrid cards={cards} />
      </Container>
    </Box>
  );
};

export default Categories;
