import React, { useState } from 'react';
import { Box, Container, Typography, Grid, LinearProgress, Chip, Stack, Button, useTheme } from '@mui/material';
import { skillsData } from '../../configs/portfolioData';
import { GlassCard } from '../common/GlassCard';
import { ScrollReveal } from '../common/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

export const Skills: React.FC = () => {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...skillsData.map(s => s.category)];

  const filteredData = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark' ? 'rgba(17, 24, 39, 0.3)' : 'rgba(241, 245, 249, 0.5)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <ScrollReveal direction="up">
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'primary.main',
                mb: 1,
              }}
            >
              My Toolkit
            </Typography>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontFamily: '"Outfit", sans-serif' }}>
              Skills & Expertise
            </Typography>
          </ScrollReveal>
        </Box>

        {/* Filter Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5, mb: 6 }}>
          {categories.map((cat, index) => (
            <ScrollReveal key={cat} direction="none" delay={index * 0.05}>
              <Button
                variant={activeCategory === cat ? 'contained' : 'outlined'}
                onClick={() => setActiveCategory(cat)}
                sx={{
                  borderRadius: '30px',
                  px: 3,
                  py: 1,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  borderColor: theme.palette.divider,
                  color: activeCategory === cat ? '#fff' : 'text.primary',
                  background: activeCategory === cat 
                    ? theme.palette.gradient?.primary 
                    : theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    background: activeCategory === cat ? theme.palette.gradient?.primary : 'transparent',
                  }
                }}
              >
                {cat}
              </Button>
            </ScrollReveal>
          ))}
        </Box>

        {/* Skills Cards Grid */}
        <Grid container spacing={4} component={motion.div} layout>
          <AnimatePresence mode="popLayout">
            {filteredData.map((catData, groupIndex) => (
              <Grid
                size={{ xs: 12, md: 6 }}
                key={catData.category}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <GlassCard hoverEffect={false} sx={{ height: '100%', p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      fontWeight: 700,
                      mb: 4,
                      background: theme.palette.gradient?.primary,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {catData.category}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
                    {catData.skills.map((skill, skillIndex) => (
                      <Box key={skill.name}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Typography variant="body1" sx={{ fontWeight: 600 }}>
                            {skill.name}
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 4,
                              background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                            }
                          }}
                        />
                      </Box>
                    ))}
                  </Box>

                  {/* Summary Quick Tags */}
                  <Box sx={{ mt: 5 }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary', display: 'block', mb: 1.5 }}>
                      Core Technologies & Concepts
                    </Typography>
                    <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                      {catData.skills.map(skill => (
                        <Chip
                          key={skill.name}
                          label={skill.name}
                          size="small"
                          sx={{
                            background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                            border: `1px solid ${theme.palette.divider}`,
                            fontWeight: 500,
                            '&:hover': {
                              background: theme.palette.primary.light,
                              color: '#fff',
                              borderColor: theme.palette.primary.light,
                            }
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </GlassCard>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  );
};
