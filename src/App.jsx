import './App.css'

const YOUTUBE_VIDEO = 'https://www.youtube.com/watch?v=60VmX56dpxg'

const PROJECTS = [
  {
    title: 'Birdsong',
    description:
      'of riparian inspiration. featuring birds from outside the target on W 100th street',
    start: 0,
  },
  {
    title: 'Daffodil',
    description: 'the first of these tracks, Daffodils are the first flowers to bloom in the spring.',
    start: 200,
  },
  {
    title: 'Summer Wind',
    description: 'Can you hear the wind? Coming from the trees?',
    start: 451,
  },
  {
    title: 'Foliage',
    description: 'look under the trees, watch each branch add another filter to the light',
    start: 763,
  },
  {
    title: "Now There's That Fear Again (cover)",
    description: 'a new friend put me on to this tune. By mùm',
    start: 970,
  },
  {
    title: 'Thunder Comes From Space',
    description: 'lightning is stored in the stars',
    start: 1150,
  },
  {
    title: 'Daisy',
    description: 'but im not a keys player',
    start: 1325,
  },
]

function getYouTubeId(urlOrId) {
  if (/^[\w-]{11}$/.test(urlOrId)) return urlOrId
  const match = urlOrId.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/,
  )
  return match?.[1] ?? ''
}

function getYouTubeEmbedUrl(id, start = 0) {
  const url = new URL(`https://www.youtube.com/embed/${id}`)
  if (start > 0) url.searchParams.set('start', String(start))
  return url.toString()
}

function App() {
  const youtubeId = getYouTubeId(YOUTUBE_VIDEO)

  return (
    <div className="page">
      <header className="header">
        <span className="logo">Art Mandell</span>
        <nav className="nav">
          <a href="#work">my work</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <main className="main">
        <p>
          Some cool sounds 
        </p>
        <p>
          Trumpet player, 
          physical spaces. Elevator 
          Album coming out A Day in the Park
          alwys on the hunt for new sounds new projects and new collabs
        </p>
        <p className="status">
          BASED asf IN NY{' '}
          <a href="https://edikted.com" target="_blank" rel="noopener noreferrer">
            @EDIKTED
          </a>
        </p>
      </main>

      <section id="work" className="work">
        <div className="work-divider">
          <h2 className="work-heading">my work</h2>
          <hr />
        </div>

        {PROJECTS.map((project) => (
          <article key={project.title} className="work-item">
            <div className="work-description">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>

            {youtubeId ? (
              <div className="video-embed">
                <iframe
                  src={getYouTubeEmbedUrl(youtubeId, project.start)}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <p className="video-placeholder">
                Add your YouTube link to <code>YOUTUBE_VIDEO</code> in App.jsx
              </p>
            )}
          </article>
        ))}
      </section>
    </div>
  )
}

export default App
