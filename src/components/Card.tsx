import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

export interface CardProps {
  title: string;
  href: string;
  image: IGatsbyImageData;
}

const Card: React.FC<CardProps> = ({ title, href, image }) => (
  <Link to={href}>
    <Flex
      borderRadius="xl"
      justifyContent="center"
      alignItems="end"
      pos="relative"
    >
      <Image
        borderRadius="xl"
        height="3xs"
        as={GatsbyImage}
        image={image}
        alt={title}
      />
      <Box
        borderRadius="xl"
        pos="absolute"
        w="100%"
        pt={8}
        pb={4}
        bg="linear-gradient(0deg, rgba(0,0,0,1) -10%, rgba(255,255,255,0) 110%)"
      >
        <Text
          color="whiteAlpha.900"
          fontSize="lg"
          fontWeight="600"
          textAlign="center"
        >
          {title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Card;
