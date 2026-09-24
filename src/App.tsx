import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Box,
  Braces,
  ChevronDown,
  CirclePower,
  ExternalLink,
  Headphones,
  MemoryStick,
  Mic2,
  MonitorCog,
  Music2,
  Rocket,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

const workItems = [
  { number: "01", title: "Robin", subtitle: "Voice assistant", href: "/work/robin/", icon: Mic2 },
  { number: "02", title: "3D Studies", subtitle: "Modelling & rendering", href: "/work/3d-studies/", icon: Box },
  { number: "03", title: "Game Development", subtitle: "Learning in public", href: "/work/game-development/", icon: Braces },
];

const skills = [
  { label: "Development", items: ["Python", "APIs", "Automation", "Git & GitHub"] },
  { label: "Creative", items: ["Blender", "3D modelling", "Rendering", "Visual design"] },
  { label: "Languages", items: ["English", "Japanese — JLPT N2", "Sinhala"] },
];

const robinCapabilities = [
  { icon: Mic2, title: "Natural voice commands", copy: "Listens for the Robin wake word, understands everyday requests, and responds with spoken feedback." },
  { icon: Music2, title: "Spotify control", copy: "Plays songs, albums, playlists, and liked music—with pause, skip, seek, shuffle, and volume controls." },
  { icon: Rocket, title: "App & web launcher", copy: "Opens everyday tools, games, websites, and creative apps through quick spoken commands." },
  { icon: Headphones, title: "Audio switching", copy: "Toggles Windows output between Realtek speakers and Robin’s Bluetooth earphones." },
  { icon: MemoryStick, title: "Persistent memory", copy: "Stores useful details between sessions so the assistant can remember instead of starting from zero." },
  { icon: CirclePower, title: "System-tray control", copy: "Runs quietly in the background with pause, resume, log access, startup, and exit controls." },
];

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/#top" aria-label="Pazalax, home">
        P<span aria-hidden="true">.</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="/#about">About</a>
        <details className="work-menu">
          <summary>Work <ChevronDown size={14} aria-hidden="true" /></summary>
          <div className="work-menu-panel">
            <p>Selected work</p>
            {workItems.map((item) => {
              const Icon = item.icon;
              return (
                <a href={item.href} key={item.title}>
                  <span>{item.number}</span>
                  <Icon size={17} strokeWidth={1.5} aria-hidden="true" />
                  <span><strong>{item.title}</strong><small>{item.subtitle}</small></span>
                </a>
              );
            })}
          </div>
        </details>
        <a href="/#skills">Skills</a>
      </nav>
      <a className="contact-link" href="/#contact">
        Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </header>
  );
}

function Footer({ backToTop = true }: { backToTop?: boolean }) {
  return (
    <footer>
      <a className="wordmark" href="/#top" aria-label="Pazalax, home">P<span aria-hidden="true">.</span></a>
      <p>Designed &amp; built by Pazalax.</p>
      <a href={backToTop ? "#top" : "/#top"}>{backToTop ? "Back to top ↑" : "Back home"}</a>
    </footer>
  );
}

