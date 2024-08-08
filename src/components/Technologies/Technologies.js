import React from 'react';
import { DiFirebase, DiReact, DiZend, DiStackoverflow } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      List of technologies I've worked with in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
          React, Redux, Next, Svelte, SCSS, jQuery 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
          Node, Django, MongoDB, PostgreSQL, GraphQL, AWS, SQL Server
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiStackoverflow size="3rem"/>
        <ListContainer>
          <ListTitle>Language</ListTitle>
          <ListParagraph>
            Experience with <br />
          JavaScript, Python, TypeScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
