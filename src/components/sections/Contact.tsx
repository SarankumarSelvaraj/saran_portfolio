import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, TextField, Button,
  Stack, IconButton, Snackbar, Alert, useTheme, CircularProgress,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { profileInfo } from '../../configs/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { ScrollReveal } from '../common/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Social link config ── */
const SOCIAL_META = [
  {
    platform: 'GitHub',
    Icon: GitHubIcon,
    color: '#E4E4E7',
    dimColor: 'rgba(228,228,231,0.08)',
    borderColor: 'rgba(228,228,231,0.15)',
    label: 'GitHub',
  },
  {
    platform: 'LinkedIn',
    Icon: LinkedInIcon,
    color: '#38BDF8',
    dimColor: 'rgba(56,189,248,0.1)',
    borderColor: 'rgba(56,189,248,0.2)',
    label: 'LinkedIn',
  },
  {
    platform: 'Email',
    Icon: EmailIcon,
    color: '#FB7185',
    dimColor: 'rgba(251,113,133,0.1)',
    borderColor: 'rgba(251,113,133,0.2)',
    label: 'Email',
  },
];

export const Contact: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [toastOpen, setToastOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setToastOpen(true);
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setToastOpen(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  /* Shared text field styles */
  const fieldSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
      transition: 'all 0.2s ease',
      '& fieldset': {
        borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
        transition: 'border-color 0.2s ease',
      },
      '&:hover fieldset': {
        borderColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
      },
      '&.Mui-focused fieldset': {
        borderColor: isDark ? '#8B5CF6' : '#7C3AED',
        borderWidth: '1.5px',
      },
      '&.Mui-focused': {
        boxShadow: isDark
          ? '0 0 0 3px rgba(139,92,246,0.15)'
          : '0 0 0 3px rgba(124,58,237,0.1)',
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: isDark ? '#8B5CF6' : '#7C3AED',
    },
    '& .MuiInputBase-input': {
      color: 'text.primary',
      fontSize: '0.9rem',
    },
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          index="07"
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="Open to new engineering roles, consulting, and ambitious product collaborations. I respond within 24 hours."
        />

        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>

          {/* ── Left column: info panel ── */}
          <Grid size={{ xs: 12, md: 5 }}>
            <ScrollReveal direction="left">
              <Box
                sx={{
                  height: '100%',
                  borderRadius: '20px',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                  background: isDark ? '#16161F' : '#FFFFFF',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Top gradient band */}
                <Box sx={{
                  height: 2,
                  background: 'linear-gradient(90deg, #8B5CF6, #38BDF8)',
                }} />

                <Box sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  {/* Heading */}
                  <Typography
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      fontWeight: 800,
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                      lineHeight: 1.15,
                      color: 'text.primary',
                      mb: 1.5,
                      letterSpacing: '-0.025em',
                    }}
                  >
                    Ready to build{' '}
                    <Box
                      component="span"
                      sx={{
                        background: isDark
                          ? 'linear-gradient(135deg, #8B5CF6, #38BDF8)'
                          : 'linear-gradient(135deg, #7C3AED, #0284C7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      something great?
                    </Box>
                  </Typography>

                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.9rem',
                      lineHeight: 1.75,
                      mb: 4,
                    }}
                  >
                    Whether you're looking for a Senior React Native engineer, a full-stack MERN developer, or someone to architect your next product — let's talk.
                  </Typography>

                  {/* Contact details */}
                  <Stack spacing={2.5} sx={{ mb: 4 }}>
                    {[
                      {
                        icon: <EmailIcon sx={{ fontSize: '1rem' }} />,
                        label: 'Email',
                        value: profileInfo.email,
                        href: `mailto:${profileInfo.email}`,
                        color: '#FB7185',
                        dimColor: 'rgba(251,113,133,0.1)',
                        borderColor: 'rgba(251,113,133,0.2)',
                      },
                      {
                        icon: <LocationOnIcon sx={{ fontSize: '1rem' }} />,
                        label: 'Location',
                        value: profileInfo.location + ' · UTC+5:30',
                        href: undefined,
                        color: '#34D399',
                        dimColor: 'rgba(52,211,153,0.1)',
                        borderColor: 'rgba(52,211,153,0.2)',
                      },
                    ].map(item => (
                      <Box
                        key={item.label}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          p: 2,
                          borderRadius: '12px',
                          border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                          background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.015)',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            borderColor: item.borderColor,
                            background: isDark
                              ? item.dimColor
                              : item.dimColor.replace('0.1', '0.07'),
                          },
                        }}
                      >
                        <Box sx={{
                          width: 36, height: 36, borderRadius: '9px', flexShrink: 0,
                          background: isDark ? item.dimColor : item.dimColor.replace('0.1', '0.08'),
                          border: `1px solid ${item.borderColor}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: item.color,
                        }}>
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography sx={{
                            fontSize: '0.65rem', fontWeight: 600,
                            textTransform: 'uppercase', letterSpacing: '0.1em',
                            color: 'text.disabled', mb: 0.25,
                          }}>
                            {item.label}
                          </Typography>
                          {item.href ? (
                            <Typography
                              component="a"
                              href={item.href}
                              sx={{
                                fontSize: '0.875rem', fontWeight: 600,
                                color: 'text.primary', textDecoration: 'none',
                                transition: 'color 0.15s',
                                '&:hover': { color: item.color },
                              }}
                            >
                              {item.value}
                            </Typography>
                          ) : (
                            <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: 'text.primary' }}>
                              {item.value}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Stack>

                  {/* Social links */}
                  <Box sx={{ mt: 'auto' }}>
                    <Typography sx={{
                      fontSize: '0.65rem', fontWeight: 600,
                      textTransform: 'uppercase', letterSpacing: '0.12em',
                      color: 'text.disabled', mb: 2,
                    }}>
                      Find me on
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      {profileInfo.socialLinks.map(link => {
                        const meta = SOCIAL_META.find(s => s.platform === link.platform);
                        if (!meta) return null;
                        return (
                          <motion.div
                            key={link.platform}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.93 }}
                            transition={{ duration: 0.15 }}
                          >
                            <IconButton
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={meta.label}
                              size="small"
                              sx={{
                                width: 42, height: 42, borderRadius: '10px',
                                background: isDark ? meta.dimColor : meta.dimColor.replace('0.1', '0.07'),
                                border: `1px solid ${meta.borderColor}`,
                                color: meta.color,
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                  background: meta.dimColor.replace('0.1', '0.2'),
                                  borderColor: meta.color,
                                  boxShadow: `0 6px 18px ${meta.dimColor.replace('0.1', '0.35')}`,
                                },
                              }}
                            >
                              <meta.Icon sx={{ fontSize: '1rem' }} />
                            </IconButton>
                          </motion.div>
                        );
                      })}
                    </Stack>
                  </Box>

                  {/* Availability notice */}
                  <Box
                    sx={{
                      mt: 3,
                      p: 2,
                      borderRadius: '12px',
                      background: isDark ? 'rgba(52,211,153,0.07)' : 'rgba(5,150,105,0.05)',
                      border: `1px solid ${isDark ? 'rgba(52,211,153,0.2)' : 'rgba(5,150,105,0.15)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                    }}
                  >
                    <Box sx={{
                      width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
                      background: '#34D399',
                      boxShadow: '0 0 6px #34D399',
                      animation: 'statusPulse 2.5s ease infinite',
                    }} />
                    <Typography sx={{ fontSize: '0.825rem', color: isDark ? '#34D399' : '#059669', fontWeight: 500 }}>
                      Currently available for new opportunities
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </ScrollReveal>
          </Grid>

          {/* ── Right column: form ── */}
          <Grid size={{ xs: 12, md: 7 }}>
            <ScrollReveal direction="right">
              <Box
                sx={{
                  height: '100%',
                  borderRadius: '20px',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                  background: isDark ? '#16161F' : '#FFFFFF',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease',
                  '&:hover': {
                    borderColor: isDark ? 'rgba(139,92,246,0.2)' : 'rgba(124,58,237,0.15)',
                  },
                }}
              >
                {/* Top gradient band */}
                <Box sx={{
                  height: 2,
                  background: 'linear-gradient(90deg, #38BDF8, #8B5CF6)',
                }} />

                <Box sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: 'text.primary',
                      mb: 0.5,
                    }}
                  >
                    Send a Message
                  </Typography>
                  <Typography sx={{ fontSize: '0.825rem', color: 'text.secondary', mb: 3.5 }}>
                    I'll get back to you within 24 hours.
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          required fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={status === 'loading' || status === 'success'}
                          size="medium"
                          sx={fieldSx}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          required fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={status === 'loading' || status === 'success'}
                          size="medium"
                          sx={fieldSx}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          disabled={status === 'loading' || status === 'success'}
                          size="medium"
                          sx={fieldSx}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          required fullWidth multiline rows={5}
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          disabled={status === 'loading' || status === 'success'}
                          sx={fieldSx}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <motion.div
                          whileHover={status === 'idle' || status === 'error' ? { scale: 1.01 } : {}}
                          whileTap={status === 'idle' || status === 'error' ? { scale: 0.99 } : {}}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            disabled={status === 'loading' || status === 'success'}
                            endIcon={
                              status === 'loading'
                                ? <CircularProgress size={16} sx={{ color: 'rgba(255,255,255,0.8)' }} />
                                : status === 'success'
                                  ? <CheckCircleIcon sx={{ fontSize: '1rem !important' }} />
                                  : <ArrowRightAltIcon sx={{ fontSize: '1.2rem !important' }} />
                            }
                            sx={{
                              py: 1.6,
                              fontSize: '0.9rem',
                              fontWeight: 700,
                              borderRadius: '12px',
                              letterSpacing: '0.01em',
                              background: status === 'success'
                                ? 'linear-gradient(135deg, #34D399, #059669)'
                                : 'linear-gradient(135deg, #7C3AED, #8B5CF6)',
                              boxShadow: status === 'success'
                                ? '0 8px 24px rgba(52,211,153,0.4)'
                                : isDark
                                  ? '0 8px 24px rgba(139,92,246,0.4)'
                                  : '0 8px 24px rgba(124,58,237,0.3)',
                              border: '1px solid rgba(255,255,255,0.1)',
                              color: '#fff',
                              transition: 'all 0.25s ease',
                              '&:hover:not(:disabled)': {
                                background: status === 'success'
                                  ? 'linear-gradient(135deg, #34D399, #059669)'
                                  : 'linear-gradient(135deg, #6D28D9, #7C3AED)',
                                boxShadow: status === 'success'
                                  ? '0 10px 28px rgba(52,211,153,0.5)'
                                  : '0 10px 28px rgba(139,92,246,0.5)',
                                transform: 'translateY(-2px)',
                              },
                              '&.Mui-disabled': {
                                color: '#fff',
                                opacity: status === 'success' ? 1 : 0.6,
                                background: status === 'success'
                                  ? 'linear-gradient(135deg, #34D399, #059669)'
                                  : undefined,
                              },
                            }}
                          >
                            <AnimatePresence mode="wait" initial={false}>
                              {status === 'loading' && (
                                <motion.span
                                  key="loading"
                                  initial={{ opacity: 0, y: 6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -6 }}
                                  transition={{ duration: 0.15 }}
                                >
                                  Sending…
                                </motion.span>
                              )}
                              {status === 'success' && (
                                <motion.span
                                  key="success"
                                  initial={{ opacity: 0, scale: 0.85 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  Message Sent!
                                </motion.span>
                              )}
                              {(status === 'idle' || status === 'error') && (
                                <motion.span
                                  key="idle"
                                  initial={{ opacity: 0, y: 6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -6 }}
                                  transition={{ duration: 0.15 }}
                                >
                                  Send Message
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </Button>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </Box>

                  {/* Trust indicators */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 2,
                      mt: 3,
                      pt: 3,
                      borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                    }}
                  >
                    {[
                      { icon: '⚡', text: 'Responds within 24h' },
                      { icon: '🔒', text: 'Your info stays private' },
                      { icon: '☁', text: 'Open to remote roles' },
                    ].map(item => (
                      <Box key={item.text} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                        <Typography sx={{ fontSize: '0.8rem' }}>{item.icon}</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 500 }}>
                          {item.text}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Container>

      {/* Toast notifications */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={4500}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setToastOpen(false)}
          severity={status === 'success' ? 'success' : 'error'}
          variant="filled"
          sx={{ borderRadius: '12px', fontWeight: 600, fontSize: '0.875rem' }}
        >
          {status === 'success'
            ? "Message sent! I'll get back to you within 24 hours."
            : 'Please fill in all required fields.'}
        </Alert>
      </Snackbar>
    </Box>
  );
};
