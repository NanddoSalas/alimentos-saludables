import { ArrowForwardIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Hero = () => (
  <Flex minH="calc(100vh - 61px)" alignItems="center" bg="gray.100">
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
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Text as="span" position="relative">
              Mas de 150 Monografias
            </Text>

            <br />

            <Text as="span" color="green.400">
              de Alimentos Saludables!
            </Text>
          </Heading>

          <Text color="gray.500" fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
            En cada Monografia encontraras una descripcion detallada de cada
            Alimento con su Informacion Nutricional.
          </Text>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
            justifyContent={{ sm: 'center', md: 'normal' }}
          >
            <Button
              leftIcon={<SearchIcon />}
              rounded="full"
              size="lg"
              colorScheme="green"
              bg="green.400"
              _hover={{ bg: 'green.500' }}
            >
              Buscar
            </Button>

            <Button
              rightIcon={<ArrowForwardIcon />}
              rounded="full"
              size="lg"
              colorScheme="green"
              variant="outline"
              _hover={{ bg: 'gray.200' }}
            >
              Aleatorio
            </Button>
          </Stack>
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
              alt="Hero"
              src="../images/hero.jpg"
              objectFit="cover"
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  </Flex>
);

export default Hero;
