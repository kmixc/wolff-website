import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import ContactMap from '../components/ContactMap'

const CONTACT_SECTIONS = {
    general: {
        eye: 'Get In Touch',
        heading: "Let's talk about",
        emphasis: 'your land.',
        body: "We're a small, intentional team. We respond to every inquiry personally and take the time to understand your property before offering any recommendations.",
        email: 'Alex@WOLFFLandscaping.ca',
        phone: '647-205-0415',
        basedIn: 'Orton / Erin, Ontario',
        serviceArea: 'Erin · Caledon · Orangeville · Mono · Guelph & surrounding',
        infoNote: "We typically respond within one business day. For urgent tree care matters, leave a voicemail and we'll get back to you as soon as possible.",
    },
    tree: {
        eye: 'Tree Services',
        heading: 'Need work',
        emphasis: 'done on trees?',
        body: "For tree care, removal, and stump grinding inquiries, reach Kurt directly. He'll assess your trees and walk you through the safest, most practical options for your property.",
        email: 'Kurt@WOLFFLandscaping.ca',
        phone: '519-288-5364',
        basedIn: null,
        serviceArea: null,
        infoNote: "We typically respond within one business day. For urgent tree care matters, leave a voicemail and we'll get back to you as soon as possible.",
    },
}


// ── FORM 1: General Contact (Alex) — Formspree: mojpooyo ─────────────────────
function GeneralContactForm() {
    const [state, handleSubmit] = useForm('mojpooyo')

    if (state.succeeded) {
        return (
            <div className="contact-form-col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p className="contact-form-title" style={{ textAlign: 'center' }}>
                    Thanks! We'll get back to you shortly.
                </p>
            </div>
        )
    }

    return (
        <div className="contact-form-col">
            <div className="contact-form-title">Send us a message</div>
            <div className="contact-form-sub">Tell us a little about your property and what you're looking for — we'll be in
                touch within one business day.</div>

            <form onSubmit={handleSubmit}>

                {/* First Name / Last Name */}
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="gc-first-name" className="form-label">First Name</label>
                        <input
                            id="gc-first-name"
                            type="text"
                            name="first_name"
                            className="form-input"
                            placeholder="Jane"
                            required
                        />
                        <ValidationError prefix="First name" field="first_name" errors={state.errors} />
                    </div>
                    <div className="form-field">
                        <label htmlFor="gc-last-name" className="form-label">Last Name</label>
                        <input
                            id="gc-last-name"
                            type="text"
                            name="last_name"
                            className="form-input"
                            placeholder="Smith"
                            required
                        />
                        <ValidationError prefix="Last name" field="last_name" errors={state.errors} />
                    </div>
                </div>

                {/* Email */}
                <div className="form-field">
                    <label htmlFor="gc-email" className="form-label">Email Address</label>
                    <input
                        id="gc-email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="jane@example.com"
                        required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Phone */}
                <div className="form-field">
                    <label htmlFor="gc-phone" className="form-label">Phone (optional)</label>
                    <input
                        id="gc-phone"
                        type="tel"
                        name="phone"
                        className="form-input"
                        placeholder="(519) 555-0100"
                    />
                </div>

                {/* Service */}
                <div className="form-field">
                    <label htmlFor="gc-service" className="form-label">What are you looking for?</label>
                    <select id="gc-service" name="service" className="form-select" defaultValue="">
                        <option value="" disabled>Select a service</option>
                        <option value="Property Maintenance">Property Maintenance</option>
                        <option value="Regenerative Landscaping">Regenerative Landscaping</option>
                        <option value="Garden Design">Garden Design</option>
                        <option value="Permaculture Project">Permaculture Project</option>
                        <option value="Tree Care & Removal">Tree Care &amp; Removal</option>
                        <option value="Snow Removal">Snow Removal</option>
                        <option value="General Inquiry">General Inquiry</option>
                    </select>
                    <ValidationError prefix="Service" field="service" errors={state.errors} />
                </div>

                {/* Property details */}
                <div className="form-field">
                    <label htmlFor="gc-property" className="form-label">Tell us about your property</label>
                    <textarea
                        id="gc-property"
                        name="property_details"
                        className="form-input"
                        placeholder="Property size, location, current condition, what you'd love to see changed or improved..."
                    ></textarea>
                    <ValidationError prefix="Property details" field="property_details" errors={state.errors} />
                </div>

                <p className="form-note">We take your privacy seriously. Your information will only be used to respond to your
                    inquiry and will never be sold or shared.</p>

                <button
                    type="submit"
                    className="btn-primary"
                    disabled={state.submitting}
                >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                </button>

            </form>
        </div>
    )
}


