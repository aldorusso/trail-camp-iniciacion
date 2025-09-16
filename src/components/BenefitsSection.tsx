'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Shield, Zap, Compass, Users, TrendingUp } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Confianza',
      description: 'De la duda a la certeza. Perderás el miedo a los desniveles y al terreno irregular. Te sentirás seguro en subidas y bajadas, sabiendo que tu cuerpo está preparado para el desafío.',
      color: 'bg-primary-500'
    },
    {
      icon: Zap,
      title: 'Técnica',
      description: 'Corre con inteligencia. Aprenderás las técnicas básicas para ascender de forma eficiente (caminar con bastones) y, lo que es más importante, para descender con fluidez y sin riesgo de lesión.',
      color: 'bg-trail-500'
    },
    {
      icon: Compass,
      title: 'Seguridad',
      description: 'Tu escudo en la montaña. Conocerás el material esencial, las claves de la orientación con GPS y los hábitos básicos para que cada salida sea una aventura sin riesgos.',
      color: 'bg-dark-950'
    },
    {
      icon: Users,
      title: 'Tribu',
      description: 'No corres solo, corres acompañado. Te unirás a un grupo reducido de personas que comparten tu misma pasión y tus mismos miedos. Un chat, quedadas y aventuras futuras.',
      color: 'bg-primary-500'
    },
    {
      icon: TrendingUp,
      title: 'Motivación',
      description: 'Un propósito que te impulsa. Volverás a casa con la energía de la montaña en el alma, con ganas de seguir explorando y de convertir el trail en tu nueva forma de vida.',
      color: 'bg-trail-500'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="success" size="lg" className="mb-4">
            Qué Vas a Conseguir
          </Badge>
          <h2 className="text-display-3 font-nike text-dark-950 mb-6">
            TU <span className="text-primary-500">TRANSFORMACIÓN</span> GARANTIZADA
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Al terminar este fin de semana, habrás ganado todo lo que necesitas para empezar tu nueva aventura por la montaña, no solo serás un corredor de montaña, sino que tendrás la confianza, con una nueva mentalidad y la autonomía, con las herramientas necesarias para explorar por ti mismo este maravilloso mundo del trail running.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white"
            >
              <div className={`${benefit.color} rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-950 mb-4 font-nike">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}

          {/* Special Call-out Card */}
          <div className="md:col-span-2 lg:col-span-3 bg-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 font-nike">
                NO ES UN CURSO. NO ES UNA CARRERA.
              </h3>
              <p className="text-xl lg:text-2xl leading-relaxed opacity-95">
                Es tu <span className="font-bold">primer paso real</span> hacia el trail running. 
                Es el sendero que te está esperando para cambiarte.
              </p>
              
              {/* Decorative dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 bg-white rounded-full animate-pulse"
                    style={{animationDelay: `${i * 0.2}s`}}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-4 bg-dark-950 rounded-full px-8 py-4">
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
            <p className="text-white font-nike font-semibold text-lg">
              No es un curso. No es una carrera. Es tu primer paso real hacia el trail running.
            </p>
            <div className="w-3 h-3 bg-trail-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;