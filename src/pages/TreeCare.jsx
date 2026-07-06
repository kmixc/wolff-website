import React from 'react'

import TreeCareImg1 from '../assets/images/tree-3.jpg'
import HeroImg from '../assets/images/hero-39.jpg'
import TreeCarePhoto1 from '../assets/images/tree_care/tree_care_1.jpg'
import TreeCarePhoto2 from '../assets/images/tree_care/tree_care_2.jpg'
import TreeCarePhoto3 from '../assets/images/tree_care/tree_care_3.jpg'
import TreeCarePhoto4 from '../assets/images/tree_care/tree_care_4.jpg'
import TreeCarePhoto5 from '../assets/images/tree_care/tree_care_5.jpg'
import TreeCarePhoto6 from '../assets/images/tree_care/tree_care_6.jpg'
import TreeCarePhoto7 from '../assets/images/tree_care/tree_care_7.jpg'
import TreeCarePhoto8 from '../assets/images/tree_care/tree_care_8.jpg'

const treeCarePhotos = [
    TreeCarePhoto1, TreeCarePhoto2, TreeCarePhoto3, TreeCarePhoto4,
    TreeCarePhoto5, TreeCarePhoto6, TreeCarePhoto7, TreeCarePhoto8,
]

export default function TreeCare() {
    return (
        <div>
            <div id="page-treecare" className="page pt-nav">

                <section className="page-hero">
                    <div className="page-hero-bg" style={{ backgroundImage: `url(${HeroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="page-hero-content">
                        <div className="page-hero-eye">Services / Tree Care</div>
                        <h1 className="page-hero-title">Your trees are an<br /><em>investment. We protect it.</em></h1>
                        <div className="page-hero-rule"></div>
                        <p className="page-hero-sub">Our team of fully insured arborists are here to help guide you with honesty and
                            knowledge - from pruning, native tree planting, safe tree removal, orchard care, stump grinding, to tree care
                            programs - we do everything with a full circle approach and no chemicals. We work with your trees' natural
                            growth patterns.</p>
                    </div>
                </section>

                <div className="strip">
                    <div className="strip-item">
                        <div className="strip-dot"></div>Fully insured arborists
                    </div>
                    <div className="strip-item">
                        <div className="strip-dot"></div>Chemical-Free Health Programs
                    </div>
                    <div className="strip-item">
                        <div className="strip-dot"></div>Safe Removal &amp; Stump Grinding
                    </div>
                    <div className="strip-item">
                        <div className="strip-dot"></div>Storm Damage Response
                    </div>
                </div>

                <div className="photo-row">
                    {treeCarePhotos.map((photo, i) => (
                        <img key={i} src={photo} alt={`WOLFF arborists at work ${i + 1}`} />
                    ))}
                </div>

                <section className="tree-services">
                    <div className="tree-services-head">
                        <div className="sec-eye">Tree Care Services</div>
                        <h2 className="sec-title">Everything your trees need to <em>thrive and stand safely</em></h2>
                    </div>
                    <div className="tree-grid">
                        <div className="tree-card">
                            <div className="tree-icon">
                                <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 4 L21 38 M10 16 C14 10 28 10 32 16" stroke="#6D7953" stroke-width="1.5"
                                        stroke-linecap="round" />
                                    <path d="M10 22 C14 16 28 16 32 22" stroke="#8F9E8B" stroke-width="1.2" stroke-linecap="round" />
                                </svg>
                            </div>
                            <div className="tree-card-title">Structural Pruning</div>
                            <p className="tree-card-body">Crown thinning, deadwood removal, and structural work that improves form, light
                                penetration, and long-term health. Done by hand with the tree's architecture in mind.</p>
                        </div>
                        <div className="tree-card">
                            <div className="tree-icon">
                                <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="21" cy="18" r="10" stroke="#6D7953" stroke-width="1.5" />
                                    <path d="M21 28 L21 38" stroke="#8F9E8B" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M15 34 L27 34" stroke="#8F9E8B" stroke-width="1.2" stroke-linecap="round" />
                                </svg>
                            </div>
                            <div className="tree-card-title">Health Assessments &amp; Young Tree Training</div>
                            <p className="tree-card-body">A thorough evaluation of your tree's structural integrity and vitality — identifying
                                disease, pest pressure, root issues, and risk factors before they become expensive problems. For newly
                                planted trees, this includes early structural pruning that sets them up for decades of strength and beauty
                                — an ounce of training now saves a pound of remediation later.</p>
                        </div>
                        <div className="tree-card">
                            <div className="tree-icon">
                                <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 6 L21 36" stroke="#6D7953" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M12 20 L30 20" stroke="#8F9E8B" stroke-width="1.2" stroke-linecap="round" />
                                    <path d="M9 14 L33 14 M9 26 L33 26" stroke="#8F9E8B" stroke-width="0.8" stroke-linecap="round"
                                        stroke-dasharray="2 3" />
                                </svg>
                            </div>
                            <div className="tree-card-title">Tree Removal</div>
                            <p className="tree-card-body">Safe, methodical removal of hazardous, dying, or misplaced trees. We use rigging and
                                sectional techniques to protect your property and surrounding vegetation.</p>
                        </div>
                        <div className="tree-card">
                            <div className="tree-icon">
                                <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="21" cy="34" rx="10" ry="4" stroke="#6D7953" stroke-width="1.5" />
                                    <path d="M11 34 L11 28 Q21 10 31 28 L31 34" stroke="#8F9E8B" stroke-width="1.2" />
                                </svg>
                            </div>
                            <div className="tree-card-title">Stump Grinding</div>
                            <p className="tree-card-body">Complete stump removal below ground level, leaving a clean finish ready for
                                planting, sod, or hardscaping. Chips available as mulch for your garden beds.</p>
                        </div>
                        <div className="tree-card">
                            <div className="tree-icon">
                                <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 32 Q14 18 21 10 Q28 18 28 32" stroke="#6D7953" stroke-width="1.5" fill="none" />
                                    <path d="M8 24 Q14 20 14 32 M34 24 Q28 20 28 32" stroke="#8F9E8B" stroke-width="1.1" />
                                </svg>
                            </div>
                            <div className="tree-card-title">Storm Damage</div>
                            <p className="tree-card-body">Priority response for storm-damaged trees — removing broken limbs, assessing
                                structural compromise, and stabilizing trees to prevent further damage and liability.</p>
                        </div>
                        <div className="tree-card">
                            <div className="tree-icon">
                                <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31 12 A13 13 0 1 0 33 22" stroke="#6D7953" stroke-width="1.5" stroke-linecap="round" fill="none" />
                                    <path d="M31 6 L31 12 L25 12" stroke="#8F9E8B" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" fill="none" />
                                </svg>
                            </div>
                            <div className="tree-card-title">Full Circle Approach</div>
                            <p className="tree-card-body">Keep materials on site, use wood chips for garden beds or trails, or let us cut
                                sections or split wood for firewood. Or let us dispose of it all and give back to the community!</p>
                        </div>
                    </div>
                </section>

                <section className="tree-safety">
                    <div className="safety-visual">
                        <div className="safety-img"><img className='safety-img' src={TreeCareImg1} alt="Arborist at work" /></div>
                    </div>
                    <div>
                        <div className="sec-eye" >Why It Matters</div>
                        <h2 className="sec-title-light">Trees are long-term<br /><em>assets. Treat them that way.</em></h2>
                        <div className="safety-checklist">
                            <div className="safety-item">
                                <div className="safety-check"></div>
                                <div className="safety-text"><strong>Fully insured arborists on every job</strong><span>Not a crew member with a
                                    chainsaw — a trained professional with deep knowledge of tree physiology and safe work practices.</span>
                                </div>
                            </div>
                            <div className="safety-item">
                                <div className="safety-check"></div>
                                <div className="safety-text"><strong>No chemical pest or disease treatments</strong><span>We use integrated,
                                    organic approaches to pest and disease management — no systemic insecticides, no synthetic
                                    fungicides.</span></div>
                            </div>
                            <div className="safety-item">
                                <div className="safety-check"></div>
                                <div className="safety-text"><strong>Full liability and WSIB coverage</strong><span>Every job is fully insured.
                                    You're protected, and so are we — and we can provide certificates of insurance on request.</span></div>
                            </div>
                            <div className="safety-item">
                                <div className="safety-check"></div>
                                <div className="safety-text"><strong>Clean-up included</strong><span>We leave your property cleaner than we
                                    found it. All brush, logs, and debris are removed or repurposed on-site with your permission.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tree-seasonal">
                    <div className="seasonal-head">
                        <div className="sec-eye">Seasonal Care Calendar</div>
                        <h2 className="sec-title">The right care at the <em>right time</em></h2>
                    </div>
                    <div className="seasonal-grid">
                        <div className="season-card spring">
                            <div className="season-name">Spring</div>
                            <div className="season-title">Assessment &amp; Early Care</div>
                            <ul className="season-list">
                                <li>Post-winter health check</li>
                                <li>Dead &amp; storm damage removal</li>
                                <li>Young tree training pruning</li>
                                <li>Organic soil amendments</li>
                            </ul>
                        </div>
                        <div className="season-card summer">
                            <div className="season-name">Summer</div>
                            <div className="season-title">Monitoring &amp; Clearance</div>
                            <ul className="season-list">
                                <li>Crown clearance pruning</li>
                                <li>Pest &amp; disease monitoring</li>
                                <li>Hazard tree assessment</li>
                                <li>Watering support for transplants</li>
                            </ul>
                        </div>
                        <div className="season-card fall">
                            <div className="season-name">Fall</div>
                            <div className="season-title">Structural Pruning</div>
                            <ul className="season-list">
                                <li>Major structural pruning</li>
                                <li>Leaf litter &amp; debris management</li>
                                <li>Pre-winter hazard removal</li>
                                <li>Cabling &amp; bracing if needed</li>
                            </ul>
                        </div>
                        <div className="season-card winter">
                            <div className="season-name">Winter</div>
                            <div className="season-title">Dormant Season Work</div>
                            <ul className="season-list">
                                <li>Dormant pruning (ideal timing)</li>
                                <li>Ice &amp; snow load management</li>
                                <li>Removal of risk trees</li>
                                <li>Planning for spring</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="cta">
                    <h2 className="cta-title">Have a tree you're <em>worried about?</em></h2>
                    <p className="cta-sub">A risk assessment is the first step. We'll give you an honest evaluation of your tree's
                        condition and your options — no scare tactics.</p>
                    <a href="/contact?form=tree#contact-form" className="btn-primary">Request an Assessment</a>
                </section>
            </div>
        </div>
    )
}
