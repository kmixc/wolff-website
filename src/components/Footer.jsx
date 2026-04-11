import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer>
                <div class="footer-grid">
                    <div>
                        <div class="footer-logo"><img
                            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5ODUuMTEgMjA2LjcxIj48ZGVmcz48c3R5bGU+LmNscy0xe3N0cm9rZS13aWR0aDowcHg7fS5jbHMtMSwuY2xzLTJ7ZmlsbDojZmFmYWY4O30uY2xzLTJ7Zm9udC1mYW1pbHk6QmFza09sZEZhY2UsICdCYXNrZXJ2aWxsZSBPbGQgRmFjZSc7Zm9udC1zaXplOjI4cHg7bGV0dGVyLXNwYWNpbmc6LjUxZW07fTwvc3R5bGU+PC9kZWZzPjx0ZXh0IGNsYXNzPSJjbHMtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy4zMyAxOTkuMzQpIj48dHNwYW4geD0iMCIgeT0iMCI+V09SS0lORyBPTiBMQU5EIEZPUkVTVCAmYW1wOyBGTE9XRVI8L3RzcGFuPjwvdGV4dD48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xODguMjQsNi4wOWMtMS45NCwxMy4zMS0zLjkxLDI2LjU1LTUuOTEsMzkuNzMtMiwxMy4xOC0zLjk3LDI2LjQzLTUuOTEsMzkuNzNoLS4zOWwtMTEuNDQtNzkuNDdoLTU4LjM1bC0xMC44Niw3OS40N2gtLjk3Yy0uOS02LjU4LTEuODctMTMuMjEtMi45MS0xOS44NnMtMi4wNC0xMy4yOC0zLjAxLTE5Ljg3Yy0uOTctNi41OS0xLjk0LTEzLjIyLTIuOTEtMTkuODctLjk3LTYuNjUtMS45Ny0xMy4yNy0zLjAxLTE5Ljg2SDBjMi4zMyw5LjY5LDQuNjksMTkuMzgsNy4wOCwyOS4wNywyLjM5LDkuNjksNC43NSwxOS4zOSw3LjA4LDI5LjA4LDIuMzMsOS42OSw0LjY5LDE5LjM4LDcuMDgsMjkuMDcsMi4zOSw5LjY5LDQuNzUsMTkuMzksNy4wOCwyOS4wOCwyLjMzLDkuNjksNC42NSwxOS4zOSw2Ljk4LDI5LjA3aDU1LjI3YzYuNTctMi41NywxMC45LTYuOSwxMi44Ni0xMC43Mi01LjYyLS4xNi0xMC41Ny01LTEyLTcuNTcsOS45Ni0zLjQ1LDE3LjMtOS40NiwyMy4xNC0xOC4xMS0zLjYzLjItOS4wMy0xLjQyLTEwLjM5LTQuNzIsNi44My0xLjIxLDE1LjA5LTkuOTgsMTguODktMTUuODMtMy4zNiwxLjk5LTkuMDcsMi43MS0xMi4zLjc0LDEuNjctLjI0LDcuMTctMy4wNSw4LjQ4LTQuNjQtMi42My0uMDQtNS4zMy0uMzQtNi40LTEuMjgsMTguMjktOS44NCwxNy45NC0yMy43LDIwLjgtNDAuNywyLDE4LjQ4LDUuOTUsMzUuMzIsMjMuOTksNDUuNjMtNC41MiwxLjkzLTkuODcsMi4xMS0xMy44LDEuMSwyLjgxLDcuNCwxMS41NywxMi43OSwyMi45LDE2LTIuNjQsMi4wMS05LjI0LDMuMDEtMTEuOTYsMi40Myw0LjUxLDcuNTgsMTUuOTIsMTMuODYsMjIuMjEsMTQuNC0yLjE0LDEuMy00LjMzLDEuOTEtNy40NSwxLjM0LDQuMzksMy4wMSw5LjEyLDUuMiwxMy44OSw2LjY5LTYuMTQsNC4wOS0xNi4zLDUuNzYtMjEuNDgsMi44NSwzLjI1LDUuMjEsOC4yNyw5LjA4LDE0Ljk5LDEyLjRoMzUuMzhjMi40OC0xLjQxLDQuODktMi45OCw3LjAzLTQuNjMtMy45MSwxLjcyLTguOTYsMS40OC0xNC4yNi0uODgsMTQuMTItMS4yNCwyMy4wNS05LjkyLDI2LjM0LTE3LjE5LTYuNjEtLjIyLTEyLjQyLTYuNjgtMTQuMTEtMTAuMTEsMTEuNzEtNC42MiwyMC4zMi0xMi42NiwyNy4xOS0yNC4yMy00LjI3LjI5LTEwLjYtMS45LTEyLjItNi4zLDYuNTYtMS4zMiwxNC4yNy05LjQ1LDE5LjI5LTE2LjY0LjM0LTEuNDQuNjgtMi44OSwxLTQuMzJsLTExLjc2LDEuNDFjNi45Ny00LjI4LDExLjgxLTEwLjAyLDE1LjI4LTE2LjU5Ljc0LTMuMTksMS40OC02LjM3LDIuMjEtOS41NCwyLjc3LTEyLjA5LDUuNTgtMjQuMTksOC40Mi0zNi4zNGgtNzguNVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00NjAuNTUsOTMuMzJjMS43OS0uMjYsNy42OS0zLjI3LDkuMDktNC45OC0yLjgyLS4wNS01LjcyLS4zOC02Ljg3LTEuMzgsMTMuNjUtNy4zNSwxNy42My0xNi43NiwxOS44Mi0yNy45NS0xLjk1LTcuNi01LjExLTE0LjY3LTkuNDktMjEuMjEtNy44OC0xMS43Ni0xOS43MS0yMS0zNS40Ny0yNy43Mi0xNS43Ny02LjcxLTM1LjU0LTEwLjA4LTU5LjMzLTEwLjA4LTExLjg5LDAtMjIuNzcuODctMzIuNjYsMi42Mi05Ljg5LDEuNzQtMTguNzcsNC4yNy0yNi42Niw3LjU2cy0xNC43Niw3LjI0LTIwLjY0LDExLjgzYy01Ljg4LDQuNTktMTAuNzksOS43OS0xNC43MywxNS42MS0yLjI4LDMuMzYtNC4yMyw2Ljg5LTUuODcsMTAuNjEsNC4wMiw3LjA4LDkuNTUsMTMuMywxNy4zMiwxOC4zNi01LjMxLDIuNTYtMTEuNTgsMi44Mi0xNi4yLDEuNDYsMy4zLDkuODksMTMuNTgsMTcuMDksMjYuODgsMjEuMzktMy4xLDIuNjktMTAuODUsNC4wMy0xNC4wNSwzLjI1LDUuMzEsMTAuMTUsMTguNzEsMTguNTQsMjYuMDksMTkuMjctMi41MSwxLjczLTUuMDgsMi41NC04Ljc1LDEuNzgsNS4xNiw0LjAyLDEwLjcyLDYuOTcsMTYuMzIsOC45NS03LjIxLDUuNDgtMTkuMTMsNy43MS0yNS4yMywzLjgyLDYuMDQsMTEsMTcuMjEsMTcuNDksMzMuMjQsMjMuNzYtLjM0LjM2LS43MS43Mi0xLjEyLDEuMDksNC45NywxLjM3LDEwLjI4LDIuNTEsMTUuOTEsMy40Myw5LjExLDEuNDksMTkuMTYsMi4yMywzMC4xNCwyLjIzLDE1LjM4LDAsMjguOTItMS4zOSw0MC42Mi00LjE3LDExLjU3LTIuNzUsMjEuNTEtNi41NywyOS44NS0xMS40Ni00LjMyLTEuNTgtNy44LTUuMi04Ljk5LTcuMzUsMTAuNzEtMy43MSwxOC41OC0xMC4xNywyNC44NS0xOS40NS0zLjg5LjIzLTkuNjgtMS41My0xMS4xNS01LjA2LDcuMzItMS4yOSwxNi4yLTEwLjczLDIwLjI4LTE3LjAxLTMuNjEsMi4xNC05Ljc0LDIuOTItMTMuMjEuOFpNMzk4Ljc4LDExMi4wOGMuNi0uNywxLjA0LTEuNCwxLjI5LTEuOTUtNS4xNy0yLjItOC45Ny02LjAyLTEyLTExLjUzLDEuODcuMTMsNC42Ny0uOTIsNS4zOS0zLjAxLTMuNTQtLjc2LTcuODMtNi4zNS05LjgtMTAuMDgsMS43NCwxLjI3LDQuNzEsMS43Myw2LjM4LjQ4LS44Ni0uMTYtMy43Mi0xLjk1LTQuMzgtMi45NiwxLjM2LS4wMiwyLjc2LS4yMiwzLjMyLS44MS05LjQ5LTYuMjctOS4zMS0xNS4wOC0xMC43OS0yNS45LTEuMDQsMTEuNzUtMy4wOCwyMi40Ny0xMi40NCwyOS4wMywyLjM1LDEuMjMsNS4xMiwxLjM1LDcuMTUuNy0xLjQ1LDQuNzEtNiw4LjEzLTExLjg3LDEwLjE4LDEuMzcsMS4yOCw0Ljc5LDEuOTIsNi4yLDEuNTUtMi4zNSw0LjgzLTguMjYsOC44Mi0xMS41Myw5LjE3LDEuMTEuODIsMi4yNSwxLjIxLDMuODcuODUtMS4zLDEuMDktMi42NSwyLTQuMDMsMi43Ny0xMC4wMS03LjE0LTE2LjU0LTE4Ljg0LTE2LjU0LTMyLjA3LDAtMjEuNzEsMTcuNjEtMzkuMzEsMzkuMzEtMzkuMzFzMzkuMzEsMTcuNiwzOS4zMSwzOS4zMWMwLDE0LjIyLTcuNTQsMjYuNjctMTguODQsMzMuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTcyLjUsOTQuNDdjLS4xMywwLS4yMy0uMDItLjI5LS4xLS4wNi0uMDYtLjEtLjE2LS4xLS4yOVY2LjA5aC04MC40NXY2NS4yNGMzLjc2LDguMjcsOS42MywxNS40NiwxOS4yLDIwLjkzLTQuODYsMi4wNi0xMC42LDIuMjYtMTQuODEsMS4xNywzLjAxLDcuOTQsMTIuNDIsMTMuNzIsMjQuNTgsMTcuMTgtMi44MywyLjE1LTkuOTIsMy4yMi0xMi44NCwyLjYxLDQuODUsOC4xNCwxNy4xLDE0Ljg5LDIzLjg1LDE1LjQ3LTIuMjksMS40LTQuNjQsMi4wNS03Ljk5LDEuNDMsNC43MiwzLjIyLDkuNzksNS41OSwxNC45Miw3LjE4LTYuNTksNC4zOS0xNy40OSw2LjE5LTIzLjA3LDMuMDcsMi44MSw0LjQ4LDYuODIsOC4wNCwxMi4wMiwxMS4wOWgxMjAuNTh2LTU2Ljk5aC03NS42WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTgxNi42MSw2My4wOFY2LjA5aC0xNjMuMDN2MTQ1LjM4aDE0LjljMS44Mi0xLjQ2LDMuMzItMy4xMSw0LjUtNS4wMS0zLjc1LDIuMS0xMS4wOC44OS0xNS41Mi0yLjA3LDMuNDUtMS4wNyw2Ljg2LTIuNjYsMTAuMDUtNC44NC0yLjI2LjQyLTMuODUtLjAyLTUuMzktLjk2LDQuNTMtLjQsMTIuNzktNC45MiwxNi4wNS0xMC40LTEuOTcuNDEtNi43My0uMy04LjY0LTEuNzYsOC4xOC0yLjMzLDE0LjUxLTYuMjEsMTYuNTQtMTEuNTctMi44NC43My02LjcuNi05Ljk3LS43OSwxMy4wMy03LjQ1LDE1Ljg5LTE5LjYyLDE3LjM0LTMyLjk4LDIuMDYsMTIuMjksMS44MSwyMi4zMSwxNS4wMywyOS40Mi0uNzguNjgtMi43My45LTQuNjIuOTMuOTUsMS4xNSw0LjkyLDMuMTksNi4xMiwzLjM2LTIuMzMsMS40Mi02LjQ1Ljg5LTguODktLjU0LDIuNzUsNC4yMiw4LjcyLDEwLjU3LDEzLjY2LDExLjQ0LS45OSwyLjM4LTQuODksMy41Ny03LjUxLDMuNDEsNC4yMSw2LjI1LDkuNTIsMTAuNTksMTYuNzIsMTMuMDktMS4wMywxLjg1LTQuNjEsNS4zNS04LjY3LDUuNDcuNjQsMS4yNCwxLjYyLDIuNTUsMi45NCwzLjc5aDE2LjAxdi0zMC42Mmg2NS42MmMuMTgtLjI0LjM2LS40OC41Mi0uNzMtNC4wOS4yNC0xMC4yLTEuNi0xMS43NC01LjMzLDcuNzEtMS4zNywxNy4wNS0xMS4yOSwyMS4zNi0xNy45LTMuOCwyLjI1LTEwLjI1LDMuMDctMTMuOTEuODQsMS44Ny0uMjcsOC4xLTMuNDYsOS41OC01LjI1LTIuOTctLjA1LTYuMDItLjQtNy4yNC0xLjQ1LDcuNDQtNC4wMSwxMi4xNi04LjYsMTUuMjktMTMuNzN2LTIuNTdoLTc5LjQ4di0xMS42M2g4Mi4zOVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05ODUuMTEsNjMuMDhWNi4wOWgtMTYzLjAzdjQwLjI3YzIuMzMsMjAuMzYsNy4wMiwzOC44MywyNi45Nyw1MC4yMy01LjEyLDIuMTgtMTEuMTYsMi4zOC0xNS42LDEuMjQsMy4xNyw4LjM3LDEzLjA4LDE0LjQ1LDI1Ljg4LDE4LjA4LTIuOTgsMi4yNy0xMC40NSwzLjQtMTMuNTIsMi43NSw1LjExLDguNTgsMTgsMTUuNjcsMjUuMTEsMTYuMjktMi40MSwxLjQ4LTQuODksMi4xNS04LjQyLDEuNTEsNC45OCwzLjM5LDEwLjMyLDUuODksMTUuNzIsNy41Ni02Ljk0LDQuNjMtMTguNDIsNi41My0yNC4yOSwzLjI0Ljk0LDEuNSwyLDIuOSwzLjIsNC4yMWg0NS41OXYtMzAuNjJoNzkuNDh2LTQ2LjEzaC03OS40OHYtMTEuNjNoODIuMzlaIi8+PC9zdmc+"
                            alt="WOLFF" /></div>
                        <p class="footer-tagline">"Rooted in organic land care — Working on Land Forest &amp; Flower, never against
                            it."</p>
                    </div>
                    <div>
                        <div class="fc-title">Services</div>
                        <ul class="fc-links">
                            <li><a href="/services">Property Maintenance</a></li>
                            <li><a href="/services">Regenerative Landscaping</a></li>
                            <li><a href="/services">Garden Design</a></li>
                            <li><a href="/services">Permaculture Projects</a></li>
                            <li><a href="/services">Tree Care &amp; Removal</a></li>
                            <li><a href="/services">Snow Removal</a></li>
                        </ul>
                    </div>
                    <div>
                        <div class="fc-title">Company</div>
                        <ul class="fc-links">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/">Our Approach</a></li>
                            <li><a href="/projects">Featured Projects</a></li>
                            <li><a href="/testimonials">Testimonials</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <div class="fc-title">Connect</div>
                        <ul class="fc-links">
                            <li><a href="/contact">Book a Consultation</a></li>
                            <li><a href="/contact">Request a Quote</a></li>
                            <li><a href="https://www.instagram.com/wolff.landscaping/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://www.facebook.com/workingonlandforestflower" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-copy">© 2026 WOLFF — Working on Land Forest &amp; Flower. All rights reserved.</div>
                    <div class="footer-soul-badge"><span class="footer-soul-icon">🌿</span>
                        <div class="footer-soul-txt"><span>Certified</span><span>SOUL Organic Land Care</span></div>
                    </div>
                    <div class="footer-soul-badge"><span class="footer-soul-icon">🌱</span>
                        <div class="footer-soul-txt"><span>Member</span><span>Landscape Ontario</span></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
