/* eslint-disable react/jsx-one-expression-per-line */
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const AboutPage = () => (
  <Flex direction="column" flex={1} minH="100vh" justify="space-between">
    <Box>
      <Header />

      {/* <Container maxW="container.lg" py={{ base: 8, sm: 16, md: 24 }}>
        <Heading
          as="h1"
          lineHeight={1}
          fontWeight={700}
          fontSize={{ base: '3xl', md: '4xl' }}
          textAlign="center"
        >
          Acerca de
        </Heading>

        <Box
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="400"
          fontFamily="arial"
          px={16}
          mt={{ base: 8, sm: 16, md: 24 }}
          color="gray.200"
        >
          <Text>
            AlimentoSaludables es una recopilacion de mas de 150 monografias de
            alimentos saludables recopiladas de el libro{' '}
            <Link
              href="https://www.youtube.com/watch?v=YcGy6VgYnx0"
              color="green.400"
              isExternal
            >
              EL MODELO HERBÍVORO: EL NUEVO MODELO ALIMENTICIO DE Homo sapiens
            </Link>{' '}
            escrito por el Dr. Erick Estrada Lugo (profesor investigador de la
            universidad autonoma de chapingo). En cada Monografia encontraras
            una descripcion detallada de cada alimento con su Informacion
            Nutricional cuya fuente es el Instituto Nacional de Ciencias Médicas
            y Nutrición Salvador Zubirán.
          </Text>
        </Box>
      </Container> */}

      <Flex minH="calc(100vh - 61px)" alignItems="center" bg="gray.800">
        <Container maxW="container.lg" p={{ base: 4, sm: 8, md: 4 }}>
          <Stack
            align="center"
            spacing={{ base: 8, md: 10 }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                as="h1"
                lineHeight={1}
                fontWeight={700}
                fontSize={{ base: '3xl', md: '4xl' }}
                textAlign="center"
              >
                <Text as="span" position="relative" color="whiteAlpha.900">
                  Alimentos Saludables
                </Text>
              </Heading>

              <Text
                color="gray.500"
                fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                align="justify"
              >
                Es una recopilacion de mas de 150 monografias de alimentos
                saludables recopiladas de el libro{' '}
                <Link
                  href="https://www.youtube.com/watch?v=YcGy6VgYnx0"
                  color="green.400"
                  isExternal
                >
                  EL MODELO HERBÍVORO: EL NUEVO MODELO ALIMENTICIO DE Homo
                  sapiens
                </Link>{' '}
                escrito por el Dr. Erick Estrada Lugo (profesor investigador de
                la universidad autonoma de chapingo). En cada Monografia
                encontraras una descripcion detallada de cada alimento con su
                Informacion Nutricional cuya fuente es el Instituto Nacional de
                Ciencias Médicas y Nutrición Salvador Zubirán.
              </Text>
            </Stack>

            <Flex
              flex={1}
              justify="center"
              align="center"
              position="relative"
              w="full"
            >
              <Box
                position="relative"
                w="full"
                h={{ base: '2xs', sm: 'xs' }}
                rounded="2xl"
                boxShadow="2xl"
                overflow="hidden"
              >
                <StaticImage
                  alt="Alimentos Saludables"
                  src="../images/hero.jpg"
                  objectFit="cover"
                  style={{ width: '100%', height: '100%' }}
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Flex>
    </Box>

    <Footer />
  </Flex>
);

export default AboutPage;
