import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Chris Nugroho <br />
        Personal Portfolio
      </SectionTitle>
      <SectionText>
        A full stack engineer with decade of analytical & business experience. I take pride in striving to understand and solve business problems. I am known for delivering high quality, detailed and easy to understand results.
      </SectionText>
      <Button onClick={() => window.location = 'https://docs.google.com/document/d/1kkqrrr2w7qs3bc_99IM0OliOFN7KaPlE/edit?usp=sharing&ouid=117582958796216161566&rtpof=true&sd=true'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
