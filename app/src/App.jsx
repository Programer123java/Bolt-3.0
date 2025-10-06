import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';
import MobileDevelopment from './pages/MobileDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import SEO from './pages/SEO';
import GraphicDesign from './pages/GraphicDesign';
import Consulting from './pages/Consulting';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/mobile-development" element={<MobileDevelopment />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/seo" element={<SEO />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/consulting" element={<Consulting />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
