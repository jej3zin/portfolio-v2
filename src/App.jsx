import { useState } from 'react';
import {
  logoGithub, logoInstagram, mailOutline, arrowUpOutline, arrowForwardOutline,
  codeSlashOutline, gameControllerOutline, globeOutline, terminalOutline,
  menuOutline, closeOutline, openOutline, sparklesOutline
} from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const websites = [
  {
    name: 'OtakuHub',
    description: 'Um espaço digital para quem curte cultura otaku.',
    url: 'https://pjt-otakuhub.netlify.app/',
    category: 'Comunidade',
    number: '01',
    accent: 'violet',
  },
  {
    name: 'Máfia do Pix',
    description: 'Projeto web com identidade visual própria e foco em interação.',
    url: 'https://mafiadopix.netlify.app/',
    category: 'Web app',
    number: '02',
    accent: 'blue',
  },
  {
    name: 'Spawnverse',
    description: 'Um universo digital em constante construção.',
    url: 'https://spawnverse.netlify.app/',
    category: 'Experimento',
    number: '03',
    accent: 'green',
  },
];

function StatusPill() {
  return (
    <div className="status-pill">
      <span className="status-light" aria-hidden="true" />
      <span>Portfólio online</span>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="H. DEV, início">
          H. DEV<span>_</span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Navegação principal">
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#sites" onClick={closeMenu}>Sites</a>
          <a href="#jogos" onClick={closeMenu}>Jogos</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>
        <div className="header-right">
          <StatusPill />
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
            <IonIcon icon={menuOpen ? closeOutline : menuOutline} />
          </button>
        </div>
      </div>
    </header>
  );
}

function SectionLabel({ children, number }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="label-line" />
      <span>{children}</span>
    </div>
  );
}

function WebsiteCard({ project }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-top">
        <span className="project-number">{project.number} / WEB</span>
        <span className="project-category">{project.category}</span>
      </div>
      <div className="project-art" aria-hidden="true">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-core"><IonIcon icon={globeOutline} /></div>
        <span className="art-spark spark-one">✳</span>
        <span className="art-spark spark-two">✦</span>
      </div>
      <div className="project-copy">
        <h3>{project.name}<span className="project-dot">.</span></h3>
        <p>{project.description}</p>
      </div>
      <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
        Visitar projeto <IonIcon icon={arrowUpOutline} />
      </a>
    </article>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero section" id="inicio">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-content">
            <div className="eyebrow"><span className="eyebrow-mark">✳</span> DESENVOLVIMENTO & CRIATIVIDADE</div>
            <h1>Ideias que viram<br /><span className="gradient-text">experiências digitais.</span></h1>
            <p className="hero-description">
              Desenvolvendo sites, explorando novas ideias e construindo projetos
              digitais — um commit de cada vez.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#sites">Explorar projetos <IonIcon icon={arrowForwardOutline} /></a>
              <a className="button button-quiet" href="#sobre">Conhecer o portfólio</a>
            </div>
            <div className="hero-foot">
              <div className="hero-foot-line" />
              <span>WEB · CÓDIGO · JOGOS</span>
              <span className="hero-index">SCROLL PARA EXPLORAR <span>↓</span></span>
            </div>
          </div>
          <div className="hero-orb orb-a" aria-hidden="true" />
          <div className="hero-orb orb-b" aria-hidden="true" />
        </section>

        <section className="intro-section section" id="sobre">
          <div className="container intro-layout">
            <SectionLabel number="01">UM POUCO SOBRE</SectionLabel>
            <div className="intro-copy">
              <h2>Minimalismo na forma.<br /><span className="muted-heading">Personalidade nos detalhes.</span></h2>
              <p>Este é meu espaço na internet para reunir projetos, experimentos e ideias. Cada projeto é uma oportunidade de aprender, testar possibilidades e criar algo que valha a pena explorar.</p>
              <div className="skill-list">
                <span><IonIcon icon={codeSlashOutline} /> Desenvolvimento web</span>
                <span><IonIcon icon={terminalOutline} /> Código & experimentação</span>
                <span><IonIcon icon={sparklesOutline} /> Design digital</span>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section section" id="sites">
          <div className="container">
            <div className="section-heading">
              <SectionLabel number="02">PROJETOS SELECIONADOS</SectionLabel>
              <div className="heading-row">
                <h2>Sites & <span className="gradient-text">aplicações.</span></h2>
                <p>Projetos publicados, experiências digitais<br className="desktop-break" /> e ideias ganhando vida.</p>
              </div>
            </div>
            <div className="projects-grid">
              {websites.map((project) => <WebsiteCard key={project.name} project={project} />)}
            </div>
          </div>
        </section>

        <section className="games-section section" id="jogos">
          <div className="container">
            <SectionLabel number="03">OUTRO UNIVERSO</SectionLabel>
            <div className="game-panel">
              <div className="game-copy">
                <div className="game-kicker"><IonIcon icon={gameControllerOutline} /> ÁREA DE JOGOS</div>
                <h2>Playground<br /><span className="gradient-text">em construção.</span></h2>
                <p>Um espaço reservado para jogos autorais e experiências interativas. O primeiro projeto ainda está sendo planejado.</p>
                <span className="coming-soon"><span className="coming-dot" /> NOVOS PROJETOS EM BREVE</span>
              </div>
              <div className="game-visual" aria-hidden="true">
                <div className="game-ring ring-outer" />
                <div className="game-ring ring-middle" />
                <div className="game-ring ring-inner" />
                <div className="game-cross">+</div>
                <div className="game-chip chip-one">PLAYER_01</div>
                <div className="game-chip chip-two">LOADING FUTURE...</div>
                <IonIcon className="game-icon" icon={gameControllerOutline} />
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contato">
          <div className="container contact-inner">
            <SectionLabel number="04">VAMOS CONVERSAR</SectionLabel>
            <h2>Tem uma ideia?<br /><span className="gradient-text">Vamos tirar do papel.</span></h2>
            <p>O próximo projeto pode começar com uma conversa.</p>
            <a className="button button-primary" href="mailto:contato@exemplo.com">Entrar em contato <IonIcon icon={arrowForwardOutline} /></a>
            <div className="contact-decoration" aria-hidden="true">H<span>.</span></div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand" href="#inicio">H. DEV<span>_</span></a>
          <p>Feito com intenção <span>© {new Date().getFullYear()}</span></p>
          <div className="footer-status"><span className="status-light" /> Todos os sistemas visuais operacionais</div>
        </div>
      </footer>
    </>
  );
}

export default App;