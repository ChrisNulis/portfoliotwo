import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 150, text: 'Total React Components Created'},
  { number: 300, text: 'Project Contributions', },
  { number: 1000, text: 'Bugs Squashed', },
  { number: 503, text: 'Cups of Coffee Consumed', }
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Current Accomplishments <br />
    Live Update</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
