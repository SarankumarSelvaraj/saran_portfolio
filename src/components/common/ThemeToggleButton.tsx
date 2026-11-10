import React from 'react';
import { IconButton, IconButtonProps, useTheme, Tooltip } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeMode } from '../../theme/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeToggleButton: React.FC<IconButtonProps> = (props) => {
  const { mode, toggleTheme } = useThemeMode();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Tooltip
      title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
      arrow
      placement="bottom"
    >
      <IconButton
        onClick={toggleTheme}
        aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
        {...props}
        sx={{
          width: 36,
          height: 36,
          borderRadius: '9px',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
          background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
          color: isDark ? '#A78BFA' : '#7C3AED',
          transition: 'all 0.2s ease',
          '&:hover': {
            background: isDark
              ? 'rgba(139,92,246,0.12)'
              : 'rgba(124,58,237,0.08)',
            borderColor: isDark ? 'rgba(139,92,246,0.35)' : 'rgba(124,58,237,0.3)',
            color: isDark ? '#C4B5FD' : '#6D28D9',
          },
          ...props.sx,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={mode}
            initial={{ rotate: -60, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 60, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {mode === 'dark'
              ? <LightModeIcon sx={{ fontSize: '1rem' }} />
              : <DarkModeIcon sx={{ fontSize: '1rem' }} />
            }
          </motion.div>
        </AnimatePresence>
      </IconButton>
    </Tooltip>
  );
};
