'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

const solutions = [
  { name: 'Computing Infrastructure', href: '/solutions/computing-infrastructure' },
  { name: 'Data Center Solutions', href: '/solutions/data-center' },
  { name: 'Networking', href: '/solutions/networking' },
  { name: 'Cybersecurity', href: '/solutions/cybersecurity' },
  { name: 'End User Computing', href: '/solutions/end-user-computing' },
  { name: 'Managed Services', href: '/solutions/managed-services' },
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Solutions', href: '/solutions', children: solutions },
  { name: 'Partners', href: '/partners' },
  { name: 'Industries', href: '/industries' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'Careers', href: '/careers' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropOpen, setMobileDropOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false)
    setMobileDropOpen(false)
  }, [pathname])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('nav-open')
    } else {
      document.body.classList.remove('nav-open')
    }
    return () => document.body.classList.remove('nav-open')
  }, [mobileOpen])

  const toggleMobile = () => setMobileOpen(prev => !prev)

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'box-shadow 0.2s',
      boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none',
      background: '#ffffff',
      /* Push header content below iOS notch/Dynamic Island */
      paddingTop: 'env(safe-area-inset-top, 0px)',
    }}>
      {/* Top info bar */}
      <div style={{ background: '#1a56db', color: 'white', fontSize: '12px', padding: '5px 16px' }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          /* Side safe areas */
          paddingLeft: 'env(safe-area-inset-left, 0px)',
          paddingRight: 'env(safe-area-inset-right, 0px)',
        }}>
          <span>Headquarters: Addis Ababa, Ethiopia</span>
          <span className="sm-visible" style={{ display: 'none' }}>London, UK &nbsp;|&nbsp; Bangalore, India</span>
        </div>
      </div>

      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '0 24px',
        paddingLeft: 'max(24px, env(safe-area-inset-left, 24px))',
        paddingRight: 'max(24px, env(safe-area-inset-right, 24px))',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <Logo />

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="desktop-nav">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} style={{ position: 'relative' }}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button style={{
                    display: 'flex', alignItems: 'center', gap: '4px',
                    padding: '6px 12px', fontSize: '14px', fontWeight: 500,
                    color: pathname.startsWith('/solutions') ? '#1a56db' : '#334155',
                    background: 'none', border: 'none', cursor: 'pointer',
                    borderRadius: '6px', transition: 'color 0.15s',
                  }}>
                    {link.name}
                    <ChevronDown size={13} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </button>
                  {dropdownOpen && (
                    <div style={{
                      position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                      marginTop: '4px', background: 'white', border: '1px solid #e2e8f0',
                      borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                      padding: '8px 0', minWidth: '240px', zIndex: 100,
                    }}>
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} style={{
                          display: 'block', padding: '10px 18px', fontSize: '13.5px',
                          color: '#334155', textDecoration: 'none', transition: 'background 0.1s, color 0.1s',
                        }}
                          onMouseEnter={e => { (e.target as HTMLElement).style.background = '#f7f9fc'; (e.target as HTMLElement).style.color = '#1a56db' }}
                          onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = '#334155' }}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.name} href={link.href} style={{
                  padding: '6px 12px', fontSize: '14px', fontWeight: 500,
                  color: pathname === link.href ? '#1a56db' : '#334155',
                  textDecoration: 'none', borderRadius: '6px', transition: 'color 0.15s',
                }}>
                  {link.name}
                </Link>
              )
            )}
          </nav>

          <Link href="/contact" className="desktop-nav" style={{
            background: '#1a56db', color: 'white', padding: '9px 20px',
            borderRadius: '8px', fontSize: '14px', fontWeight: 600,
            textDecoration: 'none', transition: 'background 0.15s', flexShrink: 0,
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1441b5')}
            onMouseLeave={e => (e.currentTarget.style.background = '#1a56db')}
          >
            Contact Us
          </Link>

          {/* Mobile hamburger — 44×44px minimum touch target */}
          <button
            onClick={toggleMobile}
            className="mobile-only"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '10px', color: '#334155',
              /* Explicit touch target */
              minWidth: '44px', minHeight: '44px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — scrollable, with safe area bottom padding */}
      {mobileOpen && (
        <div style={{
          background: 'white', borderTop: '1px solid #e2e8f0',
          padding: '12px 24px',
          paddingLeft: 'max(24px, env(safe-area-inset-left, 24px))',
          paddingRight: 'max(24px, env(safe-area-inset-right, 24px))',
          /* Cap height so it doesn't overflow viewport */
          maxHeight: 'calc(100dvh - 94px - env(safe-area-inset-top, 0px))',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch' as unknown as undefined,
        }}>
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name}>
                <button onClick={() => setMobileDropOpen(!mobileDropOpen)} style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '13px 0', fontSize: '16px', fontWeight: 500, color: '#334155',
                  background: 'none', border: 'none', cursor: 'pointer',
                  borderBottom: '1px solid #f1f5f9', minHeight: '44px',
                }}>
                  {link.name}
                  <ChevronDown size={16} style={{ transform: mobileDropOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {mobileDropOpen && (
                  <div style={{ paddingLeft: '16px', borderLeft: '2px solid #e2e8f0', marginBottom: '4px' }}>
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} style={{
                        display: 'block', padding: '11px 8px', fontSize: '15px',
                        color: '#64748b', textDecoration: 'none', minHeight: '44px',
                        display: 'flex', alignItems: 'center',
                      } as React.CSSProperties}>
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.name} href={link.href} style={{
                display: 'flex', alignItems: 'center',
                padding: '13px 0', fontSize: '16px',
                fontWeight: 500, color: '#334155', textDecoration: 'none',
                borderBottom: '1px solid #f1f5f9', minHeight: '44px',
              }}>
                {link.name}
              </Link>
            )
          )}
          <div style={{
            marginTop: '16px',
            paddingBottom: 'max(20px, env(safe-area-inset-bottom, 20px))',
          }}>
            <Link href="/contact" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: '#1a56db', color: 'white',
              textAlign: 'center', padding: '14px', borderRadius: '10px',
              fontSize: '16px', fontWeight: 600, textDecoration: 'none',
              minHeight: '52px',
            }}>
              Contact Us
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) { .mobile-only { display: none !important; } }
        @media (max-width: 1023px) { .desktop-nav { display: none !important; } }
        @media (min-width: 640px) { .sm-visible { display: block !important; } }
      `}</style>
    </header>
  )
}
