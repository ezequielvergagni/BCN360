import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SITE_NAME = 'BCN360 Experience';
const SITE_URL = 'https://www.bcn360experience.com';
const constantsSource = await readFile('src/constants.ts', 'utf8');
const baseHtml = await readFile('dist/index.html', 'utf8');

function readField(source, field) {
  return source.match(new RegExp(`${field}: '([^']+)'`))?.[1];
}

function extractPosts(source) {
  const starts = [...source.matchAll(/^  \{\n    id: '([^']+)'/gm)];

  return starts.map((match, index) => {
    const start = match.index;
    const end = starts[index + 1]?.index ?? source.indexOf('\n];', start);
    const block = source.slice(start, end);
    const keywordsSource = block.match(/keywords: \[([\s\S]*?)\],/)?.[1] ?? '';

    return {
      id: match[1],
      path: readField(block, 'path'),
      title: readField(block, 'title'),
      seoTitle: readField(block, 'seoTitle'),
      description: readField(block, 'metaDescription'),
      image: readField(block, 'image'),
      datePublished: readField(block, 'datePublished'),
      dateModified: readField(block, 'dateModified'),
      keywords: [...keywordsSource.matchAll(/'([^']+)'/g)].map(keyword => keyword[1]),
    };
  });
}

function escapeAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function replaceMeta(html, selector, value) {
  const escapedValue = escapeAttribute(value);
  const expression = new RegExp(`(<meta ${selector} content=")[^"]*("\\s*/?>)`);
  return html.replace(expression, `$1${escapedValue}$2`);
}

function renderPage(page) {
  const canonicalUrl = new URL(page.path, SITE_URL).toString();
  const fullTitle = page.seoTitle.includes(SITE_NAME)
    ? page.seoTitle
    : `${page.seoTitle} | ${SITE_NAME}`;

  let html = baseHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeAttribute(fullTitle)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonicalUrl}" />`);

  html = replaceMeta(html, 'name="description"', page.description);
  html = replaceMeta(html, 'property="og:title"', fullTitle);
  html = replaceMeta(html, 'property="og:description"', page.description);
  html = replaceMeta(html, 'property="og:type"', 'article');
  html = replaceMeta(html, 'property="og:url"', canonicalUrl);
  html = replaceMeta(html, 'property="og:image"', page.image);
  html = replaceMeta(html, 'property="og:image:alt"', page.title);
  html = replaceMeta(html, 'name="twitter:title"', fullTitle);
  html = replaceMeta(html, 'name="twitter:description"', page.description);
  html = replaceMeta(html, 'name="twitter:image"', page.image);
  html = html.replace(
    '</head>',
    `    <meta property="article:published_time" content="${escapeAttribute(page.datePublished)}" />\n    <meta property="article:modified_time" content="${escapeAttribute(page.dateModified)}" />\n  </head>`,
  );

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: page.title,
    description: page.description,
    image: [page.image],
    datePublished: page.datePublished,
    dateModified: page.dateModified,
    inLanguage: 'es-ES',
    mainEntityOfPage: canonicalUrl,
    keywords: page.keywords.join(', '),
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const serializedData = JSON.stringify(structuredData).replaceAll('<', '\\u003c');
  return html.replace(
    '</head>',
    `    <script id="page-structured-data" type="application/ld+json">${serializedData}</script>\n  </head>`,
  );
}

const posts = extractPosts(constantsSource);
for (const post of posts) {
  if (!post.path || !post.title || !post.seoTitle || !post.description) {
    throw new Error(`Incomplete SEO metadata for blog post ${post.id}`);
  }

  const outputDirectory = path.join('dist', post.path.replace(/^\//, ''));
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(path.join(outputDirectory, 'index.html'), renderPage(post));
}

const blogHtml = baseHtml
  .replace(/<title>[^<]*<\/title>/, `<title>Blog de innovación y negocios Barcelona-Latam | ${SITE_NAME}</title>`)
  .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${SITE_URL}/blog" />`);
const blogWithDescription = replaceMeta(
  blogHtml,
  'name="description"',
  'Guías, casos y estrategias para conectar empresas e instituciones de Latinoamérica con el ecosistema de innovación de Barcelona.',
);

await mkdir('dist/blog', { recursive: true });
await writeFile('dist/blog/index.html', blogWithDescription);

console.log(`Generated static SEO entry points for ${posts.length} articles and the blog index.`);
