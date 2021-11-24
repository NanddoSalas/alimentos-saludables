import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  IconButton,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { useContext, useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import '../styles/hideScrollbar.css';

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex align="center">
      <IconButton
        mx={{ base: 2, md: 4 }}
        aria-label="LeftArrow"
        icon={<ChevronLeftIcon fontSize={{ base: '2xl', md: '4xl' }} />}
        isDisabled={isFirstItemVisible}
        size={useBreakpointValue({ base: 'xs', md: 'sm' })}
        onClick={() => scrollPrev()}
        isRound
        color="gray.300"
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <Flex align="center">
      <IconButton
        mx={{ base: 2, md: 4 }}
        aria-label="RightArrow"
        icon={<ChevronRightIcon fontSize={{ base: '2xl', md: '4xl' }} />}
        isDisabled={isLastItemVisible}
        // colorScheme="green"
        isRound
        color="gray.300"
        size={useBreakpointValue({ base: 'xs', md: 'sm' })}
        onClick={() => scrollNext()}
      />
    </Flex>
  );
};

interface SliderItemProps {
  image: IGatsbyImageData;
  alt: string;
  // eslint-disable-next-line react/no-unused-prop-types
  itemId: number;
  onClick: () => void;
}

const SliderItem: React.FC<SliderItemProps> = ({ image, alt, onClick }) => (
  <Box mx={{ base: 1, md: 2 }}>
    <Image
      minW="3xs"
      maxW="3xs"
      minH={36}
      maxH={36}
      borderRadius="xl"
      fit="cover"
      as={GatsbyImage}
      image={image}
      alt={alt}
      _hover={{
        opacity: '0.5',
        cursor: 'pointer',
      }}
      onClick={onClick}
    />
  </Box>
);

interface SliderProps {
  images: IGatsbyImageData[];
  imagesAlt: string;
}

const Slider: React.FC<SliderProps> = ({ images, imagesAlt }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageIndex, setImageIndex] = useState(-1);

  const handleClick = (index: number) => {
    setImageIndex(index);
    onOpen();
  };

  return (
    <Box>
      <Box as={ScrollMenu} LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {images.map((image, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SliderItem
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            image={image}
            alt={imagesAlt}
            itemId={index}
            onClick={() => handleClick(index)}
          />
        ))}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          maxW="75vw"
          maxH="75vh"
          w={images[imageIndex]?.width || 0}
          // h={images[imageIndex]?.height || 0}
        >
          <Image
            borderRadius="xl"
            as={GatsbyImage}
            image={images[imageIndex]}
            // w={images[imageIndex]?.width || 0}
            // h={images[imageIndex]?.height || 0}
          />
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Slider;
