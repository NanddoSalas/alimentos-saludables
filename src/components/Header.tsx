import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
  SearchIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import React from 'react';
import { CategoriesNameQuery } from '../../graphql-types';
import { createPath } from '../utils';

const SubNav = ({ label }: { label: string }) => (
  <Link
    w="100%"
    role="group"
    display="block"
    p={2}
    rounded="md"
    color="gray.200"
    _hover={{ bg: 'gray.800' }}
    as={GatsbyLink}
    to={createPath([label])}
  >
    <Stack direction="row" align="center">
      <Box>
        <Text
          transition="all .3s ease"
          _groupHover={{ color: 'green.400' }}
          fontWeight={500}
        >
          {label}
        </Text>
      </Box>
      <Flex
        transition="all .3s ease"
        transform="translateX(-10px)"
        opacity={0}
        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
        justify="flex-end"
        align="center"
        flex={1}
      >
        <Icon color="green.400" w={5} h={5} as={ChevronRightIcon} />
      </Flex>
    </Stack>
  </Link>
);

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isOpenMobile, onToggle: onToggleMobile } = useDisclosure();

  const data = useStaticQuery<CategoriesNameQuery>(graphql`
    query CategoriesName {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/categories/" } }
      ) {
        nodes {
          frontmatter {
            name
          }
        }
      }
    }
  `);

  const categories = data.allMarkdownRemark.nodes.map(
    ({ frontmatter }) => frontmatter!.name,
  );

  return (
    <Box
      bg="gray.900"
      shadow="base"
      borderBottom={1}
      borderStyle="solid"
      borderColor="gray.900"
    >
      <Container maxW="container.lg" py="10px">
        <Flex justifyContent="space-between" alignItems="center">
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
            d={{ base: 'flex', md: 'none' }}
          />

          <Text fontFamily="heading" color="white">
            Logo
          </Text>

          <IconButton
            onClick={() => {}}
            icon={<SearchIcon />}
            variant="ghost"
            aria-label="Open Search bar"
            d={{ base: 'flex', md: 'none' }}
          />

          <HStack spacing={16} d={{ base: 'none', md: 'flex' }}>
            <Link
              fontSize="md"
              fontWeight={600}
              color="gray.200"
              _hover={{
                textDecoration: 'none',
                color: 'white',
              }}
              as={GatsbyLink}
              to="/"
            >
              Inicio
            </Link>

            <Popover trigger="hover" placement="bottom">
              <PopoverTrigger>
                <Link
                  fontSize="md"
                  fontWeight={600}
                  color="gray.200"
                  _hover={{
                    textDecoration: 'none',
                    color: 'white',
                  }}
                  as={GatsbyLink}
                  to="/#categorias"
                >
                  Categorias
                </Link>
              </PopoverTrigger>

              <PopoverContent
                border={0}
                boxShadow="2xl"
                p={4}
                rounded="xl"
                minW="2xs"
                bg="gray.900"
              >
                <Stack>
                  {categories.map((name) => (
                    <SubNav key={name} label={name!} />
                  ))}
                </Stack>
              </PopoverContent>
            </Popover>

            <Button color="gray.300" leftIcon={<SearchIcon />}>
              Buscar
            </Button>
          </HStack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Stack p={4} display={{ md: 'none' }}>
            <SubNav label="Inicio" />

            <Stack spacing={4} onClick={onToggleMobile}>
              <Flex
                p={2}
                rounded="md"
                justify="space-between"
                align="center"
                color="gray.200"
                _hover={{ bg: 'gray.900', color: 'green.400' }}
              >
                <Text fontWeight={600}>Categorias</Text>

                <Icon
                  as={ChevronDownIcon}
                  transition="all .25s ease-in-out"
                  transform={isOpenMobile ? 'rotate(180deg)' : ''}
                  w={6}
                  h={6}
                />
              </Flex>

              <Collapse
                in={isOpenMobile}
                animateOpacity
                style={{ marginTop: '0!important' }}
              >
                <Stack
                  mt={2}
                  pl={4}
                  borderLeft={1}
                  borderStyle="solid"
                  borderColor="gray.700"
                  align="start"
                >
                  {categories.map((name) => (
                    <SubNav key={name!} label={name!} />
                  ))}
                </Stack>
              </Collapse>
            </Stack>
          </Stack>
        </Collapse>
      </Container>
    </Box>
  );
};

export default Header;
