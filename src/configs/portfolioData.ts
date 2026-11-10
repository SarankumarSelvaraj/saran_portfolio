import { ProfileInfo } from '../entities/profile';
import { Experience } from '../entities/experience';
import { Project } from '../entities/project';
import { SkillCategory } from '../entities/skill';
import { Certification } from '../entities/certification';
import { Award } from '../entities/award';
import { EngineeringAchievement } from '../entities/achievement';

export const profileInfo: ProfileInfo = {
  name: 'Sarankumar S',
  role: 'Software Engineer | React Native | MERN Stack | Full-Stack Developer',
  location: 'Chennai, Tamil Nadu',
  email: 'sarankselvaraj@gmail.com',
  phone: '+91 9025055864',
  summary:
    'Results-driven Full-Stack and Mobile Developer with 3+ years of experience at SRM Tech designing and delivering production-grade web and mobile applications. Specializes in the MERN stack with deep expertise in React Native cross-platform mobile development, TypeScript, and RESTful API architecture. Architected a 5-application healthcare super-app ecosystem (HealthMate) and an AI-powered meeting intelligence platform (SmartMeet) with real-time WebSocket transcription, IoT device integration, and AWS S3 pipelines.',
  avatarUrl: '',
  resumeUrl: '/Sarankumar_SoftwareEngineer_Resume.pdf',
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/SarankumarSelvaraj', icon: 'GitHub' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/sarankumar-s-649979219', icon: 'LinkedIn' },
    { platform: 'Email', url: 'mailto:sarankselvaraj@gmail.com', icon: 'Email' },
  ],
};

