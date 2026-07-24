import './App.css'

function App() {
  return (
    <div className="page">
      <header className="header">
        <span className="logo">LAVINA</span>
        <nav className="nav">
          <a href="#work">my work</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <main className="main">
        <p>
          7+ years of freelance and in-house digital design experience within the
          fashion and e-commerce industry. I combine elevated visuals with
          functionality, creating designs that are both beautiful and performance
          driven.
        </p>
        <p>
          Trend-driven creative that lives seamlessly across both digital and
          physical spaces. From social-first content and website design to campaign
          visuals and brand storytelling, I love building elevated, culturally
          relevant work.
        </p>
        <p className="status">
          BASED IN OC, SENIOR GRAPHIC DESIGNER{' '}
          <a href="https://edikted.com" target="_blank" rel="noopener noreferrer">
            @EDIKTED
          </a>
        </p>
      </main>
    </div>
  )
}

export default App
