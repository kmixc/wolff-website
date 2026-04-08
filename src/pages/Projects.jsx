import React from 'react'

export default function Projects() {
    return (
        <div>
            <div id="page-projects" class="page pt-nav">

                <section class="page-hero">
                    <div class="page-hero-bg"></div>
                    <div class="page-hero-content">
                        <div class="page-hero-eye">Our Work</div>
                        <h1 class="page-hero-title">Land transformed<br /><em>with care.</em></h1>
                        <div class="page-hero-rule"></div>
                        <p class="page-hero-sub">A selection of properties we've had the privilege of working with — each one unique,
                            each one a long-term partnership rooted in organic practices.</p>
                    </div>
                </section>

                <div class="projects-filters">
                    <span class="filter-label">Filter by</span>
                    <button class="filter-btn on">All Projects</button>
                    <button class="filter-btn">Landscaping</button>
                    <button class="filter-btn">Tree Care</button>
                    <button class="filter-btn">Maintenance</button>
                    <button class="filter-btn">Permaculture</button>
                </div>

                <div class="projects-grid">
                    <div class="proj-card featured">
                        <div class="proj-img">
                            <div class="proj-img-fill proj-img-fill-1">
                                <div>
                                    <div
                                    >
                                        Featured Project</div>
                                    <div
                                    >
                                        Photo placeholder — Erin Estate</div>
                                </div>
                            </div>
                        </div>
                        <div class="proj-tag">Regenerative Landscaping · 2024</div>
                        <div class="proj-name">Erin Estate Native Restoration</div>
                        <div class="proj-loc">Erin, Ontario · 4.5 acres</div>
                    </div>
                    <div class="proj-card">
                        <div class="proj-img">
                            <div class="proj-img-fill proj-img-fill-2"></div>
                        </div>
                        <div class="proj-tag">Garden Design · 2024</div>
                        <div class="proj-name">Caledon Pollinator Garden</div>
                        <div class="proj-loc">Caledon, Ontario</div>
                    </div>
                    <div class="proj-card">
                        <div class="proj-img">
                            <div class="proj-img-fill proj-img-fill-3"></div>
                        </div>
                        <div class="proj-tag">Tree Care · 2024</div>
                        <div class="proj-name">Orangeville Heritage Oak</div>
                        <div class="proj-loc">Orangeville, Ontario</div>
                    </div>
                    <div class="proj-card">
                        <div class="proj-img">
                            <div class="proj-img-fill proj-img-fill-4"></div>
                        </div>
                        <div class="proj-tag">Permaculture · 2023</div>
                        <div class="proj-name">Guelph Food Forest</div>
                        <div class="proj-loc">Guelph, Ontario · 1.2 acres</div>
                    </div>
                    <div class="proj-card">
                        <div class="proj-img">
                            <div class="proj-img-fill proj-img-fill-5"></div>
                        </div>
                        <div class="proj-tag">Maintenance · Ongoing</div>
                        <div class="proj-name">Mono Rural Estate</div>
                        <div class="proj-loc">Mono, Ontario</div>
                    </div>
                    <div class="proj-card">
                        <div class="proj-img">
                            <div class="proj-img-fill proj-img-fill-6"></div>
                        </div>
                        <div class="proj-tag">Garden Design · 2023</div>
                        <div class="proj-name">Elora Rain Garden</div>
                        <div class="proj-loc">Elora, Ontario</div>
                    </div>
                    <div class="proj-card">
                        <div class="proj-img">
                            <div class="proj-img-fill proj-img-fill-1"></div>
                        </div>
                        <div class="proj-tag">Landscaping · 2023</div>
                        <div class="proj-name">Hillsburgh Meadow Conversion</div>
                        <div class="proj-loc">Hillsburgh, Ontario</div>
                    </div>
                    <div class="proj-card">
                        <div class="proj-img">
                            <div class="proj-img-fill proj-img-fill-3"></div>
                        </div>
                        <div class="proj-tag">Tree Care · 2023</div>
                        <div class="proj-name">Fergus Woodlot Management</div>
                        <div class="proj-loc">Fergus, Ontario</div>
                    </div>
                    <div class="proj-card">
                        <div class="proj-img">
                            <div class="proj-img-fill proj-img-fill-2"></div>
                        </div>
                        <div class="proj-tag">Permaculture · 2022</div>
                        <div class="proj-name">Rockwood Edible Landscape</div>
                        <div class="proj-loc">Rockwood, Ontario</div>
                    </div>
                </div>

                <section class="cta">
                    <h2 class="cta-title">Could this be <em>your property?</em></h2>
                    <p class="cta-sub">We'd love to add your land to our portfolio of regenerated, beautiful, chemical-free properties
                        across the Headwaters region.</p>
                    <a href="#" class="btn-primary">Start a Conversation</a>
                </section>
            </div>
        </div>
    )
}
