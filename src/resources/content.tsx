// biome-ignore lint/style/useImportType: <explanation>
import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Akash",
  lastName: "Tyagi",
  name: `Akash Tyagi`,
  role: "Backend Engineer",
  avatar: "/images/avatar.png",
  email: "akashttyagi21@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about backend engineering and systems design</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/whoakashtyagi",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/akashtyagi21/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.svg",
  label: "Home",
  title: `${person.name} – Backend Engineer`,
  description: `Backend engineer with 4+ years building enterprise distributed systems, Java microservices, and production AI integrations at Quark Software. 3× Employee of the Quarter.`,
  headline: <>I build systems that survive contact with production</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Work</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          80% faster onboarding
        </Text>
      </Row>
    ),
    href: "/work/ai-document-structuring-service",
  },
  subline: (
    <>
      Senior backend engineer at Quark — shipping distributed systems, AI integrations, and platform infrastructure
      that handles real enterprise load. <br />
      4+ years, 3× Employee of the Quarter, measurable impact on every major delivery.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a backend engineer with 4+ years at Quark Software building distributed systems, microservices, and AI-powered platform features. 3× Employee of the Quarter.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a backend engineer who's spent 4+ years building enterprise SaaS at Quark — designing distributed systems, 
        shipping microservices to production, and more recently, integrating AI into places it actually helps.
        <br /><br />
        I write Java daily. But I think in systems, not syntax. When I approach a new problem, the language is just the 
        last mile — what matters first is the data model, the failure modes, the scaling path. That clarity is what lets 
        me pick up an unfamiliar language or framework quickly, lean on LLMs as force multipliers, and still ship production-quality code.
        <br /><br />
        My engineering story started in electronics and communication at Punjab University — which means I've thought about 
        signals, protocols, and hardware constraints before I ever wrote a line of Java. That background gives me a gut for 
        systems at different layers of abstraction.
        <br /><br />
        I want to work on teams building hard things fast.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Quark Software Inc.",
        timeframe: "Jul 2025 - Present",
        role: "Software Specialist",
        achievements: [
          <>
            Built an <strong>AI-powered document structuring service</strong> using Spring AI SDK and Azure AI Document Intelligence 
            that automatically maps legacy documents to Quark's schema, reducing new client onboarding time by <strong>80%</strong>.
          </>,
          <>
            Designed and shipped the <strong>Quark MCP Server</strong> — a service layer that exposes platform APIs to AI agents 
            via Model Context Protocol, enabling LLM-based workflows to interact with the publishing platform natively.
          </>,
          <>
            Own the complete SDLC for critical production issues — design documentation, root cause analysis, 
            code review, implementation, testing, and post-deploy monitoring.
          </>,
        ],
        images: [],
      },
      {
        company: "Quark Software Inc.",
        timeframe: "Jul 2024 - Jul 2025",
        role: "Software Engineer II",
        achievements: [
          <>
            Built a <strong>standardized library suite</strong> adopted by 4+ teams, reducing project kickoff times by 25–50% 
            and enforcing consistency across service boundaries. <strong>Employee of the Quarter (×2)</strong>.
          </>,
          <>
            Led platform-wide <strong>SSO migration to Keycloak</strong> with OAuth 2.0 and SAML support, achieving zero-downtime 
            cutover across 6+ services while adding MFA and encrypted credential storage. <strong>Employee of the Quarter</strong>.
          </>,
          <>
            Designed and built an <strong>in-house multi-tenant license management service</strong> from scratch, replacing 
            the third-party vendor (Nalperion) and eliminating per-tenant licensing costs. <strong>Employee of the Quarter</strong>.
          </>,
        ],
        images: [],
      },
      {
        company: "Quark Software Inc.",
        timeframe: "Jul 2022 - Jul 2024",
        role: "Software Engineer I",
        achievements: [
          <>
            Improved document publishing speed by <strong>3×</strong> through JProfiler-driven performance analysis. 
            Built an LRU caching layer for S3 blob reads (85%+ cache hit rate) and redesigned inter-service APIs to use batch fetching.
          </>,
          <>
            Designed and implemented <strong>asset branching functionality</strong> — a platform-wide versioning refactor enabling 
            content branching and merging across all services without breaking existing functionality for active clients.
          </>,
          <>
            Received <strong>12+ peer bonus awards</strong> for consistent engineering contributions and cross-team collaboration.
          </>,
        ],
        images: [],
      },
      {
        company: "Quark Software Inc.",
        timeframe: "Jan 2022 - Jul 2022",
        role: "R&D Intern",
        achievements: [
          <>
            Integrated <strong>DocuSign APIs and webhooks</strong> to provide built-in digital signing workflows for approved content, 
            replacing a manual out-of-platform process.
          </>,
          <>
            Added section-level preview and publishing support via a new automation channel, building XSLT transformation pipelines 
            for real-time content rendering.
          </>,
          <>
            Handled production support tickets and bug investigations — where I developed the root cause analysis discipline 
            I still use today.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education & Certifications",
    institutions: [
      {
        name: "Punjab University, Chandigarh",
        description: <>Bachelor of Engineering in Electronics and Communication (2018-2022) • CGPA: 7.9 <br />
        Relevant coursework: Computer Fundamentals, Operating Systems, Networking, Data Structures & Algorithms</>,
      },
      {
        name: "Microsoft Certified: Azure AI Engineer Associate",
        description: <>Demonstrated expertise in designing and implementing AI solutions on Azure, including Azure AI Document Intelligence and Azure AI Services.</>,
      },
      {
        name: "Microsoft Azure AI Essentials Professional Certificate",
        description: <>Foundational certification in Azure AI services and machine learning.</>,
      },
      {
        name: "Building Scalable Java Microservices — Google Cloud",
        description: <>Professional certification in designing and deploying production-grade Java microservices with Spring Boot and Spring Cloud.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Backend Engineering",
        description: (
          <>
            Primary language: Java (4+ years production experience). Working knowledge: Python, TypeScript/Node.js. 
            I write Java for work, but I think in systems — data structures, algorithms, design patterns, and distributed systems principles.
          </>
        ),
        tags: [
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
        ],
        images: [],
      },
      {
        title: "Spring Ecosystem & Frameworks",
        description: (
          <>
            Daily work with Spring Boot microservices. Production experience with Spring Data JPA, Spring Security, 
            Spring MVC, and Spring AI SDK for LLM integration. JUnit for testing.
          </>
        ),
        tags: [
          {
            name: "Spring Boot",
            icon: "spring",
          },
          {
            name: "Java",
            icon: "java",
          },
        ],
        images: [],
      },
      {
        title: "Cloud & Infrastructure",
        description: (
          <>
            AWS (Lambda, RDS, S3, Secrets Manager) and Azure (Blob Storage, Service Bus, Functions, Azure AI Services). 
            Container orchestration with Docker and Kubernetes. CI/CD pipeline design with GitHub Actions.
          </>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Azure",
            icon: "azure",
          },
          {
            name: "Docker",
            icon: "docker",
          },
        ],
        images: [],
      },
      {
        title: "Databases & Caching",
        description: (
          <>
            PostgreSQL for relational data. Redis for caching (LRU cache implementations). 
            Elasticsearch for search. Cosmos DB for document storage. Experience with database schema design and optimization.
          </>
        ),
        tags: [
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "Redis",
            icon: "redis",
          },
        ],
        images: [],
      },
      {
        title: "AI & LLM Integration",
        description: (
          <>
            Production AI features using Spring AI SDK and Azure AI Document Intelligence. LangChain for RAG pipelines. 
            OpenAI APIs for prompt engineering and structured outputs. Built an MCP server for AI agent integration.
          </>
        ),
        tags: [
          {
            name: "OpenAI",
            icon: "openai",
          },
        ],
        images: [],
      },
      {
        title: "Messaging & Event Streaming",
        description: (
          <>
            Event-driven microservices with Kafka. Async message passing with RabbitMQ and Azure Service Bus. 
            Experience designing reliable message flows with retry logic and dead-letter queues.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "APIs, Auth & Security",
        description: (
          <>
            RESTful API design and documentation (OpenAPI/Swagger). OAuth 2.0, JWT, SAML. 
            SSO implementation with Keycloak. Webhook integration for async workflows.
          </>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about backend engineering and systems design...",
  description: `Technical insights and engineering philosophy from ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Backend engineering and AI integration projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    // Gallery disabled for now - can be enabled later with architecture diagrams or personal photos
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
