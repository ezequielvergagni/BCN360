import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Markdown from 'react-markdown';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../../constants';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post no encontrado</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">Volver al blog</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Volver al blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-black font-medium">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-between py-6 border-y border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={24} className="text-gray-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">Editor BCN360</p>
              </div>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Share2 size={20} className="text-gray-600" />
            </button>
          </div>
        </header>

        <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600">
          <Markdown>{post.content}</Markdown>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-100">
          <div className="bg-gray-50 rounded-3xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">¿Te ha gustado este artículo?</h3>
            <p className="text-gray-600 mb-6">Suscríbete a nuestra newsletter para recibir las últimas novedades en tecnología 360.</p>
            <div className="flex max-w-md mx-auto gap-2">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                Unirse
              </button>
            </div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

export default BlogPost;
