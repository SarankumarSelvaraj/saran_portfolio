import React from 'react';
import {
  Box, Container, Typography, IconButton, Divider, useTheme, Tooltip,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { profileInfo } from '../../configs/portfolioData';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const SOCIAL_ICON_MAP: Record<string, React.ReactNode> = {
  GitHub: <GitHubIcon sx={{ fontSize: '0.9rem' }} />,
  LinkedIn: <LinkedInIcon sx={{ fontSize: '0.9rem' }} />,
  Email: <EmailIcon sx={{ fontSize: '0.9rem' }} />,
};

const SOCIAL_COLORS: Record<string, string> = {
  GitHub: '#E4E4E7',
  LinkedIn: '#38BDF8',
  Email: '#FB7185',
};

export const Footer: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        pt: 10,
        pb: 5,
        borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
        background: isDark
          ? 'linear-gradient(180deg, transparent 0%, rgba(10,10,15,0.8) 100%)'
          : 'linear-gradient(180deg, transparent 0%, rgba(249,249,252,0.9) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle bottom glow */}
      <Box sx={{
        position: 'absolute',
        bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: 500, height: 150,
        background: isDark
          ? 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)'
          : 'radial-gradient(ellipse, rgba(124,58,237,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>

        {/* ── Main footer content ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr auto auto' },
            gap: { xs: 5, md: 8 },
            mb: 6,
            alignItems: 'flex-start',
          }}
        >
          {/* Brand column */}
          <Box>
            {/* Monogram + name */}
            <Box
              onClick={scrollTop}
              sx={{
                display: 'inline-flex', alignItems: 'center', gap: 1.5,
                cursor: 'pointer', mb: 2,
              }}
            >
              <Box sx={{
                width: 32, height: 32, borderRadius: '8px',
                background: 'linear-gradient(135deg, #8B5CF6, #38BDF8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(139,92,246,0.35)',
              }}>
                <Typography sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 800, fontSize: '0.82rem', color: '#fff',
                }}>
                  SS
                </Typography>
              </Box>
              <Typography sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700, fontSize: '1rem',
                color: 'text.primary',
                letterSpacing: '-0.02em',
              }}>
                Sarankumar<Box component="span" sx={{ color: 'primary.main' }}>.</Box>
              </Typography>
            </Box>

            <Typography sx={{
              fontSize: '0.84rem',
              color: 'text.secondary',
              lineHeight: 1.75,
              maxWidth: 300,
              mb: 3,
            }}>
              Software Engineer specialising in React Native, MERN Stack, and TypeScript. Building production-grade products at SRM Tech since 2023.
            </Typography>

            {/* Social icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {profileInfo.socialLinks.map(link => {
                const icon = SOCIAL_ICON_MAP[link.platform];
                const color = SOCIAL_COLORS[link.platform] ?? '#8B5CF6';
                if (!icon) return null;
                return (
                  <motion.div key={link.platform} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.15 }}>
                    <Tooltip title={link.platform} arrow placement="top">
                      <IconButton
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.platform}
                        size="small"
                        sx={{
                          width: 36, height: 36, borderRadius: '9px',
                          border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                          color: 'text.secondary',
                          background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            color,
                            borderColor: color,
                            background: isDark ? `${color}12` : `${color}0D`,
                            boxShadow: `0 4px 12px ${color}30`,
                          },
                        }}
                      >
                        {icon}
                      </IconButton>
                    </Tooltip>
                  </motion.div>
                );
              })}
            </Box>
          </Box>

          {/* Navigation column */}
          <Box>
            <Typography sx={{
              fontSize: '0.65rem', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.12em',
              color: 'text.disabled', mb: 2.5,
            }}>
              Navigation
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {NAV_LINKS.map(item => (
                <Box
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'text.secondary',
                    cursor: 'pointer',
                    width: 'fit-content',
                    transition: 'color 0.15s ease',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {item.label}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Contact column */}
          <Box>
            <Typography sx={{
              fontSize: '0.65rem', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.12em',
              color: 'text.disabled', mb: 2.5,
            }}>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Typography
                component="a"
                href={`mailto:${profileInfo.email}`}
                sx={{
                  fontSize: '0.875rem', fontWeight: 500,
                  color: 'text.secondary', textDecoration: 'none',
                  transition: 'color 0.15s ease',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {profileInfo.email}
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
                {profileInfo.location}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mt: 0.5 }}>
                <Box sx={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: '#34D399',
                  boxShadow: '0 0 6px #34D399',
                  animation: 'statusPulse 2.5s ease infinite',
                }} />
                <Typography sx={{ fontSize: '0.78rem', color: isDark ? '#34D399' : '#059669', fontWeight: 500 }}>
                  Open to opportunities
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', mb: 4 }} />

        {/* ── Bottom bar ── */}
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: 'space-between',
          gap: 2,
        }}>
          <Typography sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>
            © {new Date().getFullYear()}{' '}
            <Box component="span" sx={{ color: 'text.secondary', fontWeight: 500 }}>
              {profileInfo.name}
            </Box>
            . Built with React, TypeScript &amp; MUI.
          </Typography>

          {/* Back to top */}
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.15 }}>
            <Tooltip title="Back to top" arrow placement="top">
              <IconButton
                onClick={scrollTop}
                size="small"
                aria-label="Back to top"
                sx={{
                  width: 36, height: 36, borderRadius: '9px',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                  color: 'text.secondary',
                  background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#fff',
                    background: 'linear-gradient(135deg, #8B5CF6, #38BDF8)',
                    borderColor: 'transparent',
                    boxShadow: '0 4px 14px rgba(139,92,246,0.4)',
                  },
                }}
              >
                <KeyboardArrowUpIcon sx={{ fontSize: '1rem' }} />
              </IconButton>
            </Tooltip>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};
