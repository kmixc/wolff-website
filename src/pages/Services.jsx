import React from 'react'

import ServicesHero from '../assets/images/hero-20.jpg'
import Service1 from '../assets/images/services_1.jpg'
import Flower1 from '../assets/images/flower-1.png'

export default function Services() {
    return (
        <div>
            <div id="page-services" className="page">
                <section className="page-hero">
                    <div className="page-hero-bg" style={{
                        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.28), rgba(10, 10, 10, 0.28)), url(${ServicesHero})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>
                    <div className="page-hero-content">
                        <div className="page-hero-eye">What We Do</div>
                        <h1 className="page-hero-title">Organic land care,<br /><em>every season.</em></h1>
                        <div className="page-hero-rule"></div>
                        <p className="page-hero-sub">From routine property maintenance to full-scale regenerative transformations — every
                            service we offer is guided by the same principle: work with nature.</p>
                    </div>
                </section>

                <div className="strip">
                    <div className="strip-item">
                        <div className="strip-dot"></div>No Synthetic Chemicals
                    </div>
                    <div className="strip-item">
                        <div className="strip-dot"></div>Year-Round Availability
                    </div>
                    <div className="strip-item">
                        <div className="strip-dot"></div>Custom Property Plans
                    </div>
                    <div className="strip-item">
                        <div className="strip-dot"></div>Serving Headwaters Region
                    </div>
                </div>

                <div className="services-intro">
                    <div>
                        <div className="sec-eye">Our Services</div>
                        <h2 className="sec-title">Every property is<br />a <em>living system</em></h2>
                    </div>
                    <div className="services-intro-right">
                        <p>We don't offer cookie-cutter service packages. We start with a conversation about your property, your vision,
                            and your land's current condition — then we build a care plan that honours all three.</p>
                        <p>Our services span the full spectrum of organic land care, from the straightforward to the deeply ecological.
                            Whether you need weekly mowing or a multi-year regenerative planting program, we bring the same attention and
                            intention to the work.</p>
                    </div>
                </div>

                <div className="services-list">
                    <a className="svc-item" href="/property-maintenance">
                        <div className="svc-num">01</div>
                        <div className="svc-name">Property <em>Maintenance</em></div>
                        <p className="svc-desc">Ongoing organic lawn and garden care — mowing, edging, pruning, mulching, weeding, and
                            seasonal clean-ups that keep your property looking its best through every season.</p>
                        <div className="svc-tags"><span className="svc-tag">Year-Round</span><span className="svc-tag">Residential</span><span className="svc-tag">Commercial</span><span className="svc-tag">Organic Land Care</span></div>
                    </a>
                    <a className="svc-item" href="/landscaping">
                        <div className="svc-num">02</div>
                        <div className="svc-name">Regenerative <em>Landscaping</em></div>
                        <p className="svc-desc">Design and installation of landscapes rooted in ecological principles — native plants, soil
                            regeneration, food forests, pollinator gardens, and living ground covers that outperform turf.</p>
                        <div className="svc-tags"><span className="svc-tag">Design &amp; Build</span><span className="svc-tag">Native Plants</span>
                        </div>
                    </a>
                    <a className="svc-item" href="/garden-design">
                        <div className="svc-num">03</div>
                        <div className="svc-name">Garden <em>Design</em></div>
                        <p className="svc-desc">Custom planting plans that balance beauty with ecological function. We design gardens that
                            peak across seasons and evolve gracefully over years, with minimal inputs and maximum life.</p>
                        <div className="svc-tags"><span className="svc-tag">Planting Plans</span><span className="svc-tag">Installation</span><span className="svc-tag">Native Plants</span><span className="svc-tag">Organic Gardening</span></div>
                    </a>
                    <a className="svc-item" href="/permaculture-projects">
                        <div className="svc-num">04</div>
                        <div className="svc-name">Permaculture <em>Projects</em></div>
                        <p className="svc-desc">Whole-property design using permaculture ethics and principles. Food forest creation, edible
                            landscapes, water harvesting earthworks, and integrated production systems for acreage and small properties.</p>
                        <div className="svc-tags"><span className="svc-tag">Acreage</span><span className="svc-tag">Rural</span><span className="svc-tag">Full Circle Approach</span><span className="svc-tag">Food Forest</span><span className="svc-tag">Edible Landscapes</span></div>
                    </a>
                    <a className="svc-item" href="/tree-care">
                        <div className="svc-num">05</div>
                        <div className="svc-name">Tree Care <em>&amp; Removal</em></div>
                        <p className="svc-desc">Our team of fully insured arborists provides health assessments, structural pruning, safe removal,
                            stump grinding, and ongoing tree care programs — all chemical-free.</p>
                        <div className="svc-tags"><span className="svc-tag">Arborist</span></div>
                    </a>
                    <a className="svc-item" href="/snow-removal">
                        <div className="svc-num">06</div>
                        <div className="svc-name">Snow <em>Removal</em></div>
                        <p className="svc-desc">Reliable winter property maintenance — snow blowing and shovelling to keep driveways, walkways, and
                            the surrounding landscape accessible.</p>
                        <div className="svc-tags"><span className="svc-tag">Winter</span><span className="svc-tag">Tractor Blower Attachment</span></div>
                    </a>
                </div>

                <section className="services-approach">
                    <div>
                        <div className="sec-eye" >How We Work</div>
                        <h2 className="sec-title-light">A process as <em>intentional</em><br />as the outcome</h2>
                        <div className="approach-steps">
                            <div className="approach-step">
                                <div className="step-n">01</div>
                                <div>
                                    <div className="step-t">Discovery Call</div>
                                    <p className="step-b">We start with a conversation — your property, your goals, and what "healthy land" means
                                        to you.</p>
                                </div>
                            </div>
                            <div className="approach-step">
                                <div className="step-n">02</div>
                                <div>
                                    <div className="step-t">Property Assessment</div>
                                    <p className="step-b">A site visit to observe soil health, existing vegetation, drainage, microclimate, and
                                        opportunities.</p>
                                </div>
                            </div>
                            <div className="approach-step">
                                <div className="step-n">03</div>
                                <div>
                                    <div className="step-t">Custom Care Plan</div>
                                    <p className="step-b">A written plan tailored to your property and budget — seasonal, practical, and
                                        ecologically grounded.</p>
                                </div>
                            </div>
                            <div className="approach-step">
                                <div className="step-n">04</div>
                                <div>
                                    <div className="step-t">Ongoing Stewardship</div>
                                    <p className="step-b">We revisit, refind, and evolve the plan as your land responds and as the seasons change. This is true organic land care and stewardship.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="approach-visual">
                        <div className="approach-img">
                            <img src={Service1} alt="WOLFF crew at work" />
                        </div>
                    </div>
                </section>

                <section className="testi">
                    <div className="testi-deco"><img src={Flower1} alt="icon" /></div>
                    <div className="testi-head">
                        <div className="sec-eye">Client Love</div>
                        <h2 className="sec-title">What our community <em>is saying</em></h2>
                    </div>
                    <div className="testi-grid">
                        <div className="testi-card">
                            <div className="testi-stars">★★★★★</div>
                            <p className="testi-quote">"I have hired Wolff Landscaping to do work on my rural property for the past three years. I have always found Alex and Kurt to be very friendly and respectful. They always worked very efficiently and carefully whether they were cutting my lawn, doing spring clean up, trimming bushes, weeding my gardens, or cleaning my small pond. It was very obvious that they took pride in their work. They were able to transform my wild, unkept gardens into something beautiful. Their rates are very reasonable for the quality of their work. I highly recommend Wolff Landscaping."</p>
                            <div className="testi-loc">Hillsburgh, ON</div>
                        </div>
                        <div className="testi-card">
                            <div className="testi-stars">★★★★★</div>
                            <p className="testi-quote">"My driveway held up beautifully after all the rain! So THANK YOU! You did a great job!!!"</p>
                            <div className="testi-name">J.</div>
                            <div className="testi-loc">Caledon, ON</div>
                        </div>
                        <div className="testi-card">
                            <div className="testi-stars">★★★★★</div>
                            <p className="testi-quote">"Thank you very much for working so hard today in the heat. The gardens look amazing! I love what you did with the back garden, very good selections."</p>
                            <div className="testi-name">B.</div>
                            <div className="testi-loc">Georgetown, ON</div>
                        </div>
                        <div className="testi-card">
                            <div className="testi-stars">★★★★★</div>
                            <p className="testi-quote">"I wanted to say how happy we are with the hedges and the edges of the grass around the garden and the patio. We love how deep and neat it looks."</p>
                            <div className="testi-name">D.</div>
                            <div className="testi-loc">Alton, ON</div>
                        </div>
                        <div className="testi-card">
                            <div className="testi-stars">★★★★★</div>
                            <p className="testi-quote">"I couldn't be happier with the work that was done on my property. From start to finish, the experience was smooth, professional, and genuinely pleasant. They handled the removal of a large number of trees efficiently and with great care, making sure everything was done safely and exactly as discussed. They took the time to answer questions, kept me informed throughout the process, and made sure I was completely satisfied with the results. I would highly recommend them to anyone looking for quality work and a stress-free experience."</p>
                            <div className="testi-name">B.</div>
                            <div className="testi-loc">Oakville, ON</div>
                        </div>
                    </div>
                </section>

                <section className="cta">
                    <h2 className="cta-title">Not sure where to <em>start?</em></h2>
                    <p className="cta-sub">A 20-minute discovery call is all it takes. We'll listen, ask the right questions, and tell you
                        honestly what your land needs.</p>
                    <a href="/contact" className="btn-primary">Book a Free Call</a>
                </section>
            </div>
        </div>
    )
}
