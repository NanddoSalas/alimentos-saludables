import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  UnorderedList,
} from '@chakra-ui/react';
import Fuse from 'fuse.js';
import { navigate } from 'gatsby';
import React, { KeyboardEventHandler, useEffect, useState } from 'react';
import { MonographIndex } from '../types';
import SearchModalItem from './SearchModalItem';

interface SearchModalProps {
  monographsIndex: MonographIndex[];
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({
  monographsIndex,
  isOpen,
  onClose,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<Fuse.FuseResult<MonographIndex>[]>([]);

  const fuse = new Fuse<MonographIndex>(monographsIndex, {
    keys: ['title'],
    includeScore: true,
  });

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const { code } = event;

    if (code === 'ArrowUp') {
      event.preventDefault();
      setSelectedIndex((current) => {
        if (current > 0) return current - 1;
        return current;
      });
    }

    if (code === 'ArrowDown') {
      event.preventDefault();
      setSelectedIndex((current) => {
        if (current < result.length - 1) return current + 1;
        return current;
      });
    }

    if (code === 'Enter' && result.length > 0) {
      navigate(result[selectedIndex].item.href);
    }
  };

  useEffect(() => {
    const res = fuse?.search<MonographIndex>(query) || [];

    setSelectedIndex(0);
    setResult(res);
  }, [query]);

  useEffect(() => {
    if (!isOpen) setQuery('');
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent color="whiteAlpha.900">
        <InputGroup>
          <InputLeftElement w={16} h={16} color="green.400">
            <SearchIcon fontSize="xl" />
          </InputLeftElement>

          <Input
            h={16}
            py={0}
            pl={16}
            pr={0}
            border={0}
            outline="none"
            _hover={{ outline: 'none' }}
            _focus={{ outline: 'none' }}
            fontSize="xl"
            fontWeight="500"
            placeholder={"Buscar 'Aguacate'"}
            maxLength={30}
            value={query}
            onChange={({ currentTarget }) => setQuery(currentTarget.value)}
            onKeyDown={handleKeyDown}
          />
        </InputGroup>

        <ModalBody p={0} maxH="66vh" overflow="auto">
          {result.length > 0 && (
            <Box px={4} pb={4}>
              <UnorderedList
                mx={0}
                borderTop={1}
                borderTopColor="whiteAlpha.300"
                borderTopStyle="solid"
                pt={2}
              >
                {result
                  .filter(({ score }) => score! < 0.5)
                  .map(({ item, refIndex }, index) => (
                    <SearchModalItem
                      key={refIndex}
                      title={item.title}
                      category={item.category}
                      isSelected={index === selectedIndex}
                      href={item.href}
                      onHover={() => setSelectedIndex(index)}
                    />
                  ))}
              </UnorderedList>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
