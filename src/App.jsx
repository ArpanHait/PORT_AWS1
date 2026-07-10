import {
  Activity,
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Database,
  FileDown,
  Github,
  GitBranch,
  Layers3,
  Linkedin,
  Mail,
  Radio,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  TerminalSquare,
  Workflow,
} from 'lucide-react';

const navItems = [
  { label: '/profile', href: '#profile' },
  { label: '/deployments', href: '#projects' },
  { label: '/stack', href: '#skills' },
  { label: '/timeline', href: '#timeline' },
  { label: '/contact', href: '#contact' },
];

const links = {
  github: 'https://github.com/ArpanHait',
  linkedin: 'https://www.linkedin.com/in/arpan-hait',
  email: 'mailto:arpanhait2006@gmail.com',
  resume: '/Arpan_Hait_Resume.pdf',
};

const stats = [
  { label: 'Project Repos', value: '04' },
  { label: 'API Endpoints Built', value: '05+' },
  { label: 'Monitoring Time Cut', value: '40%' },
  { label: 'Validation Speed Gain', value: '30%' },
];

const projects = [
  {
    name: 'To-Do Task Manager',
    status: 'Source available',
    repo: 'https://github.com/ArpanHait/TO_DO',
    stack: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript'],
    summary:
      'Django task platform using MVT architecture, relational models, custom schema fields, secure authentication, and task CRUD flows.',
    impact:
      'Improved task tracking efficiency by 25% by reducing layout shifts and optimizing behavior during database operations.',
    signal: '8 CRUD views',
  },
  {
    name: 'Deepfake Detection Framework',
    status: 'AI system',
    repo: 'https://github.com/ArpanHait/DEEPFAKE_DETECTION',
    stack: ['React', 'FastAPI', 'Python', 'MTCNN', 'EfficientNet-B0'],
    summary:
      'Responsive React interface connected to a FastAPI inference backend running MTCNN and EfficientNet-B0 across asynchronous REST endpoints.',
    impact:
      'Accelerated validation workflows by 30% with an async media upload pipeline that keeps inference metrics non-blocking.',
    signal: '5 REST endpoints',
  },
  {
    name: 'Industrial AI Anomaly Detection System',
    status: 'Real-time dashboard',
    repo: 'https://github.com/ArpanHait/AI_ANOMALY_DETECTION',
    stack: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Scikit-Learn'],
    summary:
      'Industrial telemetry dashboard using Isolation Forest and Random Forest models for predictive maintenance signals.',
    impact:
      'Reduced operator monitoring time by 40% by replacing static logs with live WebSocket telemetry and interactive views.',
    signal: 'WebSocket telemetry',
  },
  {
    name: 'AI Autocorrect Tool',
    status: 'Serverless utility',
    repo: 'https://github.com/ArpanHait/AUTOCORRECT_TOOL',
    stack: ['JavaScript', 'Netlify Functions', 'API'],
    summary:
      'Serverless frontend utility that invokes Netlify Functions for real-time language correction with structured JSON responses.',
    impact:
      'Cut sentence translation lag below 100ms by moving correction requests to a lightweight serverless architecture.',
    signal: '<100ms lag',
  },
];

const skillGroups = [
  {
    title: 'Frontend & Core Web',
    icon: Code2,
    skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Redux Toolkit'],
  },
  {
    title: 'API & Integrations',
    icon: Workflow,
    skills: ['RESTful APIs', 'Fetch API', 'Axios', 'JWT', 'OAuth', 'State Management'],
  },
  {
    title: 'Development Tools',
    icon: TerminalSquare,
    skills: ['Git', 'GitHub', 'Firebase', 'Netlify', 'Vercel', 'Postman', 'AWS'],
  },
  {
    title: 'Backend Knowledge',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'Python', 'Django', 'FastAPI', 'MongoDB'],
  },
  {
    title: 'Core CS',
    icon: Braces,
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
];

