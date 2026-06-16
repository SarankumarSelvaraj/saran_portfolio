import React from 'react';
import { Box, Container, Grid, Typography, useTheme, CardContent } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import { GlassCard } from '../common/GlassCard';
import { ScrollReveal } from '../common/ScrollReveal';

export const About: React.FC = () => {
  const theme = useTheme();

  const stats = [
    {
      icon: <BusinessCenterIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      value: '3+ Years',
      label: 'Experience at SRM Tech',
      desc: 'Building reliable enterprise apps',
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      value: 'Full Stack',
      label: 'MERN & React Native',
      desc: 'Hybrid apps & backend scale',
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 40, color: theme.palette.primary.light }} />,
      value: '5+ Products',
      label: 'Enterprise Scale',
      desc: 'Admin portals, companion apps, & core solutions',
    },
  ];

  return (
    <Box
      id="about"
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
              Get To Know Me
            </Typography>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontFamily: '"Outfit", sans-serif' }}>
              About Me
            </Typography>
          </ScrollReveal>
        </Box>

        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          {/* Left Side: Summary text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal direction="left">
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                Passionate Programmer Analyst & App Architect
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
                As a Programmer Analyst at <strong>SRM Tech</strong> for the past 3+ years, I've had the privilege of developing, scaling, and maintaining complex enterprise-grade web and mobile ecosystems. I specialize in bridging the gap between elegant user experience design and solid backend engineering.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
                My technical sweet spot centers around the <strong>MERN stack</strong> and <strong>React Native</strong>. Whether it's crafting real-time interactive dashboards with WebSockets, engineering offline-resilient local sync mechanics for health platforms, or deploying automated IoT setups, I am driven by writing clean, highly maintaining TypeScript codebase structures.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                I work closely with product managers, QA testers, and hardware engineers to architect products that deliver exceptional value. I thrive in agile cultures that prioritize coding excellence, robust testing pipelines, and responsive design systems.
              </Typography>
            </ScrollReveal>
          </Grid>

          {/* Right Side: Stats grid */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr' },
                gap: 3,
              }}
            >
              {stats.map((stat, index) => (
                <ScrollReveal key={index} direction="right" delay={index * 0.15}>
                  <GlassCard hoverEffect sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: '12px',
                          background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}>
                          {stat.label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {stat.desc}
                        </Typography>
                      </Box>
                    </CardContent>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
