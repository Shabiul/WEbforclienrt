'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: 20, suffix: '+', label: 'Years of Experience', sub: 'Established 2004 in Addis Ababa' },
  { value: 27000, suffix: '+', label: 'Banking Machines Supplied', sub: 'To the Ethiopia market' },
  { value: 75000, suffix: '+', label: 'Computers Deployed', sub: 'Desktops & laptops nationwide' },
  { value: 3, suffix: '', label: 'Global Offices', sub: 'Addis Ababa · London · Bangalore' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1600
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

  /* Format large numbers with commas */
  const formatted = count >= 1000 ? count.toLocaleString() : count

  return (
    <span ref={ref}>
      {formatted}{suffix}
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
          <div key={stat.label} className="stat-item" style={{
            textAlign: 'center', padding: '24px 16px',
            borderRight: i < stats.length - 1 ? '1px solid #e2e8f0' : 'none',
          }}>
            <div style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#1a56db', letterSpacing: '-0.04em', lineHeight: 1 }}>
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', margin: '8px 0 4px' }}>
              {stat.label}
            </div>
            <div style={{ fontSize: '12px', color: '#94a3b8' }}>
              {stat.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
