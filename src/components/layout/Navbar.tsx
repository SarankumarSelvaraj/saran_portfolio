import React, { useState, useEffect, useCallback } from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton,
  Drawer, Box, Container, useTheme, useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { ThemeToggleButton } from '../common/ThemeToggleButton';
import { profileInfo } from '../../configs/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const allIds = ['hero', ...NAV_ITEMS.map(i => i.id)];
    const observers: IntersectionObserver[] = [];

    allIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
          });
        },
        { rootMargin: '-35% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  const bgStyles = scrolled
    ? {
      background: isDark
        ? 'rgba(10,10,15,0.85)'
        : 'rgba(250,250,250,0.88)',
      backdropFilter: 'blur(20px) saturate(180%)',
      borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
      boxShadow: isDark
        ? '0 1px 32px rgba(0,0,0,0.5)'
        : '0 1px 24px rgba(0,0,0,0.07)',
    }
    : {
      background: 'transparent',
      backdropFilter: 'none',
      borderBottom: '1px solid transparent',
      boxShadow: 'none',
    };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          ...bgStyles,
          transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: 'space-between',
              height: scrolled ? 64 : 72,
              transition: 'height 0.3s ease',
              gap: 2,
            }}
          >
            {/* ── Logo / Monogram ── */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Box
                onClick={() => scrollTo('hero')}
                sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 1.5, userSelect: 'none' }}
              >
                {/* Monogram badge */}
                <Box sx={{
                  width: 34, height: 34, borderRadius: '9px',
                  background: isDark
                    ? 'linear-gradient(135deg, #8B5CF6, #38BDF8)'
                    : 'linear-gradient(135deg, #7C3AED, #0284C7)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: isDark
                    ? '0 4px 14px rgba(139,92,246,0.4)'
                    : '0 4px 14px rgba(124,58,237,0.3)',
                }}>
                  <Typography sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    color: '#fff',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}>
                    SS
                  </Typography>
                </Box>

                {/* Name — hidden on small screens */}
                {!isMobile && (
                  <Typography sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'text.primary',
                    letterSpacing: '-0.02em',
                  }}>
                    Sarankumar<Box component="span" sx={{ color: 'primary.main' }}>.</Box>
                  </Typography>
                )}
              </Box>
            </motion.div>

            {/* ── Desktop nav ── */}
            {!isMobile && (
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                flex: 1,
                justifyContent: 'center',
              }}>
                {NAV_ITEMS.map(item => {
                  const isActive = activeSection === item.id;
                  return (
                    <Box key={item.id} sx={{ position: 'relative' }}>
                      <Button
                        onClick={() => scrollTo(item.id)}
                        sx={{
                          color: isActive ? 'primary.main' : 'text.secondary',
                          fontSize: '0.875rem',
                          fontWeight: isActive ? 600 : 400,
                          px: 1.5,
                          py: 0.75,
                          borderRadius: '8px',
                          minWidth: 'auto',
                          background: 'transparent',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            color: 'text.primary',
                            background: isDark
                              ? 'rgba(255,255,255,0.05)'
                              : 'rgba(0,0,0,0.04)',
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            layoutId="navIndicator"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            exit={{ opacity: 0, scaleX: 0 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            style={{
                              position: 'absolute',
                              bottom: 1,
                              left: '15%',
                              right: '15%',
                              height: 2,
                              borderRadius: 2,
                              background: isDark
                                ? 'linear-gradient(90deg, #8B5CF6, #38BDF8)'
                                : 'linear-gradient(90deg, #7C3AED, #0284C7)',
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </Box>
                  );
                })}
              </Box>
            )}

            {/* ── Right actions ── */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ThemeToggleButton size={isMobile ? 'small' : 'medium'} />

              {!isMobile && (
                <Button
                  href={profileInfo.resumeUrl}
                  download
                  variant="outlined"
                  size="small"
                  startIcon={<FileDownloadOutlinedIcon sx={{ fontSize: '1rem !important' }} />}
                  sx={{
                    borderRadius: '8px',
                    px: 2,
                    py: 0.75,
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    borderColor: isDark ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.14)',
                    color: 'text.primary',
                    borderWidth: '1px',
                    '&:hover': {
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      background: isDark
                        ? 'rgba(139,92,246,0.08)'
                        : 'rgba(124,58,237,0.06)',
                      borderWidth: '1px',
                    },
                  }}
                >
                  Resume
                </Button>
              )}

              {isMobile && (
                <IconButton
                  onClick={() => setMobileOpen(v => !v)}
                  size="small"
                  aria-label="menu"
                  sx={{
                    width: 36, height: 36, borderRadius: '8px',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                    color: 'text.primary',
                    '&:hover': {
                      background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                    },
                  }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={mobileOpen ? 'close' : 'open'}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      style={{ display: 'flex' }}
                    >
                      {mobileOpen ? <CloseIcon sx={{ fontSize: '1.1rem' }} /> : <MenuIcon sx={{ fontSize: '1.1rem' }} />}
                    </motion.div>
                  </AnimatePresence>
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ── Mobile Drawer ── */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              width: 260,
              background: isDark ? '#111118' : '#FFFFFF',
              borderLeft: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
            },
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{
                width: 32, height: 32, borderRadius: '8px',
                background: 'linear-gradient(135deg, #8B5CF6, #38BDF8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Typography sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 800, fontSize: '0.82rem', color: '#fff',
                }}>SS</Typography>
              </Box>
              <Typography sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700, fontSize: '0.95rem',
                color: 'text.primary',
              }}>
                Sarankumar<Box component="span" sx={{ color: 'primary.main' }}>.</Box>
              </Typography>
            </Box>
            <IconButton size="small" onClick={() => setMobileOpen(false)} sx={{ color: 'text.secondary' }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Nav items */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 4 }}>
            {NAV_ITEMS.map((item, i) => {
              const isActive = activeSection === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Box
                    onClick={() => scrollTo(item.id)}
                    sx={{
                      px: 2, py: 1.25, borderRadius: '10px', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: 2,
                      background: isActive
                        ? isDark ? 'rgba(139,92,246,0.1)' : 'rgba(124,58,237,0.07)'
                        : 'transparent',
                      borderLeft: isActive
                        ? `2px solid ${isDark ? '#8B5CF6' : '#7C3AED'}`
                        : '2px solid transparent',
                      transition: 'all 0.15s ease',
                      '&:hover': {
                        background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                        color: 'primary.main',
                      },
                    }}
                  >
                    <Typography sx={{
                      fontSize: '0.95rem',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? 'primary.main' : 'text.primary',
                    }}>
                      {item.label}
                    </Typography>
                  </Box>
                </motion.div>
              );
            })}
          </Box>

          {/* Resume button */}
          <Button
            href={profileInfo.resumeUrl}
            download
            fullWidth
            variant="outlined"
            startIcon={<FileDownloadOutlinedIcon />}
            sx={{
              borderRadius: '10px', py: 1.25,
              fontWeight: 600,
              borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
              color: 'text.primary',
              mb: 4,
              '&:hover': {
                borderColor: 'primary.main',
                color: 'primary.main',
                background: 'rgba(139,92,246,0.06)',
              },
            }}
          >
            Download Resume
          </Button>

          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            © {new Date().getFullYear()} Sarankumar S
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
