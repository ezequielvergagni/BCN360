import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ChevronRight, Sparkles } from 'lucide-react';
import { BLOG_POSTS, CATEGORIES } from '../../constants';
import { AnimatedHeadingWords } from '../AnimatedText';

const BlogList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredPosts = activeCategory === 'Todos' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="bg-white pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0052CC]/10 border border-[#0052CC]/20 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>Actualidad & Ecosistema</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            <AnimatedHeadingWords
              text="Blog & Artículos Estratégicos"
              highlightText="Estratégicos"
              highlightClassName="text-[#0052CC]"
            />
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Perspectivas, casos de éxito y claves del ecosistema de innovación de Barcelona para líderes y fundadores de Latinoamérica.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-[#0052CC] text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-slate-200/80 rounded-3xl overflow-hidden hover:border-[#0052CC]/40 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between"
            >
              <Link to={`/blog/${post.id}`} className="flex flex-col h-full">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 bg-[#050D1A]/80 backdrop-blur-md text-[#00D2FF] text-xs font-bold rounded-full border border-[#00D2FF]/30 tracking-wider uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-semibold text-[#0052CC] mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0052CC] transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052CC]">
                        <User size={14} />
                      </div>
                      <span className="text-xs font-bold text-slate-700">{post.author}</span>
                    </div>
                    
                    <span className="text-[#0052CC] flex items-center gap-1 text-xs font-bold group-hover:gap-2 transition-all">
                      <span>Leer artículo</span>
                      <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogList;
