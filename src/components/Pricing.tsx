import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { PricingTier } from '../types';

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$29',
    period: 'per month',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 team members',
      'Basic CRM features',
      'Email automation',
      'Sales pipeline management',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Professional',
    price: '$79',
    period: 'per month',
    description: 'For growing sales teams',
    features: [
      'Up to 25 team members',
      'Advanced CRM features',
      'Full automation suite',
      'Advanced analytics & reports',
      'Custom integrations',
      'Priority support',
      'Team collaboration tools',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      'Enterprise CRM',
      'Custom automation workflows',
      'Advanced security & compliance',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom integrations & API',
      'Onboarding & training',
    ],
    cta: 'Contact Sales',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                tier.popular
                  ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-xl scale-105'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    tier.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="mb-2">
                  <span
                    className={`text-5xl font-bold ${
                      tier.popular ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && (
                    <span
                      className={`text-lg ml-2 ${
                        tier.popular ? 'text-primary-100' : 'text-gray-600'
                      }`}
                    >
                      {tier.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm ${
                    tier.popular ? 'text-primary-100' : 'text-gray-600'
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <FiCheck
                      className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                        tier.popular ? 'text-white' : 'text-primary-600'
                      }`}
                    />
                    <span
                      className={
                        tier.popular ? 'text-primary-50' : 'text-gray-600'
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  tier.popular
                    ? 'bg-white text-primary-600 hover:bg-primary-50'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                {tier.cta}
                <FiArrowRight className="inline-block ml-2" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            Compare all features →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
