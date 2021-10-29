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
import slugify from 'slugify';
import { CategoriesNameQuery } from '../../graphql-types';

const SubNav = ({ label }: { label: string }) => {
  return (
    <Link
      w="100%"
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: 'green.50' }}
      as={GatsbyLink}
      to={`/${slugify(label, { lower: true })}`}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'green.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'green.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

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
      shadow="base"
      borderBottom={1}
      borderStyle="solid"
      borderColor="gray.200"
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

          <Text fontFamily={'heading'} color="gray.800">
            Logo
          </Text>

          <IconButton
            onClick={() => {}}
            icon={<SearchIcon />}
            variant="ghost"
            aria-label="Open Search bar"
            d={{ base: 'flex', md: 'none' }}
          />

          <HStack spacing={12} d={{ base: 'none', md: 'flex' }}>
            <Link
              fontSize="md"
              fontWeight={600}
              color="gray.600"
              _hover={{
                textDecoration: 'none',
                color: 'gray.800',
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
                  color="gray.600"
                  _hover={{
                    textDecoration: 'none',
                    color: 'gray.800',
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
              >
                <Stack>
                  {categories.map((name) => (
                    <SubNav label={name!} />
                  ))}
                </Stack>
              </PopoverContent>
            </Popover>

            <Button leftIcon={<SearchIcon />}>Buscar</Button>
          </HStack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Stack p={4} display={{ md: 'none' }}>
            <SubNav label="Inicio" />

            <Stack spacing={4} onClick={onToggleMobile}>
              <Flex
                p={2}
                rounded={'md'}
                justify="space-between"
                align="center"
                _hover={{ bg: 'green.50' }}
              >
                <Text fontWeight={600} color={'gray.600'}>
                  Categorias
                </Text>

                <Icon
                  as={ChevronDownIcon}
                  transition={'all .25s ease-in-out'}
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
                  borderColor="gray.200"
                  align="start"
                >
                  {categories.map((name) => (
                    <SubNav label={name!} />
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
