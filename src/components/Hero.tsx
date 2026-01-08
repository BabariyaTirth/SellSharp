import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom right, #f0f9ff, #ffffff, #f0f9ff)',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 text-balance"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '24px'
              }}
            >
              Sales Management
              <span 
                className="block text-primary-600"
                style={{ display: 'block', color: '#0284c7' }}
              >
                Made Simple
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto text-balance"
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: '#4b5563',
              marginBottom: '40px',
              maxWidth: '48rem',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Automate your sales process, track performance, and scale your business with SellSharp.
            Everything you need to close more deals, faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              className="group relative px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 hover:bg-primary-700"
              style={{
                padding: '16px 32px',
                backgroundColor: '#0284c7',
                color: '#ffffff',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '18px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Start Free Trial
              <FiArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all duration-200"
              style={{
                padding: '16px 32px',
                backgroundColor: '#ffffff',
                color: '#0284c7',
                border: '2px solid #0284c7',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '18px',
                cursor: 'pointer'
              }}
            >
              Watch Demo
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-sm text-gray-500"
          >
            No credit card required • 14-day free trial • Cancel anytime
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