const timeline = [
  {
    version: 'v1.0',
    title: 'Core Programming Base',
    detail: 'Built fundamentals across DSA, OOP, operating systems, DBMS, and computer networks.',
  },
  {
    version: 'v2.0',
    title: 'Frontend Systems',
    detail: 'Moved into React, TypeScript, Redux Toolkit, responsive layouts, and API-driven UI architecture.',
  },
  {
    version: 'v3.0',
    title: 'Backend & AI Integrations',
    detail: 'Connected Django, FastAPI, Python, MongoDB, authentication, model inference, and serverless functions.',
  },
  {
    version: 'v4.0',
    title: 'Cloud-Ready Portfolio',
    detail: 'Packaging this portfolio for static AWS deployment with S3, CloudFront, HTTPS, and custom-domain readiness.',
  },
];

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Arpan Hait home">
        <Cloud size={19} aria-hidden="true" />
        <span>Arpan Hait</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="icon-link" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub">
        <Github size={19} aria-hidden="true" />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">
          <Radio size={15} aria-hidden="true" />
          Available for projects
        </p>
        <h1 id="hero-title">Arpan Hait</h1>
        <p className="hero-role">Full Stack Developer</p>
        <p className="hero-copy">
          I build clean, API-driven web systems across React, Django, FastAPI, and cloud-ready deployment workflows, with a focus on practical interfaces that move data fast and stay usable.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="primary-action" href="#projects">
            <Rocket size={18} aria-hidden="true" />
            View deployments
          </a>
          <a className="secondary-action" href={links.resume} target="_blank" rel="noreferrer">
            <FileDown size={18} aria-hidden="true" />
            Resume
          </a>
        </div>
      </div>
      <div className="hero-console" aria-label="Current build status">
        <div>
          <span>region</span>
          <strong>India</strong>
        </div>
        <div>
          <span>focus</span>
          <strong>Web + Cloud</strong>
        </div>
        <div>
          <span>build</span>
          <strong>portfolio.v1</strong>
        </div>
      </div>
    </section>
  );
}

function Profile() {
  return (
    <section className="section profile-band" id="profile" aria-labelledby="profile-title">
      <div className="section-heading">
        <p className="section-kicker">/profile</p>
        <h2 id="profile-title">Developer control panel</h2>
      </div>
      <div className="profile-grid">
        <div className="profile-copy">
          <p>
            I am a full stack developer who enjoys building responsive frontends, connecting them to practical APIs, and turning technical systems into interfaces people can actually use. My work spans React dashboards, Django applications, FastAPI services, AI-assisted tools, and AWS-ready deployment preparation.
          </p>
          <div className="profile-points" aria-label="Profile highlights">
            <span>
              <ShieldCheck size={17} aria-hidden="true" />
              Auth-aware applications
            </span>
            <span>
              <GitBranch size={17} aria-hidden="true" />
              API-first workflows
            </span>
            <span>
              <Database size={17} aria-hidden="true" />
              Data-backed UI systems
            </span>
          </div>
        </div>
        <div className="metric-grid">
          {stats.map((stat) => (
            <div className="metric" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading wide">
        <p className="section-kicker">/deployments</p>
        <h2 id="projects-title">Project deployments</h2>
        <p>
          Each project is framed like a shipped system: stack, behavior, repo, and measured engineering signal.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-topline">
              <span className="status-dot" aria-hidden="true" />
              <span>{project.status}</span>
            </div>
            <div className="project-title-row">
              <h3>{project.name}</h3>
              <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} repository`} title="Repository">
                <Github size={19} aria-hidden="true" />
              </a>
            </div>
            <p>{project.summary}</p>
            <p className="project-impact">{project.impact}</p>
            <div className="project-signal">
              <Activity size={17} aria-hidden="true" />
              {project.signal}
            </div>
            <ul className="stack-list" aria-label={`${project.name} tech stack`}>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-band" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="section-kicker">/stack</p>
        <h2 id="skills-title">Technical stack</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map(({ title, icon: Icon, skills }) => (
          <article className="skill-card" key={title}>
            <div className="skill-heading">
              <Icon size={20} aria-hidden="true" />
              <h3>{title}</h3>
            </div>
            <div className="skill-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="section" id="timeline" aria-labelledby="timeline-title">
      <div className="section-heading">
        <p className="section-kicker">/timeline</p>
        <h2 id="timeline-title">Release path</h2>
      </div>
      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={item.version}>
            <span>{item.version}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div>
          <p className="section-kicker">/contact</p>
          <h2 id="contact-title">Start a build request</h2>
          <p>
            Open to full stack, frontend, backend integration, and cloud-ready web projects.
          </p>
        </div>
        <div className="contact-actions" aria-label="Contact links">
          <a href={links.email}>
            <Mail size={18} aria-hidden="true" />
            Email
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
          <a href={links.resume} target="_blank" rel="noreferrer">
            <FileDown size={18} aria-hidden="true" />
            Resume
          </a>
        </div>
      </div>
      <footer>
        <span>Deployment target: AWS S3 + CloudFront</span>
        <a href={links.github} target="_blank" rel="noreferrer">
          github.com/ArpanHait
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </footer>
    </section>
  );
}

export default App;
