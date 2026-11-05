import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeToggleButton } from '../common/ThemeToggleButton';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const observers: IntersectionObserver[] = [];

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(observerCallback, {
          rootMargin: '-40% 0px -55% 0px',
          threshold: 0,
        });
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleScrollToSection = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled
            ? theme.palette.mode === 'dark'
              ? 'rgba(11, 15, 25, 0.88)'
              : 'rgba(255, 255, 255, 0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          boxShadow: scrolled
            ? theme.palette.mode === 'dark'
              ? '0 1px 0 rgba(255,255,255,0.06), 0 4px 32px rgba(0,0,0,0.4)'
              : '0 1px 0 rgba(0,0,0,0.06), 0 4px 32px rgba(0,0,0,0.08)'
            : 'none',
          borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : '1px solid transparent',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: 'space-between',
              height: scrolled ? 68 : 88,
              transition: 'height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Typography
                variant="h5"
                noWrap
                component="div"
                onClick={() => handleScrollToSection('hero')}
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 800,
                  background: theme.palette.gradient?.primary,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  cursor: 'pointer',
                  letterSpacing: '-0.03em',
                  userSelect: 'none',
                }}
              >
                SARANKUMAR S
              </Typography>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <Box key={item.id} sx={{ position: 'relative' }}>
                      <Button
                        onClick={() => handleScrollToSection(item.id)}
                        sx={{
                          color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                          fontSize: '0.9rem',
                          fontWeight: isActive ? 700 : 600,
                          px: 1.8,
                          py: 1,
                          borderRadius: '8px',
                          background: isActive
                            ? theme.palette.mode === 'dark'
                              ? 'rgba(129, 140, 248, 0.12)'
                              : 'rgba(79, 70, 229, 0.08)'
                            : 'transparent',
                          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            background:
                              theme.palette.mode === 'dark'
                                ? 'rgba(129, 140, 248, 0.15)'
                                : 'rgba(79, 70, 229, 0.08)',
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                      {/* Active underline indicator */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            layoutId="activeNavIndicator"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            exit={{ opacity: 0, scaleX: 0 }}
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            style={{
                              position: 'absolute',
                              bottom: 2,
                              left: '20%',
                              right: '20%',
                              height: 2,
                              borderRadius: 2,
                              background: theme.palette.gradient?.primary,
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </Box>
                  );
                })}
                <Box sx={{ ml: 1.5 }}>
                  <ThemeToggleButton size="medium" />
                </Box>
              </Box>
            )}

            {/* Mobile */}
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ThemeToggleButton size="small" />
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}
                  sx={{ color: theme.palette.text.primary }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={mobileOpen ? 'close' : 'open'}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: 'flex' }}
                    >
                      {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                    </motion.div>
                  </AnimatePresence>
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              background:
                theme.palette.mode === 'dark'
                  ? 'rgba(11, 15, 25, 0.97)'
                  : 'rgba(255, 255, 255, 0.97)',
              backdropFilter: 'blur(20px)',
              borderLeft: `1px solid ${theme.palette.divider}`,
              p: 3,
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 800,
              background: theme.palette.gradient?.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Navigation
          </Typography>
          <IconButton onClick={handleDrawerToggle} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ p: 0 }}>
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    onClick={() => handleScrollToSection(item.id)}
                    sx={{
                      borderRadius: '10px',
                      background: isActive
                        ? theme.palette.mode === 'dark'
                          ? 'rgba(129, 140, 248, 0.12)'
                          : 'rgba(79, 70, 229, 0.08)'
                        : 'transparent',
                      borderLeft: isActive
                        ? `3px solid ${theme.palette.primary.main}`
                        : '3px solid transparent',
                      transition: 'all 0.2s',
                      '&:hover': {
                        background:
                          theme.palette.mode === 'dark'
                            ? 'rgba(129, 140, 248, 0.15)'
                            : 'rgba(79, 70, 229, 0.08)',
                      },
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: isActive ? 700 : 600,
                            color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                          }}
                        >
                          {item.label}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </motion.div>
            );
          })}
        </List>

        <Box
          sx={{
            pt: 4,
            borderTop: `1px solid ${theme.palette.divider}`,
            mt: 4,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} Sarankumar S
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
