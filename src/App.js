import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Landscaping from './pages/Landscaping';
import TreeCare from './pages/TreeCare';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Projects from './pages/Projects';

import GardenDesign from "./pages/GardenDesign";
import Permaculture from "./pages/PermacultureProjects";
import SnowRemoval from "./pages/SnowRemoval";
import Maintenance from "./pages/PropertyMaintenance";

import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/landscaping" element={<Landscaping />} />
          <Route path="/tree-care" element={<TreeCare />} />
          <Route path="/garden-design" element={<GardenDesign />} />
          <Route path="/permaculture-projects" element={<Permaculture />} />
          <Route path="/snow-removal" element={<SnowRemoval />} />
          <Route path="/property-maintenance" element={<Maintenance />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
