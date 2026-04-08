import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './components/nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Landscaping from './pages/Landscaping';
import TreeCare from './pages/TreeCare';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Projects from './pages/Projects';

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
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
