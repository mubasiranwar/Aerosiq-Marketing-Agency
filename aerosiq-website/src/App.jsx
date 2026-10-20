import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <FloatingWhatsApp />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}