// ── FORM 2: Tree Services Inquiry (Kurt) — Formspree: xdapqnjj ───────────────
function TreeServicesForm() {
    const [state, handleSubmit] = useForm('xdapqnjj')

    if (state.succeeded) {
        return (
            <div className="contact-form-col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p className="contact-form-title" style={{ textAlign: 'center' }}>
                    Thanks! Kurt will get back to you shortly regarding your tree service request.
                </p>
            </div>
        )
    }

    return (
        <div className="contact-form-col">
            <div className="contact-form-title">Tree Services Inquiry</div>
            <div className="contact-form-sub">Share a few details about your trees so Kurt can come prepared — we'll be in
                touch within one business day.</div>

            <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="form-field">
                    <label htmlFor="ts-name" className="form-label">Name</label>
                    <input
                        id="ts-name"
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Jane Smith"
                        required
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                {/* Email */}
                <div className="form-field">
                    <label htmlFor="ts-email" className="form-label">Email Address</label>
                    <input
                        id="ts-email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="jane@example.com"
                        required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Phone */}
                <div className="form-field">
                    <label htmlFor="ts-phone" className="form-label">Phone (optional)</label>
                    <input
                        id="ts-phone"
                        type="tel"
                        name="phone"
                        className="form-input"
                        placeholder="(519) 555-0100"
                    />
                </div>

                {/* Tree count */}
                <div className="form-field">
                    <label htmlFor="ts-tree-count" className="form-label">How many trees need attention?</label>
                    <select id="ts-tree-count" name="tree_count" className="form-select" defaultValue="">
                        <option value="" disabled>Select a range</option>
                        <option value="1">1 tree</option>
                        <option value="2-3">2–3 trees</option>
                        <option value="4-6">4–6 trees</option>
                        <option value="7+">7 or more</option>
                    </select>
                    <ValidationError prefix="Tree count" field="tree_count" errors={state.errors} />
                </div>

                {/* Tree height */}
                <div className="form-field">
                    <label htmlFor="ts-tree-height" className="form-label">How tall are the trees? (approximate)</label>
                    <input
                        id="ts-tree-height"
                        type="text"
                        name="tree_height"
                        className="form-input"
                        placeholder="e.g. 20 ft, about two storeys, unsure..."
                    />
                    <ValidationError prefix="Tree height" field="tree_height" errors={state.errors} />
                </div>

                {/* Timeframe */}
                <div className="form-field">
                    <label htmlFor="ts-timeframe" className="form-label">Project timeframe</label>
                    <select id="ts-timeframe" name="timeframe" className="form-select" defaultValue="">
                        <option value="" disabled>Select a timeframe</option>
                        <option value="As soon as possible">As soon as possible</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="Within 3 months">Within 3 months</option>
                        <option value="Flexible / no rush">Flexible / no rush</option>
                    </select>
                    <ValidationError prefix="Timeframe" field="timeframe" errors={state.errors} />
                </div>

                {/* Stump grinding */}
                <div className="form-field">
                    <label htmlFor="ts-stump" className="form-label">Do you need stump grinding?</label>
                    <select id="ts-stump" name="stump_grinding" className="form-select" defaultValue="">
                        <option value="" disabled>Select an option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Not sure">Not sure</option>
                    </select>
                    <ValidationError prefix="Stump grinding" field="stump_grinding" errors={state.errors} />
                </div>

                {/* Material preference */}
                <div className="form-field">
                    <label htmlFor="ts-material" className="form-label">Material preference</label>
                    <select id="ts-material" name="material_preference" className="form-select" defaultValue="">
                        <option value="" disabled>Select a preference</option>
                        <option value="Keep materials">Keep materials (logs, chips, brush)</option>
                        <option value="Full disposal">Full disposal</option>
                    </select>
                    <ValidationError prefix="Material preference" field="material_preference" errors={state.errors} />
                </div>

                {/* Extra notes */}
                <div className="form-field">
                    <label htmlFor="ts-details" className="form-label">Anything else we should know?</label>
                    <textarea
                        id="ts-details"
                        name="details"
                        className="form-input"
                        placeholder="Access considerations, proximity to structures, specific concerns..."
                    ></textarea>
                    <ValidationError prefix="Details" field="details" errors={state.errors} />
                </div>

                <p className="form-note">Your information will only be used to respond to your inquiry and will never be sold or shared.</p>

                <button
                    type="submit"
                    className="btn-primary"
                    disabled={state.submitting}
                >
                    {state.submitting ? 'Sending...' : 'Send Tree Services Inquiry'}
                </button>

            </form>
        </div>
    )
}


