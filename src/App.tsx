import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductOverview from './components/ProductOverview';
import KeyFeatures from './components/KeyFeatures';
import Benefits from './components/Benefits';
import UseCases from './components/UseCases';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  // Debug: Log to verify App is rendering
  console.log('App component is rendering');
  
  return (
    <div 
      className="min-h-screen bg-white"
      style={{ 
        minHeight: '100vh',
        backgroundColor: '#ffffff' // Fallback inline style
      }}
    >
      <Navbar />
      <Hero />
      <ProductOverview />
      <KeyFeatures />
      <Benefits />
      <UseCases />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
