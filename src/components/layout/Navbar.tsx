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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScrollToSection = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled 
            ? (theme.palette.mode === 'dark' ? 'rgba(11, 15, 25, 0.85)' : 'rgba(255, 255, 255, 0.85)')
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          boxShadow: scrolled ? theme.shadows[4] : 'none',
          borderBottom: scrolled 
            ? `1px solid ${theme.palette.divider}` 
            : '1px solid transparent',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: scrolled ? 70 : 88, transition: 'height 0.3s' }}>
            {/* Logo / Brand Name */}
            <Typography
              variant="h5"
              noWrap
              component="div"
              onClick={() => handleScrollToSection('hero')}
              sx={{
                mr: 2,
                display: 'flex',
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 800,
                background: theme.palette.gradient?.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
                letterSpacing: '-0.03em',
              }}
            >
              SARANKUMAR S
            </Typography>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => handleScrollToSection(item.id)}
                    sx={{
                      color: theme.palette.text.primary,
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      px: 2,
                      py: 1,
                      borderRadius: '8px',
                      '&:hover': {
                        background: theme.palette.primary.main,
                        color: '#ffffff',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Box sx={{ ml: 2 }}>
                  <ThemeToggleButton size="medium" />
                </Box>
              </Box>
            )}

            {/* Mobile Burger and Toggle */}
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ThemeToggleButton size="small" />
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ color: theme.palette.text.primary }}
                >
                  <MenuIcon />
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
              background: theme.palette.background.default,
              p: 3,
            },
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h6" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800 }}>
            Menu
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => handleScrollToSection(item.id)}
                sx={{
                  borderRadius: '10px',
                  '&:hover': {
                    background: theme.palette.primary.main,
                    color: '#ffffff',
                    '& .MuiListItemText-primary': {
                      color: '#ffffff',
                    },
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 600, color: theme.palette.text.primary }}>
                      {item.label}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
