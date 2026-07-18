// Single source of truth for site copy. Product-owner positioning:
// business problem first, AI where it earns its place, measurable efficiency.

export const profile = {
  name: 'Aman Banthia',
  role: 'AI Product Owner',
  location: 'New Delhi, India',
  email: 'amanbanthia@gmail.com',
  github: 'https://github.com/banthia14aman',
  linkedin: 'https://www.linkedin.com/in/banthia-aman/',
  site: 'https://banthia14aman.github.io',
  resume: '/resume.pdf',
  status: 'Open to product roles',
};

export const hero = {
  eyebrow: ['Product', 'AI Solutions', 'Lean + Kaizen'],
  lead: 'I design AI solutions.',
  sub: "Product owner, not just a builder. I start with the business problem, find where AI actually earns its place, and ship solutions that make people's work measurably more efficient.",
};

// The differentiator: how I think, not what I code.
export const principles = [
  {
    n: '01',
    title: 'Problem before solution',
    body: 'I do not start with a model or a framework. I start with what is slow, costly, or broken in how the work actually gets done, then work backwards to the smallest thing that fixes it.',
  },
  {
    n: '02',
    title: 'AI where it earns its place',
    body: 'AI is a tool, not the goal. I add it where it removes real friction for a real user, and leave it out where a simpler mechanism does the job better.',
  },
  {
    n: '03',
    title: 'Kaizen: small wins that compound',
    body: 'Efficiency is a habit, not a launch. Ship, watch how people actually adopt it, cut the next bit of waste. Lean thinking applied to product, not just factories.',
  },
  {
    n: '04',
    title: 'End-to-end ownership',
    body: 'Research, design, build, launch, and measure. I can write the code myself, so nothing is lost in translation, but the code is the easy part. The work is understanding the problem.',
  },
];

// Case studies framed as Problem -> Solution -> Outcome, not tech dumps.
export type CaseStudy = {
  year: string;
  name: string;
  href: string;
  tags: string[];
  problem: string;
  solution: string;
  outcome: string;
  flow?: string; // key of a flow diagram
  shot?: string; // path to a real screenshot in /public/shots
  shotGlitch?: [string, string]; // two hover-glitch colors sampled from the screenshot
};

export const caseStudies: CaseStudy[] = [
  {
    year: '2026',
    name: 'SampoornaCRM',
    href: 'https://salescrm-eight-zeta.vercel.app/',
    tags: ['AI Voice CRM', 'Real Estate', 'Next.js'],
    problem: 'Real-estate agents live on the phone and refuse to do data entry, so leads rot in notebooks and follow-ups quietly slip.',
    solution: 'A voice-first CRM: the agent speaks one note in their own language and AI logs the call, updates the lead, and books the follow-up. Click-to-call, WhatsApp, listings and automation sit underneath.',
    outcome: 'The data-entry step disappears. The CRM fills itself from how agents already work, instead of asking them to change.',
    flow: 'sampoorna',
    shot: '/shots/sampoorna.webp',
    shotGlitch: ['#4361ff', '#a855f7'], // its blue→violet "by voice" gradient
  },
  {
    year: '2026',
    name: 'Trinetra',
    href: 'https://banthia14aman.github.io/ET-Hackathon/',
    tags: ['Decision Systems', 'Deterministic AI', 'TypeScript'],
    problem: 'When the Strait of Hormuz closed, India took 6 days to reroute crude. Decisions that big need AI speed, but a language model on its own is neither trustworthy nor auditable.',
    solution: 'Trinetra replays the crisis and re-plans in about 4 minutes: the LLM only proposes options, a zero-LLM critic and deterministic arbiter decide, and every decision lands in a hash-chained, replayable audit trail. Runs fully offline.',
    outcome: '6 days of desk work compressed to minutes, with audit-grade trust: byte-identical replays and full provenance on every number.',
    flow: 'trinetra',
    shot: '/shots/trinetra.webp',
    shotGlitch: ['#f2a63b', '#3fd0e0'], // amber terminal + cyan supply-route lines
  },
  {
    year: '2026',
    name: 'CaseCompass',
    href: 'https://casecompass.in/',
    tags: ['AI Simulator', 'EdTech', 'Personalization'],
    problem: 'MBA case prep is one-size-fits-all, so students burn hours drilling what they already know and skip the gaps that actually cost them offers.',
    solution: 'An AI interviewer runs realistic simulations; engagement telemetry and percentile clustering find each student’s real weak spots and reshape the plan around them.',
    outcome: 'Prep time gets spent where it moves the needle, personalized at scale instead of by a coach’s guess.',
    flow: 'casecompass',
    shot: '/shots/casecompass.webp',
    shotGlitch: ['#34d399', '#22b8cf'], // its emerald "LIVE" green + teal
  },
  {
    year: '2026',
    name: 'Navkar Real Estate Academy',
    href: 'https://navkar-academy.pages.dev/',
    tags: ['LMS', 'Three Portals', 'Zero-framework'],
    problem: 'A RERA-first academy needed to run students, teachers, and admins, but had no engineering team to maintain a heavy platform.',
    solution: 'A deliberately lean LMS: marketing site plus student, teacher, and admin portals, with all copy and course data in plain editable files. No framework, no build step.',
    outcome: 'A full academy platform that a non-technical team can actually run and edit day to day.',
    shot: '/shots/navkar-academy.webp',
    shotGlitch: ['#f5b301', '#3b6fe0'], // its gold CTA + navy/blue
  },
  {
    year: '2026',
    name: 'Navkar Crest',
    href: 'https://navkar-crest.pages.dev/',
    tags: ['Astro', 'GSAP', 'Real Estate'],
    problem: 'A township developer needed a launch presence for Anandam World City that felt as premium as a 180-acre integrated project.',
    solution: 'A fast static Astro site with a considered GSAP + Lenis motion system, structured so the client can confirm copy without touching code.',
    outcome: 'A credible digital front door for the project, quick to load and easy to keep current.',
    shot: '/shots/navkar-crest.webp',
    shotGlitch: ['#c9a24b', '#3f7d5f'], // its gold linework + dark green
  },
  {
    year: '2026',
    name: 'Jain Earthmovers',
    href: 'https://realitycrmraipur.github.io/Jain-Earthmovers/#/',
    tags: ['React', 'WebGL 3D', 'Industrial'],
    problem: 'A heavy-equipment business needed enquiries, and a generic template would have said nothing about what they actually do.',
    solution: 'A dark-industrial React site with a real WebGL excavator in the hero that articulates and digs as you scroll, and a single content file so every spec and number stays editable.',
    outcome: 'A site that both converts and demonstrates capability, without locking the client out of their own content.',
    shot: '/shots/jain.webp',
    shotGlitch: ['#e0a422', '#ff7a3d'], // its amber machinery + burnt orange dust
  },
  {
    year: '2025',
    name: 'Haptic App family',
    href: 'https://github.com/banthia14aman/HapticVideoApp',
    tags: ['iOS', 'SwiftUI', 'Web API'],
    problem: 'Video is flat: it carries picture and sound but none of the physical feedback that makes a moment land.',
    solution: 'An iOS app that records and shares video with synchronized haptics, a player for immersive playback, and a web API that brings haptics-with-sound to Android browsers.',
    outcome: 'A small ecosystem exploring a genuinely new sensory layer for everyday video.',
  },
];

