import React from 'react'
import "../styles/services.css"
import MaintenanceHero from '../assets/images/hero-10.jpg'
import MaintenancePhoto1 from '../assets/images/hero-15.jpg'
import MaintenancePhoto2 from '../assets/images/hero-26.jpg'
import MaintenancePhoto3 from '../assets/images/hero-16.jpg'
import MaintenancePhoto4 from '../assets/images/hero-12.jpg'
import MaintenancePhoto5 from '../assets/images/hero-14.jpg'

export default function PropertyMaintenance() {
    return (
        <div>
            <div id="page-property-maintenance" className="page pt-nav">

                {/* ── HERO ── */}
                <section className="service-hero" style={{
                    backgroundImage: `linear-gradient(135deg, rgba(20, 20, 20, 0.86), rgba(20, 20, 20, 0.86)), url(${MaintenanceHero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="service-hero-inner">
                        <div className="sec-eye">Property Maintenance</div>
                        <h1 className="service-hero-title">Property care<br /><em>that stays consistent.</em></h1>
                        <p className="service-hero-body">
                            Weekly, biweekly and seasonal programs designed to keep your property tidy,
                            healthy and ready to enjoy — without the usual maintenance guesswork.
                        </p>
                        <a href="/contact" className="btn-primary">Request a Quote</a>
                    </div>
                </section>

                <div className="strip">
                    <div className="strip-item">
                        <div className="strip-dot"></div>Weekly and biweekly programs
                    </div>
                    <div className="strip-item">
                        <div className="strip-dot"></div>Garden bed and lawn care
                    </div>
                    <div className="strip-item">
                        <div className="strip-dot"></div>Seasonal cleanups & spring prep
                    </div>
                    <div className="strip-item">
                        <div className="strip-dot"></div>Ecological, low-input practices
                    </div>
                </div>

                <section className="service-section">
                    <div className="service-section-inner">
                        <div className="service-section-text">
                            <div className="sec-eye">What We Do</div>
                            <h2 className="service-section-title">A better maintenance<br /><em>routine for your property.</em></h2>
                            <p className="service-section-body">
                                We treat property maintenance as an ongoing practice, not a one-off task.
                                That means clean mowing, careful bed care, and seasonal attention that keeps
                                your landscape healthy from spring through fall.
                            </p>
                            <p className="service-section-body">
                                Our programs focus on long-term property health and the look of your home
                                — with a consistent team, reliable scheduling, and communication you can trust.
                            </p>
                        </div>
                        <div className="service-pillars">
                            <div className="service-pillar">
                                <div className="service-pillar-icon">✦</div>
                                <div className="service-pillar-title">Lawn + Edging</div>
                                <div className="service-pillar-body">Cutting at the right height for each property, with clean edges around beds, paths and hardscapes.</div>
                            </div>
                            <div className="service-pillar">
                                <div className="service-pillar-icon">✦</div>
                                <div className="service-pillar-title">Bed Care</div>
                                <div className="service-pillar-body">Weeding, mulching, pruning and seasonal refreshes so planting areas look neat and healthy.</div>
                            </div>
                            <div className="service-pillar">
                                <div className="service-pillar-icon">✦</div>
                                <div className="service-pillar-title">Property Health</div>
                                <div className="service-pillar-body">We use ecological methods to support soil, plants, and landscape resilience without synthetic shortcuts.</div>
                            </div>
                            <div className="service-pillar">
                                <div className="service-pillar-icon">✦</div>
                                <div className="service-pillar-title">Seasonal Support</div>
                                <div className="service-pillar-body">Spring prep, summer maintenance and fall cleanups keep the property in shape for every season.</div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="svc-detail-body">
                    <div className="svc-detail-img">
                        <div className="svc-detail-img-main">
                            <img className='svc-detail-img-main' src={MaintenancePhoto1} alt="Landscape maintenance crew at work" />
                        </div>
                    </div>
                    <div className="svc-detail-text">
                        <div className="sec-eye">Service Focus</div>
                        <h2 className="sec-title">Maintenance done with<br /><em>long-term health in mind.</em></h2>
                        <p className="sec-body">
                            We pay attention to the details most maintenance crews miss — consistent mowing,
                            clean beds, and proactive care so your property looks its best with every visit.
                        </p>
                        <div className="svc-scope">
                            <div className="scope-title">Included with our programs</div>
                            <ul className="scope-list">
                                <li>Regular mowing and edging</li>
                                <li>Garden bed care and weeding</li>
                                <li>Seasonal debris removal</li>
                                <li>Soil-friendly, low-input maintenance</li>
                            </ul>
                        </div>
                        <div className="svc-pricing">
                            <div className="pricing-label">Maintenance plans</div>
                            <div className="pricing-value">Custom quoted</div>
                            <div className="pricing-note">Every property is unique — we quote based on site size, scope, and the service rhythm that fits your landscape.</div>
                        </div>
                        <a href="/contact" className="btn-primary">Request a Quote</a>
                    </div>
                </div>

                {/* ── PHOTO GALLERY ── */}
                <section className="service-gallery">
                    <div className="service-gallery-inner">
                        <div className="service-gallery-text">
                            <div className="sec-eye">In the field</div>
                            <h2 className="service-section-title">The kind of care our properties receive.</h2>
                            <p className="service-section-body">Every visit is focused on quality, consistency, and the long-term health of the property. These photos show the clean edges, thoughtful planting care, and attentive maintenance we provide season after season.</p>
                        </div>
                        <div className="service-gallery-grid">
                            <div className="service-gallery-card">
                                <img src={MaintenancePhoto2} alt="Maintenance crew working on a landscape" />
                            </div>
                            <div className="service-gallery-card">
                                <img src={MaintenancePhoto3} alt="Garden maintenance and planting care" />
                            </div>
                            <div className="service-gallery-card">
                                <img src={MaintenancePhoto4} alt="Healthy, maintained landscape" />
                            </div>
                            <div className="service-gallery-card">
                                <img src={MaintenancePhoto5} alt="Finished property maintenance result" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── MAINTENANCE PACKAGES ── */}
                <section className="service-packages">
                    <div className="service-packages-inner">
                        <div className="sec-eye">Maintenance Packages</div>
                        <h2 className="service-section-title">Flexible programs that fit your property.</h2>
                        <div className="service-packages-grid">
                            <div className="package-card">
                                <div className="package-card-title">Weekly Care</div>
                                <div className="package-card-body">Ideal for busy properties that need a polished, consistent look. Includes mowing, edging, bed maintenance, and routine checks every week.</div>
                            </div>
                            <div className="package-card">
                                <div className="package-card-title">Biweekly Service</div>
                                <div className="package-card-body">A balanced option for properties that need strong upkeep without weekly visits. Great for established landscapes and slower-growing lawns.</div>
                            </div>
                            <div className="package-card">
                                <div className="package-card-title">Seasonal Support</div>
                                <div className="package-card-body">Spring cleanups, summer refresh, and fall preparation — scheduled around the practical needs of your landscape and the local climate.</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── HOW IT WORKS ── */}
                <section className="service-process">
                    <div className="service-process-inner">
                        <div className="sec-eye">How It Works</div>
                        <h2 className="service-process-title">Simple, reliable,<br /><em>no surprises.</em></h2>
                        <div className="service-steps">
                            <div className="service-step">
                                <div className="service-step-num">01</div>
                                <div className="service-step-title">Initial Walkthrough</div>
                                <div className="service-step-body">We visit your property, walk the space together, and understand your priorities before recommending anything.</div>
                            </div>
                            <div className="service-step">
                                <div className="service-step-num">02</div>
                                <div className="service-step-title">Custom Program</div>
                                <div className="service-step-body">We build a maintenance schedule around your property — weekly, biweekly, or seasonal — with a clear scope of care.</div>
                            </div>
                            <div className="service-step">
                                <div className="service-step-num">03</div>
                                <div className="service-step-title">Consistent Visits</div>
                                <div className="service-step-body">The same team shows up every time. We learn your property, track what's changing, and adjust care accordingly.</div>
                            </div>
                            <div className="service-step">
                                <div className="service-step-num">04</div>
                                <div className="service-step-title">Ongoing Communication</div>
                                <div className="service-step-body">We let you know what we observed and flag anything that needs attention — no guessing about what was done.</div>
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
                    <h2 className="cta-title">Ready for a property<br /><em>that's properly cared for?</em></h2>
                    <p className="cta-sub">Tell us about your property and we'll put together a maintenance program that fits.</p>
                    <a href="/contact" className="btn-primary">Get In Touch</a>
                </section>

            </div>
        </div>
    )
}