import React from 'react';
import { Box } from '@mui/material';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Achievements } from '../components/sections/Achievements';
import { Certifications } from '../components/sections/Certifications';
import { Contact } from '../components/sections/Contact';

export const Home: React.FC = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <Contact />
    </Box>
  );
};
