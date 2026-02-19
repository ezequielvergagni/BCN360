import React from 'react';
import { motion } from 'motion/react';

const Ecosystem = () => {
  const items = [
    { label: "Universidades", count: "15+", color: "bg-blue-500" },
    { label: "Startups", count: "1900+", color: "bg-indigo-500" },
    { label: "Tech Hubs", count: "100+", color: "bg-purple-500" },
    { label: "Venture Capital", count: "€1.5B+", color: "bg-pink-500" },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-purple-600 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Un ecosistema en constante expansión</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Barcelona se consolida como uno de los hubs tecnológicos más importantes de Europa, atrayendo talento e inversión global.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-700 hover:border-gray-500 transition-colors"
            >
              <div className={`w-3 h-3 mx-auto mb-6 rounded-full ${item.color}`}></div>
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {item.count}
              </div>
              <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
