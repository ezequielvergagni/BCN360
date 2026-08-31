import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '../../constants';
import { AnimatedHeadingWords } from '../AnimatedText';
import { useLanguage } from '../../context/LanguageContext';

const BlogPreview: React.FC = () => {
  const { t, language } = useLanguage();
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0052CC]/10 border border-[#0052CC]/20 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#0052CC]" />
              <span>{t('blogPreview.badge')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              <AnimatedHeadingWords
                text={t('blogPreview.title')}
                highlightText="Blog"
                highlightClassName="text-[#0052CC]"
              />
            </h2>
            <p className="text-slate-600 mt-2 max-w-xl text-base">
              {t('blogPreview.subtitle')}
            </p>
          </div>

          <Link 
            to="/blog" 
            className="hidden md:inline-flex items-center gap-2 text-[#0052CC] font-bold hover:text-[#00388A] hover:gap-3 transition-all text-sm group bg-blue-50/80 px-5 py-2.5 rounded-full border border-blue-100 shadow-sm"
          >
            <span>{t('blogPreview.viewAll')}</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#0052CC]/40 shadow-lg shadow-slate-100 hover:shadow-2xl hover:shadow-[#0052CC]/15 transition-all duration-300 group"
            >
              <Link to={post.path}>
                <div className="h-52 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0052CC] mb-3">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-[#0052CC] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm line-clamp-2 mb-5 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <span className="text-[#0052CC] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    <span>{t('blogPreview.readArticle')}</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-[#0052CC] font-bold bg-blue-50 px-6 py-3 rounded-full border border-blue-100"
          >
            <span>{t('blogPreview.viewAllMobile')}</span>
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogPreview;
