// All editable site content lives here so copy, services, projects and
// testimonials can be updated without touching presentation code.

export const site = {
  name: "Clicks N Codes",
  tagline: "We create the clicks. We write the code. We build what happens next.",
  email: "hello@clicksncodes.com",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Dribbble", href: "https://dribbble.com/" },
  ],
};

export const navLinks = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export type ServiceGroup = {
  id: string;
  number: string;
  title: string;
  summary: string;
  capabilities: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "marketing",
    number: "01",
    title: "Marketing",
    summary: "Demand, attention and conversion — measured end to end.",
    capabilities: [
      "Digital Strategy",
      "Performance Marketing",
      "Paid Media",
      "Social Media Marketing",
      "SEO",
      "Content Strategy",
      "Email Marketing",
      "Lead Generation",
      "Conversion Optimization",
      "Campaign Management",
      "Analytics",
    ],
  },
  {
    id: "design",
    number: "02",
    title: "Design & Brand",
    summary: "Identity and interface built to be recognised and used.",
    capabilities: [
      "Brand Strategy",
      "Visual Identity",
      "UI/UX Design",
      "Website Design",
      "Product Design",
      "Creative Direction",
      "Campaign Creative",
      "Social Creative",
    ],
  },
  {
    id: "development",
    number: "03",
    title: "Development",
    summary: "Sites, products and platforms engineered to hold up.",
    capabilities: [
      "Custom Websites",
      "Web Applications",
      "Mobile Applications",
      "E-commerce",
      "Custom Software",
      "CMS Development",
      "API Development",
      "System Integrations",
      "Landing Pages",
      "Enterprise Solutions",
    ],
  },
  {
    id: "ai",
    number: "04",
    title: "AI & Automation",
    summary: "Leverage where repetition lives, judgment where it matters.",
    capabilities: [
      "AI Automation",
      "AI Agents",
      "Business Process Automation",
      "Workflow Automation",
      "Custom AI Solutions",
      "Chatbots",
      "CRM Automation",
      "Marketing Automation",
      "Data Workflows",
      "API Integrations",
      "Internal AI Tools",
    ],
  },
];

export type Project = {
  slug: string;
  number: string;
  name: string;
  client: string;
  industry: string;
  year: string;
  services: string[];
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  /** Sample project written for layout purposes, not a delivered engagement. */
  isPlaceholder: boolean;
};

export const projects: Project[] = [
  {
    slug: "project-01",
    number: "01",
    name: "Northline",
    client: "Sample client",
    industry: "Consumer retail",
    year: "2025",
    services: ["Brand", "Marketing", "Development"],
    challenge:
      "A retail brand with strong products and a store experience that never translated online.",
    solution:
      "A rebuild of the identity, a new storefront and a paid media programme reading from the same data.",
    outcome: "Placeholder outcome copy. Replace with the real engagement summary.",
    metrics: [
      { value: "XX%", label: "Revenue growth" },
      { value: "XX%", label: "Conversion rate" },
    ],
    isPlaceholder: true,
  },
  {
    slug: "project-02",
    number: "02",
    name: "Fieldwork",
    client: "Sample client",
    industry: "B2B software",
    year: "2025",
    services: ["Product Design", "Development"],
    challenge: "A capable internal tool nobody outside the founding team could use.",
    solution:
      "Product design from first principles, then a web app built around the two jobs that mattered.",
    outcome: "Placeholder outcome copy. Replace with the real engagement summary.",
    metrics: [
      { value: "XX", label: "Weeks to launch" },
      { value: "XX%", label: "Task completion" },
    ],
    isPlaceholder: true,
  },
  {
    slug: "project-03",
    number: "03",
    name: "Relay",
    client: "Sample client",
    industry: "Professional services",
    year: "2026",
    services: ["AI", "Automation"],
    challenge: "Every inbound lead passed through four inboxes before anyone replied.",
    solution:
      "AI qualification wired into the CRM, with follow-up sequences and reporting running unattended.",
    outcome: "Placeholder outcome copy. Replace with the real engagement summary.",
    metrics: [
      { value: "XX hrs", label: "Saved weekly" },
      { value: "XX%", label: "Faster response" },
    ],
    isPlaceholder: true,
  },
];

/** Placeholder figures. Not verified company statistics — replace before launch. */
export const metrics = [
  { value: "XX+", label: "Projects delivered" },
  { value: "XX", label: "Industries" },
  { value: "XX%", label: "Average growth" },
  { value: "XX+", label: "Automations built" },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    copy: "Understand the business, the customer, the problem and the opportunity.",
  },
  {
    number: "02",
    title: "Strategize",
    copy: "Define positioning, experience, technology and the growth plan behind them.",
  },
  {
    number: "03",
    title: "Build",
    copy: "Design, develop, integrate and test until it holds under real use.",
  },
  {
    number: "04",
    title: "Grow",
    copy: "Launch, optimise, automate and keep improving on the numbers.",
  },
];

export const differentiators = [
  {
    title: "Strategy + Execution",
    copy: "One team thinking from the first ad impression to the technology behind the final experience.",
  },
  {
    title: "Marketing + Engineering",
    copy: "Campaign decisions inform product decisions. Product data informs campaign decisions.",
  },
  {
    title: "Humans + AI",
    copy: "Automation where it creates leverage. Human judgment where it changes the outcome.",
  },
  {
    title: "Built for Outcomes",
    copy: "Measured on business results, not the length of a deliverables list.",
  },
];

export const workflowStages = [
  { label: "Lead", note: "Form, ad, call or inbox" },
  { label: "AI Qualification", note: "Scored and enriched in seconds" },
  { label: "CRM", note: "Routed to the right owner" },
  { label: "Automated Follow-up", note: "Sequenced, personal, on time" },
  { label: "Sales Team", note: "Talking only to real opportunities" },
  { label: "Analytics", note: "Every step measurable" },
];

export const automationCapabilities = [
  "AI agents",
  "CRM automation",
  "Lead processing",
  "Email workflows",
  "Customer support",
  "Content workflows",
  "Internal knowledge systems",
  "Data processing",
  "API integrations",
  "Custom AI tools",
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Placeholder testimonial — replace with an approved client quote. */
  isPlaceholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Placeholder quote. This slot is built for an approved client quote about working with the team across marketing and engineering.",
    name: "Client name",
    role: "Role",
    company: "Company",
    isPlaceholder: true,
  },
  {
    quote:
      "Placeholder quote. Use this slot for a quote about the automation work and the time it gave back.",
    name: "Client name",
    role: "Role",
    company: "Company",
    isPlaceholder: true,
  },
];

export const teamDisciplines = [
  "Strategists",
  "Marketers",
  "Designers",
  "Developers",
  "AI specialists",
];

export const serviceChips = [
  "Marketing",
  "Branding",
  "Website",
  "Web App",
  "Mobile App",
  "Custom Software",
  "AI / Automation",
  "E-commerce",
  "Other",
];

export const budgetOptions = [
  "Under $5K",
  "$5K–$10K",
  "$10K–$25K",
  "$25K–$50K",
  "$50K+",
  "Let's Discuss",
];

export const timelineOptions = ["ASAP", "1–2 Months", "3–6 Months", "Flexible"];
