import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Markdown from 'react-markdown';
import { Calendar, Clock, User, ArrowLeft, Share2, Sparkles, Send } from 'lucide-react';
import { BLOG_POSTS } from '../../constants';
import Seo, { SITE_URL } from '../Seo';
import { useLanguage } from '../../context/LanguageContext';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { t, language } = useLanguage();
  const post = BLOG_POSTS.find(p => p.id === id || p.path === location.pathname);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-20">
        <div className="text-center bg-white p-10 rounded-3xl shadow-xl border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">{t('blog.notFoundTitle')}</h1>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0052CC] text-white font-bold rounded-full hover:bg-[#0042A3] transition-colors"
          >
            <ArrowLeft size={18} />
            {t('blog.backToBlog')}
          </Link>
        </div>
      </div>
    );
  }

  const canonicalUrl = new URL(post.path, SITE_URL).toString();
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      image: [post.image],
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      inLanguage: language === 'en' ? 'en-US' : 'es-ES',
      mainEntityOfPage: canonicalUrl,
      keywords: post.keywords.join(', '),
      author: {
        '@type': 'Organization',
        name: 'BCN360 Experience',
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: 'BCN360 Experience',
        url: SITE_URL,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: language === 'en' ? 'Home' : 'Inicio',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${SITE_URL}/blog`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: canonicalUrl,
        },
      ],
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white pt-28 pb-20 relative overflow-hidden"
    >
      <Seo
        title={post.seoTitle}
        description={post.metaDescription}
        path={post.path}
        image={post.image}
        type="article"
        publishedTime={post.datePublished}
        modifiedTime={post.dateModified}
        jsonLd={structuredData}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0052CC] mb-8 font-semibold text-sm transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          {t('blog.backToBlog')}
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 mb-6">
            <span className="px-3.5 py-1.5 bg-blue-50 border border-blue-100 text-[#0052CC] rounded-full font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={15} className="text-[#0052CC]" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={15} className="text-[#0052CC]" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-6 border-y border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0052CC]">
                <User size={20} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">{post.author}</p>
                <p className="text-xs text-slate-500 font-medium">BCN360 Experience</p>
              </div>
            </div>

            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    url: window.location.href
                  }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-[#0052CC] transition-colors"
              title={t('blog.shareText')}
              aria-label={t('blog.shareText')}
            >
              <Share2 size={18} />
            </button>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative h-[360px] sm:h-[480px] rounded-3xl overflow-hidden mb-12 shadow-xl border border-slate-200">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Post Markdown Content */}
        <div className="article-content">
          <Markdown
            components={{
              a: ({ href, children, ...props }) => href?.startsWith('/') ? (
                <Link to={href} {...props}>{children}</Link>
              ) : (
                <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
              ),
            }}
          >
            {post.content}
          </Markdown>
        </div>

        {/* Footer Newsletter / CTA */}
        <footer className="mt-16 pt-10 border-t border-slate-200">
          <div className="bg-[#050D1A] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#0052CC]/30 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 text-center max-w-xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Immersion Missions' : 'Misiones de Inmersión'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
                {language === 'en' ? 'Planning to connect your organization with Barcelona?' : '¿Planeas conectar a tu organización con Barcelona?'}
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed">
                {language === 'en' ? 'We design high-impact agendas for Latin American delegations, startups, and corporations.' : 'Diseñamos agendas de alto impacto para delegaciones, startups y corporaciones latinoamericanas.'}
              </p>

              <a 
                href="/#contacto" 
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0052CC] hover:bg-[#0042A3] text-white font-bold rounded-full transition-all shadow-lg shadow-blue-600/30 text-sm"
              >
                <span>{language === 'en' ? "Let's talk about your trip" : 'Hablemos de tu viaje'}</span>
                <Send size={15} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

export default BlogPost;
