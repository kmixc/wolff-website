import React from 'react'
import "../styles/services.css"
import SnowPhoto1 from '../assets/images/hero-7.jpg'
import SnowPhoto2 from '../assets/images/hero-8.jpg'
import SnowPhoto3 from '../assets/images/hero-9.jpg'
import SnowPhoto4 from '../assets/images/hero-10.jpg'

export default function SnowRemoval() {
    return (
        <div>
            <div id="page-snow-removal" className="page pt-nav">

                {/* ── HERO ── */}
                <section
                    className="service-hero"
                    style={{
                        backgroundImage: `linear-gradient(rgba(8, 10, 13, 0.88), rgba(8, 10, 13, 0.52)), url(${SnowPhoto2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="service-hero-inner">
                        <div className="sec-eye">Snow Removal</div>
                        <h1 className="service-hero-title">Snow clearing for<br /><em>country homes.</em></h1>
                        <p className="service-hero-body">
                            Winter service designed for long rural driveways and laneways.
                            Fast response, clean exits, and safe winter access for every storm.
                        </p>
                        <a href="/contact" className="btn-primary">Book Winter Service</a>
                    </div>
                </section>

                <section className="service-section">
                    <div className="service-section-inner">
                        <div className="service-section-text">
                            <div className="sec-eye">Why Snow Removal</div>
                            <h2 className="service-section-title">Keep your<br /><em>winter access clear.</em></h2>
                            <p className="service-section-body">
                                Rural properties need more than a quick push of snow. We clear the entire
                                entry path and manage windrows so your driveway stays usable and safe.
                            </p>
                        </div>
                        <div className="service-pillars">
                            <div className="service-pillar">
                                <div className="service-pillar-icon">✦</div>
                                <div className="service-pillar-title">Long-Lane Clearing</div>
                                <div className="service-pillar-body">Tractor-mounted snowblowers handle long country lanes without making tall, icy banks.</div>
                            </div>
                            <div className="service-pillar">
                                <div className="service-pillar-icon">✦</div>
                                <div className="service-pillar-title">Storm-Ready Response</div>
                                <div className="service-pillar-body">Seasonal plans keep your property on the schedule, not waiting for a last-minute visit.</div>
                            </div>
                            <div className="service-pillar">
                                <div className="service-pillar-icon">✦</div>
                                <div className="service-pillar-title">Cleared Exits</div>
                                <div className="service-pillar-body">We move snow away from driveways and entrances so you can leave safely after every snowfall.</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="service-process">
                    <div className="service-process-inner">
                        <div className="sec-eye">Equipment</div>
                        <h2 className="service-process-title">Tools built for<br /><em>winter work.</em></h2>
                        <div className="service-steps">
                            <div className="service-step">
                                <div className="service-step-num">01</div>
                                <div className="service-step-title">Tractor-Mounted Snowblower</div>
                                <div className="service-step-body">Pushes and throws heavy snow far from your driveway, so long lanes stay cleared without bulky banks.</div>
                            </div>
                            <div className="service-step">
                                <div className="service-step-num">02</div>
                                <div className="service-step-title">Truck Plow Team</div>
                                <div className="service-step-body">Flexible plow service for tighter driveways, entrances, and quick storm response in rural settings.</div>
                            </div>
                            <div className="service-step">
                                <div className="service-step-num">03</div>
                                <div className="service-step-title">Winter-Ready Crew</div>
                                <div className="service-step-body">Experienced local operators who know how to preserve access and avoid creating hazards in cold conditions.</div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="svc-detail-body">
                    <div className="svc-detail-img">
                        <div className="svc-detail-img-main">
                            <img className='svc-detail-img-main' src={SnowPhoto1} alt="Snow removal crew clearing a driveway" />
                        </div>
                        <div className="svc-detail-img-thumb-row">
                            <div className="svc-detail-img-thumb sdt1">
                                <img className='svc-detail-img-thumb sdt1' src={SnowPhoto3} alt="Snow clearing with heavy equipment" />
                            </div>
                            <div className="svc-detail-img-thumb sdt2">
                                <img className='svc-detail-img-thumb sdt2' src={SnowPhoto4} alt="Snow plow clearing a rural driveway" />
                            </div>
                        </div>
                    </div>
                    <div className="svc-detail-text">
                        <div className="sec-eye">Service Focus</div>
                        <h2 className="sec-title">Winter driveway care for <em>rural properties.</em></h2>
                        <p className="sec-body">
                            We keep your lane passable and your access points safe, with tools chosen for
                            long drives and heavy winter conditions.
                        </p>
                        <div className="svc-scope">
                            <div className="scope-title">Everything included</div>
                            <ul className="scope-list">
                                <li>Full driveway and lane clearing</li>
                                <li>Entrance and exit maintenance</li>
                                <li>Windrow and bank management</li>
                                <li>Seasonal response coordination</li>
                            </ul>
                        </div>
                        <div className="svc-pricing">
                            <div className="pricing-label">Winter plans</div>
                            <div className="pricing-value">Custom quoted</div>
                            <div className="pricing-note">We quote each property based on lane length, access and the winter schedule you need.</div>
                        </div>
                        <a href="/contact" className="btn-primary">Request a Winter Quote</a>
                    </div>
                </div>

                <section className="service-gallery">
                    <div className="service-gallery-inner">
                        <div className="service-gallery-text">
                            <div className="sec-eye">In the field</div>
                            <h2 className="service-section-title">More snow removal examples.</h2>
                            <p className="service-section-body">From long lanes to narrow rural driveways, these shots show the equipment, access clearing, and winter-ready results we deliver.</p>
                        </div>
                        <div className="service-gallery-grid">
                            <div className="service-gallery-card">
                                <img src={SnowPhoto1} alt="Snow removal crew clearing a driveway" />
                            </div>
                            <div className="service-gallery-card">
                                <img src={SnowPhoto2} alt="Snow-covered road being cleared" />
                            </div>
                            <div className="service-gallery-card">
                                <img src={SnowPhoto3} alt="Snow clearing with heavy equipment" />
                            </div>
                            <div className="service-gallery-card">
                                <img src={SnowPhoto4} alt="Snow plow clearing a rural driveway" />
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
                    <h2 className="cta-title">Reserve your winter slot<br /><em>before snow arrives.</em></h2>
                    <p className="cta-sub">Space is limited for country driveways. Secure consistent snow clearing now.</p>
                    <a href="/contact" className="btn-primary">Contact Us</a>
                </section>

            </div>
        </div>
    )
}