export const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Software Engineer',
    company: 'SRM Tech',
    location: 'Chennai, Tamil Nadu',
    startDate: 'June 2023',
    endDate: 'Present',
    description:
      'Full-stack engineer delivering web, mobile and backend products across SmartMeet (AI meeting intelligence), TDIP (smart classrooms), HealthMate (healthcare) and SRM Global (chatbot builder). Works across the entire stack — React.js, React Native, Node.js, MongoDB — in an Agile team environment.',
    highlights: [
      'SmartMeet Admin & SuperAdmin Portal: Architected a role-based LayoutProvider system rendering four UI shells across 20+ screens; built SuperAdmin analytics dashboard with Recharts, four parallel RTK Query calls, and reactive date-range filters.',
      'SmartMeet User Portal: Developed an instant-meeting launcher streaming speaker-labelled live transcripts over WebSockets; built an AWS S3 upload flow with WebSocket task-status events automating transcription from upload to review.',
      'SmartMeet Mobile App: Architected a React Native app for three user roles; built 15+ reusable components; engineered FCM push notifications with Redux state and WebSocket-driven unread badge counts.',
      'SmartMeet TDIP: Built a React Native 0.84 app with QR-based IoT device pairing via react-native-vision-camera; engineered RecordingPersistenceService for crash-safe recovery; created a typed library of 70+ custom SVG icon components.',
      'HealthMate Healthcare Super-App: Built 50+ shared UI components reused across 5 apps; implemented dual Firebase Phone and Email OTP authentication; developed a prescription builder generating branded PDFs uploaded to AWS S3.',
      'SmartMeet TIPS Middleware: Built a full-stack web platform — React.js admin dashboard with live pipeline monitoring and override controls, backed by a Node.js/Express service automating Google Meet recording ingestion through a 14-status, 4-phase pipeline with AI voice-identification and TIPS schedule API matching.',
      'SRM Global Chatbot Builder: Developed a visual no-code chatbot builder on a drag-and-drop React Flow canvas with debounced auto-save, localStorage draft fallback, and a live in-browser ChatPreview.',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'HealthMate',
    description:
      'A five-app healthcare super-app ecosystem (Doctor, Patient, Hospital, Lab, Pharmacy) covering booking, prescriptions, diagnostics, and medicine fulfilment. Built with 50+ shared UI components reused across all five apps, cutting per-feature development time by ~60%.',
    category: 'Mobile Development',
    features: [
      'Doctor App: Appointment scheduling, patient charts, and e-prescription tools with PDF generation.',
      'Patient App: Real-time consult bookings, digital medical records, and location tracking.',
      'Hospital App: Resource management, shift scheduling, and admin dashboards.',
      'Lab App: Test request processing, report generation, and status updates.',
      'Pharmacy App: Order management, medicine inventory, and dispatch tracking.',
      'Firebase OTP Auth: Dual Phone and Email OTP with Firebase ID tokens exchanged for backend JWTs via RTK Query interceptor.',
      'AWS S3 Pipeline: Centralised document upload for prescriptions (PDF), lab reports, and profile photos.',
      'Google Maps Integration: Places Autocomplete with useMemo/useCallback optimisation to avoid re-renders.',
      'FCM Push Notifications: Meeting and action-item events with Redux state and unread badge counts.',
    ],
    techStack: [
      'React Native',
      'TypeScript',
      'Redux Toolkit',
      'RTK Query',
      'Firebase Auth',
      'AWS S3',
      'FCM',
      'Google Maps API',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
  },
  {
    id: 'proj2',
    title: 'SmartMeet',
    description:
      'An AI-powered meeting intelligence platform with real-time WebSocket transcription, IoT device integration, and AWS S3 pipelines. Covers Admin, SuperAdmin, and User portals on web plus a cross-platform mobile app for the full meeting lifecycle.',
    category: 'Web & Mobile Application',
    features: [
      'Role-Based Layout System: LayoutProvider renders four UI shells across 20+ screens, eliminating duplicated layout code.',
      'SuperAdmin Analytics: Recharts dashboard with four parallel RTK Query calls and reactive date-range filters for KPIs.',
      'Live Transcription: Instant-meeting launcher streams speaker-labelled transcripts over WebSockets as they arrive.',
      'AWS S3 Upload Flow: Pre-recorded upload with progress indicators and WebSocket task-status events automating transcription.',
      'Silent JWT Refresh: RTK Query layer handles 401 → /api/auth/refreshToken → retry, keeping sessions alive without forced re-login.',
      'Org-Chart Editor: CSV/Excel hierarchy import with dirty-state guards.',
      'IoT Device Manager: Health filters and live metadata — battery, WiFi RSSI, firmware version, last 10 logs.',
      'Natural-Language Search: Advanced Search with RTK Query across meetings, filterable by status, date, platform and participants.',
      'Mobile App: 15+ reusable components, FCM push notifications, semantic search over historical transcripts.',
    ],
    techStack: [
      'React.js',
      'React Native',
      'TypeScript',
      'Redux Toolkit',
      'RTK Query',
      'WebSockets',
      'Recharts',
      'Material UI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'AWS S3',
    ],
  },
  {
    id: 'proj3',
    title: 'SmartMeet TDIP',
    description:
      'Faculty app for SRM University\'s TDIP smart-classroom platform, bridging IoT recording devices with cloud intelligence via QR-code pairing and live WebSocket streaming. Built for both Android and iOS with React Native 0.84.',
    category: 'Mobile & IoT Systems',
    features: [
      'QR Device Pairing: react-native-vision-camera scanner linking hardware recording hubs via /auth/onAuthDevice endpoint.',
      'Dual-Token Auth: NxtAgent login + SmartMeet device token persisted with redux-persist and AsyncStorage.',
      'Crash-Safe Recording: RecordingPersistenceService on react-native-fs saves in-progress recording state for crash recovery.',
      'ContainerProvider: Screen wrapper (safe area, status bar, header, global loader, NoInternet modal) used across 20+ screens.',
      'SVG Icon Library: Typed library of 70+ custom SVG icon components replacing icon fonts for sharper rendering.',
      'WebSocket Diagnostics: Real-time telemetry, network signal status, and space usage metrics.',
    ],
    techStack: [
      'React Native 0.84',
      'TypeScript',
      'Redux Toolkit',
      'RTK Query',
      'redux-persist',
      'react-native-vision-camera',
      'Lottie',
      'WebSockets',
      'AsyncStorage',
    ],
  },
  {
    id: 'proj4',
    title: 'SRM Global Chatbot Builder',
    description:
      'A visual no-code platform for designing, previewing, and publishing chatbot conversation flows on a drag-and-drop React Flow canvas, backed by an Express/MongoDB REST API with graph-connectivity validation.',
    category: 'Web Application',
    features: [
      'React Flow Canvas: Node connections, edge reconnection, inserting nodes mid-edge, minimap, and zoom controls.',
      'Component-Based Node Editor: Property panels for text, button, image, link, carousel, redirect, and workflow components.',
      'Auto-Save: Debounced 1-second save, flush-on-navigate, and localStorage draft fallback so no work is lost.',
      'Publish Validation: Blocks isolated nodes — only fully connected flows go live.',
      'Live ChatPreview: In-browser bot simulation from any start node with active-node canvas highlighting.',
      'Bot Setup Wizard: 2-step wizard with S3 logo upload.',
      'REST API: Single versioned Flow resource with Joi schema validation and graph-connectivity checks.',
    ],
    techStack: [
      'React.js',
      'TypeScript',
      'Vite',
      'Material UI',
      'RTK Query',
      'React Flow',
      'Formik',
      'Yup',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Joi',
      'AWS S3',
    ],
  },
  {
    id: 'proj5',
    title: 'SmartMeet TIPS Middleware',
    description:
      'Full-stack web platform that automates ingestion, speaker identification, and TIPS upload of Google Meet session recordings through a 14-status, 4-phase pipeline — featuring a React.js admin dashboard for live monitoring and manual override controls backed by a Node.js/Express microservice.',
    category: 'Web Application',
    features: [
      'React.js Admin Dashboard: Live pipeline monitor with per-recording status tracking, manual override controls, and real-time WebSocket event feed.',
      'Automated Pipeline: Per-minute cron job polls Google Drive, converts MP4 to MP3 with ffmpeg, runs 14-status workflow.',
      'AI Voice Identification: Recognises speakers, maps to faculty, matches timetable via TIPS schedule API.',
      'Admin Override Tools: Manual faculty mapping, schedule retry, session splitting, and bulk retry with filters.',
      'Real-Time Status: Every status transition persists a MongoDB notification and pushes a WebSocket event to the admin.',
      'Security: Passport JWT auth, Google service-account impersonation for Drive access, Redis GET-route caching.',
    ],
    techStack: [
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'RTK Query',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redis',
      'WebSockets',
      'node-cron',
      'Passport JWT',
      'ffmpeg',
      'Google Drive API',
    ],
  },
];

