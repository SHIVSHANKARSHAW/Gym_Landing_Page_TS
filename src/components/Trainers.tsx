import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: 'Sarah Johnson',
    specialty: 'Strength & Conditioning',
    image: 'https://plus.unsplash.com/premium_photo-1672862925604-9079f0a492e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Mike Thompson',
    specialty: 'HIIT & CrossFit',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Emma Davis',
    specialty: 'Yoga & Pilates',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
  }
];

export function Trainers() {
  return (
    <section id="trainers" className="py-20 bg-mesh-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Expert Trainers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our certified trainers are here to help you achieve your fitness goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img src={trainer.image} alt={trainer.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{trainer.name}</h3>
                <p className="text-gray-400 mb-4">{trainer.specialty}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-red-600">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-600">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-600">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}