import { useState } from 'react'
import { projects } from './data/projects'

export default function App() {
  const [open, setOpen] = useState(null)

  return (
    <>
      <a href="#main" className="skip-nav">본문 바로가기</a>

      <header className="header">
        <h1 className="header__logo">YOUR NAME</h1>
        <nav className="header__nav" aria-label="주요 메뉴">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>


      <main id="main">
        <section className="hero">
          <h2>웹 퍼블리셔 포트폴리오</h2>
          <p>웹 표준 · 접근성 · 반응형</p>
        </section>

        <section id="about" className="section">
          <h3>About Me</h3>
          <p>유지보수와 협업을 고려한 마크업을 지향하는 퍼블리셔입니다.</p>
        </section>

        <section id="projects" className="section">
          <h3>Projects</h3>
          <div className="projects">
            {projects.map(project => (
              <article
                key={project.id}
                className="projects__item"
                onClick={() => setOpen(project)}
              >
                <h4>{project.title}</h4>
                <p>기여도 {project.contribution}</p>
              </article>
            ))}
          </div>
        </section>
        

        <section id="skills" className="section">
          <h3>Skills</h3>
          <ul className="skills">
            <li>HTML5</li>
            <li>SCSS</li>
            <li>Flex / Grid</li>
            <li>Accessibility</li>
            <li>React</li>
          </ul>
        </section>

        <section id="contact" className="section">
          <h3>Contact</h3>
          <p>Email: your@email.com</p>
        </section>
      </main>

      {open && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal__content">
            <button onClick={() => setOpen(null)}>닫기</button>
            <h4>{open.title}</h4>
            <p>{open.description}</p>
            <p>사용 기술: {open.skills.join(', ')}</p>
          </div>
        </div>
      )}
    </>
  )
}
