import React from 'react'

export default function Home() {
    return (
        <div>
            <section class="hero">
                <div class="hero-bg" />
                <div class="hero-left">
                    <div class="eyebrow">Orton &amp; Erin, Ontario</div>
                    <h1 class="hero-title">
                        Land Rooted<br />in <em>Regeneration</em>
                    </h1>
                    <div class="hero-wlff">Working on Land Forest &amp; Flower</div>
                    <p class="hero-body">
                        Organic. Ecological. Full circle.<br />
                        We work with the land — never against it. Building living landscapes that nourish ecosystems, families, and communities across Wellington &amp; Peel counties.
                    </p>
                    <div class="hero-btns">
                        <a href="#" class="btn-primary">Explore Our Services</a>
                        <a href="#" class="btn-ghost">Our Approach</a>
                    </div>
                    <div class="hero-badges">
                        <span class="badge">SOUL Certified</span>
                        <span class="badge">100% Organic</span>
                        <span class="badge">Family Owned</span>
                        <span class="badge">Fully Insured</span>
                    </div>
                </div>

                <div class="hero-right">
                    <div class="hero-botanical">
                        <img />
                        <div class="hero-photo-stack">
                            <div class="ph tall">
                                <img />
                            </div>
                            <div class="ph short">
                                <img />
                            </div>
                            <div class="ph short">
                                <img />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="strip">
                <div class="strip-item"><div class="strip-dot"></div>No Chemicals · No Pesticides · No Herbicides</div>
                <div class="strip-item"><div class="strip-dot"></div>Organic &amp; Regenerative Practices</div>
                <div class="strip-item"><div class="strip-dot"></div>Serving Erin, Caledon, Orangeville &amp; Beyond</div>
                <div class="strip-item"><div class="strip-dot"></div>Fully Insured</div>
            </div>

            <section class="ethos">
                <div class="ethos-img-wrap">
                    <div class="ethos-main">
                        <img />
                    </div>
                    <div class="ethos-accent">
                        <img />
                    </div>
                    <div class="ethos-flag">Est. Orton, Ontario</div>
                    <div class="ethos-icon-deco">
                        <img />
                    </div>
                </div>
                <div class="ethos-text">
                    <div class="sec-eye">Our Philosophy</div>
                    <h2 class="sec-title">We believe the land<br /><em>speaks</em> — we listen.</h2>
                    <p class="sec-body" >
                        WOLFF is a family-rooted, ecologically-driven land care company operating out of Orton. Everything we do begins with the soil — the foundation of all living systems. We never use synthetic chemicals, pesticides, or herbicides. Instead, we apply organic, regenerative, and holistic practices that honour the intelligence already present in your land.
                    </p>
                    <p class="sec-body">
                        Whether it's a rain garden, a food forest, or a beautifully maintained lawn — we bring the same full-circle care and deep respect for nature to every property we touch.
                    </p>
                    <div class="ethos-values">
                        <div class="val">Ecological Gardening</div>
                        <div class="val">Native Plant Focus</div>
                        <div class="val">Soil Health First</div>
                        <div class="val">Water Conservation</div>
                        <div class="val">Wildlife Habitat</div>
                        <div class="val">Regenerative Design</div>
                    </div>
                </div>
            </section>
            <section class="services">
                <div class="services-head">
                    <div class="sec-eye">What We Do</div>
                    <h2 class="sec-title">Services rooted in <em>nature's wisdom</em></h2>
                </div>
                <div class="svc-grid">

                    <div class="svc-card">
                        <div class="svc-num">01</div>
                        <div class="card-deco">
                            <svg class="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="9"></circle><path d="M12 6v6l3.5 3.5"></path></svg>
                            <div class="svc-name">Property<br />Maintenance</div>
                            <p class="svc-desc">Grass cutting, organic garden care, seasonal potters &amp; snow removal — all chemical-free. Customize your yearly membership package.</p>
                            <a href="#" class="svc-link">View packages &nbsp;</a>
                        </div>
                    </div>

                    <div class="svc-card">
                        <div class="svc-num">02</div>
                        <div class="card-deco">
                            <svg class="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M3 21l9-18 9 18H3z"></path><path d="M12 3v18M3 12h18"></path></svg>
                            <div class="svc-name">Regenerative<br />Landscaping</div>
                            <p class="svc-desc">Full design, install &amp; maintenance. Perennial gardens, rain gardens, water features &amp; habitat corridors — landscapes that heal the land.</p>
                            <a href="#" class="svc-link">See our work &nbsp;</a>
                        </div>
                    </div>

                    <div class="svc-card">
                        <div class="svc-num">03</div>
                        <div class="card-deco">
                            <svg class="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"></path></svg>
                            <div class="svc-name">Garden<br />Design</div>
                            <p class="svc-desc">Native pollinator gardens, woodland shade gardens, medicinal herb gardens &amp; meadows. Rooted in ecology, beautiful to inhabit.</p>
                            <a href="#" class="svc-link">Browse designs &nbsp;</a>
                        </div>
                    </div>

                    <div class="svc-card">
                        <div class="svc-num">04</div>
                        <div class="card-deco">
                            <svg class="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M17 8C8 10 5.9 16.2 3.8 22M9.5 15.5C11 12 14 8.5 20 7M9 22c0-5 2-11 8-14"></path></svg>
                            <div class="svc-name">Permaculture<br />Projects</div>
                            <p class="svc-desc">Orchards, food forests, edible &amp; medicinal gardens, composting systems. Design, install &amp; ongoing care — your own backyard ecosystem.</p>
                            <a href="#" class="svc-link">Learn more &nbsp;</a>
                        </div>
                    </div>

                    <div class="svc-card">
                        <div class="svc-num">05</div>
                        <div class="card-deco">
                            <svg class="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 22V12M12 12C12 7 9 4 4 3c0 5 2 8 8 9zM12 12c0-5 3-8 8-9 0 5-2 8-8 9z"></path></svg>
                            <div class="svc-name">Tree Care<br />&amp; Removal</div>
                            <p class="svc-desc">Removal, pruning, stump grinding, storm cleanup &amp; trail maintenance. Fully insured. Full-circle — woodchips become mulch, logs become cutting boards. Servicing as far north as Sturgeon Bay.</p>
                            <a href="#" class="svc-link">Tree services &nbsp;</a>
                        </div>
                    </div>

                    <div class="svc-card">
                        <div class="svc-num">06</div>
                        <div class="card-deco">
                            <svg class="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"></path><path d="M16 3H8L6 7h12l-2-4z"></path></svg>
                            <div class="svc-name">Snow<br />Removal</div>
                            <p class="svc-desc">Tractor snowblower + truck plow for maximum flexibility. Country laneways, driveways &amp; home-based businesses. Yearly memberships available.</p>
                            <a href="#" class="svc-link">Get on the list &nbsp;</a>
                        </div>
                    </div>

                </div>
            </section>

            <div class="photo-band">
                <div class="pb-photo">
                    <img />
                </div>
                <div class="pb-photo">
                    <img />
                </div>
                <div class="pb-caption">
                    <h3 class="sec-title"><em>Beautiful</em> spaces that support life from the soil up.</h3>
                    <p>Every garden we design is a habitat. Every landscape we build is an ecosystem.</p>
                </div>
            </div>

            <section class="maint">
                <div class="maint-head">
                    <div class="sec-eye">Maintenance</div>
                    <h2 class="sec-title">Customize your <em>care package</em></h2>
                    <p class="sec-body" >
                        Mix and match services into a yearly membership that works for your property. Organic, ecological care — no chemicals, ever.
                    </p>
                </div>
                <div class="maint-grid">
                    <div class="maint-card">
                        <div class="maint-season">Lawn Care</div>
                        <div class="maint-name">Grass &amp; Edges</div>
                        <ul class="maint-list">
                            <li>Weekly or biweekly cutting</li>
                            <li>Weed whacking all edges</li>
                            <li>Zero-turn mower</li>
                            <li>Aeration (add-on)</li>
                            <li>Lawn Lover drought treatment</li>
                            <li>Overseeding</li>
                        </ul>
                    </div>
                    <div class="maint-card">
                        <div class="maint-season">Garden Care</div>
                        <div class="maint-name">Soil &amp; Plants</div>
                        <ul class="maint-list">
                            <li>Spring compost &amp; mulch top-up</li>
                            <li>Compost tea application</li>
                            <li>Hedging &amp; edging</li>
                            <li>Weeding &amp; shaping</li>
                            <li>Soil amendments &amp; care</li>
                            <li>Weekly, biweekly or monthly</li>
                        </ul>
                    </div>
                    <div class="maint-card">
                        <div class="maint-season">Seasonal</div>
                        <div class="maint-name">Potter &amp; Displays</div>
                        <ul class="maint-list">
                            <li>Quarterly seasonal installations</li>
                            <li>Spring through Winter rotations</li>
                            <li>100% natural materials only</li>
                            <li>No plastics — ever</li>
                            <li>Living plants, dried botanicals &amp; seed heads</li>
                        </ul>
                        <div class="maint-note">Bring your outdoor space to life through every season.</div>
                    </div>
                    <div class="maint-card">
                        <div class="maint-season">Winter</div>
                        <div class="maint-name">Snow Removal</div>
                        <ul class="maint-list">
                            <li>Tractor snowblower setup</li>
                            <li>Truck plow for flexibility</li>
                            <li>Smart pile management</li>
                            <li>Residential laneways &amp; driveways</li>
                            <li>Home-based businesses welcome</li>
                        </ul>
                        <div class="maint-note">Yearly memberships available — ask for details!</div>
                    </div>
                </div>
            </section>

            <section class="testi">
                <div class="testi-deco">
                    <div class="testi-head">
                        <div class="sec-eye">Client Love</div>
                        <h2 class="sec-title">What our community <em>is saying</em></h2>
                    </div>
                    <div class="testi-grid">
                        <div class="testi-card">
                            <div class="testi-stars">★★★★★</div>
                            <p class="testi-quote">"WOLFF transformed our backyard into something we never thought possible. The rain garden they designed has changed how water moves across our whole property — and it's absolutely beautiful."</p>
                            <div class="testi-name">Sarah &amp; Tom M.</div>
                            <div class="testi-loc">Erin, ON</div>
                        </div>
                        <div class="testi-card">
                            <div class="testi-stars">★★★★★</div>
                            <p class="testi-quote">"As someone who cares deeply about not using chemicals near our children and animals, finding WOLFF was a game changer. They truly understand what it means to work with nature."</p>
                            <div class="testi-name">Jennifer K.</div>
                            <div class="testi-loc">Caledon Village, ON</div>
                        </div>
                        <div class="testi-card">
                            <div class="testi-stars">★★★★★</div>
                            <p class="testi-quote">"The pollinator garden they installed last spring is thriving. Our property feels alive in a way it never did before. Incredibly knowledgeable, warm, and passionate about what they do."</p>
                            <div class="testi-name">David L.</div>
                            <div class="testi-loc">Orangeville, ON</div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="area">
                <div class="map-wrap">
                    <img />
                    <div class="map-flag">Service Area</div>
                    <div class="map-inner">[ Interactive service area map<br />Wellington &amp; Peel Counties, ON ]</div>
                </div>
                <div>
                    <div class="sec-eye">Where We Work</div>
                    <h2 class="sec-title">Rooted in Orton,<br /><em>reaching far</em></h2>
                    <p class="sec-body" >
                        Based in Orton/Erin, we serve communities throughout Wellington and Peel counties. Tree care &amp; removal extends further — as far north as Sturgeon Bay.
                    </p>
                    <div class="towns">
                        <div class="towns-lbl">Communities We Serve</div>
                        <div class="towns-list">
                            <span class="town">Erin</span>
                            <span class="town">Alton</span>
                            <span class="town">Orton</span>
                            <span class="town">Terra Cotta</span>
                            <span class="town">Caledon Village</span>
                            <span class="town">Orangeville</span>
                            <span class="town">Rockwood</span>
                            <span class="town">Fergus</span>
                            <span class="town note">+ Sturgeon Bay (Tree Care)</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="family">
                <div class="fam-deco">
                    <img />
                    <div class="fam-photos">
                        <div class="fam-ph tall">
                            <img />
                        </div>
                        <div class="fam-ph short">
                            <img />
                        </div>
                        <div class="fam-ph short">
                            <img />
                        </div>
                    </div>
                    <div>
                        <div class="sec-eye">The WOLFF Family</div>
                        <h2 class="sec-title">This is<br /><em>personal</em> work.</h2>
                        <p class="sec-body">
                            WOLFF isn't a corporation — we're a family that genuinely loves this land. Every project we take on is one we'd be proud to have on our own property. We bring our whole selves to every job: our ecological knowledge, our love for community, and our belief that regenerating the land is one of the most meaningful things we can do.
                        </p>
                        <a href="#" class="btn-primary" >Meet the Team</a>
                    </div>
                </div>
            </section>

            <div class="brand-banner">
                <img class="brand-banner-bg" />
                <div class="brand-banner-overlay">
                    <img class="logo-lg" />
                    <p>"Rooted in organic land care — working with nature, never against it."</p>
                </div>
            </div>

            <div class="certs">
                <div class="cert-item">
                    <div class="cert-lbl">Certified</div>
                    <div class="cert-name">SOUL Organic Practices</div>
                </div>
                <div class="cert-div"></div>
                <div class="cert-item">
                    <div class="cert-lbl">Commitment</div>
                    <div class="cert-name">No Chemicals · No Pesticides</div>
                </div>
                <div class="cert-div"></div>
                <div class="cert-item">
                    <div class="cert-lbl">Coverage</div>
                    <div class="cert-name">Fully Insured — Tree &amp; Landscaping</div>
                </div>
                <div class="cert-div"></div>
                <div class="cert-item">
                    <div class="cert-lbl">Member of</div>
                    <div class="cert-name">[ Professional Associations ]</div>
                </div>
            </div>

            <section class="cta">
                <div class="cta-deco-l">
                    <img />
                    <div class="cta-deco-r">
                        <img />
                        <h2 class="cta-title">Ready to <em>regenerate</em><br />your land?</h2>
                        <p class="cta-sub">Every healthy landscape starts with a conversation. Tell us about your property and what you're dreaming of.</p>
                        <a href="#" class="btn-primary" >Book a Free Consultation</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