export const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'TypeScript', level: 88 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Redux Toolkit', level: 90 },
      { name: 'RTK Query', level: 88 },
      { name: 'Material UI (MUI)', level: 88 },
      { name: 'Vite', level: 85 },
      { name: 'Recharts', level: 82 },
      { name: 'React Flow', level: 80 },
      { name: 'HTML5 / CSS3', level: 88 },
    ],
  },
  {
    category: 'Mobile Development',
    skills: [
      { name: 'React Native', level: 92 },
      { name: 'react-native-vision-camera', level: 82 },
      { name: 'redux-persist', level: 85 },
      { name: 'AsyncStorage', level: 85 },
      { name: 'Lottie Animations', level: 80 },
      { name: 'Android Studio / Xcode', level: 80 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 83 },
      { name: 'REST APIs', level: 90 },
      { name: 'WebSockets', level: 86 },
      { name: 'Microservices Architecture', level: 80 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'Mongoose ODM', level: 82 },
      { name: 'Redis', level: 72 },
    ],
  },
  {
    category: 'Cloud & Auth',
    skills: [
      { name: 'AWS S3 (@aws-sdk/client-s3)', level: 80 },
      { name: 'Firebase Auth (OTP)', level: 85 },
      { name: 'FCM Push Notifications', level: 82 },
      { name: 'JWT / RBAC', level: 85 },
      { name: 'Google Drive API', level: 75 },
    ],
  },
  {
    category: 'Tools & Methodologies',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'Postman', level: 85 },
      { name: 'i18next (i18n)', level: 80 },
      { name: 'Agile / Scrum', level: 85 },
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: 'Front-End Development Libraries',
    issuer: 'freeCodeCamp',
    issueDate: 'Oct 21, 2026',
    credentialUrl:
      'https://freecodecamp.org/certification/fccbd3c498e-ca19-4fc2-8e1e-f1fe81b418bf/front-end-development-libraries-v9',
  },
  {
    title: 'Back-End Development and APIs',
    issuer: 'freeCodeCamp',
    issueDate: 'Oct 21, 2026',
    credentialUrl:
      'https://freecodecamp.org/certification/fccbd3c498e-ca19-4fc2-8e1e-f1fe81b418bf/back-end-development-and-apis-v9',
  },
  {
    title: 'Linux Unhatched',
    issuer: 'Cisco Networking Academy',
    issueDate: 'Jul 21, 2026',
    credentialUrl: 'https://www.netacad.com',
  },
  {
    title: 'Introduction to Agent Skills',
    issuer: 'Anthropic',
    issueDate: '2025',
    credentialUrl: 'https://www.anthropic.com',
  },
  {
    title: 'Claude 101',
    issuer: 'Anthropic',
    issueDate: '2025',
    credentialUrl: 'https://www.anthropic.com',
  },
  {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    issueDate: '2025',
    credentialUrl: 'https://www.anthropic.com',
  },
  {
    title: 'Legacy JavaScript Algorithms and Data Structures V7',
    issuer: 'freeCodeCamp',
    issueDate: 'Dec 19, 2022',
    credentialUrl:
      'https://freecodecamp.org/certification/fccba61327a-3a52-45d7-89e7-a1b1da8c098e/javascript-algorithms-and-data-structures',
  },
  {
    title: 'Legacy Responsive Web Design V8',
    issuer: 'freeCodeCamp',
    issueDate: 'Sep 26, 2021',
    credentialUrl:
      'https://freecodecamp.org/certification/fccbd3c498e-ca19-4fc2-8e1e-f1fe81b418bf/responsive-web-design',
  },
];

