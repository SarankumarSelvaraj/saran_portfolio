import React from 'react';
import { Box, Container, Typography, Grid, CardContent, useTheme } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import LanguageIcon from '@mui/icons-material/Language';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import WidgetsIcon from '@mui/icons-material/Widgets';
import NavigationIcon from '@mui/icons-material/Navigation';
import { engineeringAchievements } from '../../configs/portfolioData';
import { GlassCard } from '../common/GlassCard';
import { ScrollReveal } from '../common/ScrollReveal';

export const Achievements: React.FC = () => {
  const theme = useTheme();

  const getIcon = (iconName: string) => {
    const iconStyle = { fontSize: 36, color: theme.palette.primary.main };
    switch (iconName) {
      case 'Security':
        return <SecurityIcon sx={iconStyle} />;
      case 'CloudUpload':
        return <CloudUploadIcon sx={iconStyle} />;
      case 'OfflineBolt':
        return <OfflineBoltIcon sx={iconStyle} />;
      case 'Language':
        return <LanguageIcon sx={iconStyle} />;
      case 'PictureAsPdf':
        return <PictureAsPdfIcon sx={iconStyle} />;
      case 'Widgets':
        return <WidgetsIcon sx={iconStyle} />;
      case 'Navigation':
        return <NavigationIcon sx={iconStyle} />;
      default:
        return <WidgetsIcon sx={iconStyle} />;
    }
  };

  return (
    <Box
      id="achievements"
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
              Architectural Design
            </Typography>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontFamily: '"Outfit", sans-serif' }}>
              Engineering Achievements
            </Typography>
          </ScrollReveal>
        </Box>

        {/* Achievements Grid */}
        <Grid container spacing={3.5}>
          {engineeringAchievements.map((ach, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <ScrollReveal direction="up" delay={index * 0.1}>
                <GlassCard hoverEffect sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    {/* Top Row - Icon and Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: '12px',
                          background: theme.palette.mode === 'dark' ? 'rgba(99, 102, 241, 0.08)' : 'rgba(79, 70, 229, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {getIcon(ach.iconName)}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.15rem', lineHeight: 1.3 }}>
                        {ach.title}
                      </Typography>
                    </Box>

                    {/* Description */}
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
                      {ach.description}
                    </Typography>

                    {/* Impact Box */}
                    {ach.impact && (
                      <Box
                        sx={{
                          py: 1.2,
                          px: 2,
                          borderRadius: '10px',
                          background: theme.palette.mode === 'dark' ? 'rgba(52, 211, 153, 0.08)' : 'rgba(5, 150, 105, 0.05)',
                          borderLeft: `3px solid ${theme.palette.secondary.main}`,
                        }}
                      >
                        <Typography variant="caption" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'secondary.main', display: 'block', mb: 0.5 }}>
                          Measurable Impact
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500, fontSize: '0.85rem' }}>
                          {ach.impact}
                        </Typography>
                      </Box>
                    )}
                  </CardContent>
                </GlassCard>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
