import React from 'react'

export default function Contact() {
    return (
        <div>
            <div id="page-contact" class="page pt-nav">

                <div class="contact-layout">
                    <div class="contact-info">
                        <div class="contact-info-top">
                            <div class="sec-eye" >Get In Touch</div>
                            <h2 class="contact-info-title">Let's talk about<br /><em>your land.</em></h2>
                            <p class="contact-info-body">We're a small, intentional team. We respond to every inquiry personally and take
                                the time to understand your property before offering any recommendations.</p>
                            <div class="contact-detail">
                                <div class="contact-detail-icon"><span>✉</span></div>
                                <div>
                                    <div class="contact-detail-label">Email</div>
                                    <div class="contact-detail-value"><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                        data-cfemail="89e1ece5e5e6c9fee6e5efefe5e8e7edeae8fbeca7eae8">[email&#160;protected]</a></div>
                                </div>
                            </div>
                            <div class="contact-detail">
                                <div class="contact-detail-icon"><span>☎</span></div>
                                <div>
                                    <div class="contact-detail-label">Phone</div>
                                    <div class="contact-detail-value">(XXX) XXX-XXXX</div>
                                </div>
                            </div>
                            <div class="contact-detail">
                                <div class="contact-detail-icon"><span>⌖</span></div>
                                <div>
                                    <div class="contact-detail-label">Based In</div>
                                    <div class="contact-detail-value">Orton / Erin, Ontario</div>
                                </div>
                            </div>
                            <div class="contact-detail">
                                <div class="contact-detail-icon"><span>◎</span></div>
                                <div>
                                    <div class="contact-detail-label">Service Area</div>
                                    <div class="contact-detail-value">Erin · Caledon · Orangeville · Mono · Guelph &amp; surrounding</div>
                                </div>
                            </div>
                        </div>
                        <div class="contact-hours">
                            <div class="contact-hours-title">Office &amp; Response Hours</div>
                            <div class="contact-hours-row"><span>Monday – Friday</span><span>8:00 am – 5:00 pm</span></div>
                            <div class="contact-hours-row"><span>Saturday</span><span>9:00 am – 12:00 pm</span></div>
                            <div class="contact-hours-row"><span>Sunday</span><span>Closed</span></div>
                            <div>
                                We typically respond within one business day. For urgent tree care matters, leave a voicemail and we'll get
                                back to you as soon as possible.</div>
                        </div>
                    </div>

                    <div class="contact-form-col">
                        <div class="contact-form-title">Send us a message</div>
                        <div class="contact-form-sub">Tell us a little about your property and what you're looking for — we'll be in
                            touch within one business day.</div>

                        <div class="form-row">
                            <div class="form-field"><label class="form-label">First Name</label><input type="text" class="form-input"
                                placeholder="Jane" /></div>
                            <div class="form-field"><label class="form-label">Last Name</label><input type="text" class="form-input"
                                placeholder="Smith" /></div>
                        </div>
                        <div class="form-field"><label class="form-label">Email Address</label><input type="email" class="form-input"
                            placeholder="jane@example.com" /></div>
                        <div class="form-field"><label class="form-label">Phone (optional)</label><input type="tel" class="form-input"
                            placeholder="(519) 555-0100" /></div>
                        <div class="form-field">
                            <label class="form-label">What are you looking for?</label>
                            <select class="form-select">
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
                        <div class="form-field">
                            <label class="form-label">Tell us about your property</label>
                            <textarea class="form-input"
                                placeholder="Property size, location, current condition, what you'd love to see changed or improved..."></textarea>
                        </div>
                        <p class="form-note">We take your privacy seriously. Your information will only be used to respond to your
                            inquiry and will never be sold or shared.</p>
                        <a href="/contact" class="btn-primary" >Send Message</a>
                    </div>
                </div>

                <div class="contact-map">
                    <span>Map placeholder — Erin / Headwaters Region, Ontario</span>
                </div>

                <section class="cta">
                    <h2 class="cta-title">Prefer to <em>book directly?</em></h2>
                    <p class="cta-sub">Skip the form — book a free 20-minute discovery call and we'll figure out the rest from there.
                    </p>
                    <a href="/contact" class="btn-primary">Book a Discovery Call</a>
                </section>
            </div>
        </div>
    )
}
