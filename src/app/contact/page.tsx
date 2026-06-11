'use client'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const offices = [
  {
    city: 'Addis Ababa',
    country: 'Ethiopia — Headquarters',
    address: 'Bole Road, Addis Ababa, Ethiopia',
    phone: '+251 11 XXX XXXX',
    email: 'info@impacttechnology.et',
    hours: 'Mon–Fri: 8:30 AM – 5:30 PM EAT',
    primary: true,
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: 'Central London, United Kingdom',
    phone: '+44 20 XXXX XXXX',
    email: 'london@impacttechnology.et',
    hours: 'Mon–Fri: 9:00 AM – 5:00 PM GMT',
    primary: false,
  },
  {
    city: 'Bangalore',
    country: 'India',
    address: 'Bangalore, Karnataka, India',
    phone: '+91 80 XXXX XXXX',
    email: 'bangalore@impacttechnology.et',
    hours: 'Mon–Fri: 9:00 AM – 6:00 PM IST',
    primary: false,
  },
]

const services = [
  'Computing Infrastructure',
  'Data Center Solutions',
  'Networking',
  'Cybersecurity',
  'End User Computing',
  'Managed Services',
  'Cloud Solutions',
  'IT Consulting',
  'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%', padding: '11px 14px', borderRadius: '8px',
    border: '1.5px solid #e2e8f0', fontSize: '14px', color: '#0f172a',
    outline: 'none', background: 'white', transition: 'border-color 0.15s',
    boxSizing: 'border-box' as const,
  }

  return (
    <>
      <section style={{
        background: 'linear-gradient(135deg, #0c2d72 0%, #1a56db 100%)',
        color: 'white', padding: '72px 24px 64px', textAlign: 'center',
      }}>
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '14px' }}>
          Reach Out
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '18px' }}>
          Contact Us
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.75 }}>
          Ready to discuss your technology needs? Our team of experts is here to help you find the right solution.
        </p>
      </section>

      <section style={{ background: 'white', padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '56px' }}>

          {/* Contact form */}
          <AnimatedSection direction="left">
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>Send Us a Message</h2>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '28px' }}>We typically respond within one business day.</p>

            {submitted ? (
              <div style={{
                background: '#f0fdf4', border: '1.5px solid #86efac',
                borderRadius: '14px', padding: '32px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>✅</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#166534', marginBottom: '8px' }}>Message Received!</h3>
                <p style={{ fontSize: '14px', color: '#15803d' }}>
                  Thank you for reaching out. A member of our team will be in contact with you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>Full Name *</label>
                    <input required style={inputStyle} placeholder="Abebe Kebede" value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = '#1a56db')}
                      onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>Organization</label>
                    <input style={inputStyle} placeholder="Your organization" value={form.org}
                      onChange={e => setForm({ ...form, org: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = '#1a56db')}
                      onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                    />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>Email Address *</label>
                    <input required type="email" style={inputStyle} placeholder="you@company.com" value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = '#1a56db')}
                      onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>Phone Number</label>
                    <input style={inputStyle} placeholder="+251 9X XXX XXXX" value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = '#1a56db')}
                      onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>Area of Interest</label>
                  <select style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }} value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    onFocus={e => (e.target.style.borderColor = '#1a56db')}
                    onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                  >
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>Message *</label>
                  <textarea required rows={5} style={{ ...inputStyle, resize: 'vertical' as const, minHeight: '120px' }}
                    placeholder="Describe your technology needs or project..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={e => (e.target.style.borderColor = '#1a56db')}
                    onBlur={e => (e.target.style.borderColor = '#e2e8f0')}
                  />
                </div>
                <button type="submit" style={{
                  background: '#1a56db', color: 'white', padding: '13px 28px',
                  borderRadius: '9px', fontSize: '15px', fontWeight: 700, border: 'none',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  transition: 'background 0.15s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#1441b5')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#1a56db')}
                >
                  Send Message <Send size={15} />
                </button>
              </form>
            )}
          </AnimatedSection>

          {/* Office info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {offices.map((o, i) => (
              <AnimatedSection key={o.city} direction="right" delay={i * 0.1}>
                <div style={{
                  background: o.primary ? '#1a56db' : '#f7f9fc',
                  color: o.primary ? 'white' : '#0f172a',
                  border: o.primary ? 'none' : '1px solid #e2e8f0',
                  borderRadius: '14px', padding: '24px',
                }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '4px' }}>{o.city}</h3>
                  <p style={{ fontSize: '12px', opacity: 0.7, marginBottom: '16px', fontWeight: 500 }}>{o.country}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { Icon: MapPin, text: o.address },
                      { Icon: Phone, text: o.phone },
                      { Icon: Mail, text: o.email },
                      { Icon: Clock, text: o.hours },
                    ].map(({ Icon, text }) => (
                      <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px' }}>
                        <Icon size={14} style={{ flexShrink: 0, marginTop: '2px', opacity: o.primary ? 0.8 : 0.5 }} />
                        <span style={{ opacity: o.primary ? 0.9 : 0.75 }}>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
