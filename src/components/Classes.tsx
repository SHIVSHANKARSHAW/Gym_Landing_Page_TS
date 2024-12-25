import React from 'react';

const classes = [
  {
    name: 'Strength Training',
    description: 'Build muscle and increase strength with our comprehensive weight training program.',
    image: 'https://images.unsplash.com/photo-1534368420009-621bfab424a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'HIIT',
    description: 'High-intensity interval training for maximum calorie burn and cardiovascular fitness.',
    image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Yoga',
    description: 'Improve flexibility, balance, and mental wellness with our expert-led yoga classes.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
  }
];

export function Classes() {
  return (
    <section id="classes" className="py-20 bg-mesh-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Classes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from a variety of classes designed to help you reach your fitness goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((cls) => (
            <div key={cls.name} className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img src={cls.image} alt={cls.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{cls.name}</h3>
                <p className="text-gray-400">{cls.description}</p>
                <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}