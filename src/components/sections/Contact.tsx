import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, TextField, Button, CardContent,
  Stack, IconButton, Snackbar, Alert, useTheme, CircularProgress,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { profileInfo } from '../../configs/portfolioData';
import { GlassCard } from '../common/GlassCard';
import { ScrollReveal } from '../common/ScrollReveal';
import { SectionHeading } from '../common/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';

const SOCIAL_META = [
  { platform: 'GitHub', Icon: GitHubIcon, color: '#6e5494', bg: 'rgba(110,84,148,0.15)' },
  { platform: 'LinkedIn', Icon: LinkedInIcon, color: '#0A66C2', bg: 'rgba(10,102,194,0.15)' },
  { platform: 'Email', Icon: EmailIcon, color: '#EA4335', bg: 'rgba(234,67,53,0.15)' },
];

const inputSx = (isDark: boolean, primaryMain: string, primaryLight: string) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
    transition: 'all 0.25s ease',
    '& fieldset': {
      borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)',
      transition: 'all 0.25s ease',
    },
    '&:hover fieldset': { borderColor: primaryLight },
    '&.Mui-focused': {
      background: isDark ? 'rgba(99,102,241,0.05)' : 'rgba(79,70,229,0.03)',
      boxShadow: isDark
        ? `0 0 0 3px rgba(129,140,248,0.2), 0 0 20px rgba(129,140,248,0.1)`
        : `0 0 0 3px rgba(79,70,229,0.15), 0 0 20px rgba(79,70,229,0.07)`,
    },
    '&.Mui-focused fieldset': { borderColor: primaryMain, borderWidth: 2 },
  },
  '& .MuiInputLabel-root.Mui-focused': { color: primaryMain },
});

