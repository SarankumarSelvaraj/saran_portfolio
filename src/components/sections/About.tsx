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
      desc: 'Production-grade web & mobile delivery',
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      value: 'Full Stack',
      label: 'MERN & React Native',
      desc: 'Web portals, mobile apps & backend services',
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 40, color: theme.palette.primary.light }} />,
      value: '7+ Products',
      label: 'Enterprise Scale',
      desc: 'Super-apps, AI platforms, IoT & chatbot builder',
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
                Full-Stack & Mobile Developer | MERN Stack | React Native
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
                As a <strong>Software Engineer at SRM Tech</strong> for 3+ years, I've designed and delivered production-grade web and mobile applications across healthcare, AI meeting intelligence, smart classrooms, and chatbot platforms. I specialise in bridging clean user experiences with robust backend engineering.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
                My stack centres on the <strong>MERN stack</strong> and <strong>React Native</strong>. I've architected a 5-app healthcare super-app (HealthMate), an AI-powered meeting platform (SmartMeet) with real-time WebSocket transcription and IoT device integration, a no-code chatbot builder (SRM Global), and a backend recording-automation microservice — all in TypeScript.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                I thrive in Agile teams, building reusable component libraries, implementing complex auth systems (JWT, Firebase OTP, RBAC), and optimising performance with <strong>RTK Query</strong>, <strong>AWS S3</strong> pipelines, and offline-resilient Redux architectures.
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
