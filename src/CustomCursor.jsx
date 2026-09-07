import { useEffect, useState } from 'react'
import './CustomCursor.css'

function ArrowCursor() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M7 4v24l7-6 4.5 11 4.5-1.2-4.2-12.8H30L7 4z"
        fill="url(#y2k-fill)"
        stroke="#000"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 4v24l7-6 4.5 11 4.5-1.2-4.2-12.8H30L7 4z"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <defs>
        <linearGradient id="y2k-fill" x1="7" y1="4" x2="28" y2="32">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#d4d4d4" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function CustomCursor() {
  const [active, setActive] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!hasFinePointer) return

    setActive(true)
    document.body.classList.add('custom-cursor-active')

    const onMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', onMove)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  if (!active) return null

  return (
    <div
      className="custom-cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      aria-hidden="true"
    >
      <ArrowCursor />
    </div>
  )
}

export default CustomCursor
