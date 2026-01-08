import { motion } from 'framer-motion';
import {
  FiZap,
  FiBarChart2,
  FiUsers,
  FiLayers,
  FiShield,
  FiSmartphone,
} from 'react-icons/fi';
import { Feature } from '../types';

const features: Feature[] = [
  {
    icon: FiZap,
    title: 'Sales Automation',
    description:
      'Automate repetitive tasks, follow-ups, and workflows to focus on what matters most—closing deals.',
  },
  {
    icon: FiBarChart2,
    title: 'Advanced Analytics',
    description:
      'Get real-time insights into your sales performance with customizable dashboards and detailed reports.',
  },
  {
    icon: FiUsers,
    title: 'CRM Integration',
    description:
      'Seamlessly manage customer relationships with our powerful CRM that keeps all your data in one place.',
  },
  {
    icon: FiLayers,
    title: 'Pipeline Management',
    description:
      'Visualize and manage your sales pipeline with drag-and-drop boards that make tracking deals effortless.',
  },
  {
    icon: FiShield,
    title: 'Data Security',
    description:
      'Enterprise-grade security ensures your customer data is protected with encryption and compliance standards.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Access',
    description:
      'Manage your sales on the go with our mobile app available for iOS and Android devices.',
  },
];

const KeyFeatures = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage, automate, and scale your sales operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
