import React, { ReactNode } from 'react';
import { Box, useTheme } from '@mui/material';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: theme.palette.gradient?.background,
        color: theme.palette.text.primary,
        transition: 'background 0.3s ease-in-out, color 0.3s ease-in-out',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Decorative background gradients for SaaS look */}
      <Box
        sx={{
          position: 'absolute',
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: -300,
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, rgba(20, 184, 166, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: -200,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 63, 94, 0.08) 0%, rgba(244, 63, 94, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Navbar />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: { xs: 10, md: 12 }, // offset for floating navbar
          pb: 8,
          zIndex: 1,
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
};
