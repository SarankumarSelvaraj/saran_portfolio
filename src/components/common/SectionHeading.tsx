import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { ScrollReveal } from './ScrollReveal';

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
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

      {/* ── Eyebrow row ── */}
      <ScrollReveal direction="up" delay={0}>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1.5,
            mb: 2.5,
          }}
        >
          {index && (
            <>
              <Typography
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 700,
                  fontSize: '0.72rem',
                  color: isDark ? 'rgba(139,92,246,0.5)' : 'rgba(124,58,237,0.5)',
                  letterSpacing: '0.08em',
                  lineHeight: 1,
                }}
              >
                {index}
              </Typography>
              <Box
                sx={{
                  width: 20,
                  height: 1,
                  background: isDark ? 'rgba(139,92,246,0.4)' : 'rgba(124,58,237,0.35)',
                  borderRadius: 1,
                }}
              />
            </>
          )}

          {/* Pill badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: 1.5,
              py: 0.5,
              borderRadius: '20px',
              background: isDark
                ? 'rgba(139,92,246,0.1)'
                : 'rgba(124,58,237,0.07)',
              border: `1px solid ${isDark ? 'rgba(139,92,246,0.25)' : 'rgba(124,58,237,0.2)'}`,
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                fontSize: '0.65rem',
                color: isDark ? '#A78BFA' : '#7C3AED',
                lineHeight: 1,
              }}
            >
              {eyebrow}
            </Typography>
          </Box>
        </Box>
      </ScrollReveal>

      {/* ── Main title ── */}
      <ScrollReveal direction="up" delay={0.08}>
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 800,
              lineHeight: 1.1,
              color: light ? '#fff' : 'text.primary',
              letterSpacing: '-0.03em',
              display: 'inline',
            }}
          >
            {title}
          </Typography>

          {/* Animated underline accent */}
          <Box
            sx={{
              position: 'absolute',
              bottom: -4,
              left: isCenter ? '50%' : 0,
              transform: isCenter ? 'translateX(-50%)' : 'none',
              height: 3,
              width: '50%',
              borderRadius: 2,
              background: isDark
                ? 'linear-gradient(90deg, #8B5CF6, #38BDF8)'
                : 'linear-gradient(90deg, #7C3AED, #0284C7)',
              opacity: 0.65,
              '@keyframes expandWidth': {
                from: { width: '0%', opacity: 0 },
                to: { width: '50%', opacity: 0.65 },
              },
              animation: 'expandWidth 0.7s 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) both',
            }}
          />
        </Box>
      </ScrollReveal>

      {/* ── Subtitle ── */}
      {subtitle && (
        <ScrollReveal direction="up" delay={0.14}>
          <Typography
            variant="body1"
            sx={{
              color: light ? 'rgba(255,255,255,0.65)' : 'text.secondary',
              mt: 3,
              maxWidth: isCenter ? 540 : 640,
              mx: isCenter ? 'auto' : 0,
              lineHeight: 1.8,
              fontSize: { xs: '0.95rem', md: '1rem' },
            }}
          >
            {subtitle}
          </Typography>
        </ScrollReveal>
      )}
    </Box>
  );
};
