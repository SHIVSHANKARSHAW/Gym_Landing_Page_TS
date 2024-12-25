import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-mesh-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Our Location</h3>
                <p className="text-gray-400">123 Fitness Street, Gym City, ST 12345</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Phone Number</h3>
                <p className="text-gray-400">+1 234 567 8900</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Email Address</h3>
                <p className="text-gray-400">info@elitefitness.com</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transform hover:scale-105 transition-all"
            >
              <span>Send Message</span>
              <Send className="h-5 w-5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}