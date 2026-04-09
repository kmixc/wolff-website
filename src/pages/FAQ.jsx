import React, { useState } from 'react'

export default function FAQ() {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index) => {
        setOpenItems(prev => ({ ...prev, [index]: !prev[index] }));
    };
    return (
        <div>
            <div id="page-faq" className="page pt-nav">

                <section className="page-hero" >
                    <div className="page-hero-bg"></div>
                    <div className="page-hero-content" >
                        <div className="page-hero-eye">Questions &amp; Answers</div>
                        <h1 className="page-hero-title">Everything you <em>want to know</em></h1>
                        <p className="page-hero-sub">The honest answers to the questions we hear most — about our approach, our practices,
                            and what to expect when you work with WOLFF.</p>
                    </div>
                </section>

                <div className="faq-layout">
                    <div className="faq-sidebar">
                        <div className="sec-eye">Categories</div>
                        <ul className="faq-cats">
                            <li><a href="/" className="on">Our Approach</a></li>
                            <li><a href="/services">Organic &amp; Chemical-Free</a></li>
                            <li><a href="/services">Services &amp; Scope</a></li>
                            <li><a href="/services">Pricing &amp; Quotes</a></li>
                            <li><a href="/services">Service Area</a></li>
                            <li><a href="/services">Working With Us</a></li>
                        </ul>
                        <div >
                            <div className="sec-eye">Still have questions?</div>
                            <p >We're happy to
                                have a real conversation. Book a free call and ask us anything.</p>
                            <a href="/contact" className="btn-primary" >Book a Free Call</a>
                        </div>
                    </div>

                    <div className="faq-content">
                        <div className="faq-group">
                            <div className="faq-group-title">Our Approach</div>
                            <div className={`faq-item ${openItems[0] ? 'open' : ''}`}>
                                <div className="faq-q" onClick={() => toggleItem(0)}>What does "regenerative" land care actually mean?</div>
                                <div className="faq-a">Regenerative land care means we're not just maintaining the status quo of your property —
                                    we're actively working to improve soil health, increase biodiversity, and reduce the need for external
                                    inputs over time. A well-cared-for regenerative landscape should require fewer interventions each year,
                                    not more. It's the opposite of the dependency cycle created by synthetic fertilizers and pesticides.</div>
                            </div>
                            <div className={`faq-item ${openItems[1] ? 'open' : ''}`}>
                                <div className="faq-q" onClick={() => toggleItem(1)}>How is WOLFF different from a conventional landscaping company?</div>
                                <div className="faq-a">The core difference is philosophy. Conventional landscaping often relies on synthetic
                                    chemicals to force outcomes — killing weeds, fertilizing turf, suppressing pests. We work with natural
                                    processes instead. This means our results can take a little longer to establish, but they're more durable,
                                    more beautiful over time, and genuinely better for the land, your family, and local wildlife.</div>
                            </div>
                            <div className={`faq-item ${openItems[2] ? 'open' : ''}`}>
                                <div className="faq-q" onClick={() => toggleItem(2)}>Do you work on small residential properties or only larger acreages?</div>
                                <div className="faq-a">Both. Our regenerative landscaping and permaculture projects often involve larger rural
                                    and semi-rural properties, but our maintenance and garden design services work beautifully on residential
                                    lots of any size. If you're in our service area, we'd love to talk about what your property needs.</div>
                            </div>
                        </div>

                        <div className="faq-group">
                            <div className="faq-group-title">Organic &amp; Chemical-Free</div>
                            <div className={`faq-item ${openItems[3] ? 'open' : ''}`}>
                                <div className="faq-q" onClick={() => toggleItem(3)}>What exactly is "SOUL Certified" and what does it mean for my property?</div>
                                <div className="faq-a">SOUL stands for Stewards of Our Urban Lands. It's an organic land care certification that
                                    verifies we use no synthetic pesticides, herbicides, or chemical fertilizers — ever. The certification
                                    requires annual verification, so it's not just a one-time claim. For you, it means you can trust that our
                                    work is safe for children, pets, pollinators, and waterways near your property.</div>
                            </div>
                            <div className={`faq-item ${openItems[4] ? 'open' : ''}`}>
                                <div className="faq-q" onClick={() => toggleItem(4)}>Can you really manage weeds and pests without chemicals?</div>
                                <div className="faq-a">Yes — with the right approach. Healthy soil and well-chosen plants resist most pest and
                                    weed pressure naturally. When intervention is needed, we use organic-approved methods: targeted hand
                                    removal, mulch strategies, beneficial companion planting, and in some cases OMRI-listed organic inputs. It
                                    requires more knowledge than spraying a chemical, but the results are far more lasting.</div>
                            </div>
                            <div className={`faq-item ${openItems[5] ? 'open' : ''}`}>
                                <div className="faq-q" onClick={() => toggleItem(5)}>What if my property has existing chemical use from a previous provider?</div>
                                <div className="faq-a">This is common, and not a barrier to working with us. We'll assess the current state of
                                    the soil and plant community and build a transition plan. In some cases, the shift to organic care happens
                                    gradually — we set realistic expectations upfront about what the transition period looks like and how long
                                    it typically takes to see the land respond.</div>
                            </div>
                        </div>

                        <div className="faq-group">
                            <div className="faq-group-title">Pricing &amp; Quotes</div>
                            <div className={`faq-item ${openItems[6] ? 'open' : ''}`}>
                                <div className="faq-q" onClick={() => toggleItem(6)}>How does pricing work? Do you have packages?</div>
                                <div class="faq-a">We don't do rigid packages, because no two properties are the same. After an initial call
                                    and site visit, we provide a written quote based on your property's specific needs, scope, and the
                                    frequency of service you're looking for. We're upfront about costs and don't believe in surprises.</div>
                            </div>
                            <div className={`faq-item ${openItems[7] ? 'open' : ''}`}>
                                <div className="faq-q" onClick={() => toggleItem(7)}>Is organic land care more expensive than conventional?</div>
                                <div class="faq-a">Upfront, it can be comparable to or slightly higher than conventional services — because
                                    it requires more skill and knowledge. But over time, a well-managed organic property typically becomes
                                    less expensive to maintain as soil health improves and the need for inputs decreases. We see it as a
                                    long-term investment in your land's value.</div>
                            </div>
                            <div className={`faq-item ${openItems[8] ? 'open' : ''}`}>
                                <div className="faq-q" onClick={() => toggleItem(8)}>Is the initial consultation free?</div>
                                <div class="faq-a">Yes. We offer a free 20-minute discovery call, and for clients who seem like a good fit,
                                    we'll schedule a site visit at no charge. We believe in making sure we're the right match for your
                                    property before anyone spends money.</div>
                            </div>
                        </div>

                        <div className="faq-group">
                            <div className="faq-group-title">Service Area</div>
                            <div className={`faq-item ${openItems[9] ? 'open' : ''}`}>
                                <div className="faq-q" onClick={() => toggleItem(9)}>Where do you provide services?</div>
                                <div class="faq-a">We're based in Erin/Orton, Ontario and serve the broader Headwaters region — including
                                    Caledon, Orangeville, Mono, Guelph, Fergus, Elora, Hillsburgh, and surrounding areas. If you're outside
                                    these areas, reach out — we occasionally take on projects beyond our usual range for the right property.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
