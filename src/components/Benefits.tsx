import { motion } from 'framer-motion';
import { FiClock, FiTrendingUp, FiTarget } from 'react-icons/fi';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  {
    icon: FiClock,
    title: 'Save Time',
    description:
      'Automate routine tasks and workflows, giving your team more time to focus on building relationships and closing deals. Reduce manual work by up to 70%.',
  },
  {
    icon: FiTrendingUp,
    title: 'Increase Sales',
    description:
      'Data-driven insights help you identify opportunities, optimize your sales process, and close more deals. Our users see an average 45% increase in revenue.',
  },
  {
    icon: FiTarget,
    title: 'Scale Efficiently',
    description:
      'Grow your business without proportionally increasing your workload. SellSharp scales with you, from startup to enterprise, without missing a beat.',
  },
];

const Benefits = () => {
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
            Why Choose SellSharp?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of businesses that trust SellSharp to power their sales operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl border border-primary-100 h-full">
                <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