export const awards: Award[] = [
  {
    title: 'Rising Star Award',
    organization: 'SRM Tech Accolades Recognition Programme',
    date: '2024',
    description:
      'Awarded for outstanding contribution, fast-paced learning, and consistent delivery of production-grade features within the mobile and web product verticals at SRM Tech.',
  },
  {
    title: 'Quality Gyan Quiz Q3 Winner',
    organization: 'SRM Tech',
    date: '2024',
    description:
      'Recognised for excellence in quality awareness, demonstrating strong knowledge of software quality standards and industry best practices.',
  },
];

export const engineeringAchievements: EngineeringAchievement[] = [
  {
    title: 'Unified Authentication System',
    description:
      'Firebase Phone + Email OTP across all apps with role-based JWT sessions and RTK Query base-query interceptors for automatic 401 token refresh and logout.',
    impact: 'Eliminated per-app auth duplication; single interceptor pattern applied across 6 web and mobile products.',
    iconName: 'Security',
  },
  {
    title: 'AWS S3 Upload Pipeline',
    description:
      'Centralised document upload client handling prescriptions (PDF), lab reports, profile photos, and meeting recordings across all applications using @aws-sdk/client-s3.',
    impact: 'Standardised upload logic into one reusable utility, reducing per-feature upload code to near zero.',
    iconName: 'CloudUpload',
  },
  {
    title: 'Offline Resilience Architecture',
    description:
      'Network detection blocks API calls and displays an offline modal; redux-persist maintains authenticated sessions and pending state across connectivity loss.',
    impact: 'Users retain full app state across network drops with seamless backend sync on reconnection.',
    iconName: 'OfflineBolt',
  },
  {
    title: 'Reusable Component Library',
    description:
      '50+ shared UI components (inputs, modals, bottom sheets, shimmer loaders, PDF/DOCX/image viewers, map pickers) reused across all 5 HealthMate apps and SmartMeet.',
    impact: 'Cut per-feature development time by approximately 60%.',
    iconName: 'Widgets',
  },
  {
    title: 'Silent JWT Refresh',
    description:
      'RTK Query base-query interceptor handles 401 responses by calling /api/auth/refreshToken, retrying the original request, and redirecting to /login only on refresh failure.',
    impact: 'Zero forced re-logins during active sessions across all platforms.',
    iconName: 'Lock',
  },
  {
    title: 'Performance Optimisation',
    description:
      'useMemo, useCallback, lazy RTK Query hooks, and shimmer placeholders ensure zero unnecessary re-renders on filter changes across appointment and analytics screens.',
    impact: 'Smooth 60fps interactions on filter-heavy screens even on mid-range Android devices.',
    iconName: 'Speed',
  },
  {
    title: 'Multi-Language Support',
    description:
      'English and Tamil i18n localisation across all screens using i18next, with real-time language toggle persisted to device storage.',
    impact: 'Improved accessibility and adoption for Tamil-speaking user base.',
    iconName: 'Language',
  },
  {
    title: 'PDF Generation System',
    description:
      'Prescription builder generates branded PDFs with react-native-html-to-pdf and uploads them directly to AWS S3, removing any server-side render step.',
    impact: 'Instant prescription downloads — eliminated server processing latency entirely.',
    iconName: 'PictureAsPdf',
  },
];
