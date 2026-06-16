import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeMode } from '../../theme/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggleButton: React.FC<IconButtonProps> = (props) => {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
      {...props}
      aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
      sx={{
        border: '1px solid',
        borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)',
        background: mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
        ...props.sx,
      }}
    >
      <motion.div
        key={mode}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ display: 'flex' }}
      >
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </motion.div>
    </IconButton>
  );
};
