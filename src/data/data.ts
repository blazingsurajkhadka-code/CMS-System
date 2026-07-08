// ==========================================================================
// Centralized data source for NexaCMS - Digital Agency
// ==========================================================================

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  content: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: {
    linkedin: string;
    twitter: string;
    email: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  rating: number;
  image: string;
}

export interface FeatureItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
}

export interface CoreValue {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  path: string;
}

// --------------------------------------------------------------------------
// Navigation
// --------------------------------------------------------------------------

export const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

// --------------------------------------------------------------------------
// Services (Home shows first 6, Services page shows all 8)
// --------------------------------------------------------------------------

export const services: Service[] = [
  {
    id: 1,
    icon: "Code2",
    title: "Web Development",
    description:
      "Custom, high-performance websites built with modern frameworks that scale with your business.",
    features: ["Responsive Design", "SEO Optimized", "Fast Load Times"],
  },
  {
    id: 2,
    icon: "Smartphone",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that deliver seamless experiences on every device.",
    features: ["iOS & Android", "Cross-Platform", "App Store Ready"],
  },
  {
    id: 3,
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "User-centered design that blends aesthetics with usability to convert visitors into customers.",
    features: ["Wireframing", "Prototyping", "User Research"],
  },
  {
    id: 4,
    icon: "TrendingUp",
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that increase visibility, traffic, and qualified leads.",
    features: ["SEO Strategy", "Social Media", "Paid Advertising"],
  },
  {
    id: 5,
    icon: "ShoppingCart",
    title: "E-Commerce Solutions",
    description:
      "Powerful online stores designed to maximize conversions and streamline operations.",
    features: ["Payment Integration", "Inventory Tools", "Secure Checkout"],
  },
  {
    id: 6,
    icon: "Cloud",
    title: "Cloud & DevOps",
    description:
      "Reliable cloud infrastructure and CI/CD pipelines that keep your product running smoothly.",
    features: ["Cloud Migration", "Auto Scaling", "24/7 Monitoring"],
  },
  {
    id: 7,
    icon: "ShieldCheck",
    title: "Cybersecurity",
    description:
      "Comprehensive security audits and protection strategies to safeguard your digital assets.",
    features: ["Security Audits", "Threat Monitoring", "Data Encryption"],
  },
  {
    id: 8,
    icon: "BarChart3",
    title: "Brand Strategy",
    description:
      "Distinctive brand identities and positioning that help you stand out in a crowded market.",
    features: ["Brand Identity", "Market Research", "Positioning"],
  },
];

// --------------------------------------------------------------------------
// Why Choose Us (Home) - 4 feature cards
// --------------------------------------------------------------------------

export const whyChooseUs: FeatureItem[] = [
  {
    id: 1,
    icon: "Zap",
    title: "Lightning Fast Delivery",
    description:
      "We follow agile workflows to deliver projects quickly without compromising on quality.",
  },
  {
    id: 2,
    icon: "Users",
    title: "Expert Team",
    description:
      "Our multidisciplinary team of designers and developers brings years of proven expertise.",
  },
  {
    id: 3,
    icon: "HeartHandshake",
    title: "Client-Focused Approach",
    description:
      "We treat every project like a partnership, keeping communication transparent throughout.",
  },
  {
    id: 4,
    icon: "Award",
    title: "Award-Winning Results",
    description:
      "Our work has helped businesses achieve measurable growth and industry recognition.",
  },
];

