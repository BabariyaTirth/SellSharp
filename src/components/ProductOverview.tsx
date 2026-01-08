import { motion } from 'framer-motion';
import { FiTrendingUp, FiUsers, FiBarChart2 } from 'react-icons/fi';

const ProductOverview = () => {
  const stats = [
    { icon: FiTrendingUp, value: '3x', label: 'Faster Sales Cycles' },
    { icon: FiUsers, value: '10K+', label: 'Active Users' },
    { icon: FiBarChart2, value: '45%', label: 'Revenue Increase' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What is SellSharp?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SellSharp is your all-in-one sales management platform designed to help businesses
            streamline their sales process, manage customer relationships, and boost performance
            through intelligent automation and powerful analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100"
            >
              <stat.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Built for Modern Sales Teams
            </h3>
            <p className="text-lg text-primary-100 mb-6">
              Whether you're a startup looking to scale, a sales team wanting to close more deals,
              or a growing business needing better customer insights, SellSharp provides the tools
              and automation you need to succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                ✓ CRM Integration
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                ✓ Real-time Analytics
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                ✓ Sales Automation
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                ✓ Team Collaboration
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductOverview;
