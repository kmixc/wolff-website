import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ProjectImg1 from '../assets/images/hero-38.jpg'
import ProjectImg2 from '../assets/images/garden-1.jpg'
import ProjectImg3 from '../assets/images/tree-6.jpg'
import ProjectImg4 from '../assets/images/landscaping-4.jpg'
import ProjectImg5 from '../assets/images/maintenance-1.jpg'
import ProjectImg6 from '../assets/images/snowremoval-1.jpg'
import ProjectImg7 from '../assets/images/tree-7.jpg'
import ProjectImg8 from '../assets/images/landscaping-3.jpg'
import ProjectImg9 from '../assets/images/projects/landscaping/georgetown_&_alton_driveway_grading/main_1.jpg'
import ProjectImg10 from '../assets/images/projects/landscaping/orangeville_native_tree_planting/main_1.jpg'
import ProjectImg11 from '../assets/images/projects/landscaping/erin_old_broken_pond_demo_and_overgrown_shrubs_SOD_install/main_1.jpg'
import ProjectImg12 from '../assets/images/projects/landscaping/erin_house_number_install_and_invasive_garlic_mustard_control/main_1.jpg'
import ProjectImg13 from '../assets/images/projects/landscaping/hillsburgh_vegetable_garden_bed/main_1.jpg'
import ProjectImg14 from '../assets/images/projects/maintenance/caledon_grass_and_garden_maintenance/main_1.jpg'
import ProjectImg15 from '../assets/images/projects/maintenance/alton_property_maintenance/main_1.jpg'
import ProjectImg16 from '../assets/images/projects/maintenance/liberty_inn_maintenance/main_1.jpg'
import ProjectImg17 from '../assets/images/projects/maintenance/terra_cotta_garden_maintenance/main_1.jpg'
import ProjectImg18 from '../assets/images/projects/maintenance/erin_rural_acreage_organic_land_care/main_1.jpg'
import ProjectImg19 from '../assets/images/projects/tree_services/winter_ice_storm_clean_up/main_1.jpg'
import ProjectImg20 from '../assets/images/projects/tree_services/removal_of_white_pine_by_a_house_in_mono/main_1.jpg'
import ProjectImg21 from '../assets/images/projects/tree_services/hillsburgh_cedar_hedge_planting/main_1.jpg'
import ProjectImg22 from '../assets/images/projects/snow_removal/laneway_snow_removal/main_1.jpg'
import ProjectImg23 from '../assets/images/projects/design/hillsburgh_fall_feature_garden_design/1.jpg'
import ProjectImg24 from '../assets/images/projects/design/rockwood_memorial_grass_garden/main_1.jpg'
import ProjectImg25 from '../assets/images/projects/design/woodland_rocky_garden/main_1.jpg'

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All Projects');

    const projects = [
        {
            id: 1,
            slug: 'erin-estate-native-restoration',
            img: ProjectImg1,
            tag: 'Regenerative Landscaping · 2025',
            name: 'Erin Estate Native Restoration',
            loc: 'Erin, Ontario · 4.5 acres',
            category: 'Landscaping',
            featured: true
        },
        {
            id: 2,
            slug: 'caledon-pollinator-garden',
            img: ProjectImg2,
            tag: 'Garden Design · 2025',
            name: 'Caledon Pollinator Garden',
            loc: 'Caledon, Ontario',
            category: 'Landscaping'
        },
        {
            id: 3,
            slug: 'orangeville-heritage-oak',
            img: ProjectImg3,
            tag: 'Tree Care · 2025',
            name: 'Orangeville Heritage Oak',
            loc: 'Orangeville, Ontario',
            category: 'Tree Care'
        },
        {
            id: 4,
            slug: 'guelph-food-forest',
            img: ProjectImg4,
            tag: 'Permaculture · 2025',
            name: 'Guelph Food Forest',
            loc: 'Guelph, Ontario · 1.2 acres',
            category: 'Permaculture'
        },
        {
            id: 5,
            slug: 'mono-rural-estate',
            img: ProjectImg5,
            tag: 'Maintenance · Ongoing',
            name: 'Mono Rural Estate',
            loc: 'Mono, Ontario',
            category: 'Maintenance'
        },
        {
            id: 6,
            slug: 'elora-rain-garden',
            img: ProjectImg6,
            tag: 'Garden Design · 2025',
            name: 'Elora Rain Garden',
            loc: 'Elora, Ontario',
            category: 'Landscaping'
        },
        {
            id: 7,
            slug: 'hillsburgh-meadow-conversion',
            img: ProjectImg8,
            tag: 'Landscaping · 2025',
            name: 'Hillsburgh Meadow Conversion',
            loc: 'Hillsburgh, Ontario',
            category: 'Landscaping'
        },
        {
            id: 8,
            slug: 'fergus-woodlot-management',
            img: ProjectImg7,
            tag: 'Tree Care · 2025',
            name: 'Fergus Woodlot Management',
            loc: 'Fergus, Ontario',
            category: 'Tree Care'
        },
        {
            id: 9,
            slug: 'georgetown-alton-driveway-grading',
            img: ProjectImg9,
            tag: 'Landscaping · 2025',
            name: 'Georgetown & Alton Driveway Grading',
            loc: 'Georgetown & Alton, Ontario',
            category: 'Landscaping'
        },
        {
            id: 10,
            slug: 'orangeville-native-tree-planting',
            img: ProjectImg10,
            tag: 'Landscaping · 2025',
            name: 'Orangeville Native Tree Planting',
            loc: 'Orangeville, Ontario · Commercial Property',
            category: 'Landscaping'
        },
        {
            id: 11,
            slug: 'erin-pond-demo-and-sod-install',
            img: ProjectImg11,
            tag: 'Landscaping · 2025',
            name: 'Erin Pond Demo & Overgrown Shrub Removal',
            loc: 'Erin, Ontario',
            category: 'Landscaping'
        },
        {
            id: 12,
            slug: 'erin-house-number-garlic-mustard-control',
            img: ProjectImg12,
            tag: 'Landscaping · 2023-2026',
            name: 'Erin House Number Install & Garlic Mustard Control',
            loc: 'Erin, Ontario',
            category: 'Landscaping'
        },
        {
            id: 13,
            slug: 'hillsburgh-vegetable-garden-bed',
            img: ProjectImg13,
            tag: 'Landscaping · 2025',
            name: 'Hillsburgh Vegetable Garden Bed',
            loc: 'Hillsburgh, Ontario',
            category: 'Landscaping'
        },
        {
            id: 14,
            slug: 'caledon-grass-and-garden-maintenance',
            img: ProjectImg14,
            tag: 'Maintenance · Since 2024',
            name: 'Caledon Grass & Garden Maintenance',
            loc: 'Caledon, Ontario',
            category: 'Maintenance'
        },
        {
            id: 15,
            slug: 'alton-property-maintenance',
            img: ProjectImg15,
            tag: 'Maintenance · Since 2025',
            name: 'Alton Property Maintenance',
            loc: 'Alton, Ontario',
            category: 'Maintenance'
        },
        {
            id: 16,
            slug: 'liberty-inn-maintenance',
            img: ProjectImg16,
            tag: 'Maintenance · Since 2025',
            name: 'Liberty Inn Maintenance',
            loc: 'Headwaters Region, Ontario',
            category: 'Maintenance'
        },
        {
            id: 17,
            slug: 'terra-cotta-garden-maintenance',
            img: ProjectImg17,
            tag: 'Maintenance · Since 2023',
            name: 'Terra Cotta Garden Maintenance',
            loc: 'Terra Cotta, Ontario',
            category: 'Maintenance'
        },
        {
            id: 18,
            slug: 'erin-rural-acreage-organic-land-care',
            img: ProjectImg18,
            tag: 'Maintenance · Since 2024',
            name: 'Erin Rural Acreage Organic Land Care',
            loc: 'Erin, Ontario',
            category: 'Maintenance'
        },
        {
            id: 19,
            slug: 'winter-ice-storm-clean-up',
            img: ProjectImg19,
            tag: 'Tree Care · 2025-2026',
            name: 'Winter Ice Storm Clean-Up',
            loc: 'Headwaters Region, Ontario',
            category: 'Tree Care'
        },
        {
            id: 20,
            slug: 'removal-of-white-pine-mono',
            img: ProjectImg20,
            tag: 'Tree Care · 2025',
            name: 'Removal of White Pine in Mono',
            loc: 'Mono, Ontario',
            category: 'Tree Care'
        },
        {
            id: 21,
            slug: 'hillsburgh-cedar-hedge-planting',
            img: ProjectImg21,
            tag: 'Tree Care · 2025',
            name: 'Hillsburgh Cedar Hedge Planting',
            loc: 'Hillsburgh, Ontario',
            category: 'Tree Care'
        },
        {
            id: 22,
            slug: 'laneway-snow-removal',
            img: ProjectImg22,
            tag: 'Snow Removal · Since 2024',
            name: 'Laneway Snow Removal',
            loc: 'Headwaters Region, Ontario',
            category: 'Snow Removal'
        },
        {
            id: 23,
            slug: 'hillsburgh-fall-feature-garden-design',
            img: ProjectImg23,
            tag: 'Garden Design · 2025',
            name: 'Hillsburgh Fall Feature Garden Design',
            loc: 'Hillsburgh, Ontario',
            category: 'Landscaping'
        },
        {
            id: 24,
            slug: 'rockwood-memorial-grass-garden',
            img: ProjectImg24,
            tag: 'Garden Design · 2024',
            name: 'Rockwood Memorial Grass Garden',
            loc: 'Rockwood, Ontario',
            category: 'Landscaping'
        },
        {
            id: 25,
            slug: 'woodland-rocky-garden',
            img: ProjectImg25,
            tag: 'Garden Design · 2025',
            name: 'Woodland Rocky Garden',
            loc: 'Headwaters Region, Ontario',
            category: 'Landscaping'
        }
    ];

    const filteredProjects = activeFilter === 'All Projects' ? projects : projects.filter(project => project.category === activeFilter);

    return (
        <div>
            <div id="page-projects" className="page pt-nav">

                <section className="page-hero">
                    <div className="page-hero-bg" style={{ backgroundImage: `url(${ProjectImg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
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
                    <button className={`filter-btn ${activeFilter === 'Snow Removal' ? 'on' : ''}`} onClick={() => setActiveFilter('Snow Removal')}>Snow Removal</button>
                    <button className={`filter-btn ${activeFilter === 'Permaculture' ? 'on' : ''}`} onClick={() => setActiveFilter('Permaculture')}>Permaculture</button>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <Link key={project.id} to={`/projects/${project.slug}`} className={`proj-card ${project.featured ? 'featured' : ''}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                            <div className="proj-img">
                                <div className={`proj-img-fill proj-img-fill-${project.id % 6 + 1}`}>
                                    <img className='proj-img-fill' src={project.img} alt={project.name} />
                                </div>
                            </div>
                            <div className="proj-tag">{project.tag}</div>
                            <div className="proj-name">{project.name}</div>
                            <div className="proj-loc">{project.loc}</div>
                        </Link>
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