function HomePage() {
  return (
    <main>
      <Header />
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow fade-up">Game / CG / Development</p>
          <h1 id="hero-title" className="fade-up delay-1">Building digital worlds<span>and useful tools.</span></h1>
          <p className="hero-intro fade-up delay-2">
            I&apos;m Pazalax, an international student in Osaka exploring the space between creative technology, 3D art, and software.
          </p>
          <div className="hero-actions fade-up delay-3">
            <a className="primary-button" href="/work/robin/">See my work <ArrowDown size={17} aria-hidden="true" /></a>
            <span className="location"><MonitorCog size={16} aria-hidden="true" /> Osaka, Japan</span>
          </div>
        </div>
        <div className="hero-mark fade-up delay-2" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="mark-core"><span>P</span></div>
          <span className="orbit-label orbit-label-top">CREATE</span>
          <span className="orbit-label orbit-label-bottom">LEARN / BUILD</span>
        </div>
        <div className="hero-index" aria-hidden="true"><span>Portfolio</span><span>2026</span></div>
      </section>

      <section className="about section-shell" id="about" aria-labelledby="about-title">
        <div className="section-kicker"><span>01</span><p>About</p></div>
        <div className="about-content">
          <h2 id="about-title">Curiosity first.<br />Craft follows.</h2>
          <div className="about-copy">
            <p>I&apos;m from Sri Lanka and currently studying in Osaka, Japan. My goal is to build a career in game development, CG, and 3D—work where technical thinking and visual storytelling meet.</p>
            <p>I learn by making. That might mean modelling in Blender, solving a tricky Python problem, or turning an idea like Robin into a tool I can use every day.</p>
          </div>
        </div>
      </section>

      <section className="skills section-shell" id="skills" aria-labelledby="skills-title">
        <div className="section-kicker"><span>02</span><p>Capabilities</p></div>
        <div className="skills-layout">
          <div>
            <h2 id="skills-title">Tools I use.<br />Skills I&apos;m growing.</h2>
            <p className="skills-intro">A mix of code, visual craft, and communication—built through real projects and consistent practice.</p>
          </div>
          <div className="skill-groups">
            {skills.map((skill) => (
              <div className="skill-group" key={skill.label}>
                <p>{skill.label}</p>
                <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
        <div className="contact-copy"><p className="eyebrow">What&apos;s next?</p><h2 id="contact-title">Let&apos;s make something worth remembering.</h2></div>
        <div className="contact-side">
          <p>I&apos;m learning, building, and open to meeting people who care about games, CG, 3D, and creative technology.</p>
          <a className="contact-email" href="mailto:idunilbandaraweerakoon@gmail.com">idunilbandaraweerakoon@gmail.com</a>
          <nav className="social-links" aria-label="Social profiles">
            <a href="https://github.com/PaZaLaX" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/idunilbandara/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
            <a href="https://www.facebook.com/idunil.bandara.5076" target="_blank" rel="noopener noreferrer">Facebook <ArrowUpRight size={15} aria-hidden="true" /></a>
          </nav>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function RobinInterface() {
  return (
    <div className="robin-interface robin-interface-large">
      <div className="robin-titlebar"><span className="robin-status-dot" /><span>ROBIN / ONLINE</span><span>01:42</span></div>
      <div className="robin-listening"><span className="robin-mic"><Mic2 size={21} strokeWidth={1.6} /></span><div><small>Listening...</small><strong>“Robin, switch audio.”</strong></div></div>
      <div className="robin-waveform">{[14, 27, 42, 23, 52, 34, 19, 39, 25, 46, 30, 17].map((height, index) => <i key={index} style={{ height }} />)}</div>
      <div className="robin-response"><Sparkles size={15} /><p>Switched audio to <strong>ROBIN&apos;S EARPHONES</strong></p></div>
      <div className="robin-modules"><span>Spotify</span><span>Apps</span><span>Memory</span></div>
    </div>
  );
}

function RobinPage() {
  return (
    <main className="project-page robin-page">
      <Header />
      <section className="project-hero" id="top">
        <div className="project-hero-copy">
          <a className="back-link" href="/#top"><ArrowLeft size={15} /> Portfolio</a>
          <p className="eyebrow">01 / Featured project</p>
          <h1>Robin</h1>
          <p className="project-lede">A personal Windows voice assistant built to turn spoken requests into useful everyday actions.</p>
          <div className="project-hero-actions">
            <a className="primary-button" href="https://github.com/PaZaLaX/Robin-Voice-Assistant" target="_blank" rel="noopener noreferrer">View source <ExternalLink size={16} /></a>
            <span className="project-status"><i /> Open source · Python</span>
          </div>
        </div>
        <div className="project-hero-visual" aria-label="Robin listening interface demonstration"><RobinInterface /></div>
        <div className="project-hero-index"><span>Windows 11</span><span>Voice / automation / APIs</span></div>
      </section>

      <section className="project-intro section-shell">
        <div className="section-kicker"><span>01</span><p>The idea</p></div>
        <div className="project-intro-copy">
          <h2>An assistant made for the way I use my PC.</h2>
          <div><p>Robin started as a voice-command experiment and grew into a modular desktop assistant that stays available from the Windows system tray.</p><p>It connects speech recognition with OpenAI answers, Spotify playback, app launching, saved memory, and direct control over Windows audio devices.</p></div>
        </div>
      </section>

      <section className="robin-capabilities section-shell" aria-labelledby="capabilities-title">
        <div className="section-heading project-section-heading"><div className="section-kicker"><span>02</span><p>Capabilities</p></div><h2 id="capabilities-title">What Robin can do.</h2></div>
        <div className="capability-grid">
          {robinCapabilities.map((item) => { const Icon = item.icon; return <article key={item.title}><Icon size={23} strokeWidth={1.5} /><h3>{item.title}</h3><p>{item.copy}</p></article>; })}
        </div>
      </section>

      <section className="robin-gallery section-shell" aria-labelledby="gallery-title">
        <div className="section-heading project-section-heading"><div className="section-kicker"><span>03</span><p>In use</p></div><h2 id="gallery-title">Quietly in the background.</h2></div>
        <div className="gallery-grid">
          <figure className="gallery-menu"><div className="gallery-image"><img src="/images/robin/tray-menu-upscaled.png" alt="Robin tray menu with listening controls, log access, and exit action" /></div><figcaption><span>Tray controls</span><p>Pause or resume listening, inspect the log, and close Robin without opening a full app window.</p></figcaption></figure>
          <figure className="gallery-icon"><div className="gallery-image"><img src="/images/robin/tray-icon-upscaled.png" alt="Green Robin R icon in the Windows system tray" /></div><figcaption><span>Always available</span><p>A lightweight tray presence keeps the assistant close without taking over the desktop.</p></figcaption></figure>
        </div>
      </section>

      <section className="architecture section-shell" aria-labelledby="architecture-title">
        <div className="section-kicker"><span>04</span><p>Under the hood</p></div>
        <div className="architecture-layout">
          <div><h2 id="architecture-title">Built as a collection of focused modules.</h2><p>Each part has one job, which makes Robin easier to expand, test, and repair.</p></div>
          <ol>
            <li><span>01</span><div><strong>Listen & understand</strong><p>Wake-word detection, speech recognition, and command routing turn voice into intent.</p></div></li>
            <li><span>02</span><div><strong>Choose the right tool</strong><p>Dedicated controllers handle AI, Spotify, apps, memory, YouTube, and Windows audio.</p></div></li>
            <li><span>03</span><div><strong>Act & respond</strong><p>Robin performs the action, records useful logs, and speaks the result through Microsoft Zira.</p></div></li>
          </ol>
        </div>
        <div className="module-strip" aria-label="Robin modules"><span>main.py</span><span>command_handler.py</span><span>spotify_controller.py</span><span>audio_controller.py</span><span>memory.py</span><span>ai.py</span></div>
      </section>

      <section className="project-cta section-shell">
        <TerminalSquare size={34} strokeWidth={1.35} />
        <div><p className="eyebrow">Explore the code</p><h2>Robin is public on GitHub.</h2></div>
        <a className="primary-button" href="https://github.com/PaZaLaX/Robin-Voice-Assistant" target="_blank" rel="noopener noreferrer">Open repository <ArrowUpRight size={16} /></a>
      </section>
      <Footer />
    </main>
  );
}

function StudiesPage() {
  return (
    <main className="project-page studies-page">
      <Header />
      <section className="studies-hero" id="top">
        <div className="studies-hero-copy">
          <a className="back-link" href="/#top"><ArrowLeft size={15} /> Portfolio</a>
          <p className="eyebrow">02 / 3D studies</p>
          <h1>Learning<br />in layers.</h1>
          <p className="project-lede">Two Blender still-life renders exploring modelling, materials, lighting, and how small changes can reshape a scene.</p>
          <div className="study-tags" aria-label="Tools and focus areas"><span>Blender</span><span>Modelling</span><span>Materials</span><span>Lighting</span></div>
        </div>
        <figure className="studies-hero-image">
          <img src="/images/donut-study-02-render.jpg" alt="Blender render of four chocolate-glazed donuts arranged on a plate beside a wooden coffee mug" />
          <figcaption><span>02</span> Donut study / final variation</figcaption>
        </figure>
        <div className="project-hero-index"><span>Blender studies</span><span>Render / mesh / iteration</span></div>
      </section>

      <section className="project-intro section-shell">
        <div className="section-kicker"><span>01</span><p>The study</p></div>
        <div className="project-intro-copy">
          <h2>One scene, pushed through two directions.</h2>
          <div><p>I began with a quiet breakfast still life: one pink-glazed donut, a plate, and a wooden mug of coffee.</p><p>For the second version, I kept the same visual foundation but changed the icing, multiplied the donuts, and built a taller, more energetic arrangement.</p></div>
        </div>
      </section>

      <section className="study-entry section-shell" aria-labelledby="study-one-title">
        <div className="study-entry-heading">
          <div className="section-kicker"><span>02</span><p>First render</p></div>
          <div><p className="study-overline">Pink glaze / still life</p><h2 id="study-one-title">Building the foundation.</h2></div>
          <p>The first pass focuses on a simple, readable composition. A soft pink glaze and colourful sprinkles pull attention toward the donut, while the plate, coffee, and textured surface give it a believable setting.</p>
        </div>
        <div className="study-pair">
          <figure className="study-render"><div className="study-image-wrap"><img src="/images/donut-study-01-render.jpg" alt="First Blender render showing a pink-glazed sprinkled donut on a ceramic plate beside a wooden coffee mug" /></div><figcaption><span>Final render</span><p>A restrained first composition with warm highlights balanced against a cooler background.</p></figcaption></figure>
          <figure className="study-mesh"><div className="study-image-wrap"><img src="/images/donut-study-01-mesh.png" alt="Blender mesh view of the first donut, plate, and mug scene" /></div><figcaption><span>Mesh view</span><p>The underlying forms: a dense donut and icing surface, supported by simpler plate and mug geometry.</p></figcaption></figure>
        </div>
      </section>

      <section className="study-entry section-shell study-entry-second" aria-labelledby="study-two-title">
        <div className="study-entry-heading">
          <div className="section-kicker"><span>03</span><p>Second render</p></div>
          <div><p className="study-overline">Chocolate variation / iteration</p><h2 id="study-two-title">More depth. More character.</h2></div>
          <p>The second pass turns the same idea into a fuller scene. Chocolate icing creates stronger contrast, while the stacked donuts add height, overlap, and a clearer sense of abundance.</p>
        </div>
        <div className="study-pair study-pair-reverse">
          <figure className="study-render"><div className="study-image-wrap"><img src="/images/donut-study-02-render.jpg" alt="Second Blender render showing four chocolate-glazed sprinkled donuts arranged on a ceramic plate beside a wooden coffee mug" /></div><figcaption><span>Final render</span><p>A bolder material choice and layered arrangement make the revised composition feel richer and more dimensional.</p></figcaption></figure>
          <figure className="study-mesh"><div className="study-image-wrap"><img src="/images/donut-study-02-mesh.png" alt="Blender mesh view of the second stacked donut scene" /></div><figcaption><span>Mesh view</span><p>The expanded scene reveals how repeated forms were rotated, stacked, and overlapped to create movement.</p></figcaption></figure>
        </div>
      </section>

      <section className="studies-outro section-shell">
        <Box size={34} strokeWidth={1.35} />
        <div><p className="eyebrow">Still learning</p><h2>Every render is a new experiment.</h2><p>These studies are part of an ongoing process: make something, notice what can improve, and build the next version with more intention.</p></div>
      </section>
      <Footer />
    </main>
  );
}

function PlaceholderProjectPage({ title, label, description, icon: Icon }: { title: string; label: string; description: string; icon: typeof Box }) {
  return (
    <main className="project-page placeholder-page">
      <Header />
      <section className="placeholder-hero" id="top">
        <div>
          <a className="back-link" href="/#top"><ArrowLeft size={15} /> Portfolio</a>
          <p className="eyebrow">Selected work / Case study</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <span className="coming-label">{label}</span>
        </div>
        <div className="placeholder-orbit" aria-hidden="true"><Icon size={72} strokeWidth={1.1} /></div>
      </section>
      <Footer />
    </main>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/work/robin") return <RobinPage />;
  if (path === "/work/3d-studies") return <StudiesPage />;
  if (path === "/work/game-development") return <PlaceholderProjectPage title="Game Development" label="Page ready for your next direction" description="The next chapter: learning the visual and technical foundations behind interactive worlds." icon={Braces} />;
  return <HomePage />;
}
