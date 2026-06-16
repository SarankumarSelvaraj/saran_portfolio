import React from 'react';
import { Box, Container, Typography, CardContent, Stack, useTheme } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RoomIcon from '@mui/icons-material/Room';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { experiences } from '../../configs/portfolioData';
import { GlassCard } from '../common/GlassCard';
import { ScrollReveal } from '../common/ScrollReveal';

export const Experience: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
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
              Career Path
            </Typography>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontFamily: '"Outfit", sans-serif' }}>
              Work Experience
            </Typography>
          </ScrollReveal>
        </Box>

        {/* Timeline Layout */}
        <Box
          sx={{
            position: 'relative',
            maxWidth: 800,
            mx: 'auto',
            pl: { xs: 4, md: 6 },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: { xs: 12, md: 20 },
              bottom: 0,
              width: '4px',
              background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              borderRadius: '2px',
            }
          }}
        >
          {experiences.map((exp, index) => (
            <Box
              key={exp.id}
              sx={{
                position: 'relative',
                mb: 6,
              }}
            >
              {/* Timeline Dot Indicator */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: -32, md: -44 },
                  top: 12,
                  width: { xs: 16, md: 24 },
                  height: { xs: 16, md: 24 },
                  borderRadius: '50%',
                  background: theme.palette.mode === 'dark' ? '#111827' : '#FFFFFF',
                  border: `4px solid ${theme.palette.primary.main}`,
                  boxShadow: `0 0 12px ${theme.palette.primary.main}`,
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />

              <ScrollReveal direction="up" delay={index * 0.2}>
                <GlassCard hoverEffect sx={{ width: '100%' }}>
                  <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    {/* Header */}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, gap: 2, mb: 3 }}>
                      <Box>
                        <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: '1.4rem', md: '1.8rem' }, mb: 0.5 }}>
                          {exp.role}
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 1 }}>
                          <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', color: 'primary.main' }}>
                            <BusinessIcon fontSize="small" />
                            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                              {exp.company}
                            </Typography>
                          </Stack>
                          <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center', color: 'text.secondary' }}>
                            <RoomIcon fontSize="small" />
                            <Typography variant="body2">{exp.location}</Typography>
                          </Stack>
                        </Stack>
                      </Box>

                      {/* Date Badge */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          py: 1,
                          px: 2,
                          borderRadius: '30px',
                          background: theme.palette.mode === 'dark' ? 'rgba(99, 102, 241, 0.12)' : 'rgba(79, 70, 229, 0.08)',
                          border: `1px solid ${theme.palette.primary.light}22`,
                        }}
                      >
                        <CalendarTodayIcon fontSize="small" sx={{ color: 'primary.main' }} />
                        <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          {exp.startDate} - {exp.endDate}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Short Description */}
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}>
                      {exp.description}
                    </Typography>

                    {/* Key Highlights */}
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', mb: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Key Projects & Contributions:
                    </Typography>

                    <Stack spacing={2}>
                      {exp.highlights.map((highlight, hIndex) => {
                        const parts = highlight.split(':');
                        const title = parts[0];
                        const details = parts[1] || '';
                        return (
                          <Box key={hIndex} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                            <CheckCircleOutlinedIcon sx={{ color: 'secondary.main', mt: 0.3, flexShrink: 0 }} fontSize="small" />
                            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                              <strong>{title}:</strong>{details}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Stack>
                  </CardContent>
                </GlassCard>
              </ScrollReveal>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
