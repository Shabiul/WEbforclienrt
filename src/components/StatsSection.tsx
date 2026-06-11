'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: 10, suffix: '+', label: 'Years of Experience', sub: 'Serving Ethiopian enterprises' },
  { value: 100, suffix: '+', label: 'Enterprise Deployments', sub: 'Across Ethiopia' },
  { value: 3, suffix: '', label: 'Global Offices', sub: 'Addis Ababa · London · Bangalore' },
  { value: 6, suffix: '+', label: 'Technology Partners', sub: 'World-class alliances' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section style={{ background: 'white', padding: '60px 24px', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '0',
      }}>
        {stats.map((stat, i) => (
          <div key={stat.label} style={{
            textAlign: 'center', padding: '24px 16px',
            borderRight: i < stats.length - 1 ? '1px solid #e2e8f0' : 'none',
          }}>
            <div style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 800, color: '#1a56db', letterSpacing: '-0.04em', lineHeight: 1 }}>
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', margin: '8px 0 4px' }}>
              {stat.label}
            </div>
            <div style={{ fontSize: '12.5px', color: '#94a3b8' }}>
              {stat.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
