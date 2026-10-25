import { useState } from 'react';
import {
  logoGithub, logoInstagram, mailOutline, arrowUpOutline, arrowForwardOutline,
  codeSlashOutline, gameControllerOutline, globeOutline, terminalOutline,
  menuOutline, closeOutline, openOutline, sparklesOutline, filterOutline
} from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const projects = [
  {
    name: 'OtakuHub',
    description: 'Um espaço digital para quem curte cultura otaku.',
    url: 'https://pjt-otakuhub.netlify.app/',
    category: 'Sites',
    kind: 'Comunidade',
    number: '01',
    accent: 'violet',
    preview: 'https://image.thum.io/get/width/1200/crop/760/noanimate/https://pjt-otakuhub.netlify.app/',
  },
  {
    name: 'Máfia do Pix',
    description: 'Projeto web com identidade visual própria e foco em interação.',
    url: 'https://mafiadopix.netlify.app/',
    category: 'Aplicações',
    kind: 'Web app',
    number: '02',
    accent: 'blue',
    preview: 'https://image.thum.io/get/width/1200/crop/760/noanimate/https://mafiadopix.netlify.app/',
  },
  {
    name: 'Spawnverse',
    description: 'Um universo digital em constante construção.',
    url: 'https://spawnverse.netlify.app/',
    category: 'Sites',
    kind: 'Experimento',
    number: '03',
    accent: 'green',
    preview: 'https://image.thum.io/get/width/1200/crop/760/noanimate/https://spawnverse.netlify.app/',
  },
];

const filters = ['Todos', 'Sites', 'Aplicações', 'Jogos'];

function StatusPill() {
  return (
    <div className="status-pill" title="Indicador visual do portfólio">
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
          <a href="#sites" onClick={closeMenu}>Projetos</a>
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
        <span className="project-number">{project.number} / {project.category === 'Aplicações' ? 'APP' : 'WEB'}</span>
        <span className="project-category">{project.kind}</span>
      </div>
      <a className="project-preview" href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name}`}>
        <img src={project.preview} alt={`Prévia do site ${project.name}`} loading="lazy" />
        <span className="preview-overlay"><IonIcon icon={openOutline} /> Abrir projeto</span>
      </a>
      <div className="project-copy">
        <h3>{project.name}<span className="project-dot">.</span></h3>
        <p>{project.description}</p>
      </div>
      <div className="project-actions">
        <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
          Visitar projeto <IonIcon icon={arrowUpOutline} />
        </a>
      </div>
    </article>
  );
}

function FutureGameCard() {
  return (
    <article className="project-card accent-pink future-project">
      <div className="project-top">
        <span className="project-number">04 / GAME</span>
        <span className="project-category">Em desenvolvimento</span>
      </div>
      <div className="future-art" aria-hidden="true">
        <div className="future-grid" />
        <div className="future-glow" />
        <IonIcon icon={gameControllerOutline} />
        <span className="future-coordinate">PLAYGROUND // 001</span>
      </div>
      <div className="project-copy">
        <h3>Projeto autoral<span className="project-dot">.</span></h3>
        <p>Um jogo ainda em planejamento. Esta área vai ganhar vida quando a primeira experiência estiver pronta.</p>
      </div>
      <div className="project-link project-link-muted"><span>Em breve</span><IonIcon icon={sparklesOutline} /></div>
    </article>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const visibleProjects = projects.filter((project) => activeFilter === 'Todos' || project.category === activeFilter);
  const showGame = activeFilter === 'Todos' || activeFilter === 'Jogos';

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
                <div>
                  <h2>Sites & <span className="gradient-text">aplicações.</span></h2>
                  <p className="projects-subtitle">Uma seleção de projetos publicados e ideias em desenvolvimento.</p>
                </div>
                <span className="project-count"><span className="count-dot" /> {projects.length + 1} PROJETOS</span>
              </div>
            </div>
            <div className="project-toolbar">
              <span><IonIcon icon={filterOutline} /> FILTRAR POR TIPO</span>
              <div className="project-filters" role="group" aria-label="Filtrar projetos">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={activeFilter === filter ? 'filter-button active' : 'filter-button'}
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={activeFilter === filter}
                  >{filter}</button>
                ))}
              </div>
            </div>
            <div className="projects-grid">
              {visibleProjects.map((project) => <WebsiteCard key={project.name} project={project} />)}
              {showGame && <FutureGameCard />}
            </div>
            {visibleProjects.length === 0 && !showGame && <p className="empty-projects">Nenhum projeto nesta categoria por enquanto.</p>}
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
                <a className="coming-soon" href="#sites" onClick={() => setActiveFilter('Jogos')}><span className="coming-dot" /> VER PROJETO EM PREPARAÇÃO <span aria-hidden="true">↗</span></a>
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