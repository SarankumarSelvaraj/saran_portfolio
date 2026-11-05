import { createTheme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    glass?: {
      background: string;
      border: string;
      shadow: string;
      shadowHover: string;
    };
    gradient?: {
      primary: string;
      secondary: string;
      background: string;
      amber: string;
      rose: string;
      violet: string;
      cyan: string;
      aurora: string;
    };
    neon?: {
      primary: string;
      secondary: string;
      rose: string;
      amber: string;
      cyan: string;
    };
  }
  interface PaletteOptions {
    glass?: {
      background: string;
      border: string;
      shadow: string;
      shadowHover: string;
    };
    gradient?: {
      primary: string;
      secondary: string;
      background: string;
      amber: string;
      rose: string;
      violet: string;
      cyan: string;
      aurora: string;
    };
    neon?: {
      primary: string;
      secondary: string;
      rose: string;
      amber: string;
      cyan: string;
    };
  }
}

export const getThemeOptions = (mode: 'light' | 'dark'): ThemeOptions => {
  const isDark = mode === 'dark';

  return {
    palette: {
      mode,
      primary: {
        main: isDark ? '#818CF8' : '#4F46E5',
        light: isDark ? '#A5B4FC' : '#6366F1',
        dark: isDark ? '#4F46E5' : '#3730A3',
        contrastText: '#ffffff',
      },
      secondary: {
        main: isDark ? '#34D399' : '#059669',
        light: isDark ? '#6EE7B7' : '#10B981',
        dark: isDark ? '#059669' : '#047857',
        contrastText: '#ffffff',
      },
      background: {
        default: isDark ? '#060912' : '#F0F4FF',
        paper: isDark ? '#0D1117' : '#FFFFFF',
      },
      text: {
        primary: isDark ? '#F1F5F9' : '#0F172A',
        secondary: isDark ? '#94A3B8' : '#475569',
      },
      glass: {
        background: isDark ? 'rgba(13,17,23,0.75)' : 'rgba(255,255,255,0.75)',
        border: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)',
        shadow: isDark
          ? '0 4px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
          : '0 4px 32px rgba(79,70,229,0.08), inset 0 1px 0 rgba(255,255,255,1)',
        shadowHover: isDark
          ? '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(129,140,248,0.3)'
          : '0 20px 60px rgba(79,70,229,0.18), 0 0 0 1px rgba(79,70,229,0.2)',
      },
      gradient: {
        primary: isDark
          ? 'linear-gradient(135deg, #818CF8 0%, #34D399 100%)'
          : 'linear-gradient(135deg, #4F46E5 0%, #059669 100%)',
        secondary: isDark
          ? 'linear-gradient(135deg, #F43F5E 0%, #FB923C 100%)'
          : 'linear-gradient(135deg, #E11D48 0%, #EA580C 100%)',
        background: isDark
          ? 'linear-gradient(135deg, #060912 0%, #0D1117 50%, #060912 100%)'
          : 'linear-gradient(135deg, #F0F4FF 0%, #EEF2FF 50%, #F0FDF4 100%)',
        amber: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
        rose: 'linear-gradient(135deg, #F43F5E 0%, #EC4899 100%)',
        violet: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
        cyan: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
        aurora: isDark
          ? 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 25%, #06B6D4 50%, #10B981 75%, #F59E0B 100%)'
          : 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 25%, #0891B2 50%, #059669 75%, #D97706 100%)',
      },
      neon: {
        primary: isDark ? 'rgba(129,140,248,0.6)' : 'rgba(79,70,229,0.5)',
        secondary: isDark ? 'rgba(52,211,153,0.6)' : 'rgba(5,150,105,0.5)',
        rose: 'rgba(244,63,94,0.6)',
        amber: 'rgba(245,158,11,0.6)',
        cyan: 'rgba(6,182,212,0.6)',
      },
    },

    typography: {
      fontFamily: '"Plus Jakarta Sans", "Outfit", "Inter", sans-serif',
      h1: { fontFamily: '"Outfit", sans-serif', fontWeight: 900, letterSpacing: '-0.03em' },
      h2: { fontFamily: '"Outfit", sans-serif', fontWeight: 800, letterSpacing: '-0.02em' },
      h3: { fontFamily: '"Outfit", sans-serif', fontWeight: 700, letterSpacing: '-0.015em' },
      h4: { fontFamily: '"Outfit", sans-serif', fontWeight: 700 },
      h5: { fontFamily: '"Outfit", sans-serif', fontWeight: 600 },
      h6: { fontFamily: '"Outfit", sans-serif', fontWeight: 600 },
      subtitle1: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 500 },
      subtitle2: { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 500 },
      body1: { fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1.8 },
      body2: { fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1.7 },
      button: { fontFamily: '"Outfit", sans-serif', fontWeight: 700, textTransform: 'none', letterSpacing: '0.01em' },
    },

    shape: { borderRadius: 16 },

    shadows: [
      'none',
      '0 1px 3px rgba(0,0,0,0.1)',
      '0 2px 8px rgba(0,0,0,0.12)',
      '0 4px 16px rgba(0,0,0,0.12)',
      '0 4px 20px rgba(0,0,0,0.14)',
      '0 6px 24px rgba(0,0,0,0.14)',
      '0 8px 28px rgba(0,0,0,0.15)',
      '0 8px 32px rgba(0,0,0,0.15)',
      '0 10px 36px rgba(0,0,0,0.16)',
      '0 12px 40px rgba(0,0,0,0.16)',
      '0 14px 44px rgba(0,0,0,0.17)',
      '0 16px 48px rgba(0,0,0,0.17)',
      '0 18px 52px rgba(0,0,0,0.18)',
      '0 20px 56px rgba(0,0,0,0.18)',
      '0 22px 60px rgba(0,0,0,0.19)',
      '0 24px 64px rgba(0,0,0,0.19)',
      '0 26px 68px rgba(0,0,0,0.20)',
      '0 28px 72px rgba(0,0,0,0.20)',
      '0 30px 76px rgba(0,0,0,0.21)',
      '0 32px 80px rgba(0,0,0,0.21)',
      '0 34px 84px rgba(0,0,0,0.22)',
      '0 36px 88px rgba(0,0,0,0.22)',
      '0 38px 92px rgba(0,0,0,0.23)',
      '0 40px 96px rgba(0,0,0,0.23)',
      '0 42px 100px rgba(0,0,0,0.24)',
    ],

    components: {
      MuiCssBaseline: {
        styleOverrides: () => ({
          '*, *::before, *::after': { boxSizing: 'border-box' },
          html: { scrollBehavior: 'smooth' },
          body: {
            scrollbarColor: isDark ? '#1E293B #060912' : '#CBD5E1 #F0F4FF',
            '&::-webkit-scrollbar': { width: '6px' },
            '&::-webkit-scrollbar-track': { background: isDark ? '#060912' : '#F0F4FF' },
            '&::-webkit-scrollbar-thumb': {
              background: isDark
                ? 'linear-gradient(180deg, #6366F1, #34D399)'
                : 'linear-gradient(180deg, #4F46E5, #059669)',
              borderRadius: '3px',
            },
            '::selection': {
              background: isDark ? 'rgba(129,140,248,0.4)' : 'rgba(79,70,229,0.25)',
              color: isDark ? '#fff' : '#1F2937',
            },
          },
        }),
      },

      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            borderRadius: '14px',
            padding: '10px 24px',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            boxShadow: 'none',
            position: 'relative',
            overflow: 'hidden',
            '&:hover': {
              transform: 'translateY(-3px) scale(1.02)',
              boxShadow: isDark
                ? '0 8px 28px rgba(129,140,248,0.45)'
                : '0 8px 28px rgba(79,70,229,0.3)',
            },
            '&:active': { transform: 'translateY(-1px) scale(0.99)' },
            ...(ownerState?.variant === 'contained' && ownerState?.color === 'primary' && {
              background: isDark
                ? 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)'
                : 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0, left: '-100%',
                width: '100%', height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                transition: 'left 0.5s ease',
              },
              '&:hover::before': { left: '100%' },
            }),
          }),
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '24px',
            border: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)',
            background: isDark ? 'rgba(13,17,23,0.75)' : 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(24px) saturate(180%)',
            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: '10px',
            fontWeight: 600,
            transition: 'all 0.25s ease',
          },
        },
      },

      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            borderRadius: '10px',
            fontSize: '0.78rem',
            fontWeight: 600,
            background: isDark ? 'rgba(15,23,42,0.95)' : 'rgba(15,23,42,0.9)',
            color: '#F1F5F9',
            border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          },
          arrow: { color: isDark ? 'rgba(15,23,42,0.95)' : 'rgba(15,23,42,0.9)' },
        },
      },

      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)',
          },
        },
      },

      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': { borderRadius: '16px' },
          },
        },
      },
    },
  };
};

export const lightTheme = createTheme(getThemeOptions('light'));
export const darkTheme = createTheme(getThemeOptions('dark'));
