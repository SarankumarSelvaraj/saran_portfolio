export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ProfileInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  avatarUrl: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
}