// ── Main Contact Page ─────────────────────────────────────────────────────────
export default function Contact() {
    const [activeForm, setActiveForm] = useState('general')
    const activeInfo = CONTACT_SECTIONS[activeForm]

    return (
        <div>
            <div id="page-contact" className="page pt-nav">

                <div className="contact-layout">
                    <div className="contact-info">
                        <div className="contact-info-top">
                            <div className="sec-eye">{activeInfo.eye}</div>
                            <h2 className="contact-info-title">
                                {activeInfo.heading}
                                <br />
                                <em>{activeInfo.emphasis}</em>
                            </h2>
                            <p className="contact-info-body">{activeInfo.body}</p>
                            <div className="contact-form-jump">
                                <a href="#contact-form" className="btn-ghost">Jump to form</a>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-detail-icon"><span>✉</span></div>
                                <div>
                                    <div className="contact-detail-label">Email</div>
                                    <div className="contact-detail-value">
                                        <a href={`mailto:${activeInfo.email}`}>{activeInfo.email}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-detail-icon"><span>☎</span></div>
                                <div>
                                    <div className="contact-detail-label">Phone</div>
                                    <div className="contact-detail-value">
                                        <a href={`tel:${activeInfo.phone.replace(/[^0-9]/g, '')}`}>{activeInfo.phone}</a>
                                    </div>
                                </div>
                            </div>
                            {activeInfo.basedIn && (
                                <div className="contact-detail">
                                    <div className="contact-detail-icon"><span>⌖</span></div>
                                    <div>
                                        <div className="contact-detail-label">Based In</div>
                                        <div className="contact-detail-value">{activeInfo.basedIn}</div>
                                    </div>
                                </div>
                            )}
                            {activeInfo.serviceArea && (
                                <div className="contact-detail">
                                    <div className="contact-detail-icon"><span>◎</span></div>
                                    <div>
                                        <div className="contact-detail-label">Service Area</div>
                                        <div className="contact-detail-value">{activeInfo.serviceArea}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="contact-form-selector">
                            <button
                                type="button"
                                className={`contact-tab-btn ${activeForm === 'general' ? 'active' : ''}`}
                                onClick={() => setActiveForm('general')}
                            >
                                Get in touch
                            </button>
                            <button
                                type="button"
                                className={`contact-tab-btn ${activeForm === 'tree' ? 'active' : ''}`}
                                onClick={() => setActiveForm('tree')}
                            >
                                Tree care
                            </button>
                        </div>
                        <div className="contact-hours">
                            <div className="contact-hours-title">Office &amp; Response Hours</div>
                            <div className="contact-hours-row"><span>Monday – Friday</span><span>8:00 am – 5:00 pm</span></div>
                            <div className="contact-hours-row"><span>Saturday</span><span>9:00 am – 12:00 pm</span></div>
                            <div className="contact-hours-row"><span>Sunday</span><span>Closed</span></div>
                            <div>{activeInfo.infoNote}</div>
                        </div>
                    </div>

                    <div id="contact-form" className="contact-form-panel">
                        {activeForm === 'general' ? <GeneralContactForm /> : <TreeServicesForm />}
                    </div>
                </div>

                <div className="contact-map">
                    <ContactMap />
                </div>

                <section className="cta">
                    <h2 className="cta-title">Prefer to <em>book directly?</em></h2>
                    <p className="cta-sub">Skip the form — book a free 20-minute discovery call and we'll figure out the rest from there.</p>
                    <a href="/contact" className="btn-primary">Book a Discovery Call</a>
                </section>

            </div>
        </div>
    )
}
