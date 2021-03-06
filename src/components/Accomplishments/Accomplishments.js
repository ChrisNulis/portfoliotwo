import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 20, text: 'Total Projects'},
  { number: 200, text: 'GitHub Contributions', },
  { number: 3000, text: 'Hours of Coding', },
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
