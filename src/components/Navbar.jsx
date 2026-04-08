import React, { useState } from 'react'
import "../styles/nav.css"
import Logo from '../assets/images/WOLFF-Logo.png'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
            <a href="/" className="nav-logo">
                <img src={Logo} alt="WOLFF — Working on Land Forest & Flower" />
            </a>

            {/* Hamburger icon */}
            <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/landscaping">Landscaping</a></li>
                <li><a href="/tree-care">Tree Care</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>

            <a href="/contact" className="nav-cta">Book a Consultation</a>
        </nav>
    )
}
