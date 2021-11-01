import { Box, Container, Heading } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { MonographiesPreviewQuery } from '../../graphql-types';
import { CardProps } from '../components/Card';
import CardGrid from '../components/CardGrid';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { createPath } from '../utils';

interface CategoryContext {
  name: string;
}

interface CategoryProps
  extends PageProps<MonographiesPreviewQuery, CategoryContext> {}

const Category: React.FC<CategoryProps> = ({ data, pageContext: { name } }) => {
  const cards = data.allMarkdownRemark.nodes.map<CardProps>(
    ({ frontmatter }) => {
      const href = createPath([name, frontmatter?.title!]);

      return {
        title: frontmatter?.title!,
        image: frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData,
        href,
      };
    },
  );

  return (
    <>
      <Header />

      <Box bg="gray.800" minH="calc(100vh - 61px)">
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
            {name}
          </Heading>

          <CardGrid cards={cards} />
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export const query = graphql`
  query MonographiesPreview($name: String) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/monographs/" }
        frontmatter: { category: { eq: $name } }
      }
    ) {
      nodes {
        frontmatter {
          title
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default Category;
