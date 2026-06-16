import { createTheme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    glass?: {
      background: string;
      border: string;
      shadow: string;
    };
    gradient?: {
      primary: string;
      secondary: string;
      background: string;
    };
  }
  interface PaletteOptions {
    glass?: {
      background: string;
      border: string;
      shadow: string;
    };
    gradient?: {
      primary: string;
      secondary: string;
      background: string;
    };
  }
}

export const getThemeOptions = (mode: 'light' | 'dark'): ThemeOptions => {
  const isDark = mode === 'dark';

  return {
    palette: {
      mode,
      primary: {
        main: isDark ? '#818CF8' : '#4F46E5', // Indigo
        light: isDark ? '#A5B4FC' : '#6366F1',
        dark: isDark ? '#4F46E5' : '#3730A3',
        contrastText: '#ffffff',
      },
      secondary: {
        main: isDark ? '#34D399' : '#059669', // Emerald / Mint Green
        light: isDark ? '#6EE7B7' : '#10B981',
        dark: isDark ? '#059669' : '#047857',
        contrastText: '#ffffff',
      },
      background: {
        default: isDark ? '#0B0F19' : '#F8FAFC',
        paper: isDark ? '#111827' : '#FFFFFF',
      },
      text: {
        primary: isDark ? '#F3F4F6' : '#1F2937',
        secondary: isDark ? '#9CA3AF' : '#4B5563',
      },
      glass: {
        background: isDark ? 'rgba(17, 24, 39, 0.7)' : 'rgba(255, 255, 255, 0.7)',
        border: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
        shadow: isDark 
          ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)' 
          : '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
      },
      gradient: {
        primary: isDark 
          ? 'linear-gradient(135deg, #818CF8 0%, #34D399 100%)' 
          : 'linear-gradient(135deg, #4F46E5 0%, #059669 100%)',
        secondary: isDark
          ? 'linear-gradient(135deg, #F43F5E 0%, #FB7185 100%)'
          : 'linear-gradient(135deg, #E11D48 0%, #F43F5E 100%)',
        background: isDark
          ? 'linear-gradient(180deg, #0B0F19 0%, #111827 100%)'
          : 'linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 100%)',
      }
    },
    typography: {
      fontFamily: '"Plus Jakarta Sans", "Outfit", "Inter", "Helvetica", "Arial", sans-serif',
      h1: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 800,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      h4: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 600,
      },
      h5: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 600,
      },
      h6: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 600,
      },
      subtitle1: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 500,
      },
      subtitle2: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 500,
      },
      body1: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        lineHeight: 1.7,
      },
      body2: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        lineHeight: 1.6,
      },
      button: {
        fontFamily: '"Outfit", sans-serif',
        fontWeight: 600,
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          body: {
            scrollbarColor: isDark ? '#374151 #111827' : '#CBD5E1 #F8FAFC',
            '&::-webkit-scrollbar': {
              width: '8px',
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: isDark ? '#111827' : '#F8FAFC',
            },
            '&::-webkit-scrollbar-thumb': {
              background: isDark ? '#374151' : '#CBD5E1',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: isDark ? '#4B5563' : '#94A3B8',
            },
          },
        }),
      },
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            borderRadius: '12px',
            padding: '8px 20px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: 'none',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: theme.palette.mode === 'dark' 
                ? '0 4px 20px rgba(129, 140, 248, 0.4)' 
                : '0 4px 20px rgba(79, 70, 229, 0.25)',
            },
            ...(ownerState?.variant === 'contained' && ownerState?.color === 'primary' && {
              background: theme.palette.mode === 'dark' 
                ? 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)'
                : 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
            }),
          }),
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '20px',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.06)',
            background: isDark ? 'rgba(17, 24, 39, 0.7)' : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            fontWeight: 500,
          },
        },
      },
    },
  };
};

export const lightTheme = createTheme(getThemeOptions('light'));
export const darkTheme = createTheme(getThemeOptions('dark'));
