import { ProfileInfo } from '../entities/profile';
import { Experience } from '../entities/experience';
import { Project } from '../entities/project';
import { SkillCategory } from '../entities/skill';
import { Certification } from '../entities/certification';
import { Award } from '../entities/award';
import { EngineeringAchievement } from '../entities/achievement';

export const profileInfo: ProfileInfo = {
  name: 'Sarankumar S',
  role: 'Programmer Analyst | React Native Developer | MERN Stack Developer',
  location: 'Chennai, Tamil Nadu',
  email: 'sarankselvaraj@gmail.com',
  phone: '+91 9025055864',
  summary: 'Results-driven Programmer Analyst with 3+ years of experience at SRM Tech building scalable web and mobile applications. Specialized in React Native, React.js, TypeScript, MERN Stack, Redux Toolkit, RTK Query, AWS S3, Firebase Authentication, WebSockets, and Material UI.',
  avatarUrl: '',
  resumeUrl: '#',
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/sarankumar-selvaraj', icon: 'GitHub' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/sarankumar-selvaraj', icon: 'LinkedIn' },
    { platform: 'Email', url: 'mailto:sarankselvaraj@gmail.com', icon: 'Email' }
  ]
};

export const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Programmer Analyst',
    company: 'SRM Tech',
    location: 'Chennai, Tamil Nadu',
    startDate: 'June 2022',
    endDate: 'Present',
    description: 'Spearheaded frontend and mobile app development using React Native and React.js. Collaborated with cross-functional teams to architect clean, responsive, and performance-driven solutions for various enterprise domains.',
    highlights: [
      'SmartMeet Admin Portal: Streamlined organization-wide meeting controls and configuration management.',
      'SmartMeet User Portal: Built interactive web workspace for users to access transcriptions and summaries.',
      'SmartMeet Mobile Application: Handled real-time tracking, record controls, and offline meeting syncing.',
      'SmartMeet TDIP: Implemented automated device pairing, configuration setups, and health analytics.',
      'HealthMate Healthcare Ecosystem: Designed modular super app interface for multi-role workflows.'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'HealthMate',
    description: 'A multi-role healthcare super app empowering various stakeholders in the healthcare ecosystem. Implemented robust authorization flows, high-performance location tracking, and real-time state syncing.',
    category: 'Mobile Development',
    features: [
      'Doctor App: Appointment scheduling, patient charts, and e-prescription tools.',
      'Patient App: Real-time consult bookings, digital medical records, and tracking.',
      'Hospital App: Resource management, shift scheduling, and admin dashboards.',
      'Lab App: Test request processing, report generation, and status updates.',
      'Pharmacy App: Order management, medicine inventory logs, and dispatch tracking.',
      'Firebase OTP Authentication: Secure, reliable multi-tenant mobile login flow.',
      'AWS S3 Integration: Accelerated document storage pipeline for prescriptions and lab reports.',
      'Google Maps Integration: Accurate location pinning and doctor navigation overlays.',
      'Real-time Notifications: Enabled push-based critical alerts using WebSockets/FCM.'
    ],
    techStack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Firebase Auth', 'AWS S3', 'Google Maps API', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    id: 'proj2',
    title: 'SmartMeet',
    description: 'An AI-powered meeting intelligence platform designed to maximize corporate productivity by automating meeting summaries, action items, and providing insightful engagement analytics.',
    category: 'Web Application',
    features: [
      'Real-time Transcription: Instant live speech-to-text processing for meetings.',
      'AI Meeting Summaries: Automated contextual recap creation and topic tracking.',
      'Action Items: Direct detection and assignment of follow-up tasks to participants.',
      'WebSocket Updates: Instant sync of transcripts and speaker notifications across clients.',
      'Zoom Integration: Seamless calendar sync and quick-start meeting launchers.',
      'Google Meet Integration: Dedicated Chrome extension integration for transcript capturing.',
      'Analytics Dashboard: Visualized trends, speaker talking time ratios, and action item completion.'
    ],
    techStack: ['React.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'WebSockets', 'Recharts', 'Material UI', 'Node.js', 'MongoDB']
  },
  {
    id: 'proj3',
    title: 'SmartMeet TDIP',
    description: 'A dedicated hardware-software companion platform for SmartMeet, bridging classroom recording devices with cloud intelligence via QR-code pairing and live status streaming.',
    category: 'Mobile & IoT Systems',
    features: [
      'QR Device Pairing: Instant secure association of hardware recording hubs with user accounts.',
      'Classroom Recording: Custom integration with video/audio capture pipelines.',
      'WebSocket Communication: Real-time diagnostic telemetry, ping tests, and controls.',
      'Device Health Monitoring: Visual logs, network signal status, and space usage metrics.',
      'React Native Vision Camera: Frame-by-frame scanner optimization and low-latency rendering.'
    ],
    techStack: ['React Native', 'TypeScript', 'React Native Vision Camera', 'WebSockets', 'Redux Toolkit', 'Material UI']
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'Redux Toolkit', level: 88 },
      { name: 'RTK Query', level: 85 },
      { name: 'Material UI (MUI)', level: 88 }
    ]
  },
  {
    category: 'Mobile Development',
    skills: [
      { name: 'React Native', level: 92 },
      { name: 'Vision Camera API', level: 80 },
      { name: 'Navigation Architecture', level: 88 },
      { name: 'Offline Syncing', level: 85 }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 82 },
      { name: 'WebSockets (Socket.io)', level: 85 },
      { name: 'REST APIs', level: 90 }
    ]
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'SQL Basics', level: 70 }
    ]
  },
  {
    category: 'Cloud & Authentication',
    skills: [
      { name: 'AWS S3', level: 78 },
      { name: 'Firebase Authentication', level: 85 }
    ]
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Vite', level: 85 },
      { name: 'Postman', level: 85 },
      { name: 'Android Studio / Xcode', level: 80 }
    ]
  }
];

