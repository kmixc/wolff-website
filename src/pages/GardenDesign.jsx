import React from 'react'
import "../styles/services.css"
import GardenHero from '../assets/images/landscaping-4.jpg'
import GardenPhoto1 from '../assets/images/landscaping-1.jpg'
import GardenPhoto2 from '../assets/images/landscaping-2.jpg'
import GardenPhoto3 from '../assets/images/hero-5.jpg'
import GardenPhoto4 from '../assets/images/hero-6.jpg'

export default function GardenDesign() {
    return (
        <div>
            <div id="page-garden-design" className="page pt-nav">

                {/* ── HERO ── */}
                <section className="service-hero" style={{
                    backgroundImage: `linear-gradient(135deg, rgba(20, 20, 20, 0.82), rgba(20, 20, 20, 0.82)), url(${GardenHero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="service-hero-inner">
                        <div className="sec-eye">Garden Design</div>
                        <h1 className="service-hero-title">Spaces that feel<br /><em>part of the land.</em></h1>
                        <p className="service-hero-body">
                            We design and install gardens that are naturalistic, ecologically grounded, and
                            built to thrive over time. Not over-engineered. Not overly structured. Just
                            beautiful spaces that belong where they are.
                        </p>
                        <a href="/contact" className="btn-primary">Start a Project</a>
                    </div>
                </section>

                <div className="strip">
                    <div className="strip-item">
                        <div className="strip-dot"></div>Native &amp; adapted planting
                    </div>
                    <div className="strip-item">
                        <div className="strip-dot"></div>Layered plant communities
                    </div>
                    <div className="strip-item">
                        <div className="strip-dot"></div>Functional garden rooms
                    </div>
                    <div className="strip-item">
                        <div className="strip-dot"></div>Habitat &amp; pollinator support
                    </div>
                </div>

                <div className="svc-detail-body">
                    <div className="svc-detail-img">
                        <div className="svc-detail-img-main">
                            <img className='svc-detail-img-main' src={GardenPhoto1} alt="Garden design planting" />
                        </div>
                        <div className="svc-detail-img-thumb-row">
                            <div className="svc-detail-img-thumb sdt1">
                                <img className='svc-detail-img-thumb sdt1' src={GardenPhoto2} alt="Garden design detail" />
                            </div>
                            <div className="svc-detail-img-thumb sdt2">
                                <img className='svc-detail-img-thumb sdt2' src={GardenPhoto3} alt="Garden planting texture" />
                            </div>
                        </div>
                    </div>
                    <div className="svc-detail-text">
                        <div className="sec-eye">What We Offer</div>
                        <h2 className="sec-title">Ecological design that <em>honours your land</em></h2>
                        <p className="sec-body">We begin every garden with a clear understanding of the site, the soil, and the way the space wants to be used. Our designs balance beauty, function, and low-maintenance performance.</p>
                        <div className="svc-scope">
                            <div className="scope-title">What's included</div>
                            <ul className="scope-list">
                                <li>Site assessment &amp; planting strategy</li>
                                <li>Native and adaptive plant palettes</li>
                                <li>Soil preparation with organic inputs</li>
                                <li>Planting design for pollinators &amp; wildlife</li>
                                <li>Hardscape coordination for paths and seating</li>
                                <li>Establishment guidance and follow-up support</li>
                            </ul>
                        </div>
                        <div className="svc-pricing">
                            <div className="pricing-label">Starting From</div>
                            <div className="pricing-value">Custom Quoted</div>
                            <div className="pricing-note">Each garden is priced for scale, site complexity, and ecological value. Contact us for a discovery call.</div>
                        </div>
                        <a href="/contact" className="btn-primary">Book a Consultation</a>&nbsp;&nbsp;
                        <a href="/projects" className="btn-ghost">View Projects</a>
                    </div>
                </div>

                {/* ── APPROACH ── */}
                <section className="service-section">
                    <div className="service-section-inner">
                        <div className="service-section-text">
                            <div className="sec-eye">Our Approach</div>
                            <h2 className="service-section-title">Designed with<br /><em>ecology in mind.</em></h2>
                            <p className="service-section-body">
                                Every garden we design begins with the land itself — its light, its drainage,
                                its existing character. We work with those conditions rather than fighting them,
                                which means the gardens we create establish faster, require less intervention,
                                and look more natural from day one.
                            </p>
                            <p className="service-section-body">
                                Our plant palette leans heavily on natives, locally adapted species, and
                                pollinator-supportive varieties. The result is outdoor space that's genuinely
                                alive — supporting birds, insects, and soil biology alongside the people who
                                live there.
                            </p>
                        </div>
                        <div className="service-pillars">
                            <div className="service-pillar">
                                <div className="service-pillar-icon">✦</div>
                                <div className="service-pillar-title">Design &amp; Installation</div>
                                <div className="service-pillar-body">We handle the full process — from initial concept and planting plan through to installation. One team, start to finish.</div>
                            </div>
                            <div className="service-pillar">
                                <div className="service-pillar-icon">✦</div>
                                <div className="service-pillar-title">Native &amp; Adapted Plants</div>
                                <div className="service-pillar-body">A strong emphasis on native species and locally adapted plants that support pollinators and establish with minimal inputs.</div>
                            </div>
                            <div className="service-pillar">
                                <div className="service-pillar-icon">✦</div>
                                <div className="service-pillar-title">Pollinator Gardens</div>
                                <div className="service-pillar-body">Gardens designed to support bees, butterflies, and beneficial insects through the full growing season.</div>
                            </div>
                            <div className="service-pillar">
                                <div className="service-pillar-icon">✦</div>
                                <div className="service-pillar-title">Functional Outdoor Spaces</div>
                                <div className="service-pillar-body">Patios, pathways, seating areas, and garden rooms that integrate seamlessly with the surrounding landscape.</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── PHOTO GALLERY ── */}
                <section className="service-gallery">
                    <div className="service-gallery-inner">
                        <div className="service-gallery-text">
                            <div className="sec-eye">Project snapshots</div>
                            <h2 className="service-section-title">Designed spaces that feel naturally finished.</h2>
                            <p className="service-section-body">These photos show the kind of garden environments we build — layered plantings, flowing edges, and outdoor rooms that grow more beautiful each season.</p>
                        </div>
                        <div className="service-gallery-grid">
                            <div className="service-gallery-card">
                                <img src={GardenPhoto1} alt="Garden design plantings" />
                            </div>
                            <div className="service-gallery-card">
                                <img src={GardenPhoto2} alt="Landscape with native plants" />
                            </div>
                            <div className="service-gallery-card">
                                <img src={GardenPhoto3} alt="Seasonal garden design result" />
                            </div>
                            <div className="service-gallery-card">
                                <img src={GardenPhoto4} alt="Garden path and planting detail" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── DESIGN PACKAGES ── */}
                <section className="service-packages">
                    <div className="service-packages-inner">
                        <div className="sec-eye">Design Packages</div>
                        <h2 className="service-section-title">Flexible design offerings for every property.</h2>
                        <div className="service-packages-grid">
                            <div className="package-card">
                                <div className="package-card-title">Concept & Plan</div>
                                <div className="package-card-body">A thoughtful planting and layout plan for your property, including plant selection, hardscape concepts, and installation-ready drawings.</div>
                            </div>
                            <div className="package-card">
                                <div className="package-card-title">Planting Design</div>
                                <div className="package-card-body">A full planting plan focused on ecological function — pollinator support, native species, soil performance, and seasonal interest.</div>
                            </div>
                            <div className="package-card">
                                <div className="package-card-title">Full Installation</div>
                                <div className="package-card-body">Design + installation delivered by one team. We source plants, install beds, and hand-finish the details so the planting can establish beautifully.</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── PROCESS ── */}
                <section className="service-process">
                    <div className="service-process-inner">
                        <div className="sec-eye">The Process</div>
                        <h2 className="service-process-title">From first sketch<br /><em>to finished garden.</em></h2>
                        <div className="service-steps">
                            <div className="service-step">
                                <div className="service-step-num">01</div>
                                <div className="service-step-title">Site Assessment</div>
                                <div className="service-step-body">We spend time on the property — reading the light, the soil, the drainage, and your vision before putting anything on paper.</div>
                            </div>
                            <div className="service-step">
                                <div className="service-step-num">02</div>
                                <div className="service-step-title">Design Development</div>
                                <div className="service-step-body">A planting plan tailored to your site and aesthetic — reviewed together before anything is sourced or installed.</div>
                            </div>
                            <div className="service-step">
                                <div className="service-step-num">03</div>
                                <div className="service-step-title">Installation</div>
                                <div className="service-step-body">We source quality plants and install with care — proper spacing, soil preparation, and establishment watering included.</div>
                            </div>
                            <div className="service-step">
                                <div className="service-step-num">04</div>
                                <div className="service-step-title">Aftercare Guidance</div>
                                <div className="service-step-body">We walk you through what the garden needs in its first season, and we're available for questions as it establishes.</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SERVICE AREA ── */}
                <section className="service-area">
                    <div className="service-area-inner">
                        <div className="sec-eye">Service Area</div>
                        <p className="service-area-text">Erin · Caledon · Orangeville · Mono · Guelph &amp; surrounding</p>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="cta">
                    <h2 className="cta-title">Have a space you'd like<br /><em>to bring to life?</em></h2>
                    <p className="cta-sub">Tell us about your property and what you're imagining — we'll take it from there.</p>
                    <a href="/contact" className="btn-primary">Get In Touch</a>
                </section>

            </div>
        </div>
    )
}