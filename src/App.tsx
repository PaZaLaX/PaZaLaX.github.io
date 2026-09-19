import {
  ArrowDown,
  ArrowUpRight,
  Box,
  Braces,
  MapPin,
  Mic2,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Robin",
    subtitle: "Personal voice assistant",
    description:
      "A modular Windows voice assistant built in Python, with natural voice commands, Spotify control, app launching, persistent memory, and audio-device switching.",
    tags: ["Python", "Spotify API", "Speech recognition"],
    icon: Mic2,
    status: "Active project",
    className: "project-robin",
  },
  {
    number: "02",
    title: "3D Studies",
    subtitle: "Modelling & rendering",
    description:
      "A growing collection of Blender studies focused on form, materials, lighting, and the fundamentals behind believable 3D scenes.",
    tags: ["Blender", "3D modelling", "Rendering"],
    icon: Box,
    status: "Building the collection",
    className: "project-blender",
  },
  {
    number: "03",
    title: "Game Development",
    subtitle: "The next chapter",
    description:
      "Learning the technical and visual foundations needed to create games, with a long-term focus on character work, environments, and interactive experiences.",
    tags: ["Game design", "CG", "Creative coding"],
    icon: Braces,
    status: "Currently learning",
    className: "project-game",
  },
];

const skills = [
  {
    label: "Development",
    items: ["Python", "APIs", "Automation", "Git & GitHub"],
  },
  {
    label: "Creative",
    items: ["Blender", "3D modelling", "Rendering", "Visual design"],
  },
  {
    label: "Languages",
    items: ["English", "Japanese — JLPT N2", "Sinhala"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Pazalax, back to top">
          P<span aria-hidden="true">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
        </nav>
        <a className="contact-link" href="#contact">
          Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow fade-up">Game / CG / Development</p>
          <h1 id="hero-title" className="fade-up delay-1">
            Building digital worlds
            <span>and useful tools.</span>
          </h1>
          <p className="hero-intro fade-up delay-2">
            I&apos;m Pazalax, an international student in Osaka exploring the
            space between creative technology, 3D art, and software.
          </p>
          <div className="hero-actions fade-up delay-3">
            <a className="primary-button" href="#work">
              See my work <ArrowDown size={17} aria-hidden="true" />
            </a>
            <span className="location">
              <MapPin size={16} aria-hidden="true" /> Osaka, Japan
            </span>
          </div>
        </div>

        <div className="hero-mark fade-up delay-2" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="mark-core">
            <span>P</span>
          </div>
          <span className="orbit-label orbit-label-top">CREATE</span>
          <span className="orbit-label orbit-label-bottom">LEARN / BUILD</span>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>Portfolio</span>
          <span>2026</span>
        </div>
      </section>

      <section className="about section-shell" id="about" aria-labelledby="about-title">
        <div className="section-kicker">
          <span>01</span>
          <p>About</p>
        </div>
        <div className="about-content">
          <h2 id="about-title">
            Curiosity first.
            <br />Craft follows.
          </h2>
          <div className="about-copy">
            <p>
              I&apos;m from Sri Lanka and currently studying in Osaka, Japan. My
              goal is to build a career in game development, CG, and 3D—work
              where technical thinking and visual storytelling meet.
            </p>
            <p>
              I learn by making. That might mean modelling in Blender, solving
              a tricky Python problem, or turning an idea like Robin into a
              tool I can use every day.
            </p>
          </div>
        </div>
      </section>

      <section className="work section-shell" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div className="section-kicker">
            <span>02</span>
            <p>Selected work</p>
          </div>
          <h2 id="work-title">Projects in motion.</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className={`project-card ${project.className}`} key={project.title}>
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.status}</span>
                </div>
                <div className="project-visual" aria-hidden="true">
                  <div className="visual-frame">
                    <Icon size={42} strokeWidth={1.35} />
                    {project.title === "Robin" && (
                      <div className="waveform">
                        {[18, 34, 48, 27, 58, 39, 22, 45, 31].map((height, index) => (
                          <i key={index} style={{ height }} />
                        ))}
                      </div>
                    )}
                    {project.title === "3D Studies" && <div className="render-grid" />}
                    {project.title === "Game Development" && (
                      <Sparkles className="spark-icon" size={22} />
                    )}
                  </div>
                </div>
                <div className="project-copy">
                  <p className="project-subtitle">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="skills section-shell" id="skills" aria-labelledby="skills-title">
        <div className="section-kicker">
          <span>03</span>
          <p>Capabilities</p>
        </div>
        <div className="skills-layout">
          <div>
            <h2 id="skills-title">Tools I use.<br />Skills I&apos;m growing.</h2>
            <p className="skills-intro">
              A mix of code, visual craft, and communication—built through
              real projects and consistent practice.
            </p>
          </div>
          <div className="skill-groups">
            {skills.map((skill) => (
              <div className="skill-group" key={skill.label}>
                <p>{skill.label}</p>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="eyebrow">What&apos;s next?</p>
          <h2 id="contact-title">Let&apos;s make something worth remembering.</h2>
        </div>
        <div className="contact-side">
          <p>
            I&apos;m learning, building, and open to meeting people who care about
            games, CG, 3D, and creative technology.
          </p>
          <a className="contact-email" href="mailto:idunilbandaraweerakoon@gmail.com">
            idunilbandaraweerakoon@gmail.com
          </a>
          <nav className="social-links" aria-label="Social profiles">
            <a href="https://github.com/PaZaLaX" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/idunilbandara/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
            <a href="https://www.facebook.com/idunil.bandara.5076" target="_blank" rel="noopener noreferrer">Facebook <ArrowUpRight size={15} aria-hidden="true" /></a>
          </nav>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top" aria-label="Pazalax, back to top">
          P<span aria-hidden="true">.</span>
        </a>
        <p>Designed &amp; built by Pazalax.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
