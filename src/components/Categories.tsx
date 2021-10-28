import { Container, Grid, Heading } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import slugify from 'slugify';
import { CategoriesQuery } from '../../graphql-types';
import Card from './Card';

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

  const nodes = data.allMarkdownRemark.nodes;

  if (nodes.length === 0) return null;

  return (
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
      >
        Categorias
      </Heading>

      <Grid
        templateColumns={{
          base: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gap={{ base: 4, sm: 8, md: 4, lg: 8 }}
        px={{ base: 4, sm: 8, md: 4 }}
      >
        {nodes.map(({ frontmatter }) => (
          <Card
            title={frontmatter.name}
            href={`/${slugify(frontmatter.name, { lower: true })}`}
            image={frontmatter.thumbnail.childImageSharp.gatsbyImageData}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Categories;
