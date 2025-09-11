// Imágenes predeterminadas de la galería
export const defaultGalleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Trail runner en sendero de montaña',
    category: 'Trail Running'
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Grupo de corredores en trail',
    category: 'Grupo'
  },
  {
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Sendero de montaña al amanecer',
    category: 'Paisaje'
  },
  {
    src: 'https://images.unsplash.com/photo-1602245986256-bb9d7703b4b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Runner corriendo por bosque',
    category: 'Naturaleza'
  },
  {
    src: 'https://images.unsplash.com/photo-1524492815108-68dca4e80b4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Vista panorámica desde montaña',
    category: 'Paisaje'
  },
  {
    src: 'https://images.unsplash.com/photo-1555673346-ba0e75258eb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Trail runners compartiendo momento',
    category: 'Grupo'
  }
];

// Lista de imágenes locales disponibles
// Esta lista se puede actualizar cuando agregues nuevas fotos
export const localGalleryImages = [
  {
    src: '/gallery/3616.jpg',
    alt: 'Trail runner en acción',
    category: 'Trail Running'
  },
  {
    src: '/gallery/54671337798_3ba89d1e01_o.jpg',
    alt: 'Corredor en sendero natural',
    category: 'Trail Running'
  },
  {
    src: '/gallery/6a6b8dee-8924-4dd3-85b5-a3f23a795a0a.jpg',
    alt: 'Aventura trail en montaña',
    category: 'Paisaje'
  },
  {
    src: '/gallery/99ef16b1-0302-48c6-84b1-221369b36027.jpg',
    alt: 'Entrenamiento en naturaleza',
    category: 'Entrenamiento'
  },
  {
    src: '/gallery/9a021174-ee96-4862-b1a6-29ba9f42ab5d.jpg',
    alt: 'Experiencia trail running',
    category: 'Trail Running'
  },
  {
    src: '/gallery/FB_IMG_1653286164571.jpg',
    alt: 'Momento trail especial',
    category: 'Grupo'
  },
  {
    src: '/gallery/IMG-20220925-WA0021.jpg',
    alt: 'Trail running septiembre 2022',
    category: 'Trail Running'
  },
  {
    src: '/gallery/IMG-20220927-WA0071.jpg',
    alt: 'Sesión trail 27 septiembre',
    category: 'Entrenamiento'
  },
  {
    src: '/gallery/IMG-20220927-WA0074.jpg',
    alt: 'Grupo trail 27 septiembre',
    category: 'Grupo'
  },
  {
    src: '/gallery/IMG-20220928-WA0040.jpg',
    alt: 'Trail running 28 septiembre',
    category: 'Trail Running'
  },
  {
    src: '/gallery/IMG-20221001-WA0053.jpg',
    alt: 'Entrenamiento octubre 2022',
    category: 'Entrenamiento'
  },
  {
    src: '/gallery/IMG-20221001-WA0054.jpg',
    alt: 'Sesión trail octubre',
    category: 'Trail Running'
  },
  {
    src: '/gallery/IMG-20221001-WA0059.jpg',
    alt: 'Grupo trail octubre 2022',
    category: 'Grupo'
  },
  {
    src: '/gallery/IMG-20221001-WA0061.jpg',
    alt: 'Trail running octubre',
    category: 'Trail Running'
  },
  {
    src: '/gallery/IMG-20250531-WA0022.jpg',
    alt: 'Trail running mayo 2025',
    category: 'Trail Running'
  },
  {
    src: '/gallery/IMG_20230806_072309_024.jpg',
    alt: 'Amanecer trail agosto 2023',
    category: 'Paisaje'
  },
  {
    src: '/gallery/IMG_20230910_160053_041.jpg',
    alt: 'Trail septiembre 2023',
    category: 'Trail Running'
  },
  {
    src: '/gallery/IMG_20240503_194929_157.jpg',
    alt: 'Sesión vespertina mayo 2024',
    category: 'Entrenamiento'
  },
  {
    src: '/gallery/IMG_20240505_125659_675.jpg',
    alt: 'Trail running mayo 2024',
    category: 'Trail Running'
  },
  {
    src: '/gallery/IMG_20240512_140819_311.jpg',
    alt: 'Entrenamiento mayo 2024',
    category: 'Entrenamiento'
  },
  {
    src: '/gallery/IMG_20240807_153856_279.jpg',
    alt: 'Trail verano 2024',
    category: 'Trail Running'
  },
  {
    src: '/gallery/Screenshot_2024-06-02-14-31-27-831_com.strava-edit.jpg',
    alt: 'Registro Strava trail',
    category: 'Técnica'
  },
  {
    src: '/gallery/c182f1de-e379-45fa-b6d6-b088e333447b.jpg',
    alt: 'Aventura trail épica',
    category: 'Paisaje'
  },
  {
    src: '/gallery/liqenstudio_0124_0052_vda2023_06_07_f644056737.jpeg',
    alt: 'Sesión profesional trail 2023',
    category: 'Grupo'
  }
];

// Función para obtener todas las imágenes de la galería
export const getAllGalleryImages = () => {
  return localGalleryImages; // Solo las imágenes locales, sin las predeterminadas
};

// Función para crear entrada de imagen local
export const createLocalImageEntry = (filename: string, alt?: string, category?: string) => {
  return {
    src: `/gallery/${filename}`,
    alt: alt || filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
    category: category || 'Trail Running'
  };
};