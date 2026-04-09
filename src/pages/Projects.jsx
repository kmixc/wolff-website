import React, { useState } from 'react'

import ProjectImg1 from '../assets/images/hero-6.jpg'
import ProjectImg2 from '../assets/images/hero-9.jpg'
import ProjectImg3 from '../assets/images/hero-8.jpg'
import ProjectImg4 from '../assets/images/hero-2.jpg'

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All Projects');

    const projects = [
        {
            id: 1,
            img: ProjectImg1,
            tag: 'Regenerative Landscaping · 2024',
            name: 'Erin Estate Native Restoration',
            loc: 'Erin, Ontario · 4.5 acres',
            category: 'Landscaping',
            featured: true
        },
        {
            id: 2,
            img: ProjectImg2,
            tag: 'Garden Design · 2024',
            name: 'Caledon Pollinator Garden',
            loc: 'Caledon, Ontario',
            category: 'Landscaping'
        },
        {
            id: 3,
            img: ProjectImg3,
            tag: 'Tree Care · 2024',
            name: 'Orangeville Heritage Oak',
            loc: 'Orangeville, Ontario',
            category: 'Tree Care'
        },
        {
            id: 4,
            img: ProjectImg4,
            tag: 'Permaculture · 2023',
            name: 'Guelph Food Forest',
            loc: 'Guelph, Ontario · 1.2 acres',
            category: 'Permaculture'
        },
        {
            id: 5,
            img: ProjectImg2,
            tag: 'Maintenance · Ongoing',
            name: 'Mono Rural Estate',
            loc: 'Mono, Ontario',
            category: 'Maintenance'
        },
        {
            id: 6,
            img: ProjectImg2,
            tag: 'Garden Design · 2023',
            name: 'Elora Rain Garden',
            loc: 'Elora, Ontario',
            category: 'Landscaping'
        },
        {
            id: 7,
            img: ProjectImg4,
            tag: 'Landscaping · 2023',
            name: 'Hillsburgh Meadow Conversion',
            loc: 'Hillsburgh, Ontario',
            category: 'Landscaping'
        },
        {
            id: 8,
            img: ProjectImg3,
            tag: 'Tree Care · 2023',
            name: 'Fergus Woodlot Management',
            loc: 'Fergus, Ontario',
            category: 'Tree Care'
        }
    ];

    const filteredProjects = activeFilter === 'All Projects' ? projects : projects.filter(project => project.category === activeFilter);

    return (
        <div>
            <div id="page-projects" className="page pt-nav">

                <section className="page-hero">
                    <div className="page-hero-bg"></div>
                    <div className="page-hero-content">
                        <div className="page-hero-eye">Our Work</div>
                        <h1 className="page-hero-title">Land transformed<br /><em>with care.</em></h1>
                        <div className="page-hero-rule"></div>
                        <p className="page-hero-sub">A selection of properties we've had the privilege of working with — each one unique,
                            each one a long-term partnership rooted in organic practices.</p>
                    </div>
                </section>

                <div className="projects-filters">
                    <span className="filter-label">Filter by</span>
                    <button className={`filter-btn ${activeFilter === 'All Projects' ? 'on' : ''}`} onClick={() => setActiveFilter('All Projects')}>All Projects</button>
                    <button className={`filter-btn ${activeFilter === 'Landscaping' ? 'on' : ''}`} onClick={() => setActiveFilter('Landscaping')}>Landscaping</button>
                    <button className={`filter-btn ${activeFilter === 'Tree Care' ? 'on' : ''}`} onClick={() => setActiveFilter('Tree Care')}>Tree Care</button>
                    <button className={`filter-btn ${activeFilter === 'Maintenance' ? 'on' : ''}`} onClick={() => setActiveFilter('Maintenance')}>Maintenance</button>
                    <button className={`filter-btn ${activeFilter === 'Permaculture' ? 'on' : ''}`} onClick={() => setActiveFilter('Permaculture')}>Permaculture</button>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className={`proj-card ${project.featured ? 'featured' : ''}`}>
                            <div className="proj-img">
                                <div className={`proj-img-fill proj-img-fill-${project.id % 6 + 1}`}>
                                    <img className='proj-img-fill' src={project.img} alt={project.name} />
                                </div>
                            </div>
                            <div className="proj-tag">{project.tag}</div>
                            <div className="proj-name">{project.name}</div>
                            <div className="proj-loc">{project.loc}</div>
                        </div>
                    ))}
                </div>

                <section className="cta">
                    <h2 className="cta-title">Could this be <em>your property?</em></h2>
                    <p className="cta-sub">We'd love to add your land to our portfolio of regenerated, beautiful, chemical-free properties
                        across the Headwaters region.</p>
                    <a href="/contact" className="btn-primary">Start a Conversation</a>
                </section>
            </div>
        </div>
    )
}