export const Contact: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const sx = inputSx(isDark, theme.palette.primary.main, theme.palette.primary.light);

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [toastOpen, setToastOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error'); setToastOpen(true); return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success'); setToastOpen(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 14 }, position: 'relative', overflow: 'hidden' }}>
      {/* BG shape decorations */}
      <Box sx={{
        position: 'absolute', top: '10%', right: '-5%',
        width: 400, height: 400, borderRadius: '50%',
        background: isDark
          ? 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', bottom: '5%', left: '-5%',
        width: 350, height: 350, borderRadius: '50%',
        background: isDark
          ? 'radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          index="08"
          eyebrow="Get In Touch"
          title="Contact Me"
          subtitle="Open to engineering roles, consulting, or ambitious collaborations. Let's build something exceptional."
        />

        <Grid container spacing={5} sx={{ alignItems: 'stretch' }}>
          {/* ── Left: info ── */}
          <Grid size={{ xs: 12, md: 5 }}>
            <ScrollReveal direction="left">
              <GlassCard hoverEffect={false} accentColor="primary" sx={{ height: '100%' }}>
                <CardContent sx={{ p: { xs: 3, md: 4.5 }, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.5, fontSize: { xs: '1.45rem', md: '1.7rem' }, lineHeight: 1.2 }}>
                    Let's build something{' '}
                    <Box component="span" sx={{
                      background: theme.palette.gradient?.primary,
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>
                      exceptional
                    </Box>{' '}together
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.85, fontSize: '0.95rem' }}>
                    I'm always open to exploring new engineering roles, consulting opportunities, or collaborating on innovative React Native & Full Stack projects.
                  </Typography>

                  {/* Contact detail items */}
                  <Stack spacing={3} sx={{ mb: 4 }}>
                    {[
                      { icon: <EmailIcon sx={{ fontSize: 20 }} />, grad: 'linear-gradient(135deg,#6366F1,#8B5CF6)', neon: 'rgba(99,102,241,0.4)', label: 'Email', value: profileInfo.email, href: `mailto:${profileInfo.email}` },
                      { icon: <LocationOnIcon sx={{ fontSize: 20 }} />, grad: 'linear-gradient(135deg,#10B981,#06B6D4)', neon: 'rgba(16,185,129,0.4)', label: 'Location', value: profileInfo.location, href: undefined },
                    ].map(item => (
                      <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                        <Box sx={{
                          width: 44, height: 44, borderRadius: '14px', flexShrink: 0,
                          background: item.grad,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: `0 6px 20px ${item.neon}`,
                          color: '#fff',
                          '&::after': {
                            content: '""', position: 'absolute', inset: 0, borderRadius: '14px',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%)',
                          },
                          position: 'relative',
                        }}>
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary', display: 'block', fontSize: '0.65rem', mb: 0.2 }}>
                            {item.label}
                          </Typography>
                          {item.href ? (
                            <Typography component="a" href={item.href} variant="body2" sx={{ fontWeight: 600, color: 'text.primary', textDecoration: 'none', transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>
                              {item.value}
                            </Typography>
                          ) : (
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>{item.value}</Typography>
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Stack>

                  {/* Social icons */}
                  <Box sx={{ mt: 'auto' }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary', display: 'block', mb: 2, fontSize: '0.68rem' }}>
                      Connect On
                    </Typography>
                    <Stack direction="row" spacing={1.5}>
                      {profileInfo.socialLinks.map(link => {
                        const meta = SOCIAL_META.find(s => s.platform === link.platform);
                        if (!meta) return null;
                        const { Icon } = meta;
                        return (
                          <motion.div key={link.platform} whileHover={{ y: -5, scale: 1.12 }} whileTap={{ scale: 0.9 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <IconButton
                              href={link.url} target="_blank" rel="noopener noreferrer"
                              aria-label={link.platform}
                              sx={{
                                width: 44, height: 44, borderRadius: '12px',
                                background: isDark ? meta.bg : `${meta.color}10`,
                                border: `1px solid ${meta.color}44`,
                                color: meta.color,
                                transition: 'all 0.25s',
                                '&:hover': {
                                  background: meta.bg,
                                  borderColor: meta.color,
                                  boxShadow: `0 8px 20px ${meta.color}44`,
                                },
                              }}
                            >
                              <Icon fontSize="small" />
                            </IconButton>
                          </motion.div>
                        );
                      })}
                    </Stack>
                  </Box>
                </CardContent>
              </GlassCard>
            </ScrollReveal>
          </Grid>

          {/* ── Right: form ── */}
          <Grid size={{ xs: 12, md: 7 }}>
            <ScrollReveal direction="right">
              <GlassCard hoverEffect={false} accentColor="primary" spotlightColor="rgba(99,102,241,0.06)" neonGlow>
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5, fontFamily: '"Outfit", sans-serif', fontSize: '1.35rem' }}>
                    Send Me a Message
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 4, fontSize: '0.88rem' }}>
                    I typically respond within 24 hours. ✉️
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2.5}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField required fullWidth label="Your Name" name="name" value={formData.name} onChange={handleChange} disabled={status === 'loading'} sx={sx} />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField required fullWidth label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} disabled={status === 'loading'} sx={sx} />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField fullWidth label="Subject" name="subject" value={formData.subject} onChange={handleChange} disabled={status === 'loading'} sx={sx} />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField required fullWidth multiline rows={5} label="Your Message" name="message" value={formData.message} onChange={handleChange} disabled={status === 'loading'} sx={sx} />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <motion.div whileHover={status !== 'loading' && status !== 'success' ? { scale: 1.01 } : {}} whileTap={status !== 'loading' && status !== 'success' ? { scale: 0.99 } : {}}>
                          <Button
                            type="submit" variant="contained" fullWidth size="large"
                            disabled={status === 'loading' || status === 'success'}
                            sx={{
                              py: 1.9, fontSize: '1rem', fontWeight: 700, borderRadius: '16px',
                              background: status === 'success'
                                ? 'linear-gradient(135deg,#10B981,#059669)'
                                : 'linear-gradient(135deg,#6366F1 0%,#8B5CF6 50%,#06B6D4 100%)',
                              backgroundSize: '200% 200%',
                              boxShadow: status === 'success' ? '0 8px 28px rgba(16,185,129,0.45)' : '0 8px 28px rgba(99,102,241,0.45)',
                              border: '1px solid rgba(255,255,255,0.15)',
                              transition: 'all 0.35s ease',
                              '&:not(:disabled)': {
                                animation: 'btnShift 4s ease infinite',
                                '@keyframes btnShift': { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
                              },
                              '&:hover:not(:disabled)': {
                                boxShadow: '0 12px 36px rgba(99,102,241,0.6)',
                                transform: 'translateY(-3px)',
                              },
                              '&.Mui-disabled': {
                                background: status === 'success' ? 'linear-gradient(135deg,#10B981,#059669)' : undefined,
                                color: status === 'success' ? '#fff' : undefined,
                                opacity: status === 'success' ? 1 : 0.55,
                              },
                            }}
                          >
                            <AnimatePresence mode="wait" initial={false}>
                              {status === 'loading' && (
                                <motion.div key="loading" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                  <CircularProgress size={18} sx={{ color: '#fff' }} /><span>Sending…</span>
                                </motion.div>
                              )}
                              {status === 'success' && (
                                <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                  <CheckCircleIcon sx={{ fontSize: '1.1rem' }} /><span>Message Sent!</span>
                                </motion.div>
                              )}
                              {(status === 'idle' || status === 'error') && (
                                <motion.div key="idle" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                  <SendIcon sx={{ fontSize: '1rem' }} /><span>Send Message</span>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </Button>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </GlassCard>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={toastOpen} autoHideDuration={4500} onClose={() => setToastOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setToastOpen(false)} severity={status === 'success' ? 'success' : 'error'} variant="filled"
          sx={{ borderRadius: '14px', fontWeight: 600, backdropFilter: 'blur(12px)' }}>
          {status === 'success' ? "Message sent! I'll respond within 24 hours." : 'Please fill in all required fields.'}
        </Alert>
      </Snackbar>
    </Box>
  );
};