export const certifications: Certification[] = [
  {
    title: 'Claude 101',
    issuer: 'Anthropic',
    issueDate: '2024'
  },
  {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    issueDate: '2024'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    issueDate: '2022'
  },
  {
    title: 'Legacy JavaScript Algorithms and Data Structures',
    issuer: 'FreeCodeCamp',
    issueDate: '2022'
  }
];

export const awards: Award[] = [
  {
    title: 'Rising Star Award',
    organization: 'SRM Tech',
    date: '2023',
    description: 'Awarded for outstanding contribution, agility, and fast-paced learning within the mobile product development vertical.'
  },
  {
    title: 'Quality Gyan Quiz Q3 Winner',
    organization: 'SRM Tech',
    date: '2023',
    description: 'Recognized for excellent domain knowledge, software quality standards, and industry best practices.'
  }
];

export const engineeringAchievements: EngineeringAchievement[] = [
  {
    title: 'Unified Authentication System',
    description: 'Architected and implemented a secure multi-role auth flow with Firebase, covering five distinct stakeholder roles in the HealthMate ecosystem.',
    impact: 'Reduced login latency by 20% and centralized permissions administration.',
    iconName: 'Security'
  },
  {
    title: 'AWS S3 Document Pipeline',
    description: 'Designed a low-latency, secure document upload pipeline in React Native to store medical files and transcript summaries.',
    impact: 'Optimized memory management for large file transfers with chunked background upload support.',
    iconName: 'CloudUpload'
  },
  {
    title: 'Offline Resilience Architecture',
    description: 'Engineered automatic local caching and synchronization mechanism for meetings and health records using Redux Persist.',
    impact: 'Allowed 100% offline data entry with seamless backend sync upon network restoration.',
    iconName: 'OfflineBolt'
  },
  {
    title: 'Multi-language Support',
    description: 'Integrated local language translations inside the mobile and web portals, allowing real-time toggle between multiple regions.',
    impact: 'Improved accessibility and local user retention metrics.',
    iconName: 'Language'
  },
  {
    title: 'PDF Generation System',
    description: 'Developed a client-side layout compiler for compiling meeting transcripts, summaries, and patient reports directly into PDF documents.',
    impact: 'Eliminated server-side render costs and enabled instant downloads.',
    iconName: 'PictureAsPdf'
  },
  {
    title: 'Reusable Component Library',
    description: 'Built a customized, design-system-compliant material component set used across three internal products.',
    impact: 'Saved approximately 40+ developer-hours per new sub-feature release.',
    iconName: 'Widgets'
  },
  {
    title: 'Navigation Architecture',
    description: 'Refactored React Navigation setup to implement deep-linking and dynamic stack injection based on the authenticated user role.',
    impact: 'Improved routing performance and completely prevented unauthorized routing leaks.',
    iconName: 'Navigation'
  }
];
