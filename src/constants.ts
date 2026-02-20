import { BlogPost } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'El futuro de los eventos híbridos en 2026',
    excerpt: 'Descubre cómo la realidad virtual y los tours 360 están transformando la forma en que asistimos a eventos.',
    content: `
# El futuro de los eventos híbridos en 2026

Los eventos híbridos han dejado de ser una solución temporal para convertirse en el estándar de la industria. En este artículo, exploramos las tendencias que están definiendo el panorama actual.

## 1. Inmersión Total
Gracias a las cámaras 360 de última generación, los asistentes remotos pueden sentir que están físicamente en el lugar.

## 2. Interactividad en Tiempo Real
Ya no se trata solo de mirar una pantalla. Los usuarios pueden interactuar con objetos y otros asistentes en un entorno virtual.

## Conclusión
La tecnología 360 es la pieza clave para conectar el mundo físico y el digital de manera fluida.
    `,
    author: 'Equipo BCN360',
    date: '15 Feb 2026',
    category: 'Eventos',
    image: 'https://picsum.photos/seed/event/800/600',
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'Guía: Cómo preparar tu negocio para un tour virtual',
    excerpt: 'Todo lo que necesitas saber para que tu espacio luzca impecable en una sesión de fotografía 360.',
    content: `
# Guía: Cómo preparar tu negocio para un tour virtual

Un tour virtual es la mejor carta de presentación para tu negocio. Aquí te damos los mejores consejos para que el resultado sea profesional.

## Limpieza y Orden
Parece obvio, pero la cámara 360 lo ve TODO. Asegúrate de que no haya cables sueltos ni objetos fuera de lugar.

## Iluminación
La luz natural es tu mejor amiga. Programa la sesión para las horas de mayor claridad.

## Puntos de Interés
Identifica qué zonas quieres destacar para que el fotógrafo pueda centrarse en ellas.
    `,
    author: 'Marta García',
    date: '10 Feb 2026',
    category: 'Guías',
    image: 'https://picsum.photos/seed/guide/800/600',
    readTime: '8 min'
  },
  {
    id: '3',
    title: 'Barcelona desde las alturas: Una experiencia 360',
    excerpt: 'Recorremos los puntos más emblemáticos de la ciudad condal con nuestra tecnología de drones 360.',
    content: `
# Barcelona desde las alturas: Una experiencia 360

Barcelona es una ciudad que merece ser vista desde todos los ángulos. En este post, te mostramos los resultados de nuestro último proyecto de drones.

## La Sagrada Familia
Ver los detalles de las torres desde el aire es una experiencia sobrecogedora.

## El frente marítimo
La combinación de mar y arquitectura moderna crea imágenes espectaculares en 360 grados.
    `,
    author: 'Albert Vila',
    date: '05 Feb 2026',
    category: 'Barcelona',
    image: 'https://picsum.photos/seed/bcn/800/600',
    readTime: '4 min'
  }
];

export const CATEGORIES: string[] = ['Todos', 'Eventos', 'Tecnología', 'Barcelona', 'Guías'];
