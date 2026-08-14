export interface BlogPost {
  id: string;
  path: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  content: string;
  author: string;
  date: string;
  datePublished: string;
  dateModified: string;
  category: string;
  image: string;
  readTime: string;
}

export type Category = 'Todos' | 'Eventos' | 'Tecnología' | 'Barcelona' | 'Guías';
