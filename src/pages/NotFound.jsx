import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/home.css'
import '../styles/services.css'

export default function NotFound() {
    return (
        <div style={{ background: 'var(--offwhite)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
                <section className="service-hero" style={{ padding: '10rem 0 8rem', textAlign: 'center' }}>
                    <div className="service-hero-inner">
                        <div className="service-hero-title" style={{ marginBottom: '1.5rem' }}>
                            404 <em>Page Not Found</em>
                        </div>
                        <div className="service-hero-body" style={{ margin: '0 auto', color: 'rgba(179, 173, 155, 0.72)' }}>
                            Sorry, the page you’re looking for doesn’t exist or has been moved.<br />
                            Let’s get you back on the right path.
                        </div>
                        <div style={{ marginTop: '2.5rem' }}>
                            <a href="/" className="btn-primary" style={{ marginRight: '1.2rem' }}>Go Home</a>
                            <a href="/services" className="btn-ghost">Explore Services</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
