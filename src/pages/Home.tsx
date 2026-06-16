import React from 'react';
import { Box, Container } from '@mui/material';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Experience } from '../components/sections/Experience';
import { Projects } from '../components/sections/Projects';
import { Achievements } from '../components/sections/Achievements';
import { Certifications } from '../components/sections/Certifications';
import { Contact } from '../components/sections/Contact';

export const Home: React.FC = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      {/* Sections Wrapper */}
      <Hero />
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 8 } }}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Certifications />
          <Contact />
        </Box>
      </Container>
    </Box>
  );
};