// --------------------------------------------------------------------------
// Blog Posts
// --------------------------------------------------------------------------

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "web-design-trends-2026",
    title: "10 Web Design Trends Dominating 2026",
    excerpt:
      "Explore the biggest visual and interaction trends shaping how modern websites look and feel this year.",
    category: "Design",
    date: "June 12, 2026",
    author: "Ariana Shah",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Modern websites are evolving faster than ever, blending immersive visuals with intuitive interactions. This year, designers are leaning into bold typography, asymmetric layouts, and richer micro-interactions to create memorable brand experiences.",
      "Beyond surface aesthetics, accessibility and performance are driving trend decisions. Websites that feel fast, respond instantly, and work smoothly across devices are winning both user trust and search visibility.",
      "The key takeaway is balance: combine striking design with clear navigation, meaningful messaging, and fast-loading pages to keep visitors engaged and ready to act."
    ],
  },
  {
    id: 2,
    slug: "choose-right-tech-stack-for-your-startup",
    title: "How to Choose the Right Tech Stack for Your Startup",
    excerpt:
      "A practical guide to evaluating frameworks, databases, and hosting so you can scale with confidence.",
    category: "Development",
    date: "June 3, 2026",
    author: "Rohan Malla",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Choosing a tech stack is one of the most important decisions for an early-stage startup. Your stack should support rapid iteration, be easy to maintain, and match your team’s strengths.",
      "Start by identifying your product’s core needs: do you need real-time collaboration, high traffic handling, or content-rich pages? Then select frameworks and services that align with those requirements while avoiding unnecessary complexity.",
      "Finally, choose infrastructure that can grow with you. Cloud platforms with managed databases, continuous delivery, and robust monitoring reduce operational overhead and let you focus on building features that matter."
    ],
  },
  {
    id: 3,
    slug: "seo-fundamentals-business-owner",
    title: "SEO Fundamentals Every Business Owner Should Know",
    excerpt:
      "Understand the core principles of search optimization that drive sustainable organic growth.",
    category: "Marketing",
    date: "May 27, 2026",
    author: "Priya Karki",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Search engine optimization remains one of the most cost-effective channels for long-term growth. Good SEO starts with a strong website structure, clear content hierarchy, and useful information that answers your audience’s questions.",
      "Focus on creating compelling page titles, meta descriptions, and headings that reflect what your audience is searching for. Consistent content updates and thoughtful internal linking help search engines understand the value of your pages.",
      "Finally, track performance with analytics and search console data. Over time, small improvements in keyword ranking and page quality can add up to a steady volume of qualified traffic."
    ],
  },
  {
    id: 4,
    slug: "complete-guide-to-mobile-first-design",
    title: "The Complete Guide to Mobile-First Design",
    excerpt:
      "Why designing for mobile screens first leads to cleaner, more effective digital products.",
    category: "Design",
    date: "May 19, 2026",
    author: "Ariana Shah",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Mobile-first design means starting with the smallest screen and scaling up, ensuring that every experience works beautifully on phones before adding complexity for larger devices.",
      "This approach encourages clarity, faster load times, and fewer distractions for users. By prioritizing essential content and actions, teams can build interfaces that feel intuitive across all devices.",
      "A mobile-first mindset also makes responsive design easier. When the core experience is solid on mobile, desktop layouts can enhance rather than rework the foundation."
    ],
  },
  {
    id: 5,
    slug: "building-scalable-apis-modern-architecture",
    title: "Building Scalable APIs with Modern Architecture",
    excerpt:
      "Learn the architectural patterns that keep backend systems fast and maintainable as they grow.",
    category: "Development",
    date: "May 8, 2026",
    author: "Rohan Malla",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Scalable APIs are built around modular architecture, clear versioning, and consistent data contracts. This makes it easier to onboard new developers and maintain reliable integrations.",
      "Use lightweight communication formats, caching, and stateless design to improve performance. When possible, adopt managed infrastructure for databases and queues to reduce the operations burden.",
      "Monitoring and observability are essential. Track response times, error rates, and usage patterns so you can evolve the API intelligently, before performance issues impact customers."
    ],
  },
  {
    id: 6,
    slug: "social-media-strategies-that-convert",
    title: "Social Media Strategies That Actually Convert",
    excerpt:
      "Move beyond vanity metrics and build campaigns that turn followers into loyal customers.",
    category: "Marketing",
    date: "April 30, 2026",
    author: "Priya Karki",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1200&auto=format&fit=crop",
    content: [
      "A strong social strategy starts with understanding your audience and choosing the platforms they actually use. It’s better to do one or two channels well than spread your resources too thin.",
      "Create content that supports your business goals, whether that’s lead generation, awareness, or customer support. Measure the campaigns that contribute directly to those goals instead of chasing likes or follows alone.",
      "Finally, keep the customer journey in mind. Use social media to guide prospects to useful content, newsletter sign-ups, and product pages where they can take the next step."
    ],
  },
];

export const blogCategories: string[] = [
  "All",
  "Design",
  "Development",
  "Marketing",
];

