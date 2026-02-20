import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '../../constants';

const BlogPreview: React.FC = () => {
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Últimas del Blog</h2>
            <p className="text-gray-600 max-w-xl">
              Mantente al día con las últimas noticias sobre tecnología 360 y experiencias inmersivas.
            </p>
          </div>
          <Link 
            to="/blog" 
            className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
          >
            Ver todo el blog <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                    Leer más <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-blue-600 font-semibold"
          >
            Ver todo el blog <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
