import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { ScrollReveal } from './ScrollReveal';

interface SectionHeadingProps {
  index?: string;       // e.g. "01"
  eyebrow: string;      // small uppercase label
  title: string;        // main heading
  subtitle?: string;    // optional description
  align?: 'left' | 'center';
  light?: boolean;      // inverted for dark hero backgrounds
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isCenter = align === 'center';

  return (
    <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: isCenter ? 'center' : 'left' }}>
      <ScrollReveal direction="up" delay={0}>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1.5,
            mb: 2,
          }}
        >
          {index && (
            <Typography
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 800,
                fontSize: '0.78rem',
                color: isDark ? 'rgba(129,140,248,0.5)' : 'rgba(79,70,229,0.5)',
                letterSpacing: '0.1em',
              }}
            >
              {index}
            </Typography>
          )}
          {index && (
            <Box
              sx={{
                width: 24,
                height: 1,
                background: theme.palette.primary.main,
                opacity: 0.4,
              }}
            />
          )}
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              fontSize: '0.72rem',
              background: theme.palette.gradient?.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {eyebrow}
          </Typography>
        </Box>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.08}>
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 800,
              lineHeight: 1.1,
              color: light ? '#fff' : 'text.primary',
              letterSpacing: '-0.025em',
              position: 'relative',
              display: 'inline',
            }}
          >
            {title}
          </Typography>

          {/* Animated underline */}
          <Box
            sx={{
              position: 'absolute',
              bottom: -6,
              left: isCenter ? '50%' : 0,
              transform: isCenter ? 'translateX(-50%)' : 'none',
              height: 4,
              width: '60%',
              borderRadius: 2,
              background: theme.palette.gradient?.primary,
              opacity: 0.7,
              '@keyframes expandWidth': {
                from: { width: '0%' },
                to:   { width: '60%' },
              },
              animation: 'expandWidth 0.8s 0.3s cubic-bezier(0.34,1.56,0.64,1) both',
            }}
          />
        </Box>
      </ScrollReveal>

      {subtitle && (
        <ScrollReveal direction="up" delay={0.15}>
          <Typography
            variant="body1"
            sx={{
              color: light ? 'rgba(255,255,255,0.65)' : 'text.secondary',
              mt: 3,
              maxWidth: isCenter ? 560 : 640,
              mx: isCenter ? 'auto' : 0,
              lineHeight: 1.8,
              fontSize: { xs: '1rem', md: '1.05rem' },
            }}
          >
            {subtitle}
          </Typography>
        </ScrollReveal>
      )}
    </Box>
  );
};
