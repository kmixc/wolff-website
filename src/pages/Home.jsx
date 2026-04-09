import React from 'react'
import '../styles/home.css'

import Logo from '../assets/images/WOLFF-Logo.png'

import Flower1 from '../assets/images/flower-1.png'
import Flower2 from '../assets/images/flower-2.png'
import Flower3 from '../assets/images/flower-3.png'

import Tool1 from '../assets/images/tool-1.png'
import Tool2 from '../assets/images/tool-2.png'
import Tool3 from '../assets/images/tool-3.png'

import Img from '../assets/images/hero.png'
import Img1 from '../assets/images/hero-2.jpg'
import Img2 from '../assets/images/hero-3.jpg'
import Img3 from '../assets/images/hero-4.jpg'
import Img4 from '../assets/images/hero-5.jpg'
import Img5 from '../assets/images/hero-6.jpg'


export default function Home() {
    return (
        <div>
            <section className="hero">
                <div className="hero-bg" />
                <div className="hero-left">
                    <div className="eyebrow">Orton &amp; Erin, Ontario</div>
                    <h1 className="hero-title">
                        Land Rooted<br />in <em>Regeneration</em>
                    </h1>
                    <div className="hero-wolff">Working on Land Forest &amp; Flower</div>
                    <p className="hero-body">
                        Organic. Ecological. Full circle.<br />
                        We work with the land — never against it. Building living landscapes that nourish ecosystems, families, and communities across Wellington &amp; Peel counties.
                    </p>
                    <div className="hero-btns">
                        <a href="/services" className="btn-primary">Explore Our Services</a>
                        <a href="/about" className="btn-ghost">Our Approach</a>
                    </div>
                    <div className="hero-badges">
                        <span className="badge">SOUL Certified</span>
                        <span className="badge">100% Organic</span>
                        <span className="badge">Family Owned</span>
                        <span className="badge">Fully Insured</span>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="hero-botanical">
                        <img src={Flower1} alt='icon' />
                    </div>
                    <div className="hero-photo-stack">
                        <div className="ph tall">
                            <img src={Img1} alt='work' />
                        </div>
                        <div className="ph short">
                            <img src={Img2} alt='work1' />
                        </div>
                        <div className="ph short">
                            <img src={Img3} alt='work2' />
                        </div>
                    </div>
                </div>
            </section >

            <div className="strip">
                <div className="strip-item"><div className="strip-dot"></div>No Chemicals · No Pesticides · No Herbicides</div>
                <div className="strip-item"><div className="strip-dot"></div>Organic &amp; Regenerative Practices</div>
                <div className="strip-item"><div className="strip-dot"></div>Serving Erin, Caledon, Orangeville &amp; Beyond</div>
                <div className="strip-item"><div className="strip-dot"></div>Fully Insured</div>
            </div>

            <section className="ethos">
                <div className="ethos-img-wrap">
                    <div className="ethos-main">
                        <img src={Img1} alt='work4' />
                    </div>
                    <div className="ethos-accent">
                        <img src={Img2} alt='work3' />
                    </div>
                    <div className="ethos-flag">Est. Orton, Ontario</div>
                    <div className="ethos-icon-deco">
                        <img src={Flower2} alt='icon' />
                    </div>
                </div>
                <div className="ethos-text">
                    <div className="sec-eye">Our Philosophy</div>
                    <h2 className="sec-title">We believe the land<br /><em>speaks</em> — we listen.</h2>
                    <p className="sec-body" >
                        WOLFF is a family-rooted, ecologically-driven land care company operating out of Orton. Everything we do begins with the soil — the foundation of all living systems. We never use synthetic chemicals, pesticides, or herbicides. Instead, we apply organic, regenerative, and holistic practices that honour the intelligence already present in your land.
                    </p>
                    <p className="sec-body">
                        Whether it's a rain garden, a food forest, or a beautifully maintained lawn — we bring the same full-circle care and deep respect for nature to every property we touch.
                    </p>
                    <div className="ethos-values">
                        <div className="val">Ecological Gardening</div>
                        <div className="val">Native Plant Focus</div>
                        <div className="val">Soil Health First</div>
                        <div className="val">Water Conservation</div>
                        <div className="val">Wildlife Habitat</div>
                        <div className="val">Regenerative Design</div>
                    </div>
                </div>
            </section>
            <section className="services">
                <div className="services-head">
                    <div className="sec-eye">What We Do</div>
                    <h2 className="sec-title">Services rooted in <em>nature's wisdom</em></h2>
                </div>
                <div className="svc-grid-home">

                    <div className="svc-card-home">
                        <div className="svc-num-home">01</div>
                        <div className="card-deco-home"><img src={Flower1} alt="icon" /></div>
                        <svg className="svc-icon-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="9"></circle><path d="M12 6v6l3.5 3.5"></path></svg>
                        <div className="svc-name-home">Property<br />Maintenance</div>
                        <p className="svc-desc-home">Grass cutting, organic garden care, seasonal potters &amp; snow removal — all chemical-free. Customize your yearly membership package.</p>
                        <a href="/services" className="svc-link-home">View packages &nbsp;</a>
                    </div>

                    <div className="svc-card-home">
                        <div className="svc-num-home">02</div>
                        <div className="card-deco-home"><img src={Flower2} alt="icon" /></div>
                        <svg className="svc-icon-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M3 21l9-18 9 18H3z"></path><path d="M12 3v18M3 12h18"></path></svg>
                        <div className="svc-name-home">Regenerative<br />Landscaping</div>
                        <p className="svc-desc-home">Full design, install &amp; maintenance. Perennial gardens, rain gardens, water features &amp; habitat corridors — landscapes that heal the land.</p>
                        <a href="/services" className="svc-link-home">See our work &nbsp;</a>
                    </div>

                    <div className="svc-card-home">
                        <div className="svc-num-home">03</div>
                        <div className="card-deco-home"><img src={Flower3} alt="icon" /></div>
                        <svg className="svc-icon-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"></path></svg>
                        <div className="svc-name-home">Garden<br />Design</div>
                        <p className="svc-desc-home">Native pollinator gardens, woodland shade gardens, medicinal herb gardens &amp; meadows. Rooted in ecology, beautiful to inhabit.</p>
                        <a href="/services" className="svc-link-home">Browse designs &nbsp;</a>
                    </div>

                    <div className="svc-card-home">
                        <div className="svc-num-home">04</div>
                        <div className="card-deco-home"><img src={Tool1} alt="icon" /></div>
                        <svg className="svc-icon-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M17 8C8 10 5.9 16.2 3.8 22M9.5 15.5C11 12 14 8.5 20 7M9 22c0-5 2-11 8-14"></path></svg>
                        <div className="svc-name-home">Permaculture<br />Projects</div>
                        <p className="svc-desc-home">Orchards, food forests, edible &amp; medicinal gardens, composting systems. Design, install &amp; ongoing care — your own backyard ecosystem.</p>
                        <a href="/services" className="svc-link-home">Learn more &nbsp;</a>
                    </div>

                    <div className="svc-card-home">
                        <div className="svc-num-home">05</div>
                        <div className="card-deco-home"><img src={Tool2} alt="icon" /></div>
                        <svg className="svc-icon-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"></path><path d="M16 3H8L6 7h12l-2-4z"></path></svg>
                        <div className="svc-name-home">Tree Care<br />&amp; Removal</div>
                        <p className="svc-desc-home">Removal, pruning, stump grinding, storm cleanup &amp; trail maintenance. Fully insured. Full-circle — woodchips become mulch, logs become cutting boards. Servicing as far north as Sturgeon Bay.</p>
                        <a href="/services" className="svc-link-home">Tree services &nbsp;</a>
                    </div>

                    <div className="svc-card-home">
                        <div className="svc-num-home">06</div>
                        <div className="card-deco-home"><img src={Tool3} alt="icon" /></div>
                        <svg className="svc-icon-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"></path><path d="M16 3H8L6 7h12l-2-4z"></path></svg>
                        <div className="svc-name-home">Snow<br />Removal</div>
                        <p className="svc-desc-home">Tractor snowblower + truck plow for maximum flexibility. Country laneways, driveways &amp; home-based businesses. Yearly memberships available.</p>
                        <a href="/services" className="svc-link-home">Get on the list &nbsp;</a>
                    </div>

                </div>
            </section>

            <div class="photo-band">
                <div class="pb-photo">
                    <img src={Img} alt="work1" />
                </div>
                <div class="pb-photo">
                    <img src={Img4} alt="work2" />
                </div>
                <div class="pb-caption">
                    <h3 class="sec-title"><em>Beautiful</em> spaces that support life from the soil up.</h3>
                    <p>Every garden we design is a habitat. Every landscape we build is an ecosystem.</p>
                </div>
            </div>

            <section className="maint">
                <div className="maint-head">
                    <div className="sec-eye">Maintenance</div>
                    <h2 className="sec-title">Customize your <em>care package</em></h2>
                    <p className="sec-body" >
                        Mix and match services into a yearly membership that works for your property. Organic, ecological care — no chemicals, ever.
                    </p>
                </div>
                <div className="maint-grid">
                    <div className="maint-card">
                        <div className="maint-season">Lawn Care</div>
                        <div className="maint-name">Grass &amp; Edges</div>
                        <ul className="maint-list">
                            <li>Weekly or biweekly cutting</li>
                            <li>Weed whacking all edges</li>
                            <li>Zero-turn mower</li>
                            <li>Aeration (add-on)</li>
                            <li>Lawn Lover drought treatment</li>
                            <li>Overseeding</li>
                        </ul>
                    </div>
                    <div className="maint-card">
                        <div className="maint-season">Garden Care</div>
                        <div className="maint-name">Soil &amp; Plants</div>
                        <ul className="maint-list">
                            <li>Spring compost &amp; mulch top-up</li>
                            <li>Compost tea application</li>
                            <li>Hedging &amp; edging</li>
                            <li>Weeding &amp; shaping</li>
                            <li>Soil amendments &amp; care</li>
                            <li>Weekly, biweekly or monthly</li>
                        </ul>
                    </div>
                    <div className="maint-card">
                        <div className="maint-season">Seasonal</div>
                        <div className="maint-name">Potter &amp; Displays</div>
                        <ul className="maint-list">
                            <li>Quarterly seasonal installations</li>
                            <li>Spring through Winter rotations</li>
                            <li>100% natural materials only</li>
                            <li>No plastics — ever</li>
                            <li>Living plants, dried botanicals &amp; seed heads</li>
                        </ul>
                        <div className="maint-note">Bring your outdoor space to life through every season.</div>
                    </div>
                    <div className="maint-card">
                        <div className="maint-season">Winter</div>
                        <div className="maint-name">Snow Removal</div>
                        <ul className="maint-list">
                            <li>Tractor snowblower setup</li>
                            <li>Truck plow for flexibility</li>
                            <li>Smart pile management</li>
                            <li>Residential laneways &amp; driveways</li>
                            <li>Home-based businesses welcome</li>
                        </ul>
                        <div className="maint-note">Yearly memberships available — ask for details!</div>
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
                        <p className="testi-quote">"WOLFF transformed our backyard into something we never thought possible. The rain garden they designed has changed how water moves across our whole property — and it's absolutely beautiful."</p>
                        <div className="testi-name">Sarah &amp; Tom M.</div>
                        <div className="testi-loc">Erin, ON</div>
                    </div>
                    <div className="testi-card">
                        <div className="testi-stars">★★★★★</div>
                        <p className="testi-quote">"As someone who cares deeply about not using chemicals near our children and animals, finding WOLFF was a game changer. They truly understand what it means to work with nature."</p>
                        <div className="testi-name">Jennifer K.</div>
                        <div className="testi-loc">Caledon Village, ON</div>
                    </div>
                    <div className="testi-card">
                        <div className="testi-stars">★★★★★</div>
                        <p className="testi-quote">"The pollinator garden they installed last spring is thriving. Our property feels alive in a way it never did before. Incredibly knowledgeable, warm, and passionate about what they do."</p>
                        <div className="testi-name">David L.</div>
                        <div className="testi-loc">Orangeville, ON</div>
                    </div>
                </div>
            </section>

            <section className="area">
                <div className="map-wrap">
                    <div className="map-flag">Service Area</div>
                    <div className="map-inner">[ Interactive service area map<br />Wellington &amp; Peel Counties, ON ]</div>
                </div>
                <div>
                    <div className="sec-eye">Where We Work</div>
                    <h2 className="sec-title">Rooted in Orton,<br /><em>reaching far</em></h2>
                    <p className="sec-body" >
                        Based in Orton/Erin, we serve communities throughout Wellington and Peel counties. Tree care &amp; removal extends further — as far north as Sturgeon Bay.
                    </p>
                    <div className="towns">
                        <div className="towns-lbl">Communities We Serve</div>
                        <div className="towns-list">
                            <span className="town">Erin</span>
                            <span className="town">Alton</span>
                            <span className="town">Orton</span>
                            <span className="town">Terra Cotta</span>
                            <span className="town">Caledon Village</span>
                            <span className="town">Orangeville</span>
                            <span className="town">Rockwood</span>
                            <span className="town">Fergus</span>
                            <span className="town note">+ Sturgeon Bay (Tree Care)</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="family">
                <div className="fam-deco"><img src={Flower1} alt="" /></div>
                <div className="fam-photos">
                    <div className="fam-ph tall">
                        <img src={Img} alt="The WOLFF team at work" />
                    </div>
                    <div className="fam-ph short">
                        <img src={Img2} alt="Tools of the trade" />
                    </div>
                    <div className="fam-ph short">
                        <img src={Img3} alt="Growing from seed" />
                    </div>
                </div>
                <div>
                    <div className="sec-eye">The WOLFF Family</div>
                    <h2 className="sec-title">This is<br /><em>personal</em> work.</h2>
                    <p className="sec-body">
                        WOLFF isn't a corporation — we're a family that genuinely loves this land. Every project we take on is one we'd be proud to have on our own property. We bring our whole selves to every job: our ecological knowledge, our love for community, and our belief that regenerating the land is one of the most meaningful things we can do.
                    </p>
                    <a href="/about" className="btn-primary" >Meet the Team</a>
                </div>
            </section>

            <div className="brand-banner">
                <img className="brand-banner-bg" src={Img5} alt="Regenerative landscape" />
                <div className="brand-banner-overlay">
                    <img className="logo-lg" src={Logo} alt="WOLFF" />
                    <p>"Rooted in organic land care — working with nature, never against it."</p>
                </div>
            </div>

            <div className="certs">
                <div className="cert-item">
                    <div className="cert-lbl">Certified</div>
                    <div className="cert-name">SOUL Organic Practices</div>
                </div>
                <div className="cert-div"></div>
                <div className="cert-item">
                    <div className="cert-lbl">Commitment</div>
                    <div className="cert-name">No Chemicals · No Pesticides</div>
                </div>
                <div className="cert-div"></div>
                <div className="cert-item">
                    <div className="cert-lbl">Coverage</div>
                    <div className="cert-name">Fully Insured — Tree &amp; Landscaping</div>
                </div>
                <div className="cert-div"></div>
                <div className="cert-item">
                    <div className="cert-lbl">Member of</div>
                    <div className="cert-name">[ Professional Associations ]</div>
                </div>
            </div>

            <section className="cta">
                <h2 className="cta-title">Ready to <em>regenerate</em><br />your land?</h2>
                <p className="cta-sub">Every healthy landscape starts with a conversation. Tell us about your property and what you're dreaming of.</p>
                <a href="/contact" className="btn-primary">Book a Free Consultation</a>
            </section>
        </div >
    )
}
