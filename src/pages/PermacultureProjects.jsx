import React from 'react'
import "../styles/services.css"
import PermacultureHero from '../assets/images/landscaping-4.jpg'
import PermPhoto1 from '../assets/images/landscaping-1.jpg'
import PermPhoto2 from '../assets/images/hero-5.jpg'
import PermPhoto3 from '../assets/images/hero-6.jpg'
import PermPhoto4 from '../assets/images/landscaping-3.jpg'

export default function PermacultureProjects() {
    return (
        <div>
            <div id="page-permaculture" className="page pt-nav">

                {/* ── HERO ── */}
                <section className="service-hero" style={{
                    backgroundImage: `linear-gradient(135deg, rgba(20, 20, 20, 0.86), rgba(20, 20, 20, 0.86)), url(${PermacultureHero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="service-hero-inner">
                        <div className="sec-eye">Permaculture Projects</div>
                        <h1 className="service-hero-title">Land that works<br /><em>for people and nature.</em></h1>
                        <p className="service-hero-body">
                            Regenerative systems designed to grow food, improve soil, and support habitat while making your property easier to care for.
                        </p>
                        <a href="/contact" className="btn-primary">Start a Project</a>
                    </div>
                </section>

                <div className="strip">
                    <div className="strip-item">
                        <div className="strip-dot"></div>Food forests &amp; edible plantings
                    </div>
                    <div className="strip-item">
                        <div className="strip-dot"></div>Water-smart landscape solutions
                    </div>
                    <div className="strip-item">
                        <div className="strip-dot"></div>Soil-building and habitat support
                    </div>
                    <div className="strip-item">
                        <div className="strip-dot"></div>Designs that grow stronger every year
                    </div>
                </div>

                <div className="svc-detail-body">
                    <div className="svc-detail-img">
                        <div className="svc-detail-img-main">
                            <img className='svc-detail-img-main' src={PermPhoto1} alt="Permaculture planting design" />
                        </div>
                    </div>
                    <div className="svc-detail-text">
                        <div className="sec-eye">What We Offer</div>
                        <h2 className="sec-title">Permaculture systems that<br /><em>make sense for your land.</em></h2>
                        <p className="sec-body">
                            From food forests to rain gardens, our projects are built to increase fertility,
                            support pollinators, and reduce the need for heavy maintenance over time.
                        </p>
                        <div className="svc-scope">
                            <div className="scope-title">Included in every project</div>
                            <ul className="scope-list">
                                <li>Site assessment and regenerative design</li>
                                <li>Planting plans with native and edible species</li>
                                <li>Soil-building and mulch strategies</li>
                                <li>Water management and habitat integration</li>
                            </ul>
                        </div>
                        <div className="svc-pricing">
                            <div className="pricing-label">Project planning</div>
                            <div className="pricing-value">Custom quoted</div>
                            <div className="pricing-note">We price each design for site scale, ecological complexity, and the level of installation support you want.</div>
                        </div>
                        <a href="/contact" className="btn-primary">Book a Consultation</a>
                    </div>
                </div>

                <section className="service-section">
                    <div className="service-section-inner">
                        <div className="service-section-text">
                            <div className="sec-eye">Our Approach</div>
                            <h2 className="service-section-title">Designed to become<br /><em>more productive over time.</em></h2>
                            <p className="service-section-body">
                                We design landscapes that work with your soil, your terrain, and the local
                                climate — not against them. This means gardens that establish more quickly
                                and continue improving each season.
                            </p>
                        </div>
                        <div className="service-pillars">
                            <div className="service-pillar">
                                <div className="service-pillar-icon">✦</div>
                                <div className="service-pillar-title">Edible ecosystems</div>
                                <div className="service-pillar-body">Layered plant communities that produce food while supporting biodiversity.</div>
                            </div>
                            <div className="service-pillar">
                                <div className="service-pillar-icon">✦</div>
                                <div className="service-pillar-title">Soil regeneration</div>
                                <div className="service-pillar-body">We build soil health with organic inputs, mulch, and living groundcovers.</div>
                            </div>
                            <div className="service-pillar">
                                <div className="service-pillar-icon">✦</div>
                                <div className="service-pillar-title">Water-wise design</div>
                                <div className="service-pillar-body">Rain gardens, swales, and placement strategies that manage moisture and reduce erosion.</div>
                            </div>
                            <div className="service-pillar">
                                <div className="service-pillar-icon">✦</div>
                                <div className="service-pillar-title">Habitat focus</div>
                                <div className="service-pillar-body">Plantings chosen to support pollinators, birds, and wildlife in the Headwaters region.</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="service-gallery">
                    <div className="service-gallery-inner">
                        <div className="service-gallery-text">
                            <div className="sec-eye">Project snapshots</div>
                            <h2 className="service-section-title">Regenerative landscape work in real settings.</h2>
                            <p className="service-section-body">These photos show the types of systems we install — layered plantings, soil-focused beds, and outdoor spaces that feel alive.</p>
                        </div>
                        <div className="service-gallery-grid">
                            <div className="service-gallery-card">
                                <img src={PermPhoto2} alt="Regenerative planting project" />
                            </div>
                            <div className="service-gallery-card">
                                <img src={PermPhoto3} alt="Garden design planting detail" />
                            </div>
                            <div className="service-gallery-card">
                                <img src={PermPhoto4} alt="Planting composition in a landscape" />
                            </div>
                            <div className="service-gallery-card">
                                <img src={PermPhoto1} alt="Permaculture project planting" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="service-process">
                    <div className="service-process-inner">
                        <div className="sec-eye">The Process</div>
                        <h2 className="service-process-title">From concept<br /><em>to established system.</em></h2>
                        <div className="service-steps">
                            <div className="service-step">
                                <div className="service-step-num">01</div>
                                <div className="service-step-title">Site Review</div>
                                <div className="service-step-body">We assess existing conditions, soil, water flow, and your long-term goals before any design work begins.</div>
                            </div>
                            <div className="service-step">
                                <div className="service-step-num">02</div>
                                <div className="service-step-title">Design &amp; Implementation Plan</div>
                                <div className="service-step-body">A phased plan for planting, earthworks, and systems that matches your timeline and budget.</div>
                            </div>
                            <div className="service-step">
                                <div className="service-step-num">03</div>
                                <div className="service-step-title">Installation</div>
                                <div className="service-step-body">We install the system carefully, with attention to soil health, plant placement, and long-term performance.</div>
                            </div>
                            <div className="service-step">
                                <div className="service-step-num">04</div>
                                <div className="service-step-title">Support &amp; Follow-Up</div>
                                <div className="service-step-body">We provide guidance as the system settles in and offer support for the first seasons to help it thrive.</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="service-area">
                    <div className="service-area-inner">
                        <div className="sec-eye">Service Area</div>
                        <p className="service-area-text">Erin · Caledon · Orangeville · Mono · Guelph &amp; surrounding</p>
                    </div>
                </section>

                <section className="cta">
                    <h2 className="cta-title">Ready to build a<br /><em>regenerative property?</em></h2>
                    <p className="cta-sub">Tell us about your land and your goals — we’ll design a permaculture plan that fits your property and budget.</p>
                    <a href="/contact" className="btn-primary">Get In Touch</a>
                </section>

            </div>
        </div>
    )
}