// --------------------------------------------------------------------------
// Team Members
// --------------------------------------------------------------------------

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:aarav@nexacms.com",
    },
  },
  {
    id: 2,
    name: "Sujata Rai",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sujata@nexacms.com",
    },
  },
  {
    id: 3,
    name: "Bikash Thapa",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:bikash@nexacms.com",
    },
  },
  {
    id: 4,
    name: "Nisha Gurung",
    role: "Marketing Strategist",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:nisha@nexacms.com",
    },
  },
];

// --------------------------------------------------------------------------
// Testimonials
// --------------------------------------------------------------------------

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Chen",
    role: "CEO",
    company: "Brightline Retail",
    message:
      "NexaCMS transformed our online presence completely. The team delivered a stunning website that doubled our conversion rate within three months.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Marketing Director",
    company: "Vantage Health",
    message:
      "Professional, responsive, and incredibly talented. They understood our vision from day one and executed it flawlessly.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "David Kim",
    role: "Founder",
    company: "Loopline Studio",
    message:
      "Working with NexaCMS felt like having an in-house team. The communication and quality of work exceeded our expectations.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
];

// --------------------------------------------------------------------------
// Trusted companies (logos shown as styled text marks)
// --------------------------------------------------------------------------

export const trustedCompanies: string[] = [
  "Brightline",
  "Vantage",
  "Loopline",
  "Orbitfy",
  "Northpeak",
  "Cedarwave",
];

// --------------------------------------------------------------------------
// About Page: Core Values & Stats
// --------------------------------------------------------------------------

export const coreValues: CoreValue[] = [
  {
    id: 1,
    icon: "Target",
    title: "Excellence",
    description:
      "We hold every deliverable to the highest standard, sweating the details others overlook.",
  },
  {
    id: 2,
    icon: "Lightbulb",
    title: "Innovation",
    description:
      "We stay ahead of trends and technology to build solutions that feel future-ready.",
  },
  {
    id: 3,
    icon: "HandHeart",
    title: "Integrity",
    description:
      "We operate with honesty and transparency in every client relationship we build.",
  },
  {
    id: 4,
    icon: "Rocket",
    title: "Growth Mindset",
    description:
      "We're relentlessly curious, always learning and improving how we serve our clients.",
  },
];

export const stats: StatItem[] = [
  { id: 1, value: "250+", label: "Projects Delivered" },
  { id: 2, value: "120+", label: "Happy Clients" },
  { id: 3, value: "9+", label: "Years of Experience" },
  { id: 4, value: "18", label: "Team Experts" },
];

// --------------------------------------------------------------------------
// Services Page: Process & FAQ
// --------------------------------------------------------------------------

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    step: "01",
    title: "Discovery",
    description:
      "We dive deep into your goals, audience, and challenges to build a solid strategic foundation.",
  },
  {
    id: 2,
    step: "02",
    title: "Design",
    description:
      "Our designers craft intuitive, on-brand experiences validated through prototyping and feedback.",
  },
  {
    id: 3,
    step: "03",
    title: "Development",
    description:
      "We build robust, scalable solutions using modern tools and rigorous quality assurance.",
  },
  {
    id: 4,
    step: "04",
    title: "Launch & Support",
    description:
      "We deploy your project and provide ongoing support to ensure long-term success.",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "How long does a typical project take?",
    answer:
      "Most projects take between 4 to 12 weeks depending on complexity and scope. We'll provide a detailed timeline after our discovery call.",
  },
  {
    id: 2,
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes, we offer flexible maintenance and support packages to keep your product secure, updated, and performing well.",
  },
  {
    id: 3,
    question: "Can you work with our existing brand guidelines?",
    answer:
      "Absolutely. We can design within your existing brand identity or help evolve it as part of the project.",
  },
  {
    id: 4,
    question: "What industries do you specialize in?",
    answer:
      "We've worked across retail, healthcare, finance, education, and technology, adapting our approach to each industry's needs.",
  },
  {
    id: 5,
    question: "How do you handle project pricing?",
    answer:
      "We offer both fixed-price and retainer-based pricing depending on project scope. You'll receive a transparent quote upfront.",
  },
];

// --------------------------------------------------------------------------
// Contact Page: Company Info
// --------------------------------------------------------------------------

export const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const contactInfo = {
  address: "1200 Innovation Avenue, Kathmandu, Nepal",
  phone: "+977 1-234-5678",
  email: "hello@nexacms.com",
};