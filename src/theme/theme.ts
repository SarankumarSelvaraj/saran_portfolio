import { createTheme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    surface?: {
      base: string;
      elevated: string;
      card: string;
      overlay: string;
    };
    border?: {
      subtle: string;
      default: string;
      strong: string;
    };
    accent?: {
      purple: string;
      purpleLight: string;
      purpleDim: string;
      blue: string;
      cyan: string;
      green: string;
      amber: string;
      rose: string;
    };
    gradient?: {
      primary: string;
      hero: string;
      subtle: string;
      purple: string;
      cyan: string;
      aurora: string;
    };
  }
  interface PaletteOptions {
    surface?: {
      base: string;
      elevated: string;
      card: string;
      overlay: string;
    };
    border?: {
      subtle: string;
      default: string;
      strong: string;
    };
    accent?: {
      purple: string;
      purpleLight: string;
      purpleDim: string;
      blue: string;
      cyan: string;
      green: string;
      amber: string;
      rose: string;
    };
    gradient?: {
      primary: string;
      hero: string;
      subtle: string;
      purple: string;
      cyan: string;
      aurora: string;
    };
  }
}

export const getThemeOptions = (mode: 'light' | 'dark'): ThemeOptions => {
  const isDark = mode === 'dark';

  // ── Design tokens ──────────────────────────────────────────────────────────
  const colors = isDark
    ? {
      // Dark mode
      bgBase: '#0A0A0F',
      bgElevated: '#111118',
      bgCard: '#16161F',
      bgOverlay: 'rgba(22, 22, 31, 0.9)',
      textPrimary: '#F5F5F7',
      textSecondary: '#A1A1AA',
      textMuted: '#52525B',
      borderSubtle: 'rgba(255,255,255,0.05)',
      borderDefault: 'rgba(255,255,255,0.08)',
      borderStrong: 'rgba(255,255,255,0.14)',
      accentPurple: '#8B5CF6',
      accentPurpleLight: '#A78BFA',
      accentPurpleDim: 'rgba(139,92,246,0.15)',
      accentBlue: '#3B82F6',
      accentCyan: '#38BDF8',
      accentGreen: '#34D399',
      accentAmber: '#FBBF24',
      accentRose: '#FB7185',
    }
    : {
      // Light mode
      bgBase: '#FAFAFA',
      bgElevated: '#FFFFFF',
      bgCard: '#FFFFFF',
      bgOverlay: 'rgba(255,255,255,0.92)',
      textPrimary: '#0A0A0F',
      textSecondary: '#52525B',
      textMuted: '#A1A1AA',
      borderSubtle: 'rgba(0,0,0,0.04)',
      borderDefault: 'rgba(0,0,0,0.07)',
      borderStrong: 'rgba(0,0,0,0.12)',
      accentPurple: '#7C3AED',
      accentPurpleLight: '#8B5CF6',
      accentPurpleDim: 'rgba(124,58,237,0.1)',
      accentBlue: '#2563EB',
      accentCyan: '#0284C7',
      accentGreen: '#059669',
      accentAmber: '#D97706',
      accentRose: '#E11D48',
    };

  return {
    palette: {
      mode,
      primary: {
        main: colors.accentPurple,
        light: colors.accentPurpleLight,
        dark: isDark ? '#7C3AED' : '#6D28D9',
        contrastText: '#ffffff',
      },
      secondary: {
        main: colors.accentCyan,
        light: isDark ? '#7DD3FC' : '#38BDF8',
        dark: isDark ? '#0284C7' : '#0369A1',
        contrastText: '#ffffff',
      },
      background: {
        default: colors.bgBase,
        paper: colors.bgCard,
      },
      text: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
        disabled: colors.textMuted,
      },
      divider: colors.borderDefault,
      surface: {
        base: colors.bgBase,
        elevated: colors.bgElevated,
        card: colors.bgCard,
        overlay: colors.bgOverlay,
      },
      border: {
        subtle: colors.borderSubtle,
        default: colors.borderDefault,
        strong: colors.borderStrong,
      },
      accent: {
        purple: colors.accentPurple,
        purpleLight: colors.accentPurpleLight,
        purpleDim: colors.accentPurpleDim,
        blue: colors.accentBlue,
        cyan: colors.accentCyan,
        green: colors.accentGreen,
        amber: colors.accentAmber,
        rose: colors.accentRose,
      },
      gradient: {
        primary: isDark
          ? 'linear-gradient(135deg, #8B5CF6 0%, #38BDF8 100%)'
          : 'linear-gradient(135deg, #7C3AED 0%, #0284C7 100%)',
        hero: isDark
          ? 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 50%, #38BDF8 100%)'
          : 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #0284C7 100%)',
        subtle: isDark
          ? 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(56,189,248,0.1) 100%)'
          : 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(2,132,199,0.06) 100%)',
        purple: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
        cyan: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
        aurora: isDark
          ? 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 30%, #38BDF8 70%, #34D399 100%)'
          : 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 30%, #0284C7 70%, #059669 100%)',
      },
    },

    typography: {
      fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
      h1: {
        fontFamily: '"Outfit", "Inter", sans-serif',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        lineHeight: 1.05,
      },
      h2: {
        fontFamily: '"Outfit", "Inter", sans-serif',
        fontWeight: 800,
        letterSpacing: '-0.025em',
        lineHeight: 1.1,
      },
      h3: {
        fontFamily: '"Outfit", "Inter", sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.2,
      },
      h4: {
        fontFamily: '"Outfit", "Inter", sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.015em',
        lineHeight: 1.25,
      },
      h5: {
        fontFamily: '"Outfit", "Inter", sans-serif',
        fontWeight: 600,
        letterSpacing: '-0.01em',
      },
      h6: {
        fontFamily: '"Outfit", "Inter", sans-serif',
        fontWeight: 600,
        letterSpacing: '-0.005em',
      },
      subtitle1: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 500,
        lineHeight: 1.6,
      },
      subtitle2: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      body1: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 400,
        lineHeight: 1.75,
        fontSize: '1rem',
      },
      body2: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 400,
        lineHeight: 1.65,
        fontSize: '0.875rem',
      },
      caption: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 500,
        lineHeight: 1.5,
        fontSize: '0.75rem',
      },
      button: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 600,
        textTransform: 'none',
        letterSpacing: '0',
        fontSize: '0.9rem',
      },
    },

    shape: { borderRadius: 12 },

    shadows: [
      'none',
      '0 1px 2px rgba(0,0,0,0.05)',
      '0 1px 4px rgba(0,0,0,0.08)',
      '0 2px 8px rgba(0,0,0,0.1)',
      '0 4px 12px rgba(0,0,0,0.1)',
      '0 4px 16px rgba(0,0,0,0.12)',
      '0 6px 20px rgba(0,0,0,0.12)',
      '0 8px 24px rgba(0,0,0,0.14)',
      '0 8px 28px rgba(0,0,0,0.14)',
      '0 10px 32px rgba(0,0,0,0.15)',
      '0 12px 36px rgba(0,0,0,0.15)',
      '0 14px 40px rgba(0,0,0,0.16)',
      '0 16px 44px rgba(0,0,0,0.16)',
      '0 18px 48px rgba(0,0,0,0.17)',
      '0 20px 52px rgba(0,0,0,0.17)',
      '0 22px 56px rgba(0,0,0,0.18)',
      '0 24px 60px rgba(0,0,0,0.18)',
      '0 26px 64px rgba(0,0,0,0.19)',
      '0 28px 68px rgba(0,0,0,0.19)',
      '0 30px 72px rgba(0,0,0,0.20)',
      '0 32px 76px rgba(0,0,0,0.20)',
      '0 34px 80px rgba(0,0,0,0.21)',
      '0 36px 84px rgba(0,0,0,0.21)',
      '0 38px 88px rgba(0,0,0,0.22)',
      '0 40px 92px rgba(0,0,0,0.22)',
    ],

    components: {
      MuiCssBaseline: {
        styleOverrides: () => ({
          '*, *::before, *::after': { boxSizing: 'border-box' },
          html: { scrollBehavior: 'smooth' },
          body: {
            backgroundColor: colors.bgBase,
            color: colors.textPrimary,
            scrollbarColor: isDark ? 'rgba(139,92,246,0.4) #0A0A0F' : 'rgba(124,58,237,0.3) #FAFAFA',
            '&::-webkit-scrollbar': { width: '5px' },
            '&::-webkit-scrollbar-track': { background: colors.bgBase },
            '&::-webkit-scrollbar-thumb': {
              background: isDark ? 'rgba(139,92,246,0.5)' : 'rgba(124,58,237,0.4)',
              borderRadius: '4px',
            },
            '::selection': {
              background: isDark ? 'rgba(139,92,246,0.3)' : 'rgba(124,58,237,0.2)',
              color: colors.textPrimary,
            },
          },
        }),
      },

      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '10px',
            padding: '10px 22px',
            fontWeight: 600,
            fontSize: '0.9rem',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
              transform: 'translateY(-1px)',
            },
            '&:active': { transform: 'translateY(0)' },
          },
          contained: {
            '&:hover': {
              boxShadow: isDark
                ? '0 8px 24px rgba(139,92,246,0.4)'
                : '0 8px 24px rgba(124,58,237,0.3)',
            },
          },
          outlined: {
            borderWidth: '1.5px',
            '&:hover': { borderWidth: '1.5px' },
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            border: `1px solid ${colors.borderDefault}`,
            background: colors.bgCard,
            boxShadow: isDark
              ? '0 1px 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.3)'
              : '0 1px 0 rgba(255,255,255,1), 0 4px 24px rgba(0,0,0,0.06)',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: '6px',
            fontWeight: 500,
            fontSize: '0.78rem',
            transition: 'all 0.15s ease',
          },
        },
      },

      MuiDivider: {
        styleOverrides: {
          root: { borderColor: colors.borderDefault },
        },
      },

      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
              '& fieldset': {
                borderColor: colors.borderDefault,
                transition: 'border-color 0.2s',
              },
              '&:hover fieldset': { borderColor: colors.borderStrong },
              '&.Mui-focused fieldset': {
                borderColor: colors.accentPurple,
                borderWidth: '1.5px',
              },
              '&.Mui-focused': {
                boxShadow: `0 0 0 3px ${colors.accentPurpleDim}`,
              },
            },
            '& .MuiInputLabel-root.Mui-focused': { color: colors.accentPurple },
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            boxShadow: 'none',
          },
        },
      },

      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            borderRadius: '8px',
            fontSize: '0.78rem',
            fontWeight: 500,
            background: isDark ? '#1C1C27' : '#1C1C27',
            color: '#F5F5F7',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '6px 12px',
          },
          arrow: { color: isDark ? '#1C1C27' : '#1C1C27' },
        },
      },
    },
  };
};

export const lightTheme = createTheme(getThemeOptions('light'));
export const darkTheme = createTheme(getThemeOptions('dark'));
