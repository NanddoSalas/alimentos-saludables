import { Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';

const NotFound = () => (
  <Flex flex={1} minH="100vh" align="center" justify="center" bg="gray.800">
    <VStack spacing={8}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
        color="whiteAlpha.900"
      >
        Pagina no Encontrada
      </Heading>

      <Text fontSize="18px" mt={3} mb={2} color="gray.500">
        La pagina que estas buscando no existe.
      </Text>

      <Button
        rounded="full"
        size="lg"
        colorScheme="green"
        bg="green.400"
        _hover={{ bg: 'green.500' }}
        as={Link}
        to="/"
      >
        Inicio
      </Button>
    </VStack>
  </Flex>
);

export default NotFound;
