import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from '../assets/projects.json'
import '../styles/home.css'
import '../styles/services.css'

export default function ProjectDetail() {
    const { slug } = useParams()
    const project = projects.find(p => p.slug === slug)
    const [lightboxIndex, setLightboxIndex] = useState(null)

    if (!project) {
        return (
            <div style={{ background: 'var(--offwhite)', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '8rem' }}>
                <div className="service-hero-title" style={{ color: 'var(--obsidian)', textAlign: 'center' }}>Project <em>not found.</em></div>
                <Link to="/projects" className="btn-primary" style={{ marginTop: '2rem' }}>Back to Projects</Link>
            </div>
        )
    }

    const getImage = (filename) => {
        try {
            return require(`../assets/images/${filename}`)
        } catch {
            return null
        }
    }

    const coverSrc = getImage(project.coverImage)
    const galleryImages = project.images.map(getImage).filter(Boolean)

    const openLightbox = (index) => setLightboxIndex(index)
    const closeLightbox = () => setLightboxIndex(null)
    const prevImage = (e) => { e.stopPropagation(); setLightboxIndex(i => (i - 1 + galleryImages.length) % galleryImages.length) }
    const nextImage = (e) => { e.stopPropagation(); setLightboxIndex(i => (i + 1) % galleryImages.length) }

    return (
        <div style={{ background: 'var(--offwhite)' }}>

            {/* ── LIGHTBOX ── */}
            {lightboxIndex !== null && (
                <div
                    onClick={closeLightbox}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 1000,
                        background: 'rgba(10, 10, 10, 0.92)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'zoom-out',
                    }}
                >
                    {/* Close */}
                    <button
                        onClick={closeLightbox}
                        style={{
                            position: 'absolute', top: '1.5rem', right: '2rem',
                            background: 'none', border: 'none', color: 'var(--heritage)',
                            fontSize: '2rem', cursor: 'pointer', lineHeight: 1, padding: '0.5rem',
                        }}
                        aria-label="Close"
                    >×</button>

                    {/* Prev */}
                    {galleryImages.length > 1 && (
                        <button
                            onClick={prevImage}
                            style={{
                                position: 'absolute', left: '1.5rem',
                                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(143,158,139,0.2)',
                                color: 'var(--heritage)', fontSize: '1.4rem', cursor: 'pointer',
                                padding: '0.7rem 1.1rem', borderRadius: '4px',
                            }}
                            aria-label="Previous"
                        >‹</button>
                    )}

                    {/* Image */}
                    <img
                        src={galleryImages[lightboxIndex]}
                        alt={`${project.name} ${lightboxIndex + 1}`}
                        onClick={e => e.stopPropagation()}
                        style={{
                            maxWidth: '88vw', maxHeight: '86vh',
                            objectFit: 'contain', borderRadius: '4px',
                            boxShadow: '0 8px 60px rgba(0,0,0,0.6)',
                            cursor: 'default',
                        }}
                    />

                    {/* Next */}
                    {galleryImages.length > 1 && (
                        <button
                            onClick={nextImage}
                            style={{
                                position: 'absolute', right: '1.5rem',
                                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(143,158,139,0.2)',
                                color: 'var(--heritage)', fontSize: '1.4rem', cursor: 'pointer',
                                padding: '0.7rem 1.1rem', borderRadius: '4px',
                            }}
                            aria-label="Next"
                        >›</button>
                    )}

                    {/* Counter */}
                    <div style={{
                        position: 'absolute', bottom: '1.8rem',
                        fontSize: '0.65rem', letterSpacing: '0.2em',
                        textTransform: 'uppercase', color: 'rgba(179,173,155,0.5)',
                    }}>
                        {lightboxIndex + 1} / {galleryImages.length}
                    </div>
                </div>
            )}

            {/* ── HERO ── */}
            <section className="service-hero" style={{
                backgroundImage: coverSrc ? `linear-gradient(rgba(10,10,10,0.55), rgba(10,10,10,0.55)), url(${coverSrc})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '10rem 0 7rem',
            }}>
                <div className="service-hero-inner">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.6rem' }}>
                        <Link
                            to="/projects"
                            style={{
                                fontSize: '0.66rem', letterSpacing: '0.22em',
                                textTransform: 'uppercase', color: 'var(--lichen)',
                                textDecoration: 'none', display: 'flex',
                                alignItems: 'center', gap: '0.5rem', fontWeight: 400,
                            }}
                        >
                            ← All Projects
                        </Link>
                    </div>
                    <div style={{
                        fontSize: '0.66rem', letterSpacing: '0.28em',
                        textTransform: 'uppercase', color: 'var(--lichen)',
                        marginBottom: '1rem', fontWeight: 400,
                    }}>
                        {project.tag}
                    </div>
                    <h1 className="service-hero-title">{project.name}</h1>
                    <div style={{
                        fontSize: '0.78rem', letterSpacing: '0.14em',
                        textTransform: 'uppercase', color: 'rgba(179, 173, 155, 0.55)',
                        marginBottom: '1.8rem', fontWeight: 300,
                    }}>
                        {project.location}
                    </div>
                    <p className="service-hero-body">{project.summary}</p>
                </div>
            </section>

            {/* ── STRIP ── */}
            <div className="strip">
                <div className="strip-item"><div className="strip-dot"></div>{project.category}</div>
                <div className="strip-item"><div className="strip-dot"></div>{project.location}</div>
                <div className="strip-item"><div className="strip-dot"></div>{project.year}</div>
                <div className="strip-item"><div className="strip-dot"></div>Organic Practices</div>
            </div>

            {/* ── BODY ── */}
            <div className="svc-detail-body">
                {/* Top gallery — first 3 images */}
                <div className="svc-detail-img">
                    {galleryImages[0] && (
                        <div
                            className="svc-detail-img-main"
                            onClick={() => openLightbox(0)}
                            style={{ cursor: 'zoom-in' }}
                        >
                            <img src={galleryImages[0]} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        </div>
                    )}
                    {galleryImages.length > 1 && (
                        <div className="svc-detail-img-thumb-row">
                            {galleryImages.slice(1, 3).map((src, i) => (
                                <div
                                    key={i}
                                    className={`svc-detail-img-thumb sdt${i + 1}`}
                                    onClick={() => openLightbox(i + 1)}
                                    style={{ cursor: 'zoom-in' }}
                                >
                                    <img src={src} alt={`${project.name} ${i + 2}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Text */}
                <div className="svc-detail-text">
                    <div className="sec-eye">Scope of Work</div>
                    <h2 className="sec-title">What we did on <em>this project</em></h2>
                    <div className="svc-scope">
                        <div className="scope-title">Work Completed</div>
                        <ul className="scope-list">
                            {project.scope.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {project.outcome && (
                        <div style={{
                            marginTop: '2rem', paddingTop: '2rem',
                            borderTop: '1px solid rgba(143, 158, 139, 0.2)',
                        }}>
                            <div className="scope-title">Outcome</div>
                            <p style={{
                                fontSize: '0.9rem', fontWeight: 300, lineHeight: 2,
                                color: 'rgba(90, 78, 59, 0.7)', marginTop: '0.8rem',
                            }}>
                                {project.outcome}
                            </p>
                        </div>
                    )}

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                        <a href="/contact" className="btn-primary">Book a Consultation</a>
                        <Link to="/projects" className="btn-ghost">Back to Projects</Link>
                    </div>
                </div>
            </div>

            {/* ── PHOTO GALLERY — all remaining images ── */}
            {galleryImages.length > 3 && (
                <section style={{
                    maxWidth: '1200px', margin: '0 auto',
                    padding: '0 5rem 6rem',
                }}>
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '1.4rem',
                        marginBottom: '2.5rem',
                    }}>
                        <div className="sec-eye" style={{ margin: 0 }}>Project Photos</div>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(143,158,139,0.18)' }}></div>
                        <div style={{
                            fontSize: '0.65rem', letterSpacing: '0.18em',
                            textTransform: 'uppercase', color: 'rgba(179,173,155,0.45)',
                        }}>
                            {galleryImages.length - 3} more
                        </div>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                        gap: '1rem',
                    }}>
                        {galleryImages.slice(3).map((src, i) => (
                            <div
                                key={i}
                                onClick={() => openLightbox(i + 3)}
                                style={{
                                    overflow: 'hidden', borderRadius: '6px',
                                    aspectRatio: '4/3', cursor: 'zoom-in',
                                    background: 'var(--obsidian)',
                                }}
                            >
                                <img
                                    src={src}
                                    alt={`${project.name} ${i + 4}`}
                                    style={{
                                        width: '100%', height: '100%',
                                        objectFit: 'cover', display: 'block',
                                        transition: 'transform 0.4s ease',
                                    }}
                                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* ── CTA ── */}
            <section className="cta">
                <h2 className="cta-title">Could this be <em>your property?</em></h2>
                <p className="cta-sub">Every project starts with a conversation. Reach out to talk about your land and how we can help it thrive.</p>
                <a href="/contact" className="btn-primary">Start a Conversation</a>
            </section>
        </div>
    )
}

