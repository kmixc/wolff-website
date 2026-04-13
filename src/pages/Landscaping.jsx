import React from 'react'

import LandscapingImg1 from '../assets/images/landscaping-1.jpg'
import LandscapingImg2 from '../assets/images/hero-7.jpg'
import LandscapingImg3 from '../assets/images/hero-8.jpg'
import HeroImg from '../assets/images/hero-6.jpg'

export default function Landscaping() {
    return (
        <div><div id="page-landscaping" className="page pt-nav">

            <section className="page-hero">
                <div className="page-hero-bg" style={{ backgroundImage: `url(${HeroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="page-hero-content">
                    <div className="page-hero-eye">Services / Landscaping</div>
                    <h1 className="page-hero-title">Landscapes that live,<br /><em>breathe, and endure.</em></h1>
                    <div className="page-hero-rule"></div>
                    <p className="page-hero-sub">Regenerative landscaping isn't just a design aesthetic — it's a fundamental rethinking
                        of how a property can function. We design and build landscapes that improve with time rather than requiring
                        constant chemical intervention.</p>
                </div>
            </section>

            <div className="strip">
                <div className="strip-item">
                    <div className="strip-dot"></div>Native &amp; Adaptive Plants
                </div>
                <div className="strip-item">
                    <div className="strip-dot"></div>Soil-First Approach
                </div>
                <div className="strip-item">
                    <div className="strip-dot"></div>Design &amp; Installation
                </div>
                <div className="strip-item">
                    <div className="strip-dot"></div>Ongoing Stewardship Plans
                </div>
            </div>

            <div className="svc-detail-body">
                <div className="svc-detail-img">
                    <div className="svc-detail-img-main">
                        <img className='svc-detail-img-main' src={LandscapingImg1} alt="WOLFF crew at work" />
                    </div>
                    <div className="svc-detail-img-thumb-row">
                        <div className="svc-detail-img-thumb sdt1">
                            <img className='svc-detail-img-thumb sdt1' src={LandscapingImg2} alt="WOLFF crew at work" />
                        </div>
                        <div className="svc-detail-img-thumb sdt2">
                            <img className='svc-detail-img-thumb sdt2' src={LandscapingImg3} alt="WOLFF crew at work" />
                        </div>
                    </div>
                </div>
                <div className="svc-detail-text">
                    <div className="sec-eye">What We Offer</div>
                    <h2 className="sec-title">Ecological design that <em>honours your land</em></h2>
                    <p className="sec-body">We begin every landscaping project with a deep listen — to you, and to the land itself. What
                        does the soil want to do? What water moves through here? What edges, slopes, and exposures does the property
                        have? The design emerges from those answers.</p>
                    <div className="svc-scope">
                        <div className="scope-title">What's Included</div>
                        <ul className="scope-list">
                            <li>Site assessment &amp; soil health analysis</li>
                            <li>Custom planting plan with native &amp; adaptive species</li>
                            <li>Soil preparation &amp; amendment (organic inputs only)</li>
                            <li>Plant sourcing from certified organic nurseries</li>
                            <li>Full installation &amp; establishment care</li>
                            <li>Pollinator &amp; wildlife habitat integration</li>
                            <li>Food forest &amp; edible landscape design</li>
                            <li>Optional ongoing maintenance plan</li>
                        </ul>
                    </div>
                    <div className="svc-pricing">
                        <div className="pricing-label">Starting From</div>
                        <div className="pricing-value">Custom Quoted</div>
                        <div className="pricing-note">All projects are individually assessed. Contact us for a free discovery call and
                            site visit.</div>
                    </div>
                    <a href="/contact" className="btn-primary">Book a Consultation</a>&nbsp;&nbsp;
                    <a href="/projects" className="btn-ghost">View Projects</a>
                </div>
            </div>

            <section className="svc-gallery">
                <div className="gallery-head">
                    <div className="sec-eye">Recent Work</div>
                    <h2 className="sec-title">Projects that show what's <em>possible</em></h2>
                </div>
                <div className="gallery-grid">
                    <div className="gal-item tall">
                        <div className="gal-fill gal-fill-a" >
                            <span className="gal-label">Erin Estate — Native meadow restoration</span>
                        </div>
                    </div>
                    <div className="gal-item">
                        <div className="gal-fill gal-fill-b">
                            <span className="gal-label">Caledon — Pollinator border</span>
                        </div>
                    </div>
                    <div className="gal-item">
                        <div className="gal-fill gal-fill-c">
                            <span className="gal-label">Orangeville — Rain garden</span>
                        </div>
                    </div>
                    <div className="gal-item">
                        <div className="gal-fill gal-fill-d">
                            <span className="gal-label">Guelph — Food forest install</span>
                        </div>
                    </div>
                    <div className="gal-item">
                        <div className="gal-fill gal-fill-b">
                            <span className="gal-label">Mono — Shade garden redesign</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta">
                <h2 className="cta-title">Let's design something <em>alive.</em></h2>
                <p className="cta-sub">Tell us about your land and we'll talk about what's possible — no pressure, no sales pitch,
                    just a genuine conversation.</p>
                <a href="/contact" className="btn-primary">Book a Free Consultation</a>
            </section>

        </div>
        </div>
    )
}
