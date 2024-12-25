import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '29',
    features: [
      'Access to gym facilities',
      'Basic equipment usage',
      'Locker room access',
      '2 group classes per month'
    ]
  },
  {
    name: 'Premium',
    price: '59',
    features: [
      'Full gym access',
      'All group classes',
      'Personal trainer consultation',
      'Nutrition guidance',
      'Access to spa facilities'
    ]
  },
  {
    name: 'Elite',
    price: '99',
    features: [
      'All Premium features',
      'Unlimited personal training',
      'Priority class booking',
      'Exclusive member events',
      'Free protein shakes'
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Membership Plans</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-black/30 backdrop-blur-sm rounded-lg p-8 hover:transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold text-white mb-6">
                ${plan.price}
                <span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-red-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}