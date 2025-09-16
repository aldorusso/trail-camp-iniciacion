'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle, Mountain, Heart } from 'lucide-react';

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
            ¿Este campamento es para mí? Si eres <span className="text-primary-500">CORREDOR</span> POPULAR
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            este trail camp está diseñado específicamente para ti.
          </p>
        </div>

        {/* Nuevo contenido de la sección */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-dark-950 mb-8 text-center font-nike">
            Si corres en asfalto, y alguna vez has pensado…
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Primera situación */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="bg-primary-500 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
                <Mountain className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-dark-950 mb-4 font-nike">
                &ldquo;Me encantaría probar montaña, pero me da miedo no estar preparado.&rdquo;
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Si corres 5K, 10K, media maratón o un maratón completo, tienes una base cardiovascular sólida, y eso es todo lo que necesitas para empezar. La montaña no pide élites, pide respeto. Te guiaremos paso a paso en senderos accesibles, adaptados a tu ritmo, para que pierdas el miedo a los desniveles.
              </p>
            </div>

            {/* Segunda situación */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="bg-trail-500 rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-dark-950 mb-4 font-nike">
                &ldquo;Quiero correr lejos del tráfico, pero me da pánico perderme o lesionarme.&rdquo;
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Has soñado con el silencio del bosque y la inmensidad de las cumbres. Nosotros te damos la seguridad para hacerlo realidad. Un grupo reducido, un guía experto y un programa diseñado para que ganes confianza en cada pisada. Te daremos las herramientas para orientarte, saber qué material usar y anticiparte a los imprevistos.
              </p>
            </div>
          </div>
        </div>

        {/* Main Message */}
        <div className="bg-dark-950 rounded-2xl p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <CheckCircle className="h-16 w-16 text-primary-500 mx-auto mb-8" />
            
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 font-nike">
              No dejes que el miedo te impida descubrir un nuevo mundo
            </h3>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Este Trail Camp está diseñado para <span className="text-primary-500 font-semibold">corredores populares</span> que quieren 
              iniciarse en el trail con <span className="text-primary-500 font-semibold">seguridad, confianza y en la mejor compañía</span>.
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