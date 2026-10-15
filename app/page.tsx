'use client'

import { useState } from 'react'
import { ArrowRight, Check, ChevronLeft, LockKeyhole, Menu, Package, Play, ShieldCheck, ShoppingBag, Sparkles, Star, X } from 'lucide-react'
import { Checkout } from '@/components/checkout'
import { FEATURED_PRODUCT, formatPrice, PRODUCT_IMAGE } from '@/lib/products'

const specs = ['Limited run of 500', 'Hand-finished details', 'Ships in 1–2 days']

export default function Page() {
  const [view, setView] = useState<'home' | 'product' | 'checkout'>('home')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="app-shell">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <button className="brand" onClick={() => setView('home')} aria-label="Playbox home"><span className="brand-mark"><span /></span>PLAYBOX<span className="brand-dot">.</span></button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <button onClick={() => { setView('home'); setMenuOpen(false) }}>The collection</button>
          <button onClick={() => { setView('product'); setMenuOpen(false) }}>Our story</button>
          <button onClick={() => { setView('checkout'); setMenuOpen(false) }}>Track order</button>
        </nav>
        <div className="header-actions"><span className="edition">Edition 01 / 2026</span><button className="icon-button" aria-label="Open bag" onClick={() => setView('checkout')}><ShoppingBag size={18} /><span className="bag-count">1</span></button><button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
      </header>

      {view === 'home' && <section className="hero-section">
        <div className="hero-copy"><p className="eyebrow"><Sparkles size={13} /> The lost & found collection</p><h1>Welcome to<br /><em>My Store</em></h1><p className="hero-lede">A tiny universe of soft friends for big imaginations. Designed somewhere between nap time and neverland.</p><div className="hero-actions"><button className="primary-button" onClick={() => setView('product')}>Meet the first friend <ArrowRight size={16} /></button><button className="play-button" aria-label="Play the Playbox film"><span><Play size={13} fill="currentColor" /></span> Watch the film</button></div><div className="hero-note"><span className="note-line" />No screens. No noise.<br />Just a little wonder.</div></div>
        <div className="hero-art"><div className="sun" /><div className="playground-frame"><div className="arch arch-back" /><div className="arch arch-front" /><div className="swing-line left-line" /><div className="swing-line right-line" /><div className="swing-seat" /><div className="product-figure"><img src={PRODUCT_IMAGE} alt="Cobalt blue Playbox toy with yellow bow tie" /></div><div className="sticker">new<br /><strong>friend</strong></div></div><div className="hero-label">PB / 001 <span>●</span> 04.26</div></div>
        <div className="hero-bottom"><span><span className="status-dot" /> Available now</span><span>Scroll to explore <ArrowRight size={14} /></span><span>01 / 03</span></div>
      </section>}

      {view === 'product' && <section className="product-view"><button className="back-link" onClick={() => setView('home')}><ChevronLeft size={16} /> Back to collection</button><div className="product-layout"><div className="product-image-panel"><div className="image-tag">PB / 001</div><img src={PRODUCT_IMAGE} alt="Cobalt blue Playbox toy with yellow bow tie" /><div className="image-caption">A friend for the in-between moments.</div></div><div className="product-info"><p className="eyebrow">The first friend / 001</p><h2>Playbox 01<br /><em>Huggy Blue</em></h2><div className="rating"><span>{[1,2,3,4,5].map((n) => <Star key={n} size={13} fill="currentColor" />)}</span> 4.9 <small>(37 tiny reviews)</small></div><p className="product-description">Soft enough for sofa forts. Strange enough for secret handshakes. Huggy Blue is your official guide to the after-hours.</p><div className="spec-list">{specs.map((spec) => <div key={spec}><Check size={15} />{spec}</div>)}</div><div className="price-row"><strong>{formatPrice(FEATURED_PRODUCT.priceInCents)}</strong><span>USD / includes shipping</span></div><button className="buy-button" onClick={() => setView('checkout')}>Add to cart <ArrowRight size={17} /></button><div className="secure-note"><ShieldCheck size={15} /> Secure checkout <span /><Package size={15} /> Free shipping worldwide</div></div></div></section>}

      {view === 'checkout' && <section className="checkout-view"><button className="back-link" onClick={() => setView('product')}><ChevronLeft size={16} /> Back to product</button><div className="checkout-layout"><div className="checkout-intro"><p className="eyebrow">One last little thing</p><h2>Bring a friend<br /><em>home.</em></h2><div className="checkout-product"><img src={PRODUCT_IMAGE} alt="Huggy Blue toy" /><div><strong>{FEATURED_PRODUCT.name}</strong><span>Limited edition / 01</span><b>{formatPrice(FEATURED_PRODUCT.priceInCents)}</b></div></div><p className="secure-note"><LockKeyhole size={15} /> Payments are encrypted and secure.</p></div><div className="payment-card"><div className="payment-heading"><span>01 — Payment</span><span>Powered by Stripe</span></div><div className="stripe-frame"><Checkout productId={FEATURED_PRODUCT.id} /></div></div></div></section>}
      <footer className="site-footer"><span>© Playbox studio 2026</span><span>Made with mischief in Brooklyn, NY</span><span>Privacy / Contact</span></footer>
    </main>
  )
}
