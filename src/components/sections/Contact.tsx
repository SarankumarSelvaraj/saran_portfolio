import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, CardContent, Stack, IconButton, Alert, Snackbar, useTheme } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { profileInfo } from '../../configs/portfolioData';
import { GlassCard } from '../common/GlassCard';
import { ScrollReveal } from '../common/ScrollReveal';

export const Contact: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [toastOpen, setToastOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setToastOpen(true);
      return;
    }

    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setToastOpen(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <GitHubIcon />;
      case 'LinkedIn':
        return <LinkedInIcon />;
      case 'Email':
        return <EmailIcon />;
      default:
        return null;
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <ScrollReveal direction="up">
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'primary.main',
                mb: 1,
              }}
            >
              Get In Touch
            </Typography>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontFamily: '"Outfit", sans-serif' }}>
              Contact Me
            </Typography>
          </ScrollReveal>
        </Box>

        <Grid container spacing={5}>
          {/* Contact Information Column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <ScrollReveal direction="left">
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
                Let's discuss your next project!
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, lineHeight: 1.7 }}>
                I am always open to exploring new engineering roles, consulting opportunities, or collaborating on innovative React Native & Full Stack projects. Drop me a line, and let's build something exceptional together.
              </Typography>

              {/* Info Details Stack */}
              <Stack spacing={4} sx={{ mb: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: '12px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      color: 'primary.main',
                      display: 'flex',
                    }}
                  >
                    <EmailIcon sx={{ fontSize: 26 }} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', color: 'text.secondary', display: 'block' }}>
                      Email Me
                    </Typography>
                    <Typography
                      variant="body1"
                      component="a"
                      href={`mailto:${profileInfo.email}`}
                      sx={{ fontWeight: 600, color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                    >
                      {profileInfo.email}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: '12px',
                      background: 'rgba(20, 184, 166, 0.1)',
                      color: 'secondary.main',
                      display: 'flex',
                    }}
                  >
                    <LocationOnIcon sx={{ fontSize: 26 }} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', color: 'text.secondary', display: 'block' }}>
                      Location
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {profileInfo.location}
                    </Typography>
                  </Box>
                </Box>
              </Stack>

              {/* Social links box */}
              <Typography variant="subtitle2" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', mb: 2 }}>
                Connect on Social Networks:
              </Typography>
              <Stack direction="row" spacing={2}>
                {profileInfo.socialLinks.map((link) => (
                  <IconButton
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: theme.palette.text.secondary,
                      border: `1px solid ${theme.palette.divider}`,
                      transition: 'all 0.3s',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        borderColor: theme.palette.primary.main,
                        transform: 'translateY(-3px)',
                        background: theme.palette.mode === 'dark' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(79, 70, 229, 0.05)',
                      },
                    }}
                    aria-label={link.platform}
                  >
                    {getSocialIcon(link.platform)}
                  </IconButton>
                ))}
              </Stack>
            </ScrollReveal>
          </Grid>

          {/* Contact Form Column */}
          <Grid size={{ xs: 12, md: 7 }}>
            <ScrollReveal direction="right">
              <GlassCard hoverEffect={false}>
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, fontFamily: '"Outfit", sans-serif' }}>
                    Send Me a Message
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          required
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '12px',
                            }
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          required
                          fullWidth
                          label="Your Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '12px',
                            }
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '12px',
                            }
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          required
                          fullWidth
                          multiline
                          rows={5}
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '12px',
                            }
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          fullWidth
                          disabled={status === 'loading'}
                          endIcon={<SendIcon />}
                          sx={{
                            py: 1.8,
                            fontSize: '1rem',
                            fontWeight: 700,
                          }}
                        >
                          {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </GlassCard>
            </ScrollReveal>
          </Grid>
        </Grid>

        {/* Status Toast Feedbacks */}
        <Snackbar
          open={toastOpen}
          autoHideDuration={6000}
          onClose={() => setToastOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={() => setToastOpen(false)}
            severity={status === 'success' ? 'success' : 'error'}
            variant="filled"
            sx={{ width: '100%', borderRadius: '12px' }}
          >
            {status === 'success'
              ? 'Thank you! Your message was sent successfully. (Simulation)'
              : 'Please fill in all the required fields.'}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};
