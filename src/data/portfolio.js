export const PROFILE = {
  name: 'Sameer Yasir',
  title: 'Full-Stack Software Engineer',
  phone: '03329927360',
  email: 'sameeryasir02@gmail.com',
  cvPath: '/sameeryasir.cv.pdf',
  photoPath: '/sameer-yasir.png',
  valueProp: 'Full-Stack Software Engineer | React • Next.js • NestJS • PostgreSQL',
  headline: 'Building Scalable Web Applications',
  lede:
    'Full-Stack Software Engineer specializing in React, Next.js, NestJS, and PostgreSQL. I design clean application architecture, build reliable APIs, and ship maintainable product features — with practical Playwright testing for critical flows.',
  techLine: ['React', 'Next.js', 'NestJS', 'PostgreSQL', 'Playwright'],
  about:
    'I build production web applications with a focus on scalable architecture, clean maintainable code, and solid API and database design. My work spans SaaS products, third-party integrations, automation, and performance-minded delivery across the stack.',
  contactHeadline: 'Let’s work together.',
  contactText:
    'Open to software engineering roles and product development opportunities.',
}

export const APPROACH = [
  {
    title: 'Scalable architecture',
    detail:
      'Structure frontend and backend so features stay clear as products grow — multi-tenant SaaS patterns, separation of concerns, and durable data models.',
  },
  {
    title: 'Maintainable code',
    detail:
      'Prefer readable, consistent patterns over clever shortcuts so teams can extend and debug work with confidence.',
  },
  {
    title: 'Performance',
    detail:
      'Watch loading, query paths, and UI responsiveness so production applications stay fast for real users.',
  },
  {
    title: 'Testing and reliability',
    detail:
      'Use Playwright to cover critical user flows and catch regressions early as features ship.',
  },
]

export const EDUCATION = {
  degree: 'Bachelor of Computer Science',
  school: 'International Islamic University, Islamabad',
  year: '2024',
  highlights: [
    'Hands-on work in web development, databases, and distributed systems.',
  ],
}

export const SKILL_GROUPS = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Backend',
    items: ['NestJS', 'Node.js', 'REST APIs'],
  },
  {
    label: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    label: 'Testing',
    items: ['Playwright'],
    note: 'Practical automated testing for critical product flows.',
  },
  {
    label: 'Integrations',
    items: ['Meta Marketing API', 'Google Ads API', 'Stripe', 'Twilio'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Docker', 'AWS'],
  },
]

export const EXPERIENCE = [
  {
    role: 'Junior Web Developer',
    company: 'CodersLodge',
    location: 'Islamabad / Rawalpindi',
    period: 'Jul 2025 — Present',
    summary:
      'Building full-stack SaaS and mobile products with focus on integrations, automation, and production delivery.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'React Native', 'Stripe', 'Meta Ads', 'Google Ads'],
    projects: [
      {
        name: 'Dealioo',
        summary:
          'Shipped multi-tenant marketing automation SaaS with ads integrations, Stripe payments, QR redemption, and AI-assisted campaign builders.',
      },
      {
        name: 'Eagle Eye Mobile Application',
        summary:
          'Implemented contractor mobile features and real-time chat for field project coordination.',
      },
    ],
  },
  {
    role: 'Junior Web Developer',
    company: 'Axie Consulting',
    location: 'Islamabad / Rawalpindi',
    period: 'Jan 2025 — Jul 2025',
    summary:
      'Built responsive product interfaces and API-backed workflows for publishing and healthcare platforms.',
    stack: ['React', 'Next.js', 'Express.js', 'MongoDB', 'SQL'],
    projects: [
      {
        name: 'Content Publishing Platform',
        summary:
          'Built scheduling and publishing UIs with API integrations across CMS platforms.',
      },
      {
        name: 'Child Medical Center Application',
        summary:
          'Designed UI flows and backend API integration for child health monitoring on Next.js and SQL.',
      },
    ],
  },
]

export const PROJECTS = [
  {
    id: 'dealioo',
    featured: true,
    name: 'Dealioo',
    company: 'CodersLodge',
    role: 'Full-stack engineer',
    tagline: 'Marketing Automation & Offer-Commerce SaaS',
    shortDescription:
      'Multi-tenant SaaS for sales funnels, digital offers, payments, ads, and automated customer engagement.',
    contribution:
      'Built onboarding, campaign and funnel flows, ads/payment integrations, analytics, and AI-assisted campaign tooling.',
    highlights: [
      'Campaign Builder',
      'Meta Ads integration',
      'Google Ads integration',
      'Stripe Connect',
      'Twilio messaging',
      'Automation workflows',
      'Analytics',
      'AI-assisted functionality',
    ],
    about:
      'Dealioo is a multi-tenant SaaS for businesses that need sales funnels, digital offers, payments, customer engagement automation, and advertising campaigns in one product.',
    problem:
      'Sales and ops teams needed one system for campaigns, offers, payments, and growth — plus tooling to assemble campaigns and funnels faster without living only inside Ads Manager.',
    approach:
      'Contributed across business onboarding, analytics dashboards, Stripe payments, Meta and Google Ads, QR redemption, messaging automation, and AI-assisted campaign and funnel builders.',
    outcome:
      'A production SaaS where businesses can create a profile, launch offers, connect ads and payments, redeem via QR, and track campaign performance.',
    impact:
      'Shipped a live multi-tenant SaaS used for campaigns, payments, ads, and offer redemption.',
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Stripe',
      'Meta API',
      'Google Ads API',
      'Twilio',
    ],
    href: '/projects/dealioo',
    liveUrl: 'https://dealioo.io/',
    caseStudy: {
      overview:
        'Dealioo helps businesses run offer-commerce and marketing automation from one platform — funnels, campaigns, payments, messaging, and analytics.',
      role:
        'Full-stack engineer contributing to product features, third-party integrations, automation flows, and analytics surfaces used by businesses and admins.',
      architecture: [
        'Next.js application for business and admin product surfaces',
        'NestJS APIs for multi-tenant business, campaign, and integration logic',
        'PostgreSQL for durable transactional and analytics data',
        'External integrations for ads, payments, and messaging',
      ],
      contributions: [
        {
          title: 'Campaign Builder',
          detail:
            'Product flows for creating and managing campaigns and digital offers inside a multi-tenant SaaS.',
        },
        {
          title: 'Meta Ads Integration',
          detail:
            'Connected Meta advertising workflows so businesses can launch and manage campaign activity from Dealioo.',
        },
        {
          title: 'Google Ads Integration',
          detail:
            'Integrated Google Ads so marketing activity and campaign operations live alongside offers and funnels.',
        },
        {
          title: 'Stripe Connect',
          detail:
            'Payment flows for offer commerce, including checkout and related transaction handling.',
        },
        {
          title: 'Automation Builder',
          detail:
            'Automation for customer engagement across funnels, offers, and follow-up workflows.',
        },
        {
          title: 'Twilio Messaging',
          detail:
            'Messaging support for customer engagement automation across SMS-oriented outreach.',
        },
        {
          title: 'AI Funnel Editor',
          detail:
            'AI-assisted campaign and funnel building to reduce manual setup for marketing workflows.',
        },
      ],
    },
  },
]

export const DEALIOO = PROJECTS.find((project) => project.id === 'dealioo')

export const NAV_LINKS = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]
