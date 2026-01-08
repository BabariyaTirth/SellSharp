import { motion } from 'framer-motion';
import { FiUserPlus, FiSettings, FiBarChart } from 'react-icons/fi';

const steps = [
  {
    number: '01',
    icon: FiUserPlus,
    title: 'Sign Up & Set Up',
    description:
      'Create your account in minutes. Import your contacts and customize your sales pipeline to match your workflow.',
  },
  {
    number: '02',
    icon: FiSettings,
    title: 'Automate Your Process',
    description:
      'Configure automation rules, set up email sequences, and create workflows that save you hours every week.',
  },
  {
    number: '03',
    icon: FiBarChart,
    title: 'Track & Optimize',
    description:
      'Monitor your sales performance with real-time dashboards. Use insights to optimize and close more deals.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with SellSharp in three simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-primary-200"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center"
            >
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="absolute w-20 h-20 bg-primary-100 rounded-full"></div>
                <div className="relative w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
