import { useEffect } from 'react';

const SITE_NAME = 'BCN360 Experience';
export const SITE_URL = 'https://www.bcn360experience.com';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  jsonLd?: object | object[];
}

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value));
}

const Seo = ({
  title,
  description,
  path,
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  jsonLd,
}: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = new URL(path, SITE_URL).toString();
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', { name: 'description', content: description });
    setMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large' });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'es_ES' });
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });

    if (image) {
      setMeta('meta[property="og:image"]', { property: 'og:image', content: image });
      setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: title });
      setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });
    }

    if (type === 'article' && publishedTime && modifiedTime) {
      setMeta('meta[property="article:published_time"]', { property: 'article:published_time', content: publishedTime });
      setMeta('meta[property="article:modified_time"]', { property: 'article:modified_time', content: modifiedTime });
    }

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const scriptId = 'page-structured-data';
    document.getElementById(scriptId)?.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd).replace(/</g, '\\u003c');
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [description, image, jsonLd, modifiedTime, path, publishedTime, title, type]);

  return null;
};

export default Seo;
