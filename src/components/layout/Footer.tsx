import React from 'react';
import { Box, Container, Typography, IconButton, Grid, Divider, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { profileInfo } from '../../configs/portfolioData';

export const Footer: React.FC = () => {
  const theme = useTheme();

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <GitHubIcon />;
      case 'LinkedIn':
        return <LinkedInIcon />;
      case 'Email':
        return <EmailIcon />;
      default:
        return null;
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background: theme.palette.mode === 'dark' ? '#070A13' : '#F1F5F9',
        borderTop: `1px solid ${theme.palette.divider}`,
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h6"
              onClick={handleScrollToTop}
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 800,
                cursor: 'pointer',
                background: theme.palette.gradient?.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                mb: 1,
              }}
            >
              {profileInfo.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 450 }}>
              {profileInfo.role}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, gap: 1.5 }}>
            {profileInfo.socialLinks.map((link) => (
              <IconButton
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.text.secondary,
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'all 0.3s',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    borderColor: theme.palette.primary.main,
                    transform: 'translateY(-3px)',
                    background: theme.palette.mode === 'dark' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(79, 70, 229, 0.05)',
                  },
                }}
                aria-label={link.platform}
              >
                {getSocialIcon(link.platform)}
              </IconButton>
            ))}
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} {profileInfo.name}. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Designed & Built with React, TypeScript & MUI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
