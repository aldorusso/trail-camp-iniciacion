'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle, Users, Mountain, Heart } from 'lucide-react';

const TargetSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="success" size="lg" className="mb-4">
            Para Quién Es
          </Badge>
          <h2 className="text-display-3 font-nike text-dark-950 mb-6">
            SI ERES <span className="text-primary-500">CORREDOR</span> POPULAR
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Este Trail Camp está diseñado específicamente para ti
          </p>
        </div>

        {/* Target Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1 - Corredor Asfalto */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-primary-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-dark-950 mb-4 font-nike">
              Corres en Asfalto
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Si corres <strong>5K, 10K, media, maratón</strong> y tienes la base cardiovascular, 
              estás perfecto para dar el salto a montaña.
            </p>
          </div>

          {/* Card 2 - Curiosidad */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-trail-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Mountain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-dark-950 mb-4 font-nike">
              Tienes Curiosidad
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Alguna vez has pensado: <em>&ldquo;Me encantaría probar montaña, 
              pero no sé si estaré preparado&rdquo;</em>. ¡Aquí está tu respuesta!
            </p>
          </div>

          {/* Card 3 - Miedos Naturales */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
            <div className="bg-dark-950 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-dark-950 mb-4 font-nike">
              Buscas Seguridad
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Quieres correr lejos del tráfico y sentir la naturaleza, 
              pero te da miedo <strong>perderte, lesionarte o no aguantar</strong>.
            </p>
          </div>
        </div>

        {/* Main Message */}
        <div className="bg-dark-950 rounded-2xl p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <CheckCircle className="h-16 w-16 text-primary-500 mx-auto mb-8" />
            
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 font-nike">
              ESTE TRAIL CAMP ESTÁ DISEÑADO PARA TI
            </h3>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Para <span className="text-primary-500 font-semibold">corredores populares</span> que quieren 
              iniciarse en el trail con <span className="text-primary-500 font-semibold">seguridad y confianza</span>.
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center mt-12 space-x-4">
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-trail-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;