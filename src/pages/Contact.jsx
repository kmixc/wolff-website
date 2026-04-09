import React from 'react'

export default function Contact() {
    return (
        <div>
            <div id="page-contact" className="page pt-nav">

                <div className="contact-layout">
                    <div className="contact-info">
                        <div className="contact-info-top">
                            <div className="sec-eye" >Get In Touch</div>
                            <h2 className="contact-info-title">Let's talk about<br /><em>your land.</em></h2>
                            <p className="contact-info-body">We're a small, intentional team. We respond to every inquiry personally and take
                                the time to understand your property before offering any recommendations.</p>
                            <div className="contact-detail">
                                <div className="contact-detail-icon"><span>✉</span></div>
                                <div>
                                    <div className="contact-detail-label">Email</div>
                                    <div className="contact-detail-value"><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                        data-cfemail="89e1ece5e5e6c9fee6e5efefe5e8e7edeae8fbeca7eae8">[email&#160;protected]</a></div>
                                </div>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-detail-icon"><span>☎</span></div>
                                <div>
                                    <div className="contact-detail-label">Phone</div>
                                    <div className="contact-detail-value">(XXX) XXX-XXXX</div>
                                </div>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-detail-icon"><span>⌖</span></div>
                                <div>
                                    <div className="contact-detail-label">Based In</div>
                                    <div className="contact-detail-value">Orton / Erin, Ontario</div>
                                </div>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-detail-icon"><span>◎</span></div>
                                <div>
                                    <div className="contact-detail-label">Service Area</div>
                                    <div className="contact-detail-value">Erin · Caledon · Orangeville · Mono · Guelph &amp; surrounding</div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-hours">
                            <div className="contact-hours-title">Office &amp; Response Hours</div>
                            <div className="contact-hours-row"><span>Monday – Friday</span><span>8:00 am – 5:00 pm</span></div>
                            <div className="contact-hours-row"><span>Saturday</span><span>9:00 am – 12:00 pm</span></div>
                            <div className="contact-hours-row"><span>Sunday</span><span>Closed</span></div>
                            <div>
                                We typically respond within one business day. For urgent tree care matters, leave a voicemail and we'll get
                                back to you as soon as possible.</div>
                        </div>
                    </div>

                    <div className="contact-form-col">
                        <div className="contact-form-title">Send us a message</div>
                        <div className="contact-form-sub">Tell us a little about your property and what you're looking for — we'll be in
                            touch within one business day.</div>

                        <div className="form-row">
                            <div className="form-field"><label className="form-label">First Name</label><input type="text" className="form-input"
                                placeholder="Jane" /></div>
                            <div className="form-field"><label className="form-label">Last Name</label><input type="text" className="form-input"
                                placeholder="Smith" /></div>
                        </div>
                        <div className="form-field"><label className="form-label">Email Address</label><input type="email" className="form-input"
                            placeholder="jane@example.com" /></div>
                        <div className="form-field"><label className="form-label">Phone (optional)</label><input type="tel" className="form-input"
                            placeholder="(519) 555-0100" /></div>
                        <div className="form-field">
                            <label className="form-label">What are you looking for?</label>
                            <select className="form-select">
                                <option value="" disabled selected>Select a service</option>
                                <option>Property Maintenance</option>
                                <option>Regenerative Landscaping</option>
                                <option>Garden Design</option>
                                <option>Permaculture Project</option>
                                <option>Tree Care &amp; Removal</option>
                                <option>Snow Removal</option>
                                <option>General Inquiry</option>
                            </select>
                        </div>
                        <div className="form-field">
                            <label className="form-label">Tell us about your property</label>
                            <textarea className="form-input"
                                placeholder="Property size, location, current condition, what you'd love to see changed or improved..."></textarea>
                        </div>
                        <p className="form-note">We take your privacy seriously. Your information will only be used to respond to your
                            inquiry and will never be sold or shared.</p>
                        <a href="/contact" className="btn-primary" >Send Message</a>
                    </div>
                </div>

                <div className="contact-map">
                    <span>Map placeholder — Erin / Headwaters Region, Ontario</span>
                </div>

                <section className="cta">
                    <h2 className="cta-title">Prefer to <em>book directly?</em></h2>
                    <p className="cta-sub">Skip the form — book a free 20-minute discovery call and we'll figure out the rest from there.
                    </p>
                    <a href="/contact" className="btn-primary">Book a Discovery Call</a>
                </section>
            </div>
        </div>
    )
}
