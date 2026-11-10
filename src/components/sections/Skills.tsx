import React, { useState } from 'react';
import {
  Box, Container, Typography, useTheme, Grid,
} from '@mui/material';
import { skillsData } from '../../configs/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Category config ── */
interface CategoryMeta {
  label: string;
  color: string;
  dimColor: string;
  borderColor: string;
  icon: string;
  description: string;
}

const CATEGORY_META: Record<string, CategoryMeta> = {
  Languages: {
    label: 'Languages',
    color: '#8B5CF6',
    dimColor: 'rgba(139,92,246,0.1)',
    borderColor: 'rgba(139,92,246,0.2)',
    icon: '{ }',
    description: 'Core programming languages',
  },
  Frontend: {
    label: 'Frontend',
    color: '#38BDF8',
    dimColor: 'rgba(56,189,248,0.1)',
    borderColor: 'rgba(56,189,248,0.2)',
    icon: '⚛',
    description: 'UI libraries & tooling',
  },
  'Mobile Development': {
    label: 'Mobile',
    color: '#34D399',
    dimColor: 'rgba(52,211,153,0.1)',
    borderColor: 'rgba(52,211,153,0.2)',
    icon: '◻',
    description: 'Cross-platform mobile',
  },
  Backend: {
    label: 'Backend',
    color: '#FBBF24',
    dimColor: 'rgba(251,191,36,0.1)',
    borderColor: 'rgba(251,191,36,0.2)',
    icon: '⚙',
    description: 'Server-side & APIs',
  },
  Database: {
    label: 'Database',
    color: '#FB7185',
    dimColor: 'rgba(251,113,133,0.1)',
    borderColor: 'rgba(251,113,133,0.2)',
    icon: '◈',
    description: 'Data storage & caching',
  },
  'Cloud & Auth': {
    label: 'Cloud & Auth',
    color: '#A78BFA',
    dimColor: 'rgba(167,139,250,0.1)',
    borderColor: 'rgba(167,139,250,0.2)',
    icon: '☁',
    description: 'Cloud, auth & messaging',
  },
  'Tools & Methodologies': {
    label: 'Tools',
    color: '#6EE7B7',
    dimColor: 'rgba(110,231,183,0.1)',
    borderColor: 'rgba(110,231,183,0.2)',
    icon: '◇',
    description: 'Dev tools & practices',
  },
};

const getMeta = (cat: string): CategoryMeta =>
  CATEGORY_META[cat] ?? {
    label: cat,
    color: '#8B5CF6',
    dimColor: 'rgba(139,92,246,0.1)',
    borderColor: 'rgba(139,92,246,0.2)',
    icon: '•',
    description: '',
  };

const ALL_CATS = ['All', ...skillsData.map(s => s.category)];

