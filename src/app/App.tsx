import React from 'react';
import '../index.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Resume } from './components/Resume';
import { About } from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#39ff14] selection:text-black font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
