import React, { useRef, useState } from 'react'

function Marquee({ text, speed = 50 }) {
  const marqueeRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div
      className="overflow-hidden bg-primary p-1 text-light fw-bold shadow lg:text-2xl text-lg"
      style={{ whiteSpace: 'nowrap', position: 'relative' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={marqueeRef}
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          animation: `marquee ${speed}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {text}
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  )
}

export default Marquee