export type Experience = {
  when: string;
  role: string;
  org: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    when: 'Apr 2026 — Jun 2026',
    role: 'Digital Technology Program Intern',
    org: 'GE Vernova · DTDP',
    points: [
      'Owned adoption analytics for a Manufacturing Execution System used daily by 3,000+ shop-floor operators across 8+ global sites.',
      'Ran New Relic user-journey analysis to find exactly where operators dropped off, then shipped a Power BI dashboard that turned that into decisions for site leadership.',
      'Built an AI agent that scans dashboard coverage gaps and writes site-specific insights automatically, replacing hours of manual analysis per site with automated reporting.',
    ],
  },
  {
    when: 'Aug 2024 — Jun 2025',
    role: 'Associate Software Engineer',
    org: 'MathWorks India · Data Acquisition',
    points: [
      'Cut a core data-acquisition algorithm’s runtime by 30% through profiling and redesign, directly reducing friction for enterprise clients.',
      'Delivered a remote hardware-demonstration platform so sales could put real lab hardware in front of 25+ enterprise clients without shipping a single unit.',
      'Shipped C++/MATLAB fixes across 3 consecutive releases used by 10,000+ customers. Promoted ahead of schedule.',
    ],
  },
  {
    when: 'Jul 2023 — Jul 2024',
    role: 'Associate, Engineering Development Group',
    org: 'MathWorks India · 50% customer-facing / 50% development',
    points: [
      'Resolved 100+ MATLAB and Simulink cases at a 90%+ resolution rate across 30+ industry domains, learning how customers actually use the tools.',
      'Synthesized 70+ customer conversations into structured market-requirement signals that fed product roadmaps, the voice-of-customer half of product work.',
      'Redesigned cross-team feedback workflows and cut cycle time by 40% across a 10-person group.',
    ],
  },
];

export type Education = {
  when: string;
  degree: string;
  school: string;
  points: string[];
};

export const education: Education[] = [
  {
    when: '2025 — 2027 (expected)',
    degree: 'MBA · Management',
    school: 'Department of Management Studies, IIT Delhi',
    points: [
      'Campus Finalist, American Express Campus Challenge 2025 (Decision Science): the sole team selected from DMS IIT Delhi against 500+ B-school teams.',
      '99.74 percentile in CAT 2023 (DILR).',
    ],
  },
  {
    when: '2019 — 2023',
    degree: 'B.Tech · Electrical Engineering',
    school: 'Maulana Azad National Institute of Technology, Bhopal (NIT Bhopal)',
    points: [
      'CGPA 8.21 / 10. IEEE-published primary author: a battery-life forecasting ML model reaching 90% accuracy from State-of-Health data.',
      '99.74 percentile in JEE Mains 2019 (Physics).',
    ],
  },
];

// How I execute: three languages, one owner.
export const capabilities = [
  {
    label: 'Business',
    body: 'Frame the problem, size the opportunity, define what "better" means in numbers before anything gets built.',
    tags: ['Problem framing', 'Voice of customer', 'Roadmap prioritization', 'Adoption & KPI analysis', 'Lean / Kaizen'],
  },
  {
    label: 'Product',
    body: 'Turn messy operations into flows, specs, and personas an engineer can build and a user will actually adopt.',
    tags: ['User research', 'PRDs & specs', 'Workflow design', 'Telemetry (New Relic, Power BI)', 'Prompt design'],
  },
  {
    label: 'Build',
    body: 'Ship it myself when that is fastest, so nothing is lost between the idea and the working product.',
    tags: ['Next.js / TypeScript', 'Supabase / SQL', 'Python', 'Claude · OpenRouter · AWS', 'Agentic workflows'],
  },
];

export const stats = [
  { value: 7, suffix: '', label: 'AI & product solutions shipped' },
  { value: 3000, suffix: '+', label: 'Daily operators whose adoption I analyzed' },
  { value: 30, suffix: '%', label: 'Runtime cut from a core algorithm' },
  { value: 10000, suffix: '+', label: 'Users of software I have shipped' },
];
