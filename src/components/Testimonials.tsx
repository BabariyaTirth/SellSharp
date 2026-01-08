import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Sales Director',
    company: 'TechStart Inc.',
    content:
      'SellSharp transformed how we manage our sales. The automation features alone saved us 15 hours per week, and our close rate increased by 40%.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder',
    company: 'Growth Labs',
    content:
      'As a startup, we needed a solution that could grow with us. SellSharp gave us enterprise-level features without the enterprise-level complexity or cost.',
  },
  {
    name: 'Emily Johnson',
    role: 'VP of Sales',
    company: 'ScaleUp Solutions',
    content:
      'The analytics and reporting capabilities are outstanding. We can now make data-driven decisions that have directly impacted our revenue growth.',
  },
];

const Testimonials = () => {
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
            Trusted by Sales Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about SellSharp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-100 pt-6">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 mb-6">Trusted by companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">10,000+</div>
            <div className="text-gray-400">•</div>
            <div className="text-2xl font-bold text-gray-400">4.9/5 Rating</div>
            <div className="text-gray-400">•</div>
            <div className="text-2xl font-bold text-gray-400">99.9% Uptime</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
