import { ArrowForwardIcon, AttachmentIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';

interface SearchModalItemProps {
  title: string;
  category: string;
  isSelected: boolean;
  href: string;
  onHover: () => void;
}

const SearchModalItem: React.FC<SearchModalItemProps> = ({
  title,
  category,
  isSelected,
  href,
  onHover,
}) => (
  <Flex
    bg={isSelected ? 'green.500' : 'gray.600'}
    borderRadius="lg"
    mt={2}
    fontSize="xl"
    justify="space-between"
    onMouseEnter={onHover}
    as={Link}
    to={href}
  >
    <Flex w={16} h={16} justify="center" align="center" color="white">
      <AttachmentIcon />
    </Flex>

    <Flex flex={1} direction="column" justify="center" fontFamily="sans-serif">
      <Text fontSize={12} fontWeight="600" color="whiteAlpha.900">
        {category}
      </Text>
      <Text fontSize={16} fontWeight="700" color="white">
        {title}
      </Text>
    </Flex>

    <Flex
      w={16}
      h={16}
      justify="center"
      align="center"
      color={isSelected ? 'white' : 'gray.600'}
    >
      <ArrowForwardIcon />
    </Flex>
  </Flex>
);

export default SearchModalItem;