export const Skills: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === active);

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        background: isDark
          ? 'rgba(10,10,15,0.4)'
          : 'rgba(249,249,252,0.8)',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          index="03"
          eyebrow="Technical Skills"
          title="My Toolkit"
          subtitle="Technologies I use daily to design, build, and ship production-grade products."
        />

        {/* ── Filter tabs ── */}
        <ScrollReveal direction="up" delay={0.05}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 0.75,
              mb: 7,
            }}
          >
            {ALL_CATS.map(cat => {
              const meta = getMeta(cat);
              const isActive = active === cat;
              return (
                <Box
                  key={cat}
                  onClick={() => setActive(cat)}
                  component={motion.div}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  sx={{
                    px: 2,
                    py: 0.75,
                    borderRadius: '8px',
                    fontSize: '0.825rem',
                    fontWeight: isActive ? 600 : 400,
                    cursor: 'pointer',
                    border: isActive
                      ? `1px solid ${meta.borderColor}`
                      : `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                    background: isActive
                      ? isDark ? meta.dimColor : meta.dimColor.replace('0.1', '0.07')
                      : 'transparent',
                    color: isActive ? meta.color : 'text.secondary',
                    transition: 'all 0.15s ease',
                    '&:hover': {
                      background: isDark
                        ? isActive ? meta.dimColor : 'rgba(255,255,255,0.04)'
                        : isActive ? meta.dimColor.replace('0.1', '0.07') : 'rgba(0,0,0,0.03)',
                      color: isActive ? meta.color : 'text.primary',
                    },
                  }}
                >
                  {cat === 'All' ? 'All Technologies' : meta.label}
                </Box>
              );
            })}
          </Box>
        </ScrollReveal>

        {/* ── Category cards ── */}
        <Grid container spacing={3} component={motion.div} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((catData, gi) => {
              const meta = getMeta(catData.category);
              return (
                <Grid
                  size={{ xs: 12, sm: 6, lg: 4 }}
                  key={catData.category}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: gi * 0.05 }}
                  layout
                >
                  <Box
                    sx={{
                      height: '100%',
                      borderRadius: '16px',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                      background: isDark ? '#16161F' : '#FFFFFF',
                      overflow: 'hidden',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: meta.borderColor,
                        transform: 'translateY(-3px)',
                        boxShadow: isDark
                          ? `0 12px 32px rgba(0,0,0,0.4), 0 0 0 1px ${meta.borderColor}`
                          : `0 12px 32px rgba(0,0,0,0.07), 0 0 0 1px ${meta.borderColor}`,
                      },
                      position: 'relative',
                    }}
                  >
                    {/* Top accent bar */}
                    <Box sx={{
                      height: 2,
                      background: `linear-gradient(90deg, ${meta.color}, ${meta.color}66)`,
                    }} />

                    <Box sx={{ p: 3 }}>
                      {/* Header */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <Box
                          sx={{
                            width: 40, height: 40, borderRadius: '10px', flexShrink: 0,
                            background: isDark ? meta.dimColor : meta.dimColor.replace('0.1', '0.08'),
                            border: `1px solid ${meta.borderColor}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: meta.color,
                            fontSize: '1rem',
                            fontWeight: 800,
                            fontFamily: '"Outfit", sans-serif',
                          }}
                        >
                          {meta.icon}
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              color: 'text.primary',
                              lineHeight: 1.2,
                            }}
                          >
                            {catData.category}
                          </Typography>
                          <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary' }}>
                            {meta.description}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            ml: 'auto',
                            px: 1.25, py: 0.4,
                            borderRadius: '20px',
                            background: isDark ? meta.dimColor : meta.dimColor.replace('0.1', '0.07'),
                            border: `1px solid ${meta.borderColor}`,
                          }}
                        >
                          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, color: meta.color }}>
                            {catData.skills.length}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Skill badges — no percentage bars */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                        {catData.skills.map(skill => (
                          <Box
                            key={skill.name}
                            component={motion.div}
                            whileHover={{ scale: 1.04, y: -1 }}
                            transition={{ duration: 0.12 }}
                            sx={{
                              px: 1.5,
                              py: 0.6,
                              borderRadius: '7px',
                              fontSize: '0.775rem',
                              fontWeight: 500,
                              background: isDark
                                ? `${meta.color}0F`
                                : `${meta.color}0A`,
                              border: `1px solid ${meta.color}28`,
                              color: isDark ? meta.color : meta.color,
                              cursor: 'default',
                              transition: 'all 0.15s ease',
                              '&:hover': {
                                background: `${meta.color}20`,
                                borderColor: `${meta.color}50`,
                                boxShadow: `0 3px 10px ${meta.color}25`,
                              },
                            }}
                          >
                            {skill.name}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </AnimatePresence>
        </Grid>

        {/* Summary row */}
        <ScrollReveal direction="up" delay={0.1}>
          <Box
            sx={{
              mt: 6,
              p: 3,
              borderRadius: '14px',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
              background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.015)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 3, md: 6 },
            }}
          >
            {[
              { label: 'Total Technologies', value: skillsData.reduce((acc, s) => acc + s.skills.length, 0) + '+' },
              { label: 'Skill Categories', value: skillsData.length },
              { label: 'Years of Experience', value: '3+' },
              { label: 'Products in Production', value: '7+' },
            ].map((item, i) => (
              <Box key={i} sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 800,
                    fontSize: '1.6rem',
                    color: 'text.primary',
                    lineHeight: 1,
                  }}
                >
                  {item.value}
                </Typography>
                <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 0.3 }}>
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
};
