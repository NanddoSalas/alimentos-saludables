import { Container, Heading } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import slugify from 'slugify';
import { CategoriesQuery } from '../../graphql-types';
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
      href: `/${slugify(frontmatter!.name!, { lower: true })}`,
      image: frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData,
    }),
  );

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

      <CardGrid cards={cards} />
    </Container>
  );
};

export default Categories;
