'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, PlayCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image con overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat animate-hero-zoom"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/hero-trail-group.jpg')`
          }}
        />
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          {/* Badge Superior */}
          <Badge variant="primary" size="lg" className="mb-6">
            I Trail Camp Iniciación
          </Badge>

          {/* Título Principal */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-nike font-black text-white mb-6 px-2">
            <span className="block">DEL ASFALTO</span>
            <span className="block">A LA <span className="text-primary-500">MONTAÑA</span></span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto font-nike leading-relaxed px-4">
            Un fin de semana en la naturaleza para descubrir el trail running de forma segura, guiada y en grupo. Sin presión, sin competir. Solo aprender, disfrutar y dar tu primer paso.
          </p>

          {/* Texto descriptivo */}
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed px-4">
            En un mundo que corre sin aliento, donde el ruido digital nos consume, el asfalto te da kilómetros, pero te roba paisajes. Y en el fondo, sientes que algo falta.
            <br /><br />
            Este campamento es para ti: una puerta de entrada a la montaña, un refugio donde la velocidad no importa y donde el único objetivo es reconectar contigo. Con solo 20 plazas disponibles para garantizar una atención exclusiva y la máxima seguridad, este no es un curso, es el primer capítulo de tu nueva aventura, ¿te atreves?.
          </p>

          {/* Estadísticas */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12 text-white px-4">
            <div className="text-center min-w-[100px]">
              <div className="text-2xl sm:text-3xl font-bold text-primary-500">20</div>
              <div className="text-xs sm:text-sm uppercase tracking-wide">Plazas Disponibles</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-2xl sm:text-3xl font-bold text-primary-500">3</div>
              <div className="text-xs sm:text-sm uppercase tracking-wide">Días de pura experiencia</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-2xl sm:text-3xl font-bold text-primary-500">100%</div>
              <div className="text-xs sm:text-sm uppercase tracking-wide">Seguridad y Guía Profesional</div>
            </div>
          </div>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right px-4">
            <Button size="xl" variant="primary" className="group w-full sm:w-auto">
              Reserva tu Plaza
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="xl" variant="outline" className="text-white border-white hover:bg-white hover:text-dark-950 group w-full sm:w-auto">
              <PlayCircle className="mr-2 h-5 w-5" />
              Conoce Más
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Elementos Decorativos */}
      <div className="absolute top-20 right-20 w-20 h-20 border border-primary-500 rounded-full opacity-20 animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 border border-white rounded-full opacity-30 animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;