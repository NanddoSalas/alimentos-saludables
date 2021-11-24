import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import React, { ReactNode } from 'react';
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from './Logo';
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => (
  <Link
    bg="whiteAlpha.100"
    rounded="full"
    w={8}
    h={8}
    cursor="pointer"
    as="a"
    href={href}
    display="inline-flex"
    alignItems="center"
    justifyContent="center"
    transition="background 0.3s ease"
    _hover={{
      bg: 'whiteAlpha.200',
    }}
    isExternal
  >
    <VisuallyHidden>{label}</VisuallyHidden>
    {children}
  </Link>
);

const Footer = () => (
  <Box bg="gray.900" color="gray.200">
    <Container
      as={Stack}
      maxW="6xl"
      py={4}
      spacing={4}
      justify="center"
      align="center"
    >
      <Logo />
      <Stack direction="row" spacing={6}>
        <Link as={GatsbyLink} to="/">
          Inicio
        </Link>
        <Link as={GatsbyLink} to="/acerca-de">
          Acerca de
        </Link>
      </Stack>
    </Container>

    <Box borderTopWidth={1} borderStyle="solid" borderColor="gray.700">
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: 'column-reverse', sm: 'row' }}
        spacing={4}
        justify={{ base: 'center', sm: 'space-between' }}
        align={{ base: 'center', sm: 'center' }}
      >
        <Text>
          {'Made with 💚 by '}
          <Link href="https://nanddosalas.com" color="green.400" isExternal>
            NanddoSalas
          </Link>
        </Text>

        <Stack direction="row" spacing={6}>
          <SocialButton
            label="YouTube"
            href="https://www.youtube.com/watch?v=YcGy6VgYnx0"
          >
            <FaYoutube />
          </SocialButton>

          <SocialButton
            label="Twitter"
            href="https://twitter.com/HerbolariaErick"
          >
            <FaTwitter />
          </SocialButton>

          <SocialButton
            label="GitHub"
            href="https://github.com/NanddoSalas/alimentosaludables"
          >
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  </Box>
);

export default Footer;
