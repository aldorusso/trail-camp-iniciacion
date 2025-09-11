'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
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
      src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Vista panorámica desde sendero',
      category: 'Vista'
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Corredores en descanso con vista montañosa',
      category: 'Descanso'
    },
    {
      src: 'https://images.unsplash.com/photo-1486311820292-484c42063f89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Sendero rocoso de montaña',
      category: 'Terreno'
    },
    {
      src: 'https://images.unsplash.com/photo-1418065460487-3956c3aa1889?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Corredor en cima de montaña',
      category: 'Cima'
    },
    {
      src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Equipo de trail running',
      category: 'Equipo'
    },
    {
      src: 'https://images.unsplash.com/photo-1464822759844-d150baec93d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Atardecer en sendero de montaña',
      category: 'Atardecer'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Corredor saltando rocas en trail',
      category: 'Técnica'
    },
    {
      src: 'https://images.unsplash.com/photo-1586994511230-f74f3c264022?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Grupo celebrando en la cima',
      category: 'Celebración'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateImage('prev');
        if (e.key === 'ArrowRight') navigateImage('next');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="primary" size="lg" className="mb-4">
              Galería
            </Badge>
            <h2 className="text-display-3 font-nike text-dark-950 mb-6">
              EXPERIENCIA <span className="text-primary-500">TRAIL</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre la belleza del trail running a través de imágenes que capturan 
              la esencia de correr en la naturaleza
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-sm font-semibold bg-primary-500 px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>

                {/* Hover effect borders */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white transition-colors duration-300 rounded-xl"></div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
              <p className="text-dark-950 font-nike font-semibold">
                Estas serán tus vistas durante el Trail Camp
              </p>
              <div className="w-3 h-3 bg-slate-800 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary-500 transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-500 transition-colors z-10"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-500 transition-colors z-10"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          {/* Main image */}
          <div className="max-w-4xl max-h-full">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Image info */}
            <div className="text-center mt-4">
              <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {images[selectedImage].category}
              </span>
              <p className="text-white mt-2 opacity-75">
                {selectedImage + 1} de {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;