import { HStack, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Logo = () => (
  <HStack d="flex" justify="center" align="center" spacing={2}>
    <StaticImage src="../images/broccoli.png" alt="Icono de Aguacate" />
    <Text fontWeight={700} fontSize="xl">
      Alimentos Saludables
    </Text>
  </HStack>
);

export default Logo;
