import React from 'react';
import {
  Box, Container, Typography, IconButton, Grid, Divider, useTheme, Tooltip,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { profileInfo } from '../../configs/portfolioData';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case 'GitHub': return <GitHubIcon fontSize="small" />;
    case 'LinkedIn': return <LinkedInIcon fontSize="small" />;
    case 'Email': return <EmailIcon fontSize="small" />;
    default: return null;
  }
};

const SOCIAL_COLORS: Record<string, string> = {
  GitHub: '#333',
  LinkedIn: '#0A66C2',
  Email: '#EA4335',
};

export const Footer: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        pt: 8,
        pb: 4,
        background: isDark
          ? 'linear-gradient(180deg, #070A13 0%, #0B0F19 100%)'
          : 'linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%)',
        borderTop: `1px solid ${theme.palette.divider}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 200,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)'
            : 'radial-gradient(ellipse, rgba(79,70,229,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} sx={{ mb: 5 }}>
          {/* Brand column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="h5"
              onClick={handleScrollToTop}
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 800,
                cursor: 'pointer',
                background: theme.palette.gradient?.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                mb: 1.5,
                letterSpacing: '-0.03em',
              }}
            >
              SARANKUMAR S
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 340, lineHeight: 1.75, mb: 3 }}>
              Full-Stack & Mobile Developer building production-grade applications with the MERN stack and React Native.
            </Typography>
            {/* Social icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {profileInfo.socialLinks.map((link) => (
                <Box
                  key={link.platform}
                  component={motion.div}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.93 }}
                  transition={{ duration: 0.2 }}
                >
                  <Tooltip title={link.platform} arrow placement="top">
                    <IconButton
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{
                        color: theme.palette.text.secondary,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: '10px',
                        width: 38,
                        height: 38,
                        transition: 'all 0.25s',
                        '&:hover': {
                          color: SOCIAL_COLORS[link.platform] ?? theme.palette.primary.main,
                          borderColor: SOCIAL_COLORS[link.platform] ?? theme.palette.primary.main,
                          background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                          boxShadow: `0 4px 12px ${(SOCIAL_COLORS[link.platform] ?? '#6366F1')}44`,
                        },
                      }}
                      aria-label={link.platform}
                    >
                      {getSocialIcon(link.platform)}
                    </IconButton>
                  </Tooltip>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Quick links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', mb: 2.5, color: 'text.primary' }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {NAV_LINKS.map((item) => (
                <Typography
                  key={item.id}
                  variant="body2"
                  onClick={() => handleScrollTo(item.id)}
                  sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    fontWeight: 500,
                    width: 'fit-content',
                    position: 'relative',
                    transition: 'color 0.2s',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -1,
                      left: 0,
                      right: 0,
                      height: '1px',
                      background: theme.palette.primary.main,
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.25s ease',
                    },
                    '&:hover': { color: 'primary.main' },
                    '&:hover::after': { transform: 'scaleX(1)' },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contact info */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', mb: 2.5, color: 'text.primary' }}
            >
              Get In Touch
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <EmailIcon sx={{ fontSize: '1rem', color: 'primary.main' }} />
                <Typography
                  variant="body2"
                  component="a"
                  href={`mailto:${profileInfo.email}`}
                  sx={{ color: 'text.secondary', textDecoration: 'none', fontWeight: 500, '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }}
                >
                  {profileInfo.email}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 3.5 }} />

        {/* Bottom bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            © {new Date().getFullYear()} {profileInfo.name}. Built with{' '}
            <FavoriteIcon sx={{ fontSize: '0.85rem', color: '#F43F5E', mx: 0.3 }} /> using React, TypeScript & MUI.
          </Typography>

          {/* Back to top button */}
          <Box component={motion.div} whileHover={{ y: -3 }} whileTap={{ scale: 0.93 }} transition={{ duration: 0.2 }}>
            <Tooltip title="Back to top" arrow placement="top">
              <IconButton
                onClick={handleScrollToTop}
                size="small"
                sx={{
                  color: 'text.secondary',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: '10px',
                  width: 38,
                  height: 38,
                  background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                  transition: 'all 0.25s',
                  '&:hover': {
                    color: '#fff',
                    background: theme.palette.gradient?.primary,
                    borderColor: 'transparent',
                    boxShadow: '0 4px 16px rgba(99,102,241,0.4)',
                  },
                }}
                aria-label="Back to top"
              >
                <KeyboardArrowUpIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
