import {
  Box,
  Container,
  Flex,
  Heading,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Tr,
} from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { MonographQuery } from '../../graphql-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Slider from '../components/Slider';

const Monograph: React.FC<PageProps<MonographQuery>> = ({ data }) => (
  <>
    <Header />

    <Box bg="gray.800" minH="calc(100vh - 61px)">
      <Container maxW="container.lg" px={0} py={{ base: 8, sm: 16 }}>
        <Heading
          mb={{ base: 8, sm: 16 }}
          fontWeight={700}
          fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
          textAlign="center"
          color="whiteAlpha.900"
        >
          {data.markdownRemark?.frontmatter?.title!}
        </Heading>

        <Box
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="400"
          fontFamily="arial"
          px={16}
          mb={{ base: 8, sm: 16 }}
          color="gray.200"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html! }}
        />

        <Heading
          mb={{ base: 8, sm: 16 }}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
          textAlign="center"
          color="whiteAlpha.800"
        >
          Galeria
        </Heading>

        <Box mb={{ base: 8, sm: 16 }}>
          <Slider
            images={
              data.markdownRemark?.frontmatter?.gallery?.map(
                (image) => image?.childImageSharp?.gatsbyImageData,
              ) || []
            }
          />
        </Box>

        <Heading
          mb={{ base: 8, sm: 16 }}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
          textAlign="center"
          color="whiteAlpha.800"
        >
          Informacion Nutricional
        </Heading>

        <Box mx={4}>
          <Flex
            justify="center"
            bg="gray.900"
            p={4}
            borderRadius="xl"
            maxW="xl"
            m="auto"
          >
            <Table
              variant="unstyled"
              fontWeight="500"
              fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
              color="gray.300"
            >
              <TableCaption
                placement="top"
                m={0}
                fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                fontWeight="600"
                color="whiteAlpha.900"
              >
                {`100 Gramos de ${data.markdownRemark?.frontmatter?.title} proporcionan`}
              </TableCaption>

              <Tr>
                <Th />
                <Th textAlign="end">Aporte</Th>
              </Tr>

              <Tbody>
                {data.markdownRemark?.frontmatter?.nutritionFacts?.map(
                  (item, index) => (
                    <Tr
                      bg={index % 2 ? 'gray.900' : 'gray.800'}
                      color={index % 2 ? 'gray.300' : 'green.400'}
                    >
                      <Td borderLeftRadius="xl">{item?.name}</Td>
                      <Td borderRightRadius="xl" textAlign="end">
                        {`${item?.value} ${item?.unit}`}
                      </Td>
                    </Tr>
                  ),
                )}
              </Tbody>
            </Table>
          </Flex>
        </Box>
      </Container>
    </Box>

    <Footer />
  </>
);

export const query = graphql`
  query Monograph($title: String!) {
    markdownRemark(
      fileAbsolutePath: { regex: "/monographs/" }
      frontmatter: { title: { eq: $title } }
    ) {
      frontmatter {
        title
        category
        createdAt
        updatedAt
        gallery {
          childImageSharp {
            gatsbyImageData
          }
        }
        nutritionFacts {
          name
          value
          unit
        }
      }
      html
    }
  }
`;

export default Monograph;
