
import './App.css';
import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Services from './Pages/Services';
import Project from './Pages/Project';

function App() {
  return (
    <div>
      <Router>
      <Navigation />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/project' element={<Project />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
