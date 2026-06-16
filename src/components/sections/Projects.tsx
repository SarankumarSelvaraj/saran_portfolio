import React, { useState } from 'react';
import { Box, Container, Typography, Grid, CardContent, CardActions, Button, Chip, Stack, useTheme, CardMedia } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { projects } from '../../configs/portfolioData';
import { GlassCard } from '../common/GlassCard';
import { ScrollReveal } from '../common/ScrollReveal';

export const Projects: React.FC = () => {
  const theme = useTheme();

  // Color generator for tech stack tag chips
  const getTechColor = (tech: string) => {
    const lower = tech.toLowerCase();
    if (lower.includes('react native')) return theme.palette.primary.main;
    if (lower.includes('react.js') || lower.includes('reactjs')) return theme.palette.info.main;
    if (lower.includes('typescript')) return '#3178C6';
    if (lower.includes('redux') || lower.includes('rtk')) return '#764ABC';
    if (lower.includes('firebase')) return '#FFCA28';
    if (lower.includes('aws')) return '#FF9900';
    if (lower.includes('mongodb')) return '#47A248';
    if (lower.includes('node') || lower.includes('express')) return '#339933';
    if (lower.includes('websocket')) return '#010101';
    return theme.palette.text.secondary;
  };

  // SVG Mock illustrations mapping for project visual headers
  const renderProjectHeader = (title: string) => {
    const isHealthMate = title === 'HealthMate';
    const isSmartMeet = title === 'SmartMeet';

    let grad = 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)';
    let label = 'IOT & Companion';
    if (isHealthMate) {
      grad = 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)';
      label = 'Mobile Super App';
    } else if (isSmartMeet) {
      grad = 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)';
      label = 'AI Intelligence Web';
    }

    return (
      <Box
        sx={{
          height: 180,
          background: grad,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          position: 'relative',
          px: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, letterSpacing: '-0.02em', mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, background: 'rgba(255,255,255,0.2)', py: 0.5, px: 1.5, borderRadius: '20px' }}>
          {label}
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark' ? 'rgba(17, 24, 39, 0.3)' : 'rgba(241, 245, 249, 0.5)',
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
              Recent Work
            </Typography>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontFamily: '"Outfit", sans-serif' }}>
              Featured Projects
            </Typography>
          </ScrollReveal>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={project.id}>
              <ScrollReveal direction="up" delay={index * 0.15}>
                <GlassCard hoverEffect sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Visual Header */}
                  {renderProjectHeader(project.title)}

                  {/* Body Content */}
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7, minHeight: 70 }}>
                      {project.description}
                    </Typography>

                    {/* Features list */}
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Key Features:
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 4, minHeight: 200 }}>
                      {project.features.slice(0, 5).map((feature, fIndex) => {
                        const parts = feature.split(':');
                        const fTitle = parts[0];
                        const fDetails = parts[1] || '';
                        return (
                          <Box key={fIndex} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                            <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: '1rem', mt: 0.3 }} />
                            <Typography variant="body2" color="text.secondary">
                              <strong>{fTitle}:</strong>{fDetails}
                            </Typography>
                          </Box>
                        );
                      })}
                      {project.features.length > 5 && (
                        <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, mt: 0.5 }}>
                          + {project.features.length - 5} more advanced features
                        </Typography>
                      )}
                    </Box>

                    {/* Tech Stack Tags */}
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Technologies:
                    </Typography>
                    <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                      {project.techStack.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                            border: `1px solid ${getTechColor(tech)}44`,
                            color: theme.palette.text.primary,
                            fontWeight: 600,
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>

                  {/* Actions Links */}
                  <CardActions sx={{ p: 4, pt: 0, gap: 1 }}>
                    <Button
                      variant="contained"
                      size="small"
                      endIcon={<OpenInNewIcon />}
                      fullWidth
                      sx={{ py: 1.2 }}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<GitHubIcon />}
                      sx={{ py: 1.2, minWidth: 50 }}
                      aria-label="GitHub Repository"
                    />
                  </CardActions>
                </GlassCard>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
