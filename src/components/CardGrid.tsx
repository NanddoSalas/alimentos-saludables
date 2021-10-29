import { Grid } from '@chakra-ui/react';
import React from 'react';
import Card, { CardProps } from './Card';

interface CardGridProps {
  cards: CardProps[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => (
  <Grid
    templateColumns={{
      base: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
    }}
    gap={{ base: 4, sm: 8, md: 4, lg: 8 }}
    px={{ base: 4, sm: 8, md: 4 }}
  >
    {cards.map(({ title, href, image }) => (
      <Card key={title} title={title} href={href} image={image} />
    ))}
  </Grid>
);

export default CardGrid;
