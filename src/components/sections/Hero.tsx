import React from 'react';
import { Box, Button, Container, Typography, Stack, useTheme, useMediaQuery } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { profileInfo } from '../../configs/portfolioData';
import { ScrollReveal } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: { xs: '85vh', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
            gap: { xs: 6, md: 4 },
            alignItems: 'center',
          }}
        >
          {/* Left Column - Text Info */}
          <Box>
            <ScrollReveal direction="up" delay={0.1}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'primary.main',
                  mb: 2,
                }}
              >
                Welcome to my portfolio
              </Typography>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  mb: 2,
                  lineHeight: 1.1,
                }}
              >
                Hi, I'm{' '}
                <Box
                  component="span"
                  sx={{
                    background: theme.palette.gradient?.primary,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'block',
                    mt: 1,
                  }}
                >
                  {profileInfo.name}
                </Box>
              </Typography>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                  color: 'text.secondary',
                  fontWeight: 500,
                  mb: 3,
                  lineHeight: 1.4,
                }}
              >
                {profileInfo.role}
              </Typography>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  color: 'text.secondary',
                  mb: 5,
                  maxWidth: 600,
                  lineHeight: 1.8,
                }}
              >
                {profileInfo.summary}
              </Typography>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleScrollToContact}
                  endIcon={<SendIcon />}
                  sx={{
                    px: 4,
                    py: 1.8,
                    fontSize: '1rem',
                  }}
                >
                  Contact Me
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  href={profileInfo.resumeUrl}
                  download
                  startIcon={<FileDownloadIcon />}
                  sx={{
                    px: 4,
                    py: 1.8,
                    fontSize: '1rem',
                    borderWidth: '2px',
                    '&:hover': {
                      borderWidth: '2px',
                    },
                  }}
                >
                  Download Resume
                </Button>
              </Stack>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mr: 1 }}>
                  Find me on:
                </Typography>
                {profileInfo.socialLinks.map((social) => {
                  if (social.platform === 'Email') return null;
                  return (
                    <Button
                      key={social.platform}
                      variant="text"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={social.platform === 'GitHub' ? <GitHubIcon /> : <LinkedInIcon />}
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 600,
                        '&:hover': {
                          color: 'primary.main',
                          background: 'transparent',
                        },
                      }}
                    >
                      {social.platform}
                    </Button>
                  );
                })}
              </Stack>
            </ScrollReveal>
          </Box>

          {/* Right Column - Avatar / Design */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <ScrollReveal direction="none" delay={0.3}>
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 260, sm: 320, md: 380 },
                  height: { xs: 260, sm: 320, md: 380 },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Glowing Outer Rings */}
                <Box
                  component={motion.div}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    opacity: 0.15,
                    filter: 'blur(20px)',
                  }}
                />
                <Box
                  component={motion.div}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  sx={{
                    position: 'absolute',
                    width: '90%',
                    height: '90%',
                    borderRadius: '60% 40% 30% 70% / 50% 60% 40% 60%',
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                    opacity: 0.2,
                    filter: 'blur(10px)',
                  }}
                />

                {/* Main Avatar Card */}
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  sx={{
                    position: 'relative',
                    width: '80%',
                    height: '80%',
                    borderRadius: '50%',
                    background: theme.palette.mode === 'dark' 
                      ? 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)' 
                      : 'linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)',
                    border: `3px solid ${theme.palette.primary.main}`,
                    boxShadow: theme.shadows[10],
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                  }}
                >
                  {/* Digital Avatar Art / Initials */}
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '5rem', sm: '6.5rem', md: '8rem' },
                      fontFamily: '"Outfit", sans-serif',
                      fontWeight: 800,
                      background: theme.palette.gradient?.primary,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      userSelect: 'none',
                    }}
                  >
                    SS
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      position: 'absolute',
                      bottom: '18%',
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      fontWeight: 700,
                      color: 'text.secondary',
                      fontSize: '0.75rem',
                    }}
                  >
                    Chennai, IN
                  </Typography>
                </Box>
              </Box>
            </ScrollReveal>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
