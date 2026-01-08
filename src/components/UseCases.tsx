import { motion } from 'framer-motion';
import { FiBriefcase, FiUsers, FiHome } from 'react-icons/fi';
import { UseCase } from '../types';

const useCases: UseCase[] = [
  {
    icon: FiBriefcase,
    title: 'Startups',
    description:
      'Perfect for early-stage companies looking to establish a solid sales foundation. Get started quickly with our intuitive interface and scale as you grow.',
  },
  {
    icon: FiUsers,
    title: 'Sales Teams',
    description:
      'Empower your sales team with tools that boost productivity and collaboration. Track performance, manage pipelines, and close more deals together.',
  },
  {
    icon: FiHome,
    title: 'Small & Mid-Sized Businesses',
    description:
      'Streamline your sales operations without the complexity of enterprise solutions. Get powerful features at a price that makes sense for your business.',
  },
];

const UseCases = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            SellSharp adapts to your needs, whether you're just starting out or scaling rapidly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <useCase.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {useCase.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
