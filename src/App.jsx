import { useState } from 'react'
import CustomCursor from './CustomCursor'
import './App.css'

const YOUTUBE_VIDEO = 'https://www.youtube.com/watch?v=60VmX56dpxg'

const SOLO_PROJECTS = [
  {
    title: 'Birdsong',
    description: (
      <>
        of <span className="highlight">riparian</span> inspiration. featuring birds
        from outside the target on W 100th street
      </>
    ),
    start: 0,
  },
  {
    title: 'Daffodil',
    description: (
      <>
        the first of these tracks, Daffodils are the{' '}
        <span className="highlight">first</span> flowers to bloom in the{' '}
        <span className="highlight">spring</span>.
      </>
    ),
    start: 200,
  },
  {
    title: 'Summer Wind',
    description: (
      <>
        Can you <span className="highlight">hear</span> the wind? Coming from{' '}
        <span className="highlight">the</span>{' '}
        <span className="highlight">trees</span>?
      </>
    ),
    start: 451,
  },
  {
    title: 'Foliage',
    description: (
      <>
        <span className="highlight">look</span> under the trees,{' '}
        <span className="highlight">watch</span> each branch add another{' '}
        <span className="highlight">filter</span> to the light
      </>
    ),
    start: 763,
  },
  {
    title: "Now There's That Fear Again (cover)",
    description: 'a new friend put me on to this tune. By mùm',
    start: 970,
  },
  {
    title: 'Thunder Comes From Space',
    description: (
      <>
        lightning is stored in the <span className="highlight">stars</span>{' '}
        <span className="sparkle">✨</span>
      </>
    ),
    start: 1150,
  },
]

const GROUP_PROJECTS = [
  {
    title: 'Time Capsule',
    description: 'Performed in a church in Isla Vista, CA, Time Capsule was the last piece of music I played before moving to New York City.',
    credits: 'with Lucian Parisi and J. Fry',
    video: 'https://www.youtube.com/watch?v=kV-zeB1GeQw',
    start: 0,
    layout: 'horizontal',
  },
  {
    title: 'Suite For Drowning',
    description: 'Suite for Drowning is a collection of musical works directly inspired by near death aquatic experiences on the California Coast. This suite of live electroacoustic pieces explores the vastness of the ocean, natural forces, biological fear responses, out of body experience, and after-life.',
    credits: 'with Luca Protopapas, Leo Safir, and Lucian Parisi',
    video: 'https://www.youtube.com/watch?v=-KKzHRUVADY',
    start: 640,
    layout: 'horizontal',
  },
]

const WORK_TABS = [
  { id: 'solo', label: 'A Day in the Park - Solo Project', projects: SOLO_PROJECTS },
  { id: 'group', label: 'Collaborations', projects: GROUP_PROJECTS },
]

const CONTACT_EMAIL = 'matthew.a.mandell@gmail.com'
const CONTACT_PHONE = '(914) 715-0869'

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
  const [activeTab, setActiveTab] = useState('solo')
  const activeProjects =
    WORK_TABS.find((tab) => tab.id === activeTab)?.projects ?? []

  return (
    <div className="page">
      <CustomCursor />
      <header className="header">
        <span className="logo"><span className="highlight">Art Mandell</span></span>
        <nav className="nav">
          <a href="#work">my work</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <section id="about" className="about">
        <div className="about-divider">
          <h2 className="about-heading">about</h2>
          <hr />
        </div>

        <div className="about-content">
          <img
            src="/images/about.png"
            alt="Art Mandell"
            className="about-photo"
          />

          <div className="about-text">
            <p>
              hi,
              i’m <strong>Matthew</strong>. it’s so nice of you to drop by.
            </p>
            <p>
              i’m a trumpet player of jazz background exploring electroacoustic sounds and
              ambient textures. always on the hunt for new sounds and new collaborations.
            </p>
            <p className="status">BASED IN BROOKLYN, NY</p>
          </div>
        </div>
      </section>

      <section id="work" className="work">
        <div className="work-divider">
          <h2 className="work-heading">my work</h2>
          <hr />
        </div>

        <div className="work-tabs" role="tablist" aria-label="Work categories">
          {WORK_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`work-tab${activeTab === tab.id ? ' is-active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div role="tabpanel">
          {activeProjects.length > 0 ? (
            activeProjects.map((project) => (
              <article
                key={project.title}
                className={`work-item${project.layout === 'horizontal' ? ' work-item--full' : ''}`}
              >
                {project.layout === 'horizontal' ? (
                  <>
                    <h2 className="work-title">{project.title}</h2>

                    {getYouTubeId(project.video ?? YOUTUBE_VIDEO) ? (
                      <div className="video-embed video-embed--wide">
                        <iframe
                          src={getYouTubeEmbedUrl(
                            getYouTubeId(project.video ?? YOUTUBE_VIDEO),
                            project.start,
                          )}
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

                    <p className="work-caption">{project.description}</p>
                    {project.credits && (
                      <p className="work-credits">
                        <span className="highlight">{project.credits}</span>
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <div className="work-description">
                      <h2>{project.title}</h2>
                      <p>{project.description}</p>
                    </div>

                    {getYouTubeId(project.video ?? YOUTUBE_VIDEO) ? (
                      <div className="video-embed">
                        <iframe
                          src={getYouTubeEmbedUrl(
                            getYouTubeId(project.video ?? YOUTUBE_VIDEO),
                            project.start,
                          )}
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
                  </>
                )}
              </article>
            ))
          ) : (
            <p className="work-empty">Nothing here yet.</p>
          )}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-divider">
          <h2 className="contact-heading">contact</h2>
          <hr />
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-tagline">
              [let's create <span className="highlight">something cool</span> together]
            </p>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
            <p>
              <a href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`}>{CONTACT_PHONE}</a>
            </p>
          </div>

          <img
            src="/images/contact.png"
            alt="Art Mandell playing trumpet"
            className="contact-photo"
          />
        </div>
      </section>
    </div>
  )
}

export default App
